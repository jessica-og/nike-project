import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/welcome.css";
import {  useNavigate } from "react-router-dom";
import { handleAuthRedirect } from "../firebase/utils/authRedirect";
import { auth } from "../firebase/config";

const Home = () => {
  const [showNikeContainer, setShowNikeContainer] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNikeContainer(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const slides = [
    {
      id: 1,
      content: (
        <div className="onboard-1">
          <div className="intro-text">
            <img src="/v1.png" alt="" className="v1" />
            <h2>Welcome To Nike</h2>
          </div>
          <div className="spiral">
            <img src="/v4.png" alt="" />
          </div>
          <div className="onboard-img">
            <div className="misc">
              <img src="/misc.png" alt="" />

              <div className="img-cnt">
                <div className="image">
                  <img src="/img1.png" alt="" className="img1 animated-img1" />

                  <div className="vector">
                    <img src="/vector1.png" alt="" className="img" />
                    <span className="span">
                      <img src="/eclipse.png" alt="" className="eclipse" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-container">
            <button className="btn" onClick={handleNext}>
              Get Started
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="onboard-2">
          <div className="top-img">
            <img src="/v2.png" alt="" className="right-2" />
            <img src="/misc2.png" alt="" className="left-2" />
          </div>
          <div className="onboard-img board-img">
            <div className="image">
              <img src="/shoe1.png" alt="" className="animated-img1" />
              <img src="/eclipse.png" alt="" />  
            </div>
            <div className="text-2">
              <h1>Let’s Start Journey With Nike</h1>
              <img src="/vector1.png" alt="" className="vec-img" />
              <p>Smart, Gorgeous & Fashionable Collection Explore Now</p>
            </div>
          </div>
          <div className="btn-container2">
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="onboard-3">
          <div className="top-img-3">
            <img src="/misc3.png" alt="" className="left-2" />
          </div>
          <div className="onboard-img board-img3">
            <div className="image3 image">
              <img src="/v5.png" alt="" />
              <img src="/shoe2.png" alt="" className="shoe animated-img1" />
              <img src="/eclipse.png" alt="" />
            </div>
            <div className="text-2">
              <h1>You Have the Power To</h1>
              <img src="/vector1.png" alt="" className="vec-img" />
              <p>There Are Many Beautiful And Attractive Plants To Your Room</p>
            </div>
          </div>
          <div className="btn-container2">
          <button
              className="btn"
              onClick={() => handleAuthRedirect(auth, navigate)}
            >
              Next
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="home-container">
      <AnimatePresence>
        {showNikeContainer && (
          <motion.div
            className="nike-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/nike.png" alt="nike-logo" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="animate-cnt">
        {!showNikeContainer && (
          <div className="slide-container">
            <AnimatePresence mode="wait">
              {slides.map(
                (slide, index) =>
                  index === activeSlide && (
                    <motion.div
                      key={slide.id}
                      className="slide"
                      initial={{ opacity: 1, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.content}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
            <div className="navigation-buttons">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === activeSlide ? "active-slide" : "inactive-slide"
                  }
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
