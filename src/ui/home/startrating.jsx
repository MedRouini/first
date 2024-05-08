import Testimonial from "./testimonial";
import Testimonials from "./testimonials";
const renderStars = ({testimonial}) => {
    const stars = [];
    for (let i = 0; i < testimonial.rating; i++) {
      stars.push(<i key={i} className="text-yellow-500 fa fa-star"></i>);
    }
    return stars;
  };