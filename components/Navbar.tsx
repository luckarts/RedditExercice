import FormSearch from './FormSearch'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="bg-white fixed top-0 w-full z-50 sm:shadow-md border-b border-gray-300 ">
      <div className="w-2/3 m-auto flex items-center p-3 justify-between sm:flex-wrap sm:w-full">
        <Link href="/">
          <a className="flex items-center flex-shrink-0 sm:justify-center sm:w-full mr-6">
            <svg
              className=" h-8 w-8 mr-2"
              fill="#38b2ac"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl text-teal-500 tracking-tight">
              Reddit Exercice
            </span>
          </a>
        </Link>
        <div className=" relative flex w-full">
          <FormSearch className="w-full text-lg bg-gray-200 text-gray-900  border border-gray-100  h-10 px-6  pr-16 rounded-full  focus:outline-none" />
        </div>
      </div>
    </nav>
  )
}
export default Nav
