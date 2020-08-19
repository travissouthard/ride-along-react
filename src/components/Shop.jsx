import React, {useState} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

export default function Shop(props) {
    const [error, setError] = useState(null)
    const stripe = useStripe()
    const elements = useElements()

    // Handle real-time validation errors from the card Element.
    const handleCardChange = (event) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null)
        }
    }

    // Handle form submission.
    const handlePaymentSubmit = async (event) => {
        event.preventDefault()
        const card = elements.getElement(CardElement)
        const result = await stripe.createToken(card)
        if (result.error) {
        // Inform the user if there was an error.
            setError(result.error.message)
        } else {
            setError(null)
            // Send the token to your server.
            props.stripeTokenHandler(result.token);
        }
    }

    //Render
    return (
        <main>
            <h2>Ride Along Shop</h2>
            {props.checkoutOn ? (
                <div className="cart">
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
                    <form className="checkout" onSubmit={(event) => handlePaymentSubmit(event)}>
                        <label htmlFor="customerName"> Full name: 
                            <input type="text" id="customerName" name="customerName" value={props.customerName} onChange={(event) => props.handleChange(event, props.setCustomerName)}/>
                        </label>
                        <label htmlFor="email"> Email: 
                            <input type="email" id="email" name="email" value={props.email} onChange={(event) => props.handleChange(event, props.setEmail)}/>
                        </label>
                        <label htmlFor="amount"> Amount (US$): 
                            <input type="text" id="amount" name="amount" disabled value={props.amount.toFixed(2)}/>
                        </label>
                        <CardElement onChange={(event) => handleCardChange(event)}/>
                        <input type="submit" value="Checkout" disabled/>
                        <button onClick={() => props.toggleCheckout()}>Cancel</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h3>{props.cart.length + " items in your cart!"}</h3>
                    <button onClick={() => props.toggleCheckout()}>Begin checkout</button>
                    <button onClick={() => props.resetCart()}>Empty Cart</button>
                </div>
            )}
            <div className="shop">
                {props.products.length < 1 ? (
                    <p>New products coming soon!</p>
                ) : (
                    props.products.map((product, index) => {
                        return <article key={index} className="product">
                            <h3>{product.name}</h3>
                            <img src={props.baseImage + "products/" + product.image} alt={product.name}/>
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

