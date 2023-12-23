import { useState, forwardRef } from 'react';
import images from '../../assets/images';


const Image = forwardRef(({className, src, alt, style, fallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(fallback);
  };

  return (
    <img
    className={className}
      src={fallBack || src}
      alt={alt}
      style={style}
      ref={ref}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
