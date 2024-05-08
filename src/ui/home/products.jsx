import Product from "./product";

function Products(){
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
            id :4,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :5,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :6,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
         {
            id :7,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
        {
            id :8,
            name: "Luffy straw hat",
            image: "luffy-hat.avif",
            price: 5,
            slug: "luffy-straw-hat",
        },
    ]
    return(
        <div className="flex flex-col items-center p-2 md:gap-4 gap-14 ">
        <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-semibold md:pt-4">Products</h1>
        <h3 className="text-center">Order it for yourself or for your beloved one</h3>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 md:px-20 lg:grid-cols-4  gap-8">
        {
            products.map((product) => <Product product={product}  />)
        }
        </div>
</div>
    );
}
export default Products;