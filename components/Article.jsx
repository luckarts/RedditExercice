import Link from 'next/link';

function Article({ topic }) {
  const cardStyle = 'bg-white rounded-lg border border-gray-300';
  return (
    <div className={cardStyle + ' max-w-lg m-auto my-2'}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{topic.title}</div>
      </div>
    </div>
  );
}

export default Article;
