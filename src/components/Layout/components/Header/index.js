import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];

const userMenu = [
   {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@haoo',
   },
   {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
   },
   {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
   },
];

function Header() {
   const currentUser = true;

   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
   };

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="TikTok" />
            <Search />

            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload videos" placement="bottom">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button to="login" text>
                        Upload
                     </Button>
                     <Button to="login" primary>
                        Log in
                     </Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://68/23371272dbe37938d0069237d644cbff~c5_100x100.jpeg?x-expires=1689912000&x-signature=1ZQanq8OPNBGIfJN%2ByZTEyInlrI%3D"
                        alt=""
                        fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7122505274833207323~c5_720x720.jpeg?x-expires=1689933600&x-signature=lyuJq2cbHAR2Rx1wh%2BGWTM%2FnlsM%3D"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
