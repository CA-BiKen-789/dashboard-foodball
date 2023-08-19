import BongDa from '~/pages/BongDa';
import BongDaVietNam from '~/pages/BongDaVietNam';
import Home from '~/pages/Home';
import NhanDinhBongDa from '~/pages/NhanDinhBongDa';
import TinBongDa from '~/pages/TinBongDa';
import Esports from '~/pages/Esports';
import NotFound from '~/pages/NotFound';
import DetailNews from '~/pages/DetailNews';
import DuLieuTranDau from '~/pages/DuLieuTranDau';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/bong-da', component: BongDa },
	{ path: '/nhan-dinh-bong-da', component: NhanDinhBongDa },
	{ path: '/tin-bong-da', component: TinBongDa },
	{ path: '/bong-da-viet-nam', component: BongDaVietNam },
	{ path: '/esports', component: Esports },
	{ path: '/detail/:postId', component: DetailNews },
	{ path: '/du-lieu-bong-da/:id', component: DuLieuTranDau },
	{ path: '/du-lieu-bong-da', component: DuLieuTranDau },
	{ path: '*', component: NotFound }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }