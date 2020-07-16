import Link from 'next/link';

function Article({ post }) {
  return (
    <div className="w-2/3 m-auto  px-5 my-3 py-3 bg-white rounded-lg border border-gray-300">
      <div className="mt-2 mb-5">
        <h2 className="text-1xl text-gray-700 font-bold hover:text-gray-600">{post.title}</h2>
        <p className="mt-2 text-gray-600">{post.text && post.text}</p>
      </div>
      <div>
        <div className="w-full mt-5 " href="#">
          <h1 className="inline-block text-gray-700 font-bold">{post.author && post.author.username}</h1>
          <span className="inline-block  mx-6 font-light text-gray-600">{post.createdISO}</span>
          {post.score && (
            <div className="inline-block ">
              <svg
                className="inline-block"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"
                  fill="black"
                />
              </svg>
              <span className="ml-2 ">{post.score}</span>
            </div>
          )}
          {post.numComments !== 0 && (
            <div className="float-right">
              <span>{post.numComments} comments</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Article;
