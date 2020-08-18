import React, {useState} from 'react'

export default function Shop(props) {
    // State
    const [checkoutOn, setCheckoutOn] = useState(false)
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [cart, setCart] = useState([])
    //Functions
    let toggleCheckout = () => {
        setCheckoutOn(!checkoutOn)
    }
    //let addToCart = (item, index) => {
        //let newItem = {
            //name: item.name
            //quantity: 1
            //price: item.price
        //}
        //let copyCart = [...props.products]
        //copyCart.push(newItem)
        //setCart(copyCart)
    //}
    //Render
    return (
        <main>
            <h2>Ride Along Shop</h2>
            <div className="cart">
                {checkoutOn ? (
                    <div>
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            {cart < 0 ? "" : (
                                cart.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <button>-</button>
                                            {item.quantity}
                                            <button>+</button>
                                        </td>
                                        <td>{item.quantity * item.price}</td>
                                    </tr>
                                })
                            )}
                            <tr></tr>
                        </table>
                        <form className="checkout">
                            <label htmlFor="name"> Name: 
                                <input type="text" id="name" name="name" value={name} onChange={(event) => props.handleChange(event, setName)}/>
                            </label>
                            <label htmlFor="amount"> Amount: 
                                <input type="text" id="amount" name="amount" disabled value={amount}/>
                            </label>
                            <input type="submit" value="Checkout"/>
                            <button onClick={() => toggleCheckout()}>Cancel</button>
                        </form>
                    </div>
                ) : (
                    <button onClick={() => toggleCheckout()}>Begin checkout</button>
                )}
            </div>
            <div className="shop">
                {props.products.length < 1 ? (
                    <p>New products coming soon!</p>
                ) : (
                    props.products.map((product, index) => {
                        return <article key={index} class="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name}/>
                            <p>{"$" + product.price + " | " + product.quantity + " left in stock"}</p>
                            <p>{product.description.slice(0, 24)}... <span>See details</span></p>
                            <button>Add to Cart!</button>
                        </article>
                    })
                )}
            </div>
        </main>
    )
}

