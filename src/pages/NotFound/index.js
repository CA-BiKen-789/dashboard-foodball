import Header from '~/components/Header';
import styles from './NotFound.module.css';
import classNames from 'classnames/bind';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NotFound() {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('not-found')}>
					<h1>404 Not found</h1>
					<img src='/images/notfound.png' alt='Hình ảnh' />
					<h2>Trang này không tồn tại</h2>
					<Link to='/'>
						Trở lại trang chủ
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default NotFound;