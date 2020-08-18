import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'

export default function Shop(props) {
    //Render
    return (
        <main>
            <h2>Ride Along Shop</h2>
            <div className="cart">
                {props.checkoutOn ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.cart < 0 ? "" : (
                                    props.cart.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{"$" + item.price.toFixed(2)}</td>
                                            <td onClick={() => props.removeItem(index)}>X</td>
                                        </tr>
                                    })
                                )}
                                <tr>
                                    <td></td>
                                    <td>Subtotal</td>
                                    <td>{"$" + props.amount.toFixed(2)}</td>
                                    <td onClick={() => {props.resetCart()}}>X</td>
                                </tr>
                            </tbody>
                        </table>
                        <form className="checkout">
                            <label htmlFor="customerName"> Full name: 
                                <input type="text" id="customerName" name="customerName" value={props.customerName} onChange={(event) => props.handleChange(event, props.setCustomerName)}/>
                            </label>
                            <label htmlFor="email"> Email: 
                                <input type="email" id="email" name="email" value={props.email} onChange={(event) => props.handleChange(event, props.setEmail)}/>
                            </label>
                            <label htmlFor="amount"> Amount: 
                                <input type="text" id="amount" name="amount" disabled value={props.amount.toFixed(2)}/>
                            </label>
                            <CardElement />
                            <input type="submit" value="Checkout"/>
                            <button onClick={() => props.toggleCheckout()}>Cancel</button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h3>{props.cart.length + " items in your cart!"}</h3>
                        <button onClick={() => props.toggleCheckout()}>Begin checkout</button>
                    </div>
                )}
            </div>
            <div className="shop">
                {props.products.length < 1 ? (
                    <p>New products coming soon!</p>
                ) : (
                    props.products.map((product, index) => {
                        return <article key={index} className="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name}/>
                            <p>{"$" + product.price.toFixed(2) + " | " + product.quantity + " left in stock"}</p>
                            <p>{product.description}</p>
                            <button onClick={() => {props.addToCart(product)}}>Add to Cart!</button>
                        </article>
                    })
                )}
            </div>
        </main>
    )
}

