"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const currentRoute = usePathname();

  // styles for all links
  // const commonStyles = "px-4 py-2 rounded-lg border-2 border-red-600";
  const commonStyles = "px-4 py-2 rounded-lg navlink text-white text-xl";
  const activeStyle = commonStyles + 'bg-red-700 text-white';
  const nonActiveStyle = commonStyles + 'text-black';
  return (
    // <header classNameName="navbar">
    <header>
      <nav className='bg-gradient-to-b from-indigo-600 to-blue-500 inset-0 z-0 relative flex items-center min-w-screen'>
        <ul className='hidden p-4 w-full h-20 gap-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 items-center justify-between sm:flex'>
          <li className='flex gap-8 justify-between items-center rounded-lg'>
            <span className='items-center flex gap-2 flex'>
              <h1 className="text-4xl text-red-100 font-extrabold italic">
                SDS
              </h1>
            </span>
            <Link href="/dashboard" className={commonStyles}>Dashboard</Link>
            <Link href="/staff" className={commonStyles}>Staff</Link>
            {/* <Link href="/category" className={commonStyles}>Category</Link> */}
            <Link href="/projects" className={commonStyles}>Projects</Link>
            <Link href={"/time_allocation/"+new Date().toJSON().slice(0, 10)} className={commonStyles}>Time Allocation</Link>
            <Link href="/dashboard" className={commonStyles}>Report</Link>
          </li>
          <li className='flex gap-1 w-fit justify-end'>
            <Link href="/" className={commonStyles}>Logout</Link>
            {/* <div className=' my-auto h-6 aspect-square rounded-full avatar'></div> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
