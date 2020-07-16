import Link from 'next/link';

function Article({ post }) {
  return (
    <div className="w-2/3 m-auto  px-5 my-3 py-3 bg-white rounded-lg border border-gray-300">
      <div className="mt-2 mb-5">
        <h3 className="text-2xl text-gray-700 font-bold hover:text-gray-600">{post.title}</h3>
      </div>
    </div>
  );
}

export default Article;
