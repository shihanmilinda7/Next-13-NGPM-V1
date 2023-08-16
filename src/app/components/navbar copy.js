"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const currentRoute = usePathname();

  // styles for all links
  // const linkStyle = 'flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-amber-600 duration-300'; 
  const linkStyle = 'navbar__item h-full text-xl dark:text-white hover:text-slate-100 rounded-full duration-300'; 

  // styles for active and non-active links
  const activeStyle = linkStyle + 'bg-red-700 text-white'; 
  const nonActiveStyle = linkStyle + 'text-black';
  return (
    // <header className="navbar">
    <header className="flex justify-center items-center mr-auto bg-indigo-600 block w-full rounded-md border-0 py-1.5 text-amber-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <div className="text-4xl h-full font-extrabold dark:text-white mr-auto p-4">ABC Company</div>
      {/* <Link href="/staff" className="navbar__item text-xl dark:text-white"> */}
      <Link href="/dashboard" className={currentRoute === '/dashboard' ? activeStyle : nonActiveStyle}>
        Home
      </Link>
      <Link href="/staff" className={currentRoute === '/staff' ? activeStyle : nonActiveStyle}>
        Staff
      </Link>
      <Link href="/projects" className={currentRoute === '/projects' ? activeStyle : nonActiveStyle}>
        Projects
      </Link>
      <Link href={"/time_allocation/"+new Date().toJSON().slice(0, 10)} className={currentRoute === "/time_allocation/"+new Date().toJSON().slice(0, 10) ? activeStyle : nonActiveStyle}>
      {/* <Link href="/time_allocation" className={currentRoute === '/time_allocation' ? activeStyle : nonActiveStyle}> */}
        Time allocation
      </Link>
      <Link href="/" className={currentRoute === '/' ? activeStyle : nonActiveStyle}>
        Report
      </Link>
      <Link href="/" className="bg-amber-400 text-xl hover:bg-blue-700 hover:text-amber-400 text-indigo-600 font-bold py-2 px-4 rounded-full mr-4">
        Logout
      </Link>
    </header>
  );
};

export default Navbar;
