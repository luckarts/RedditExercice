import Link from 'next/link';

function Article({ topic }) {
  const cardStyle = 'bg-white rounded-lg border overflow-hidden border-gray-300 ';
  return (
    <div className={cardStyle + ' max-w-lg m-auto my-2 sm:w-90'}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{topic.title}</div>
        <p className="text-grey-darker text-base">{topic.text}</p>
      </div>

      {topic.comments &&
        topic.comments.map(
          (comment, index) =>
            comment && (
              <div key={index} className={cardStyle + ' m-4 w-auto'}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl m-2 sm:w-full">{comment.author && comment.author.username}</div>
                  <p className="text-gray-700 text-base">{comment.body}</p>
                </div>
                <div className="ml-12 mr-4 my-4">
                  <hr></hr>
                  {comment.replies.map(
                    (replie, index) =>
                      replie && (
                        <div key={index} className={' my-2 w-full'}>
                          <p className=" font-bold text-base">{replie.author.username}</p>
                          <p className="text-gray-700 text-base">{replie.body}</p>
                        </div>
                      )
                  )}
                </div>
              </div>
            )
        )}
    </div>
  );
}

export default Article;
