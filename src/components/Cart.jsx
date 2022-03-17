import { useContext } from "react"
import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
	const {cart}= useContext(CartContext);
	
	return (
	<nav>
		<h2>No.Of Items:{cart}</h2>
	</nav>
	)
}