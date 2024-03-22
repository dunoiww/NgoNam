import React from "react";
import Loading from "../components/Loading";
import Item from "../components/Item";
import { Link } from "react-router-dom";
import useGetData from "../useGetData";

function Home() {
    const { products, loading } = useGetData("https://fakestoreapi.com/products");
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-5 gap-2">
                    {products.map((product, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product/${product.id}`}>
                                    <Item item={product} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Home;
