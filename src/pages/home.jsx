import Benefits from "../ui/home/benefits";
import Footer from "../ui/footer";
import Hero from "../ui/home//hero";
import Navbar from "../ui/navbar";
import Popular from "../ui/home//popular";
import Products from "../ui/home/products";
import Testimonials from "../ui/home/testimonials";

function Home() {
    return (
        <><Navbar />
        <Hero />
        <Products />
        <Benefits/>
        <Testimonials/>
        <Popular/>
        <Footer/>
        </>
    );
  }
  
  export default Home;