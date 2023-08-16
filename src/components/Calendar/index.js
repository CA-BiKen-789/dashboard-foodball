import classNames from "classnames/bind";
import styles from "./Calendar.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Calendar() {

	return (
		<div className={cx("wrapper")}>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={5}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				<SwiperSlide>
					<Link className={cx('link')} to='/#'>
						<div className={cx('calendar')}>
							<h6 className={cx('match-time')}>Thứ sáu, 01:00</h6>
							<div className={cx('match')}>
								<div className={cx('match-item')}>
									<img className={cx('match-logo')} src="/images/match/match1-icon.png" alt="Logo" />
									<span className={cx('name')}>AI-Nassr</span>
								</div>
								<div className={cx('match-item')}>

									<img className={cx('match-logo')} src="/images/match/match2-icon.png" alt="Logo" />
									<span className={cx('name')}>AI Taawon</span>
								</div>
							</div>
						</div>
					</Link>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Calendar;