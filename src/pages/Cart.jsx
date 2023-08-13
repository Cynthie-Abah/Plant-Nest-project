import axios from "axios";
import { useEffect, useState } from "react";


const Cart = () => {

    const cartArray = [
        {id:1, img: '', product: 'American Marigold', price: 23.45, quantity:1},
        {id:2, img: '', product: 'Black Eyed Susan', price: 24.45, quantity:1},
        {id:3, img: '', product: 'Bleeding Heart', price: 15.45, quantity:1}
    ];

    const[cartItems, setCartItems] = useState([]);
    const[subTotal, setSubTotal] = useState(0);
    const[total, setTotal] =useState(0);

    const initialsubTotal = cartArray.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingFee = initialsubTotal * 0.3;

    const getUserCartItems = async() => {
        const user = JSON.parse(localStorage.getItem("user"));
        try{
            if(!user) return;
            const response = await axios.get(`https://plant-nest.onrender.com/api/v1/cart/${user?.user?.user_id}`);
            setCartItems(response?.data);
        }catch(err){
            console.log(err.message);
        }
    }
    useEffect(() => {getUserCartItems()}, []);

    useEffect(() => {
        const newsubTotal = cartItems?.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
        setSubTotal(newsubTotal);
        setTotal(newsubTotal + shippingFee);
    }, [cartItems]);

    const handleIncrement = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
    }

    const handleDecrement = index =>{
        const newCartItem = [...cartItems]
        newCartItem[index].quantity > 1 && newCartItem[index].quantity--;
        setCartItems(newCartItem);
    }

    const handleDelete = item =>{
        const updatedCart = cartItems.filter(itm => itm.id !== item.id);
        setCartItems(updatedCart);
    }
    

    return (
        <>  
            <main className="main-content">
                <div className="cart-area section-space-y-axis-100">
                    {cartItems.length ? <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form>
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">remove</th>
                                                    <th className="product-thumbnail">images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="product-price">Unit Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems?.map((cartItem, index) =>(
                                                    <tr key={index}>
                                                        <td className="product_remove">
                                                            <a href="#">
                                                                <i className="pe-7s-close" data-tippy="Remove" data-tippy-inertia="true"
                                                            data-tippy-animation="shift-away" data-tippy-delay="50"
                                                            data-tippy-arrow="true" data-tippy-theme="sharpborder" onClick={() => handleDelete(cartItem)}></i>
                                                            </a>
                                                        </td>
                                                        <td className="product-thumbnail">
                                                            <a href="#">
                                                                {/* <img src={cartItem.img} alt="Cart Thumbnail"/> */}
                                                            </a>
                                                        </td>
                                                        <td className="product-name"><a href="#">{cartItem?.product}</a></td>
                                                        <td className="product-price"><span className="amount">${cartItem?.price}</span></td>
                                                        <td className="quantity">
                                                            <div className="cart-plus-minus">
                                                                <input className="cart-plus-minus-box" readOnly value={cartItem?.quantity} type="text"/>
                                                                <div className="dec qtybutton">
                                                                    <i className="fa fa-minus" onClick={() => handleDecrement(index)}></i>
                                                                </div>
                                                                <div className="inc qtybutton">
                                                                    <i className="fa fa-plus" onClick={() => handleIncrement(index)}></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="product-subtotal"><span className="amount">${(cartItem?.price * cartItem?.quantity).toFixed(2)}</span></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-5 ml-auto">
                                            <div className="cart-page-total">
                                                <h2>Cart totals</h2>
                                                <ul>
                                                    <li>Subtotal <span>${subTotal.toFixed(2)}</span></li>
                                                    <li>Shipping Fee <span>0</span></li>
                                                    <li>Total <span>${total.toFixed(2)}</span></li>
                                                </ul>
                                                <a href="#">Proceed to checkout</a>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> : <h3 className="text-center">Add items to cart</h3>}
                </div>
            </main>
        </>
    );
}
 
export default Cart;