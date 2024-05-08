export default function Product({product}) {
  return (
    <>
      {/*<!-- Component: Basic image card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200  hover:shadow-md hover:transform hover:-translate-y-1 transition duration-300">
        {/*  <!--  Image --> */}
        <figure>
          <img
            src={product.image ? product.image : '/default.jpg'}
            alt={`${product.name} image`}
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6 relative ">
          <header className="">
            <h3 className="text-xl font-medium text-slate-700">
              {product.name}
            </h3>
            <p className="absolute bottom-0 right-0 h-11 w-16 text-lg font-bold text-[#BD918D]"> {product.price} dt</p>
          </header>
        </div>
      </div>
      {/*<!-- End Basic image card --> */}
    </>
  )
}