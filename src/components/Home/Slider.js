import React from 'react';
import './Slider.css';

const delay = 5500;


const Slider = ({slides})=>{
    
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index, slides.length]);
    
      return (
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slides.map((slide, index) => (
              <div
                className="slide"
                key={index}>
                <img alt='promo' src={slides[index].url} href='/' />
                <h1>{slides[index].caption}</h1>
              </div>
            ))}
          </div>
    
          <div className="slideshowDots">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      );
}



export default Slider;