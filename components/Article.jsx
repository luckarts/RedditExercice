import ParserText from './ParserText';
import YoutubePlayer from './YoutubePlayer';

function Article({ topic }) {
  const cardStyle = 'bg-white rounded-lg border overflow-hidden border-gray-300 ';
  let img = [];
  if (topic.url_overridden_by_dest) {
    img = topic.url_overridden_by_dest.split('.');
  }

  return (
    <div className={cardStyle + ' max-w-lg m-auto my-2 sm:w-90'}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{topic.title && topic.title}</div>
        {img[3] === 'jpg' && <img src={topic.url_overridden_by_dest} alt={topic.title} />}
        {img[0] === 'https://youtu' && <YoutubePlayer url={'http://www.youtube.com/embed/' + img[1].slice(3)} />}
        <ParserText className="text-grey-darker text-base link" text={topic.selftext_html} />
      </div>
      {topic.comments &&
        topic.comments.map(
          (comment, index) =>
            comment && (
              <div key={index} className={cardStyle + ' m-4 w-auto'}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl m-2 sm:w-full">{comment.author && comment.author.username}</div>
                  <ParserText className="text-gray-700 text-base link" text={comment.body_html} />
                </div>
                <div className="ml-12 mr-4 my-4">
                  <hr></hr>
                  {comment.replies.map(
                    (replie, index) =>
                      replie && (
                        <div key={index} className={' my-2 w-full'}>
                          <p className=" font-bold text-base">{replie.author.username}</p>
                          <ParserText className="text-gray-700 text-base link" text={replie.body_html} />
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
