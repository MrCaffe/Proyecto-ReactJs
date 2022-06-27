import {createContext, useContext, useState} from 'react'

export const CartContext = createContext ()

export const useCartContent = () => {
	return useContext(CartContext)
}

export const CartContextProdiver = ({children}) => {

	const [cart, setCart] = useState ([])

  const addItem = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const TotalPrice = () => {
    return cart.reduce (( acc, prod) => acc += ( prod.price*prod.cantidad ), 0)
  }

  const TotalQuantity = () => {
    return cart.reduce ((acc,prod) => acc += prod.cantidad, 0)
  }

  const EmptyCart = () => {
    setCart([])
  }

  const RemoveItem = (id) => {
 		setCart(cart.filter( (prod) => prod.id !== id) )
  }

	return (

		<CartContext.Provider value={
			{ 
				cart, 
				addItem, 
				isInCart, 
				TotalPrice, 
				TotalQuantity, 
				EmptyCart,
				RemoveItem
			} 
		}>

		{children}
		
		</CartContext.Provider>
	)
}