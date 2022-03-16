import { createContext } from "react";

const CartContext= createContext();

const CartContextProvider= () => {
	return <CartContext.Provider value={0}></CartContext.Provider>
}