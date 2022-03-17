import { createContext, useState } from "react";

export const CartContext= createContext();

export const CartContextProvider= ({children}) => {

	const handleChange = (value) => {
		setCart(cart+value)
	}

	const [cart, setCart] = useState(10)

	return <CartContext.Provider value={ { cart, handleChange } }>{children}</CartContext.Provider>
}