import React from "react";
import useGetData from "../useGetData";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function DetailProduct() {
    const { id } = useParams();
    const { products: product, loading } = useGetData(`https://fakestoreapi.com/products/${id}`);
    const dispatch = useDispatch();

    const handleCartSuccess = () => {
        toast.success('Add to cart success', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleClick = (item) => {
        handleCartSuccess();
        dispatch(addToCart(item))
    };
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex gap-5 p-2 shadow-lg rounded-xl">
                    <div>
                        <img src={product?.image} alt={product?.title} className="w-80" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="space-y-3">
                            <h2 className="font-bold text-2xl tracking-wide">{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="text-red-800 font-bold text-2xl">${product.price}</p>
                        </div>

                        <div className="space-x-5">
                            <button onClick={handleCartSuccess} className="p-4 bg-blue-500 rounded-xl text-white font-bold w-40 hover:bg-blue-400">
                                Check out
                            </button>
                            <button
                                onClick={() => handleClick(product)}
                                className="p-4 bg-amber-500 rounded-xl text-white font-bold w-40 hover:bg-amber-400">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </div>
    );
}

export default DetailProduct;
