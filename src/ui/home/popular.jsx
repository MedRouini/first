import Product from "./product";

function Popular (){
    const products =[
        {
            id :1,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :2,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :3,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :3,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },]
    return (
        <div className="flex flex-col items-center lg:px-40 lg:py-20 gap-6 p-2 lg:gap-14  ">
        <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-medium lg:text-3xl lg:font-semibold ">Popular</h1>
        <h3>Our top selling products that you may like</h3>
        </div>
        <div className="grid lg:grid-cols-4  md:grid-cols-2 md:px-20 gap-4 lg:gap-8">
        {
            products.map((product) => <Product product={product}  />)
        }
        </div>
</div>
    );
}export default Popular;