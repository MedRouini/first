import Footer from "../ui/footer";
import Navbar from "../ui/navbar";
import AddProductForm from "../ui/order/orderForm";

function Checkout() {
    return(
        <div>
           <Navbar />
        <AddProductForm/>
        <Footer/>
        </div>
    );
}export default Checkout;