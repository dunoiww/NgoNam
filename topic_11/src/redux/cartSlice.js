import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice( {
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id)

            if (itemPresent) {
                itemPresent.quantity += 1
            } else {
                //spread all element in payload and add quantity key
                state.cart.push({...action.payload, quantity: 1})
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },

        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id)
            if (itemPresent) {
                itemPresent.quantity += 1
            }
        },

        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id)
            if (itemPresent) {
                itemPresent.quantity -= 1
            }
        },

        clearCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = CartSlice.actions
export default CartSlice.reducer