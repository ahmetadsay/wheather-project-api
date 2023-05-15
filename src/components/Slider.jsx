import React, { useEffect, useState } from 'react';
import getImages from './DataImage';

const Slider = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getImages().then((apiData) => {
    

      let urlDatas = apiData.map((item) => {
        return {
          imageData: item.urls.raw
        };
      });

      console.log(urlDatas);
    });
  }, []);

  return (
        <>
        
        </>
  )
}

 

export default Slider;
