import React, { useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/router";

export interface InterfaceFormSearchProps {
  className: string;
}
const FormSearch = ({ className }: InterfaceFormSearchProps) => {
  const router = useRouter();
  const { slug } = router.query;
  const [state, setState] = useState("");

  useEffect(() => {
    if (router.query.name) {
      setState(router.query.name as string);
    }
  }, [router, setState]);

  function handleKeyEnter(e: React.KeyboardEvent): void {
    if (e.key === "Enter") {
      e.preventDefault();
      if (state !== "") {
        router.push({ pathname: `/search`, query: { name: state } });
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setState(e.target.value);
  }
  function filter(filter: string) {
    if (state !== "") {
      router.push({ pathname: `/search`, query: { name: state, filter: filter } });
    }
  }
  return (
    <div className="flex w-full">
      <form className="w-full " onKeyDown={handleKeyEnter}>
        <input
          onChange={handleChange}
          className={className}
          type="text"
          placeholder="Search a topic"
        />
      </form>
      {router.pathname !== "/" && router.query.name && (
        <div className="ml-4 flex">
          <button onClick={() => filter("newListings")} className="focus:outline-none">
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path
                className={` ${router.query.filter !== "newListings" ? "opacity-50" : ""}`}
                fill="#38b2ac"
                d="M22.0374 8.55389V5.34692C22.0374 4.03553 20.9645 2.96257 19.6531 2.96257H16.4461L14.181 0.697425C13.2511 -0.232475 11.737 -0.232475 10.8071 0.697425L8.55389 2.96257H5.34692C4.03553 2.96257 2.96257 4.03553 2.96257 5.34692V8.55389L0.697425 10.819C-0.232475 11.7489 -0.232475 13.263 0.697425 14.1929L2.96257 16.458V19.6531C2.96257 20.9645 4.03553 22.0374 5.34692 22.0374H8.55389L10.819 24.3026C11.7489 25.2325 13.263 25.2325 14.1929 24.3026L16.458 22.0374H19.6531C20.9645 22.0374 22.0374 20.9645 22.0374 19.6531V16.4461L24.3026 14.181C25.2325 13.2511 25.2325 11.737 24.3026 10.8071L22.0374 8.55389Z"
              />
            </svg>
          </button>
          <button onClick={() => filter("hotListings")} className="focus:outline-none">
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
            >
              <path
                className={`ml-2 ${router.query.filter !== "hotListings" && "opacity-50"}`}
                fill="#38b2ac"
                d="M10.4275 0.13809C10.3069 0.0485516 10.159 0 10.0069 0C9.85475 0 9.70688 0.0485516 9.58632 0.13809C9.18642 0.430769 0.0026651 7.40184 0.0026651 14.5858C-0.0353623 16.3331 0.333984 18.0663 1.08342 19.6575C1.83286 21.2486 2.94324 22.657 4.33254 23.7785C4.45749 23.8794 4.61541 23.9342 4.7783 23.9335C4.94119 23.9327 5.09853 23.8763 5.22244 23.7743C5.34635 23.6723 5.42882 23.5312 5.45524 23.3762C5.48165 23.2211 5.45031 23.062 5.36675 22.9271C4.86574 22.1241 4.60337 21.2036 4.60833 20.2664C4.66405 18.5563 5.1935 16.8918 6.14168 15.446C7.08985 14.0002 8.42212 12.8257 10 12.0448C11.5879 12.8311 12.9268 14.0159 13.8756 15.4745C14.8244 16.9331 15.3482 18.6114 15.3917 20.3329C15.3966 21.2701 15.1343 22.1906 14.6332 22.9936C14.5497 23.1285 14.5183 23.2876 14.5448 23.4427C14.5712 23.5978 14.6536 23.7388 14.7776 23.8408C14.9015 23.9428 15.0588 23.9992 15.2217 24C15.3846 24.0008 15.5425 23.9459 15.6675 23.8451C17.0568 22.7235 18.1671 21.3151 18.9166 19.724C19.666 18.1328 20.0354 16.3996 19.9973 14.6523C19.9973 7.40184 10.8136 0.430769 10.4275 0.13809Z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
export default FormSearch;
