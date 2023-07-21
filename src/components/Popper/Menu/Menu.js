import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1]; //biến current được gán giá trị là phần tử cuối cùng trong mảng history.

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children; //!! neu co item.children thi tra ve true
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };

   const handleBack = () => {
      setHistory((prev) => prev.slice(0, prev.length - 1));
   };

   const renderResult = (attrs) => (
      <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
         <PopperWrapper>
            {history && history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
         </PopperWrapper>
      </div>
   );

   //reset to first page
   const handleResetMenu = () => {
      setHistory((prev) => prev.slice(0, 1));
   };

   return (
      <Tippy
         interactive
         delay={[0, 700]}
         offset={[12, 8]}
         placement="bottom-end"
         hideOnClick={hideOnClick}
         render={renderResult}
         onHide={handleResetMenu}
      >
         {children}
      </Tippy>
   );
}

Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
};

export default Menu;
