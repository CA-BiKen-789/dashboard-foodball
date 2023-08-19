import styles from './NoContent.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function NoContent() {
	return (
		<span className={cx('wrapper')}>
			Không có nội dung để hiển thị
		</span>
	);
}

export default NoContent;