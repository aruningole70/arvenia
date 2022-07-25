import React from "react";
import '../../../App.css';
import headerline from '../../../assects/headerline.svg';
import minus from '../../../assects/minus.svg';
import plus from '../../../assects/plus.svg';
import edit from '../../../assects/edit.svg';
import trash from '../../../assects/trash.svg';
import heart from '../../../assects/heart.svg';
import lock from '../../../assects/lock.svg';
import image1 from '../../../assects/image1.png';
import image2 from '../../../assects/image2.png';
import image3 from '../../../assects/image3.png';
import image4 from '../../../assects/image4.png';
import left1 from '../../../assects/left1.svg';
import right1 from '../../../assects/right1.svg';
import { incCart, decCart, Remove } from '../../../redux/acion/index';
import { useSelector, useDispatch } from 'react-redux';
function Cart() {
    const dispatch = useDispatch();
    const updatedState = useSelector((state) => state.Change);
    if (updatedState.count === 0) {
        console.log(localStorage.getItem("products"));
        updatedState.products = JSON.parse(localStorage.getItem("products"));
        updatedState.count = 1;
    }
    let subTotal = 0;
    for (let i = 0; i < updatedState.products.length; i++) {
        subTotal = subTotal + (updatedState.products[i].price * updatedState.products[i].count);
    }
    let estTotal = 0;
    for (let i = 0; i < subTotal; i++) {
        estTotal = subTotal - (77.60 + 100 + 23.28);
    }
    return (
        <div className="demo-GridRowExample-markup cart">
            <header>Your Shopping Bag<br />
                <img src={headerline} alt="here is shape" />
            </header>
            <div className="aem-Grid aem-Grid--12 demo-Grid cart-section">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn ">
                    {updatedState.products.map((prod) => {
                        return (
                            <div className="aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid cart-items ">
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1  demo-GridColumn cart-img">
                                    <img src={prod.image} alt="here is cart image" />
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 cart-list">
                                    <ul>
                                        <li>{prod.title}</li>
                                        <li>Size : Medium</li>
                                        <li>Color : Storm</li>
                                        <li>${prod.price * prod.count}</li>
                                    </ul>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 add-minus-icon">
                                    <button onClick={() => dispatch(decCart(prod))}><img src={minus} alt="here is minus button" /></button>
                                    <input type="text" value={prod.count} />
                                    <button onClick={() => dispatch(incCart(prod))}><img src={plus} alt="here is add button" /></button>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-Grid--tablet--6 aem-Grid--phone--1 ear-button">
                                    <button><img src={edit} alt="photo" />Edit item</button><br />
                                    <button onClick={() => dispatch(Remove(prod))}><img src={trash} alt="remove the cart-item" />Remove</button><br />
                                    <button><img src={heart} alt="photo" />Save for later</button>
                                </div>
                            </div>
                        );
                    })}
                    <div className="payment-section">
                        <div className="shiping-section">
                            <p>Estimate your Shipping</p>
                            <div className="shiping">
                                <select name="shiping" id="shiping">
                                    <option value="shiping">Shipping to </option>
                                </select>
                            </div>
                        </div>
                        <hr />
                        <div className="shiping-section">
                            <p>Enter a Coupon Code</p>
                            <div className="shiping">  <select name="shiping" id="cart">
                                <option value="shiping">discount applied</option>
                            </select>
                            </div>
                        </div>
                        <hr />
                        <div className="shiping-section">
                            <p>Apply Gift Card</p>
                            <div className="shiping">
                                <select name="shiping" id="cart">
                                    <option value="shiping"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn cart-block">
                    <h1>Pricing Summary</h1>
                    <div className="cart-pricing">
                        <div className="pricing">
                            <div className="pricing-title">
                                <h2>Subtotal</h2>
                                <h2>Coupon</h2>
                                <h2>Gift Card</h2>
                                <h2>Estimated tax</h2>
                                <h2>Estimated shipping</h2>
                                <p>Estimated Total</p>
                            </div>
                            <div className="pricing-amount">
                                <h2>$ {subTotal}</h2>
                                <h2>- $ 77.60</h2>
                                <h2>- $ 100.00</h2>
                                <h2>$ 23.28</h2>
                                <h2>FREE</h2>
                                <p>${estTotal}</p>
                            </div>
                        </div>
                        <div className="cart-button">
                            <div className="chekout"><button> <img src={lock} alt="here is lock logo" />CHECKOUT</button></div>
                            <div className="paypal"><button className="imp-btn" style={{ backgroundImage: "url(PP_BTN@2x.png)" }}></button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12 demo-Grid  corosal">
                <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide demo-GridColumn demo-GridColumn--separator arrow">
                    <img src={left1} alt="go to left " />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--hide demo-GridColumn">
                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide demo-GridColumn demo-GridColumn--separator">
                            <img src={image1} alt="here is iamge" />
                            <p>Varsity Eco-friendly Jacket</p>
                            <p>$129.00</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide demo-GridColumn demo-GridColumn--separator">
                            <img src={image2} alt="here is iamge" />
                            <p>Signature Sports Bra</p>
                            <p>$79.00</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide demo-GridColumn demo-GridColumn--separator">
                            <img src={image3} alt="here is iamge" />
                            <p>Electric Legging</p>
                            <p>$74.00</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide demo-GridColumn demo-GridColumn--separator">
                            <img src={image4} alt="here is iamge" />
                            <p>Signature Sport Tracker</p>
                            <p>$199.00</p>
                        </div>
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--1  demo-GridColumn aem-GridColumn--phone--hide demo-GridColumn--separator arrow">
                    <img src={right1} alt="go to right " />
                </div>
            </div>
        </div>
    );
}
export default Cart;