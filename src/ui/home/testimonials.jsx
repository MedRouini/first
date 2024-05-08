import Testimonial from "../home/testimonial";

function Testimonials (){
    const testimonials = [
        {image:"user1.png", name: 'John Doe', content: 'Great service! Highly recommended.', rating: 5 },
        {image:"user2.jpeg", name: 'Jane Smith', content: 'Amazing product. Will purchase again.', rating: 4 },
        {image:"user3.png", name: 'Alex Johnson', content: 'Excellent quality and fast delivery.', rating: 5 }
      ];
    
      return (
        <div className="flex flex-col lg:p-16 bg-[#FFF6F4]">
          <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-semibold ">Testimonials</h1>
        <h3>Client's opinion on our product and service.</h3>
        </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-4 lg:p-20 text-center justify-items-center ">
        {testimonials.map((testimonial, index) => (
          <Testimonial
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          content={testimonial.content}
          rating={testimonial.rating}
        />
        ))}
      </div>
        </div>
      );
}export default Testimonials;