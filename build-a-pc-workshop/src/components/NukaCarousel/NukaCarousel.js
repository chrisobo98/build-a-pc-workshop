import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel style={{marginBottom:30}}>
        <img alt="them pics" src="https://asset.msi.com/global/picture/article/article_147485997957e893cb3ffe8.jpg" />
        <img alt="them pics" src="https://asset.msi.com/event/2016/promods/images/banner01.jpg" />
        <img alt="them pics" src="https://i.pinimg.com/originals/ea/a7/e0/eaa7e07481fe83b988e9a0c9c94868f7.jpg" />
      </Carousel>
    );
  }
}