import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetData = (url) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await axios.get(url);
            if (response && response.data) {
                setProducts(response.data);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, [url]);

    return {products, loading};
}

export default useGetData