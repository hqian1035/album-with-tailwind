import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from "react";

const ROUTES = [
  "Home",
  "About",
  "Service",
  "Pricing",
  "Contact",
]

export default () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)

  return (
    <nav className="flex justify-between items-center flex-wrap">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <div className="lg:hidden">
        <button className="p-2 rounded-lg hover:bg-gray-100 focus:ring-gray-200 focus:ring-2" onClick={toggleMobileMenu}>
          <RxHamburgerMenu size={25} />
        </button>
      </div>
      <div className={`${showMobileMenu ? '' : "hidden"} w-full lg:w-auto lg:block`}>
        <ul className="bg-gray-50 border rounded-md border-gray-100 text-lg flex flex-col lg:flex-row lg:bg-transparent lg:border-none lg:space-x-8">
          {ROUTES.map((route, idx) => (<li className={`cursor-pointer px-3 py-2 ${idx === 0
            ? "bg-blue-500 text-white rounded lg:bg-transparent lg:text-blue-500"
            : "hover:bg-gray-100"
            }`} key={"nav_route_" + route}>{route}</li>))}
        </ul>
      </div>
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-true-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  )
}
