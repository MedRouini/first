import PurpleButton from './buttons';

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <img src="background.webp" className="object-cover w-full h-full" />
      <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-white bg-opacity-75 rounded-lg p-6 lg:w-120 lg:h-60 lg:p-8">
        <div className="flex flex-col text-center gap-6 items-center">
          <h1 className="text-xl font-medium lg:font-semibold lg:text-3xl">Crafting Timeless Treasures</h1>
          <h3 className="text-sm px-1 lg:text-l">
            Discover the joy of owning a one-of-a-kind crochet treasure or surprise someone special
            with a heartfelt gift that's as unique as they are.
          </h3>
          <PurpleButton href="#products" className=" w-60 lg:w-80 md:w-60">
            Explore Our Collection
          </PurpleButton>
        </div>
      </div>
    </div>
  );
}
