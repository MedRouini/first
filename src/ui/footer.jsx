function Footer (){
    return(
        <footer className="bg-[#514F50] text-white p-8 ">
      <div className="container mx-auto md:justify-evenly text-center flex-col md:flex-row lg:flex gap-16">
        <div className="flex flex-col items-center w-64 lg:gap-5">
        <h1 className="text-[#BD918D] text-3xl font-bold ">Minyarns</h1> 
        <h3 className="text-sm">Your cute gadget made with pure love and passion.</h3>
        </div>
        <div className="flex justify-between gap-2 lg:gap-36 gap-4 lg:text-start m-4 ">
            <div className="flex flex-col gap-2">
            <h2 className="underline underline-offset-4">Discovery</h2>
            <div className="h-3 "></div>
            <h3>New Season</h3>
            <h3>Most Searched</h3>
            <h3>Most Selled</h3>
            </div>
            <div className="flex flex-col gap-2">
            <h2 className="underline underline-offset-4">About</h2>
            <div className="h-3 "></div>  
            <h3>Help</h3>
            <h3>Shipping</h3>
            <h3>Affiliate</h3>
            </div>
            <div className="flex flex-col gap-2">
            <h2 className="underline underline-offset-4">Info</h2>
            <div className="h-3 "></div>
            <h3>Contact us</h3>
            <h3>Privacy Policies</h3>
            <h3>Terms & Conditions</h3>
            </div>
        </div>
      </div>
    </footer>
    );
}export default Footer;