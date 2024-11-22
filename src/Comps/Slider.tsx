import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css"; 

function ResponsiveSlider() {
  const images = [
    "https://res.cloudinary.com/de6u5kbiw/image/upload/v1732274672/swissco/events/Past_event-_Chennai_1_lbz1hj.jpg",
    "https://res.cloudinary.com/de6u5kbiw/image/upload/v1732274672/swissco/events/Past_event-_Bengaluru_1_wkqgec.jpg",
    "https://res.cloudinary.com/de6u5kbiw/image/upload/v1732274671/swissco/events/Past_event-_Bengaluru_2_okyvyb.jpg",
    "https://res.cloudinary.com/de6u5kbiw/image/upload/v1732274671/swissco/events/Past_event-_Chennai_2_q3wjx4.jpg",
    "https://res.cloudinary.com/de6u5kbiw/image/upload/v1732274671/swissco/events/Past_event-_Bengaluru_3_sm807q.jpg",
  ];

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed
    responsive: [
      {
        breakpoint: 768, // For tablets and phones
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // For laptops
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="slide">
            <img src={url} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveSlider;
