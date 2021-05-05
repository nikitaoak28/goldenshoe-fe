import React from 'react';
import './Home.css'
import Slider from './Slider'


// code to get slides from campaign management

const slides = 
[
    {
    'url': './assets/slides/slide1.jpg',
    'caption': 'New Summer Collection' 
    },
    {
        'url': './assets/slides/slide2.jpg',
        'caption': 'End of Season Sale' 
    },
    {
        'url': './assets/slides/slide3.jpg',
        'caption': 'Casual collection' 
    }
];

const Home =() =>(
    <div>
        <div className="flex items-center justify-center pa4 bg-lightest-blue navy">
        <svg className="w1" data-icon="info" viewBox="0 0 32 32">
            <title>info icon</title>
            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
        </svg>
        <span className="lh-title ml3">Now get free shipping on orders above £40</span>
        </div>
        <Slider slides={slides}/>

    
    </div>
  )

  export default Home;