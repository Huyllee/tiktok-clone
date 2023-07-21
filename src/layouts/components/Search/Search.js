import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { fetchSearchAPI } from '~/services/userService';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchValue, 500);

   const inputRef = useRef();

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const res = await fetchSearchAPI(debounced);
         if (res && res.data) {
            setSearchResult(res.data);
            setLoading(false);
         }
      };

      fetchApi();
   }, [debounced]);

   const handleFocusInput = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleOnChangeInput = (e) => {
      const keyword = e.target.value;
      const KEY_SPACE = /\s/g;

      if (!KEY_SPACE.test(keyword[0])) {
         setSearchValue(keyword);
      }
   };

   const handleSubmit = (e) => {};

   return (
      <HeadlessTippy
         interactive
         placement="bottom"
         visible={showResult && searchResult.length > 0}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult &&
                     searchResult.length > 0 &&
                     searchResult.map((item, index) => {
                        return <AccountItem data={item} key={index} />;
                     })}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search accounts and videos"
               spellCheck={false}
               onChange={(e) => handleOnChangeInput(e)}
               onFocus={() => setShowResult(true)}
            />
            {searchValue && !loading && searchValue.length > 0 && (
               <button className={cx('clear')} onClick={handleFocusInput}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
