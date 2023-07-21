import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <header className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3f5358b3bfe0626c89eeb225559f57b1.jpeg?x-expires=1690120800&x-signature=IrQBJNv%2BWBwfwah1Dwv0qMM0f%2B0%3D"
               alt=""
            />
            <Button primary>Follow</Button>
         </header>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>deli_love0</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>ysdc1627321</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>8.2M&#160;</strong>
               <span className={cx('label')}>Follower</span>
               <strong className={cx('value')}>8.2M&#160;</strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
