import React, { Component } from 'react';
import { Button } from './Button';
import laptop from '../assets/videos/laptop.mp4';
import macbook from '../assets/images/macbook.jpg';



// function HeroSection() {
//     return (
//         <div className='hero-container'>
//             {/* <img src="/video/video-2.mp4" autoPlay loop muted /> */}
//             <h1>BE INNOVATIVE</h1>
//             <p>Learn More Below</p>
//             <div className="hero-btns">
//                 <Button 
//                 className='btns' 
//                 buttonStyle='btn--coutlline'
//                 buttonSize='btn--large'
//                 >
//                     Let's Get In Touch
//                 </Button>
//                 <Button 
//                 className='btns' 
//                 buttonStyle='btn--primary'
//                 buttonSize='btn--large'
//                 >
//                     Let's Get In Touch <i className='far fa-play-circle' />
//                 </Button>
//             </div>
//         </div>
//     );
// }

export default class HeroSection extends Component {
    render() {
      return (
        <div className='hero-container'>
          <h1>BE INNOVATIVE</h1>
          <p>Learn More Below</p>
        </div>
      )
    }
  }

