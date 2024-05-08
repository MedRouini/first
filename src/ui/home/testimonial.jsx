


function Testimonial ({ image,name, content, rating }){
    
    return (
        <div className="bg-white p-10 shadow-md w-80 flex flex-col items-center gap-6 ">
            <img className="h-16 w-16 rounded-full object-cover" src={image} alt="client image" />
            <div>
            <p className="text-gray-900 font-semibold w-56">"{content}"</p>
           
           <span className="text-sm text-gray-600">{name}</span>
            </div>
        
        </div>
    );
}export default Testimonial;