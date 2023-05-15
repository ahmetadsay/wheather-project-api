import { useEffect, useState } from 'react';
import getImages from './DataImage';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Slider = () => {
  const [urlDatas, setUrlDatas] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getImages();
        const newData = apiData.map((item) => ({
          imageData: item.urls.raw,
        }));
        setUrlDatas(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const length = urlDatas.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(urlDatas) || urlDatas.length <= 0) {
    return null;
  }

  return (
    <>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {urlDatas.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img  src={slide.imageData} alt='travel image' className='image' />
          )}
        </div>
      ))}
    </>
  );
};

export default Slider;
