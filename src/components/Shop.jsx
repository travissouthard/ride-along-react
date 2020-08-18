import React, {useState} from 'react'

export default function Shop(props) {
    const [checkoutOn, setCheckoutOn] = useState(false)
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")

    let toggleCheckout = () => {
        setCheckoutOn(!checkoutOn)
    }
    return (
        <main>
            <h2>Shop</h2>
            <div className="cart">
                {checkoutOn ? (
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

