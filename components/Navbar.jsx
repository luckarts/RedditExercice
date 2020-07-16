import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [state, setState] = useState('default');

  function handleKeyEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state !== '') {
        router.push(`/search/[name]`, `/search/${state}`, { shallow: true });
      }
    }
  }
  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <nav className="bg-teal-500 p-6">
      <div className="w-2/3 m-auto flex items-center justify-between flex-wrap ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">Reddit Exercice</span>
        </div>
        <div className="pt-2 relative mx-auto text-gray-600">
          <form onKeyDown={handleKeyEnter}>
            <input
              onChange={handleChange}
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
