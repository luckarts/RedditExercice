import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const FormSearch = ({ className }) => {
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
    <form className="w-full" onKeyDown={handleKeyEnter}>
      <input onChange={handleChange} className={className} type="text" placeholder="Search" />
    </form>
  );
};
export default FormSearch;
