import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CartItemsList({item, userId, cart}) {
    const [quantity, setQuantity] = useState(0);

  // Check if the item's test_id is already in the cart and set quantity
  useEffect(() => {
    const cartItem = cart.find((cartItem) => cartItem.product_id === item.product_id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
        // 
    }
  }, [cart, item.product_id]);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
    updateCartItemQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateCartItemQuantity(quantity - 1);
    } else if (quantity === 1) {
      removeCartItem();
    }
  };

  // Function to update cart item quantity in the database
  const updateCartItemQuantity = (newQuantity) => {
    const data = { product_id: item.product_id, quantity: newQuantity, userId};
    axios.post("http://localhost:3210/updatecartitemquantity", data)
      .then((response) => {
        if (response.data.Status === "Success") {
          // 
        } else {
          console.log("err occurred while updating quantity");
        }
      })
      .catch((error) => {
        console.error("Error updating quantity:", error);
      });
  };

  // Function to remove cart item from the database
  const removeCartItem = () => {
    const data = { product_id: item.product_id, userId };
    axios.post("http://localhost:3210/removecartitem", data)
      .then((response) => {
        if (response.data.Status === "Success") {
          // 
        } else {
          console.log("err occurred while removing item");
        }
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <div className={item.product_type + " d-flex bd-highlight border-bottom py-3"}>
        <div className='me-4 flex-shrink-1 bd-highlight' style={{flex: "1"}}>
          <img src={"/images/" + item.product_type + "_icon.jpg"} className="testOrgImg rounded-circle shadow-sm" alt="" style={{width: "50px"}} />
        </div>
        <div className='w-100 bd-highlight d-flex justify-content-between' Style={{flex: "2"}}>
          <div>
            <div>
              <span> {item.product_name} </span> 
            </div>
            <div className='d-flex align-items-center my-2'>
              <div className="d-flex">
                <h4 className="price mb-0 fw-bolder"> <small>Rs: </small> {item.price} </h4>
                <strong className='mx-3'>X</strong>
              </div>
              <div className='qntCntWrp'>
                <button className="plusminBtn plsBtn" onClick={(event) => { event.preventDefault(); handleDecrementQuantity(item.test_id) }}>-</button>
                <span className="quantDisp"> {quantity} </span>
                <button className="plusminBtn mnsBtn" onClick={(event) => { event.preventDefault(); handleIncrementQuantity(item.test_id) }}>+</button>
              </div>
            </div>
          </div>
          <div>
            <h4>
              <strong> &#8377; {item.quantity * item.price}</strong>
            </h4> 
          </div>
        </div>
    </div>
  )
}

export default CartItemsList
