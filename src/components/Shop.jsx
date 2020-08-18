import React, {useState} from 'react'

export default function Shop(props) {
    // State
    const [checkoutOn, setCheckoutOn] = useState(false)
    const [name, setName] = useState("")
    const [amount, setAmount] = useState(0)
    const [cart, setCart] = useState([])
    //Functions
    let toggleCheckout = () => {
        setCheckoutOn(!checkoutOn)
    }
    let refreshAmount = () => {
        let sum = 0
        cart.map(item => {
            sum += item.price
        })
        setAmount(sum)
    }
    let addToCart = (item) => {
        let newItem = {
            name: item.name,
            quantity: 1,
            price: item.price
        }
        let copyCart = [...cart]
        copyCart.push(newItem)
        setCart(copyCart)
        refreshAmount()
    }
    let removeItem = (index) => {
        let copyCart = [...cart]
        copyCart.splice(index, 1)
        setCart(copyCart)
        refreshAmount()
    }
    let resetCart = () => {
        setCart([])
        refreshAmount()
    }
    //Render
    return (
        <main>
            <h2>Ride Along Shop</h2>
            <div className="cart">
                {checkoutOn ? (
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
                                {cart < 0 ? "" : (
                                    cart.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>
                                                <button>-</button>
                                                {item.quantity}
                                                <button>+</button>
                                            </td>
                                            <td>{"$" + item.quantity * item.price.toFixed(2)}</td>
                                            <td className="cart-delete" onClick={() => removeItem(index)}>X</td>
                                        </tr>
                                    })
                                )}
                                <tr>
                                    <td></td>
                                    <td>Subtotal</td>
                                    <td>{"$" + amount.toFixed(2)}</td>
                                    <td onClick={() => {resetCart()}}>X</td>
                                </tr>
                            </tbody>
                        </table>
                        <form className="checkout">
                            <label htmlFor="name"> Name: 
                                <input type="text" id="name" name="name" value={name} onChange={(event) => props.handleChange(event, setName)}/>
                            </label>
                            <label htmlFor="amount"> Amount: 
                                <input type="text" id="amount" name="amount" disabled value={amount.toFixed(2)}/>
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
                        return <article key={index} className="product">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name}/>
                            <p>{"$" + product.price.toFixed(2) + " | " + product.quantity + " left in stock"}</p>
                            <p>{product.description}</p>
                            <button onClick={() => {addToCart(product)}}>Add to Cart!</button>
                        </article>
                    })
                )}
            </div>
        </main>
    )
}

