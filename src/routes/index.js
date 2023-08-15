import BongDa from '~/pages/BongDa';
import Home from '~/pages/Home';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/bong-da', component: BongDa }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }