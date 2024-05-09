import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setNumberOfItemsInCart(storedCart.length);
    }
  }, [numberOfItemsInCart]);

  const navbarList = [
    {
      name: 'Discovery',
      href: '/'
    },
    {
      name: 'About',
      href: '#'
    },
    {
      name: 'Contact Us',
      href: 'https://www.instagram.com/minyarns/?hl=fr'
    }
  ];
  return (
    <nav className="w-full border border-gray-200 py-2 lg:py-5 flex justify-around items-center ">
      <div>
        <h1 className="text-[#BD918D] font-bold lg:text-xl">Minyarns</h1>
      </div>
      <div className="flex text-xs gap-1 md:gap-16 lg:font-semibold lg:text-sm ">
        {navbarList.map((item, index) => (
          <Link to={item.href} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        <Link className="relative" to={'/cart'}>
          {' '}
          <ShoppingCartIcon className="w-3 h-3 lg:w-6 lg:h-6" />
          {numberOfItemsInCart > 0 && <Badge />}
        </Link>
        <UserIcon className="w-3 h-3 lg:w-6 lg:h-6" />
      </div>
    </nav>
  );
}

export function Badge() {
  return (
    <>
      {/*<!-- Component: Rounded full basic xs sized badge --> */}
      <span className="inline-flex p-0.5 lg:p-1 rounded-full bg-[#BD918D] top-0 right-0 absolute">
        <span className="sr-only"></span>
      </span>
      {/*<!-- End Rounded full basic xs sized badge --> */}
    </>
  );
}

export default Navbar;
