import Customers from '~/pages/Customers';
import Home from '~/pages/Home';
import Orders from '~/pages/Orders';
import Products from '~/pages/Products';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/orders', component: Orders },
	{ path: '/customers', component: Customers },
	{ path: '/products', component: Products },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }