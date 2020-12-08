import React from 'react';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Img, { FluidObject } from "gatsby-image";
import { IconButton, ImageItem, StyledSlider } from './styles';
import {Settings} from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useGlobalState } from '../../state';

export interface ImagesCarrouselProps {
  images: any[];
  invert: boolean;
}

const RightButton = (props) => {
  return (
    <IconButton {...props} invert={props.invert} disabled={props.className.split(' ').some(obj => obj === "slick-disabled")}>
      <RightOutlined />
    </IconButton>
  );
}

const LeftButton = (props) => {
  return (
    <IconButton {...props} invert={props.invert} disabled={props.className.split(' ').some(obj => obj === "slick-disabled")}>
      <LeftOutlined />
    </IconButton>
  );
}

const ListItem = ({img, onClick, key, ...props}) => {
  return (
    <ImageItem key={key} onClick={onClick(img.childImageSharp.original)}>
      <Img fixed={img.childImageSharp.thumbnail}/>
    </ImageItem>
  );
}

const ImagesCarrousel: React.FC<ImagesCarrouselProps> = ({images, invert}) => {
  const { setModalImage } = useGlobalState();
  const sliderSettings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: 'ondemand',
    slide: 'li',
    nextArrow: <RightButton invert={invert} />,
    prevArrow: <LeftButton invert={invert} />,
    responsive: [
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleClick = (img: FluidObject) => (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setModalImage(img);
  };
  
  return (
    <StyledSlider {...sliderSettings}>
      {images.map(obj => (
        <ListItem key={obj.id} img={obj} onClick={handleClick}/>
      ))}
    </StyledSlider>
  );
}

export default ImagesCarrousel;