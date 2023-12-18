const express = require('express');
const mysql = require('mysql2');
const twilio = require('twilio');
require('dotenv').config();
const port = process.env.PORT;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());
const privateKey = process.env.PRIVATEKEY;
const salt = 10;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
// ----------------------------------------------
const accountSid = 'AC9ca547f7c708b233df42e89bfbdca249';
const authToken = '999530f731e85821ec6d30b57b472d13';
const client = twilio(accountSid, authToken);
// ----------------------------------------------

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'infocusr_konnect',
//   password: '}%!Bv]J_FoJ5',
//   database: 'infocusr_konnect'
// });
// -----------------------------------------------------------
// const otpdb = mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'userauthotp'
  // })
  // -----------------------------------------------------------

const otpdb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'konnect_db0'
})

otpdb.connect((err) => {
  if (err) { console.error('Error connecting to the database: ' + err.stack); return; }
  console.log('Connected to the database as ID ' + otpdb.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello');
})

// ------------------------------------------------------------
const clinics = require('./routes/clinicsroutes');
app.use('/clinicsdata', clinics);

app.get('/clinicsearch', (req, res) => {
  const searchTerm = req.query.q;
  const query = `SELECT * FROM clinics WHERE name LIKE ? OR area LIKE ? OR city LIKE ?`;
  const searchValue = `%${searchTerm}%`;
  otpdb.query(query, [searchValue, searchValue, searchValue], (error, results) => {
    if (error) {
      console.error('Error executing search query:', error);
      res.status(500).json({ error: 'An error occurred while searching for clinics.' });
    } else {
      res.status(200).json(results);
    }
  });
});
app.get('/clinicpinsearch', (req, res) => {
  const searchTerm = req.query.q;
  
  // Check if the entered pincode exactly exists in the database
  const exactPincodeQuery = `SELECT * FROM clinics WHERE pincode = ?`;
  const exactPincodeValue = `${searchTerm}`;

  otpdb.query(exactPincodeQuery, [exactPincodeValue], (exactPincodeError, exactPincodeResults) => {
    if (exactPincodeError) {
      console.error('Error executing exact pincode query:', exactPincodeError);
      res.status(500).json({ error: 'An error occurred while searching for clinics.' });
    } else {
      if (exactPincodeResults.length > 0) {
        res.status(200).json({ exactPincodeResults });
      } else {
        const nearestPincodeQuery = `SELECT * FROM clinics ORDER BY ABS(pincode - ?) LIMIT 3`;
        otpdb.query(nearestPincodeQuery, [searchTerm], (nearestPincodeError, nearestPincodeResults) => {
          if (nearestPincodeError) {
            console.error('Error executing nearest pincode query:', nearestPincodeError);
            res.status(500).json({ error: 'An error occurred while searching for clinics.' });
          } else {
            res.status(200).json({ nearestPincodeResults });
          }
        });
      }
    }
  });
});


// ------------------------------------------------------------

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  const query = `SELECT * FROM products WHERE product_name LIKE '%${searchTerm}%'`;
  
  otpdb.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/getbyletter', (req, res) => {
  const startingLetter = req.query.l;
  const query = `SELECT * FROM products WHERE product_name LIKE '${startingLetter}%'`;
  otpdb.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results);
    }
  });
});


app.get('/orgsel', (req, res) => {
    const selectedOrg = req.query.selectedorgan;
    const query = 'SELECT * FROM products WHERE category = ?';
  
    otpdb.query(query, [selectedOrg], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
  });

// ===========================================================================================
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
      return res.json({ TokenError: "not Authenticated, Login!" });
  } else {
      jwt.verify(token, privateKey, (err, decoded) => {
          if (err) {
              return res.json({ TokenIncorrectError: "token not correct" });
          } else {
              req.user_id = decoded.user_id;
              req.user_name = decoded.user_name; // Include user_name in req
              req.cart_id = decoded.cart_id;
              next();
          }
      });
  }
};

app.get('/user', verifyUser, (req, res) => {
  return res.json({ Status: "ok", userid: req.user_id, cart_id: req.cart_id }); // Include user_name in the response
});

app.post('/login', (req, res) => {
  const { email, password } = req.body.values;
  const userQuery = 'SELECT * FROM users WHERE email = ?';
  otpdb.query(userQuery, [email], (err, userData) => {
      if (err) {
          console.error('Error in user query:', err);
          return res.json({ error: "Login Error in Server" });
      }

      if (userData.length === 0) {
          return res.json({ Error: `User with email: ${email} doesn't exist` });
      }

      const user_id = userData[0].user_id;
      const user_name = userData[0].name;

      // Step 2: Check password and retrieve cart_id
      bcrypt.compare(password.toString(), userData[0].password, (err, response) => {
          if (err) {
              console.error('Error in password comparison:', err);
              return res.json({ error: "Error comparing passwords" });
          }

          if (response) {
              // Step 3: Retrieve cart_id
              const cartQuery = 'SELECT cart_id FROM cart WHERE user_id = ?';
              otpdb.query(cartQuery, [user_id], (cartErr, cartData) => {
                  if (cartErr) {
                      console.error('Error in cart query:', cartErr);
                      return res.json({ error: "Error getting cart ID" });
                  }

                  const cart_id = cartData.length > 0 ? cartData[0].cart_id : null;

                  // Step 4: Sign the JWT with user_id, user_name, and cart_id
                  const tokenPayload = { user_id, user_name, cart_id };
                  const token = jwt.sign(tokenPayload, privateKey, { expiresIn: "1d" });

                  res.cookie('token', token);
                  return res.json({ Status: "Success" });
              });
          } else {
              return res.json({ Error: "Password mismatch. Try Again" });
          }
      });
  });
});

app.post("/otplogin", async (req, res) => {
  const { number } = req.body;
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }
  // res.send({number, OTP});
  const sendOTP = (num, otp) => {
      client.messages.create({
          body: 'Hello from twilio-node, Your OTP is: ' + otp,
          to: '+91' + num,
          from: '+14076245195',
      })
      .then((message) => {
          res.json({ Status: "OTP sent!" });
      })
      .catch((err) => {
          console.error("Error sending OTP:", err);
          res.status(500).json({ "Failed to send OTP": err });
      });
  }
  
  otpdb.query('SELECT * FROM users WHERE mobile_number = ?', [number], (err, result) => {
      if (err) {
          console.error('Error in searching for entered mobile number:', err);
          res.status(500).json({ error: "Database error" });
      }

      if (result.length === 0) {
          bcrypt.hash(OTP.toString(), salt, (err, hash) => {
              if(err) return res.json({"err for hasing password": err});
              otpdb.query('INSERT INTO users (mobile_number, otp) VALUES (?, ?)', [number, hash], (err2, result2) => {
                  if (err2) {
                      console.error('Error inserting mobile number to users table:', err2);
                      res.status(500).json({ error: "Database error" });
                  }
                  sendOTP(number, OTP);
              });
          })
      } else {
          bcrypt.hash(OTP.toString(), salt, (err, hash) => {
              if(err) return res.json({"err for hasing password": err});
              otpdb.query('UPDATE users SET otp = ? WHERE mobile_number = ?', [hash, number], (err3, result3) => {
                if (err3) {
                    console.error('Error updating OTP in users table:', err3);
                    if (err3.code === 'ECONNRESET') {
                        // Retry the database operation or handle it as needed.
                    } else {
                        res.status(500).json({ error: "Database error" });
                    }
                } else {
                    sendOTP(number, OTP);
                }
            });            
          })
      }
  });
});

app.post("/verifyotp", async (req, res) => {
  const { number, Otp } = req.body;
  const userQuery = 'SELECT * FROM users WHERE mobile_number = ?';
  
  otpdb.query(userQuery, [number], (err, userData) => {
      if (err) {
          console.error('Error in user query:', err);
          return res.status(500).json({ error: "Login Error in Server" });
      }
      
      if (userData.length === 0) {
          // Handle the case when no user with the given mobile_number is found
          return res.status(401).json({ error: "User not found" });
      }
      
      const user_id = userData[0].user_id;

      bcrypt.compare(Otp.toString(), userData[0].otp, (err, response) => {
          if (err) {
              console.error('Error in otp comparison:', err);
              return res.status(500).json({ error: "Error comparing otp" });
          }

          if (response) {
              const cartQuery = 'SELECT cart_id FROM cart WHERE user_id = ?';
              otpdb.query(cartQuery, [user_id], (cartErr, cartData) => {
                  if (cartErr) {
                      console.error('Error in cart query:', cartErr);
                      return res.status(500).json({ error: "Error getting cart ID" });
                  }
                  if(cartData.length === 0){
                      const cartValues = [user_id, new Date()]; // Assuming 'created_at' is the current timestamp
                      const cartInsertQuery = 'INSERT INTO cart (`user_id`, `created_at`) VALUES (?,?)';
                  
                      otpdb.query(cartInsertQuery, cartValues, (cartInsertError, cartResponse) => {
                          if (cartInsertError) {
                              console.log(cartInsertError);
                              return res.json({"Cart Insertion Error": cartInsertError});
                          }
                          const cart_id = cartResponse.insertId; // Get the newly inserted user's ID
                          const tokenPayload = { user_id, cart_id };
                          const token = jwt.sign(tokenPayload, privateKey, { expiresIn: "1d" });
                          res.cookie('token', token);
                          return res.json({ Status: "Success" });
                      });
                  } else {
                      const cart_id = cartData[0].cart_id;
                      const tokenPayload = { user_id, cart_id };
                      const token = jwt.sign(tokenPayload, privateKey, { expiresIn: "1d" });
                      res.cookie('token', token);
                      return res.json({ Status: "Success" });
                  }
              });
          } else {
              return res.status(401).json({ Error: "Password mismatch. Try Again" });
          }
      });
  });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body.values;
  
  otpdb.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
      if (error) return res.json({ Error: "Database error" });

      if (results.length > 0) {
          return res.json({ Status: "UserExist" });
      } else {
          bcrypt.hash(password.toString(), salt, (err, hash) => {
              if (err) {
                  return res.json({ Error: "Error for hashing password" });
              }
              
              const userValues = [name, email, hash];
              const userInsertQuery = 'INSERT INTO users (`name`, `email`, `password`) VALUES (?,?,?)';
              
              otpdb.query(userInsertQuery, userValues, (insertError, userResponse) => {
                  if (insertError) {
                      return res.json({ Error: "Insertion Error" });
                  }
                  
                  // After successfully inserting the user, create a new cart for the user
                  const userId = userResponse.insertId; // Get the newly inserted user's ID
                  const cartValues = [userId, new Date()]; // Assuming 'created_at' is the current timestamp
                  const cartInsertQuery = 'INSERT INTO cart (`user_id`, `created_at`) VALUES (?,?)';
                  
                  otpdb.query(cartInsertQuery, cartValues, (cartInsertError, cartResponse) => {
                      if (cartInsertError) {
                          return res.json({ Error: "Cart Insertion Error" });
                      }
                      
                      return res.json({ Status: "Success" });
                  });
              });
          });
      }
  });
});

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({Status: "Success"});
})

//=========================profile=============================================
app.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId;

  // Check if a user profile exists for the given user ID
  const sql = 'SELECT * FROM user_profile WHERE user_id = ?';
  otpdb.query(sql, [userId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      // No profile exists for the user
      return res.json({ profileExists: false });
    }

    // Profile data found, return it
    const profileData = results[0];
    return res.json({ profileExists: true, profileData });
  });
});

app.post('/profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const profileData = req.body;

  const query = 'INSERT INTO user_profile (user_id, fullname, date_of_birth, gender, email, alternate_mobile_number, residential_address, office_address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    userId,
    profileData.fullName,
    profileData.dateOfBirth,
    profileData.gender,
    profileData.email,
    profileData.alternateMobile,
    profileData.residentialAddress,
    profileData.officeAddress,
  ];

  otpdb.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing database query:', err);
      return res.status(500).json({ error: 'Failed to save profile data', err });
    }
    return res.json({ profileAdded: true });
  });
});

app.post('/updateprofile/:userId', (req, res) => {
  const userId = req.params.userId;
  const profileData = req.body;
  // return res.json({id: userId, profileData});
  const query = 'UPDATE user_profile SET fullname=?, date_of_birth=?, gender=?, email=?, alternate_mobile_number=?, residential_address=?, office_address=? WHERE user_id=?';
  const values = [
    profileData.fullName,
    profileData.dateOfBirth,
    profileData.gender,
    profileData.email,
    profileData.alternateMobile,
    profileData.residentialAddress,
    profileData.officeAddress,
    userId,
  ];

  otpdb.query(query, values, (err, results) => {
    if (err) {
      console.error('Error executing database query:', err);
      return res.status(500).json({ error: 'Failed to update profile data', err });
    }
    return res.json({ profileUpdated: true });
  });
});
//=========================profile=============================================

app.get('/gettests', (req, res) => {
  // const searchTerm = req.query.q;
  const query = "SELECT * FROM products WHERE `product_type` = 'tests'";
  
  otpdb.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results);
    }
  });
});
  
app.get('/getpoptests', (req, res) => {
  const codes = req.query.codes;

  // Ensure that codes is an array
  if (!Array.isArray(codes)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const query = `SELECT * FROM products WHERE product_code IN (?)`;

  otpdb.query(query, [codes], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results);
    }
  });
});


app.get('/getpackages', (req, res) => {
  // const searchTerm = req.query.q;
  const query = "SELECT * FROM products WHERE `product_type` = 'package'";
  
  otpdb.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      res.status(200).json(results);
    }
  });
});

// adding to cart
app.post('/addtocart', (req, res) => {
  const { product_id, quantity, userId } = req.body;
  const cartIdQuery = 'SELECT `cart_id` FROM `cart` WHERE `user_id` = ?';
  otpdb.query(cartIdQuery, [userId], (cartIdError, cartIdResult) => {
    if (cartIdError) {
      console.error('Error fetching cart_id:', cartIdError);
      return res.status(500).json({ error: 'Error adding to cart' });
    }

    if (cartIdResult.length === 0) {
      const createCartForUser = (userId, callback) => {
              const cartInsertQuery = 'INSERT INTO cart (`user_id`, `created_at`) VALUES (?, NOW())';

              otpdb.query(cartInsertQuery, [userId], (error, result) => {
                  if (error) {
                      callback(error, null);
                  } else {
                      callback(null, result.insertId);
                  }
              });
          };
          createCartForUser(userId, (createCartError, newCartId) => {
              if (createCartError) {
                  console.error('Error creating cart:', createCartError);
                  return res.status(500).json({ error: 'Error adding to cart' });
              }
              const cartItemValues = [newCartId, product_id];
              const checkCartItemQuery = 'SELECT `cartitem_id`, `quantity` FROM `cartitems` WHERE `cart_id` = ? AND `product_id` = ?';

              otpdb.query(checkCartItemQuery, cartItemValues, (checkCartItemError, checkCartItemResult) => {
                  if (checkCartItemError) {
                      console.error('Error checking cart items:', checkCartItemError);
                      return res.status(500).json({ error: 'Error adding to cart' });
                  }

                  if (checkCartItemResult.length === 0) {
                      // Item doesn't exist, so insert it
                      const cartItemInsertQuery = 'INSERT INTO cartitems (`cart_id`, `product_id`, `quantity`) VALUES (?,?,?)';
                      otpdb.query(cartItemInsertQuery, [newCartId, product_id, quantity], (cartInsertError, cartItemResponse) => {
                          if (cartInsertError) {
                              console.error('Error adding to cart:', cartInsertError);
                              return res.status(500).json({ error: 'Error adding to cart' });
                          }

                          const cartItem = {
                              cartitem_id: cartItemResponse.insertId,
                              product_id: product_id,
                              quantity,
                          };
                          res.status(200).json({ Status: 'Success', cartItem });
                      });
                  } else {
                      // Item already exists, update the quantity
                      const existingCartItem = checkCartItemResult[0];
                      const updatedQuantity = existingCartItem.quantity + quantity;
                      const updateCartItemQuery = 'UPDATE `cartitems` SET `quantity` = ? WHERE `cartitem_id` = ?';

                      otpdb.query(updateCartItemQuery, [updatedQuantity, existingCartItem.cartitem_id], (updateCartItemError) => {
                          if (updateCartItemError) {
                              console.error('Error updating cart item quantity:', updateCartItemError);
                              return res.status(500).json({ error: 'Error adding to cart' });
                          }

                          const cartItem = {
                              cartitem_id: existingCartItem.cartitem_id,
                              product_id: product_id,
                              quantity: updatedQuantity,
                          };
                          res.status(200).json({ Status: 'Success', cartItem });
                      });
                  }
              });
          });
    } else {
      // Use the existing cart_id to check if the item already exists in cartitems
      const cart_id = cartIdResult[0].cart_id;
      const checkCartItemQuery = 'SELECT `cartitem_id`, `quantity` FROM `cartitems` WHERE `cart_id` = ? AND `product_id` = ?';

      otpdb.query(checkCartItemQuery, [cart_id, product_id], (checkCartItemError, checkCartItemResult) => {
        if (checkCartItemError) {
          console.error('Error checking cart items:', checkCartItemError);
          return res.status(500).json({ error: 'Error adding to cart' });
        }

        if (checkCartItemResult.length === 0) {
          // Item doesn't exist, so insert it
          const cartItemInsertQuery = 'INSERT INTO cartitems (`cart_id`, `product_id`, `quantity`) VALUES (?,?,?)';
          otpdb.query(cartItemInsertQuery, [cart_id, product_id, quantity], (cartInsertError, cartItemResponse) => {
            if (cartInsertError) {
              console.error('Error adding to cart:', cartInsertError);
              return res.status(500).json({ error: 'Error adding to cart' });
            }

            const cartItem = {
              cartitem_id: cartItemResponse.insertId,
              product_id: product_id,
              quantity,
            };
            res.status(200).json({ Status: 'Success', cartItem });
          });
        } else {
          // Item already exists, update the quantity
          const existingCartItem = checkCartItemResult[0];
          const updatedQuantity = existingCartItem.quantity + quantity;
          const updateCartItemQuery = 'UPDATE `cartitems` SET `quantity` = ? WHERE `cartitem_id` = ?';

          otpdb.query(updateCartItemQuery, [updatedQuantity, existingCartItem.cartitem_id], (updateCartItemError) => {
            if (updateCartItemError) {
              console.error('Error updating cart item quantity:', updateCartItemError);
              return res.status(500).json({ error: 'Error adding to cart' });
            }

            const cartItem = {
              cartitem_id: existingCartItem.cartitem_id,
              product_id: product_id,
              quantity: updatedQuantity,
            };
            res.status(200).json({ Status: 'Success', cartItem });
          });
        }
      });
    }
  });
});
// ...

app.post('/updatecartitemquantity', (req, res) => {
  const { product_id, quantity, userId } = req.body;
  const updateCartItemQuantityQuery = `
      UPDATE cartitems
      SET quantity = ?
      WHERE cart_id = (SELECT cart_id FROM cart WHERE user_id = ?)
      AND product_id = ?;
  `;
  
  otpdb.query(updateCartItemQuantityQuery, [quantity, userId, product_id], (err, result) => {
      if (err) {
          console.error('Error updating cart item quantity:', err);
          return res.status(500).json({ Status: 'Error', error: 'Error updating cart item quantity' });
      }
    
      return res.json({ Status: 'Success', message: 'Cart item quantity updated successfully' });
  });
  });
  
app.post('/removecartitem', (req, res) => {
  const { product_id, userId } = req.body;
  const removeCartItemQuery = `
      DELETE FROM cartitems
      WHERE cart_id = (SELECT cart_id FROM cart WHERE user_id = ?)
      AND product_id = ?;
  `;
  
  otpdb.query(removeCartItemQuery, [userId, product_id], (err, result) => {
      if (err) {
          console.error('Error removing cart item:', err);
          return res.status(500).json({ Status: 'Error', error: 'Error removing cart item' });
      }
    
      return res.json({ Status: 'Success', message: 'Cart item removed successfully' });
  });
});

app.get('/cart/:cartId/products', (req, res) => {
  const cartId = req.params.cartId;

  const cartItemsQuery = `
      SELECT ci.cartitem_id, ci.quantity, t.*
      FROM cartitems ci
      JOIN products t ON t.product_id = ci.product_id
      WHERE ci.cart_id = ?;
  `;

  otpdb.query(cartItemsQuery, [cartId], (err, cartItems) => {
      if (err) {
          console.error('Error fetching cart items for cart:', err);
          return res.status(500).json({ error: 'Error fetching cart items for cart' });
      }

      const productsQuery = `
          SELECT t.*
          FROM products t
          JOIN cartitems ci ON t.product_id = ci.product_id
          WHERE ci.cart_id = ?;
      `;

      otpdb.query(productsQuery, [cartId], (prodsErr, products) => {
          if (prodsErr) {
              console.error('Error fetching products for cart:', prodsErr);
              return res.status(500).json({ error: 'Error fetching products for cart' });
          }

          const responseData = {
              cartItems: cartItems,
              products: products
          };

          return res.json(responseData);
      });
  });
});

// Password reset
app.post("/reset-password", async (req, res) => {
  const { email } = req.body;
  try {
      const q = "SELECT * FROM users WHERE email = ?"
      otpdb.query(q, [email], (err, oldUserData) => {
          if (err) {
              console.error('Error in user query:', err);
              return res.json({ err: "Error at resetting password query" });
          }
          if (oldUserData.length === 0) {
              return res.json({ err: `email doesn't exist!` });
          }
          oldUserData = oldUserData[0];
          const secret = privateKey + oldUserData.password;
          const token = jwt.sign({email: oldUserData.email, id: oldUserData.user_id},secret,{expiresIn: "5m"});
          const newPswdGenLink = `http://localhost:3210/reset-password/${oldUserData.user_id}/${token}`;
          // console.log(newPswdGenLink);

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'shaikmahmoodsameer@gmail.com',
              pass: 'wxpzwnsdwarqbilu'
            }
          });
          var mailOptions = {
            from: 'shaikmahmoodsameer@gmail.com',
            to: email,
            subject: 'Password resetting link...',
            text: newPswdGenLink
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.json({emailSent: true, message: `Email sent: ${info.response}`});
            }
          });
      })
  } catch (error) {
      console.log({error: "err at connecting to db and getting user with entered email"});
  }
})

app.get("/reset-password/:user_id/:token", (req, res) => {
  const {user_id, token} = req.params;
  const q = "SELECT * FROM users WHERE user_id = ?"
  otpdb.query(q, [user_id], (err, oldUserData) => {
      if (err) {
          console.error('Error in user query:', err);
          return res.json({ err: "Error at resetting password query" });
      }
      if (oldUserData.length === 0) {
          return res.json({ err: `User with entered user_id doesn't exist` });
      }
      oldUserData = oldUserData[0];
      const secret = privateKey + oldUserData.password;
      try {
          const verified = jwt.verify(token, secret);
          res.render('ResetPasswordTemp', {email: verified.email, Status: "Not Verified!"});
      } catch (error) {
          res.send("not verifiid!")
      }
  })
})

app.post("/reset-password/:user_id/:token", async (req, res) => {
  const { user_id, token } = req.params;
  const { password } = req.body;
  const q = "SELECT * FROM users WHERE user_id = ?";

  otpdb.query(q, [user_id], (err, oldUserData) => {
      if (err) {
          console.error('Error in user query:', err);
          return res.json({ err: "Error at resetting password query" });
      }

      if (oldUserData.length === 0) {
          return res.json({ err: `User with entered user_id doesn't exist` });
      }

      oldUserData = oldUserData[0];
      const secret = privateKey + oldUserData.password;

      try {
          const verified = jwt.verify(token, secret);
          
          bcrypt.hash(password.toString(), salt, (err, hashed) => {
              if (err) {
                  return res.json({ err: "Error at password bcrypt" });
              }
              const passwordUpdateQuery = "UPDATE users SET password = ? WHERE user_id = ?";
              otpdb.query(passwordUpdateQuery, [hashed, user_id], (err, result) => {
                  if (err) {
                      console.log(err);
                      return res.json({ err });
                  }
                  // res.json({ message: "Password updated successfully" });
                  res.render('ResetPasswordTemp', {email: verified.email, Status: "Verified!"})
              }); 
          });
          
      } catch (error) {
          res.send("Not verified!");
      }
  });
});
// ===========================================================================================

app.listen(process.env.PORT || 8081, () => {
  console.log("server app running on port: " + port);
})

