import { UserIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar() {
    const navbarList = [{
        name: 'Discovery',
        href: '#'
    },
    {
        name: 'About',
        href: '#'
    },
    {
        name: 'Contact Us',
        href: 'https://www.instagram.com/minyarns/?hl=fr'
    },
]
    return (
      <nav className="w-full border border-gray-200 py-2 lg:py-5 flex justify-around items-center ">
        <div>
        <h1 className="text-[#BD918D] font-bold lg:text-xl">Minyarns</h1>
        </div>
        <div className="flex text-xs gap-1 md:gap-16 lg:font-semibold lg:text-sm ">
        {
            navbarList.map((item, index) => <a href={item.href} key={index}>{item.name}</a>)
        }
        </div>
        <div className="flex gap-4">
            <ShoppingCartIcon className="w-3 h-3 lg:w-6 lg:h-6"/>
            <UserIcon className="w-3 h-3 lg:w-6 lg:h-6"/>
        </div>
      </nav>
    );
  }
  
  export default Navbar;