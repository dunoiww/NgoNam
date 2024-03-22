import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { clear } from "@testing-library/user-event/dist/clear";

function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementQuantity(item));
    }

    const handleDecrement = (item) => {
        dispatch(decrementQuantity(item));
        if (item.quantity - 1 === 0) {
            dispatch(removeFromCart(item))
        }
    }

    const handleSuccess = () => {
        toast.success('Checkout success', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleCheckout = () => {
        handleSuccess();
        dispatch(clearCart())
    }
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-4">
                {cart?.map((item, index) => {
                    return (
                        <div key={index} className="flex p-2 shadow-md rounded-lg">
                            <div style={{ flex: "1 1 0%" }}>
                                <img src={item.image} alt={item.title} style={{ width: 120 }} />
                            </div>

                            <div style={{ flex: "5 1 0%" }}>
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                    <p className="text-red-800 font-bold text-2xl mt-2">${item.price * item.quantity}</p>
                                </div>

                                <div className="flex space-x-4 items-center justify-end">
                                    <button onClick={() => handleDecrement(item)} className="px-2 rounded-md flex bg-sky-400 hover:bg-sky-500 text-lg">
                                        -
                                    </button>
                                    <p className="text-lg">{item.quantity}</p>
                                    <button onClick={() => handleIncrement(item)} className="px-2 rounded-md flex bg-sky-400 hover:bg-sky-500 text-lg">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="shadow-md rounded-lg h-60">
                <div className="p-4">
                    <h2 className="font-bold text-2xl">Cart Summary</h2>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>$ {total}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Shipping</p>
                        <p>$20.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Total</p>
                        <p className="font-bold">$ {total + 20}</p>
                    </div>
                    <button onClick={handleCheckout} className="w-full p-4 bg-blue-500 rounded-xl text-white font-bold hover:bg-blue-400 mt-4">
                        Check out
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Cart;
