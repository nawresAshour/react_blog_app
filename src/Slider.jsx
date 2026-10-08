import { useEffect, useState } from "react";
import "./Slider.css";
import pic1 from "./assets/pic1.jfif";
import pic2 from "./assets/pic2.jfif";
import pic3 from "./assets/pic3.jfif";


function Slider() {
  const slides = [
  pic1,pic2,pic3
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slider">
      <img
        src={slides[current]}
        alt={`Slide ${current + 1}`}
        className="slider-image"
      />

      <button className="slider-btn prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="slider-btn next" onClick={nextSlide}>
        ❯
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Slider;