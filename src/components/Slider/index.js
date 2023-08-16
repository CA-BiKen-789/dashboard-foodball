import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './Slider.module.css';
import classNames from 'classnames/bind';
import TitleNews from '~/components/TitleNews';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';


const cx = classNames.bind(styles);

function Slider() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('title')}>
				<TitleNews>
					nhận định dự đoán
				</TitleNews>
			</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<div className={cx('slider-item')}>
					<SwiperSlide>
						<Link className={cx('link')} to='/#'>
							<img src="/images/posts/post1.png" alt='slider' />
							<h5 className={cx('content')}>Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn</h5>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link className={cx('link')} to='/#'>
							<img src="/images/posts/post2.png" alt='slider' />
							<h5 className={cx('content')}>Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn</h5>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link className={cx('link')} to='/#'>
							<img src="/images/posts/post3.png" alt='slider' />
							<h5 className={cx('content')}>Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn</h5>
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link className={cx('link')} to='/#'>
							<img src="/images/posts/post4.png" alt='slider' />
							<h5 className={cx('content')}>Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn</h5>
						</Link>
					</SwiperSlide>
				</div>
			</Swiper>
		</div>
	);
}

export default Slider;