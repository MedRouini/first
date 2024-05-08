import PurpleButton from "./buttons";

function Benefits (){
    return (
        <div className="lg:flex lg:justify-around p-10 lg:p-20 bg-[#F7F8FA] ">
            <div className="flex flex-col gap-6 justify-start">
                <div className="flex flex-col gap-2">
                <h1 className=" text-2xl lg:text-3xl lg:w-72 font-semibold">Cute and practical crochet items.</h1>
                <h5 className="text-sm text-[#BD918D]">Made for you and your loved ones</h5>
                </div>
                <ul class="list-disc pl-4">
                    <li  className="mb-2">
                    Handcrafted Artistry: Exquisite handmade details showcase artisan skill.                    </li>
                    <li  className="mb-2">
                    Sustainable: Eco-friendly, using reusable materials and reducing waste.
                    </li>
                    <li  className="mb-2">
                    Creativity and Expression: Endless creative potential through unique stitches and patterns.                    </li>
                    <li  className="mb-6">
                    Durability: Sturdy yarns ensure lasting quality and wear resistance.
                    </li>
                </ul>
            <PurpleButton className=" w-full lg:w-40 " href={"https://www.pinterest.fr/search/pins/?q=crochet%20cute%20practical&rs=typed"}>Learn more</PurpleButton>
            </div>
                <img className="  pt-4 w-full  lg:w-80 shadow-xl" src="cutecrochet.jpg" alt="CuteCrochet" />
            

        </div>
    );
} export default Benefits;