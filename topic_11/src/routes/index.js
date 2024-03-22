import Cart from "../screens/Cart";
import DetailProduct from "../screens/DetailProduct";
import Home from "../screens/Home";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/product/:id', component: DetailProduct},
]

export default publicRoutes;