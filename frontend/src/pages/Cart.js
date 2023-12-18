import React,{useState} from 'react';
// import { useEffect } from 'react';
import { styled } from "styled-components";
import CartFormComp from './CartFormComp';
import CartItemsList from './CartItemsList';


const Cart = ({ userId, cart, setCart }) => {
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const [showComponent, setShowComponent] = useState(false);
    function showForm() {
        setShowComponent(true);
    }

    return (
      <Wrapper>
          <article className='container w-50 mx-auto m-5 p-0'>
            <div className='p-5 py-4 bg-light'>
                <h2>Cart</h2>
            </div>
            <div className='px-5 p-2'>
                {cart?.map((item)=>(
                  <CartItemsList key={item.product_id} item={item} userId={userId} cart={cart} />
                ))}
                <div className='totalSec d-flex align-items-end flex-column justify-content-between'>
                    <h3>Total: &#8377; {calculateTotal()}</h3>
                    <button type='button' className='btn btn-primary py-1 px-3' onClick={showForm}>Submit</button>
                </div>
                <div>
                    {showComponent && ( <CartFormComp cart={cart} /> )}
                </div>
            </div>
          </article>
      </Wrapper>
    )
}

export default Cart;


const Wrapper = styled.section`
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
}
.cartItem{
    padding: 10px 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
.removeBtn{
    width: 30px;
    height: 30px;
    background: red;
    border-radius: 5px;
    color: white;
}
.itemsprice{
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
}
.totalSec{
    margin: 20px 0;
    font-weight: 700;
    font-size: 18px;
}`;
