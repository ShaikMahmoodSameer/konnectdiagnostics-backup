import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PackageItem({ item, auth, userId, cart, handleLoginClick }) {
  const [quantity, setQuantity] = useState(0);
  const [showQuantityController, setShowQuantityController] = useState(false);

  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowQuantityController(true);
    } else {
      setShowQuantityController(false);
    }
  }, [cart, item.product_id]);

  const handleAddToCartClick = () => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    setShowQuantityController(true);
    const data = { product_id: item.product_id, userId, quantity: 1 };
    axios
      .post('http://localhost:3210/addtocart', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred, not Success');
        }
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  };

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    updateCartItemQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(quantity - 1);
    } else if (quantity === 1) {
      removeCartItem(item.product_id, userId);
    }
  };

  const updateCartItemQuantity = (newQuantity) => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    const data = { product_id: item.product_id, quantity: newQuantity, userId };
    axios
      .post('http://localhost:3210/updatecartitemquantity', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // refreshCart();
        } else {
          console.log('err occurred while updating quantity');
        }
      })
      .catch((error) => {
        console.error('Error updating quantity:', error);
      });
  };

  const removeCartItem = (product_id, userId) => {
    if (!auth) {
      handleLoginClick();
      return;
    }

    const data = { product_id, userId };
    axios
      .post('http://localhost:3210/removecartitem', data)
      .then((response) => {
        if (response.data.Status === 'Success') {
          // 
        } else {
          console.log('err occurred while removing item');
        }
      })
      .catch((error) => {
        console.error('Error removing item:', error);
      });
  };


  const QuantityController = ({ quantity, onDecrement, onIncrement }) => (
    <div className='qntCntWrp'>
      <button className='plusminBtn plsBtn' onClick={onDecrement}>-</button>
      <span className='quantDisp'>{quantity}</span>
      <button className='plusminBtn mnsBtn' onClick={onIncrement}>+</button>
    </div>
  );

  return (
    <div key={item.product_id} className='package-card bg-white shadow-sm rounded m-2'>
      <img src="/images/k.png" className="cardcomplogo" alt="" />
      <img src={"/images/health-packages/" + item.product_name.toLowerCase().replace(/\s+/g, '-') + ".jpg"} className="testOrgImg" alt="" />
      <div className='p-3'>
        <div className='mb-5'>
          <h6 className="packagename"> {item.product_name} </h6>
          <span className="packagecode small"> <strong> Package Code: </strong> {item.product_code} </span>
        </div>
        <div className="ftr-sec bg-light px-3 py-2 w-100 d-flex justify-content-between border-top tcardfooter">
          {/* <div>
              {auth ? (
                showQuantityController ? (
                  <div className='qntCntWrp'>
                    <button className='plusminBtn plsBtn' onClick={handleDecrementQuantity}>-</button>
                    <span className='quantDisp'>{quantity}</span>
                    <button className='plusminBtn mnsBtn' onClick={handleIncrementQuantity}>+</button>
                  </div>
                ) : (
                  <button className='btn btn-primary btn-sm' onClick={handleAddToCartClick}>Add to Cart</button>
                )
              ) : (
                <button className='btn btn-primary btn-sm' onClick={() => handleLoginClick() }>Add to Cart</button>
              )}
            </div> */}
          <div>
            {auth ? (
              showQuantityController ? (
                <QuantityController
                  quantity={quantity}
                  onDecrement={handleDecrementQuantity}
                  onIncrement={handleIncrementQuantity}
                />
              ) : (
                <button className='btn btn-primary btn-sm' onClick={handleAddToCartClick}>Add to Cart</button>
              )
            ) : (
              <button className='btn btn-primary btn-sm' onClick={handleLoginClick}>Add to Cart</button>
            )}
          </div>

          <div>
            <h4 className="price mb-0 fw-bolder"> <small>Rs: </small> {item.price} </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageItem
