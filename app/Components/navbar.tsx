import Link from "next/link";
import { NavItemInterface } from "../Interface";


const Navbar: React.FC<{ items: NavItemInterface[] }> = ({ items }) => {
  return (
    <nav className="flex justify-center w-full z-20 top-0 start-0 mb-5">
          <ul className="flex p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse flex-row ">
              {items.map(item => (
                  <li key={item.id} className="mr-4">
                      <Link href={item.link} className={(item.id === 1 ? `bg-amber-400 p-2 rounded` : `bg-transparent p-2 rounded`)}>{item.title}</Link>
                  </li>
              ))}
          </ul>
      </nav>
  );
}

export default Navbar;