import '../styles/Cart.css'

function Cart() {
    const price_monstera = 8;
    const price_lierre = 10;
    const price_bouquet = 15;
    return (<div className='panier'>
        <h2>Panier</h2>
        <ul>
            <li>1 monstera : {price_monstera} €</li>
            <li>1 lierre : {price_lierre} €</li>
            <li>1 bouquet de fleurs : {price_bouquet} €</li>
        </ul>
        <p>Total : {price_monstera + price_lierre + price_bouquet}</p>
    </div>)
}

export default Cart;