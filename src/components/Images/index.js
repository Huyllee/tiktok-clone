import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleErrorImg = () => {
      setFallback(customFallback);
   };

   //fallback: customFallback = images.noImage - fallback tu ngoai truyen vao dc doi ten thanh customFallback gan gia tri
   //images.noImage, neu ko co truyen fallback hoac fallback ko co gia tri thi mac dinh la images.noImage
   //fallback === '' nen uu tien src hon, neu loi handleErrorImg se set fallback === noImage
   return (
      <img
         className={classNames(styles.wrapper, className)}
         ref={ref}
         src={fallback || src}
         alt={alt}
         {...props}
         onError={handleErrorImg}
      />
   );
});

export default Image;
