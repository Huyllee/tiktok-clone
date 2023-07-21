import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <div className={cx('preview')}>
                  <AccountPreview />
               </div>
            </PopperWrapper>
         </div>
      );
   };

   return (
      <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
         <div className={cx('account-item')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3f5358b3bfe0626c89eeb225559f57b1.jpeg?x-expires=1690120800&x-signature=IrQBJNv%2BWBwfwah1Dwv0qMM0f%2B0%3D"
               alt=""
            />
            <div className={cx('item-info')}>
               <p className={cx('nickname')}>
                  <strong>deli_love0</strong>
                  <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
               </p>
               <p className={cx('name')}>ysdc1627321</p>
            </div>
         </div>
      </Tippy>
   );
}

AccountItem.propTypes = {};

export default AccountItem;
