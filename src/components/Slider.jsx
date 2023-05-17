import { useEffect, useState } from 'react';
import getImages from './DataImage';
import '/Users/ahmet/Desktop/Development/wheather-api/src/components/App.css'


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
    <div className='relative'>
    {urlDatas.map((slide, index) => (
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
        <div className="slider-wrapper">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          {index === current && (
            <img src={slide.imageData} alt="travel image" className="rounded-2xl w-[40rem] h-96" />
          )}
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
      </div>
    ))}
  </div>
    
  );
};

export default Slider;
