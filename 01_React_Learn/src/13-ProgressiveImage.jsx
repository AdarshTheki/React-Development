import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProgressiveImage = ({ placeholder, src }) => {
  const [imgSrc, setImgSrc] = useState(placeholder || src);

  const customClass = placeholder && imgSrc === placeholder ? 'loading' : 'loaded';

  useEffect(() => {
    const newImage = new Image();
    newImage.src = src;
    newImage.onload = () => {
      setImgSrc(src);
    };
    // clean up
    return () => {
      newImage.onload = null;
    };
  }, [src]);

  return <img src={imgSrc} className={customClass} width={500} alt='image' />;
};

ProgressiveImage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const Container = () => {
  const lazy = 'https://cdn.pixabay.com/photo/2026/02/23/11/09/11-09-54-151_150.jpg';
  const big = 'https://cdn.pixabay.com/photo/2026/02/23/11/09/11-09-54-151_1280.jpg';

  return (
    <div>
      <ProgressiveImage src={big} placeholder={lazy} />
    </div>
  );
};
export default Container;
