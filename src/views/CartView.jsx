import { useStoreContext } from "../context";
import "./Cartview.css"

function CartView() {
    const { cart, setCart } = useStoreContext();

    return (
        <div className="cart-view">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                hi
            </div>
        </div>
    )
}

export default CartView