import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../../assets/image/1.jpg'
import img1 from '../../assets/image/2.jpg'
import img2 from '../../assets/image/3.jpg'
import 'animate.css';


const SliderApp = () => {
  return (
    <Carousel >
      <Carousel.Item interval={1000} >
        <img
          className="slider-img d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption className='slider-caption' >
        <div className="slider-caption-inner ">
          <p className='text-Primary'>25 YEARS OF WORKING EXPERIENCE</p>
          <h2 >The Best Reliable</h2>
          <h2>Providing solution</h2>
          <a href="" class="btn-slider text-center text-white p-lg-2 ">Explore More</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} >
        <img
          className="slider-img d-block w-100"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption className='slider-caption'>
        <div className="slider-caption-inner">
          <p >25 YEARS OF WORKING EXPERIENCE</p>
          <h2 >The Best Reliable</h2>
          <h2>Providing solution</h2>
          <a href="" class="btn-slider text-center  text-white p-lg-2">Explore More</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={1000}>
        <img
          className="slider-img d-block w-100"
          src={img2}
          alt="Third slide"
        />
        <Carousel.Caption  className='slider-caption'>
        <div className="slider-caption-inner">
          <p>25 YEARS OF WORKING EXPERIENCE</p>
          <h2 >The Best Reliable</h2>
          <h2>Providing solution</h2>
          <a href="" class="btn-slider text-center  text-white p-lg-2 ">Explore More</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderApp