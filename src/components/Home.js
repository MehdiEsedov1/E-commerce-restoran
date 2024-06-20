import React from 'react';
import SwipeableTextMobileStepper from './home_page/Carousel.js';
import Adds from './home_page/Adds.js';
import Footer from './home_page/Footer.js';

export default function Home() {
  return (
    <div>
      <SwipeableTextMobileStepper />
      <Adds />
      <Footer />
    </div>
  )
}