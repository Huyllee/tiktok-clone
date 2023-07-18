import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ad67316f5808f9f5d9319fa47c891e2c~c5_100x100.jpeg?x-expires=1689847200&x-signature=uORcD2vU7zc2NRqyvcmCYbfJXJo%3D"
            alt=""
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>treexy</span>
               <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>dd</span>
         </div>
      </div>
   );
}

export default AccountItem;
