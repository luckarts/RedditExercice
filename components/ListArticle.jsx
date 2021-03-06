import Link from 'next/link';

function ListArticle({ post }) {
  function DateISOString(date) {
    const today = new Date();
    const dateHours = today.getHours();
    const dateToday = today.getDate();
    let datePost = new Date(date);
    const dateArray = datePost.toUTCString().split(' ');
    if (datePost.getDate() === dateToday && datePost.getHours() === dateHours) {
      return today.getMinutes() - datePost.getMinutes() + ' minutes ago';
    } else if (datePost.getDate() === dateToday) {
      const result = dateHours - datePost.getHours();
      return result + (result > 1 ? ' hours' : ' hour') + ' ago';
    } else return dateArray[1] + ' ' + dateArray[2] + ' ' + dateArray[3];
  }
  function truncate(str, no_words) {
    return str.split(' ').splice(0, no_words).join(' ');
  }
  return (
    <div className="w-2/3 m-auto  px-5 my-3 py-3 bg-white overflow-hidden rounded-lg border border-gray-300 sm:w-90 ">
      <Link href={post.permalink ? post.permalink : '#'} prefetch shallow>
        <a className="cursor-pointer ">
          <div className="mt-2 mb-5">
            <h2 className="text-1xl text-gray-700 font-bold ">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.selftext && truncate(post.selftext, 10) + '...'}</p>
          </div>
          <div>
            <div className="w-full mt-5 md:flex" href="#">
              <h3 className="inline-block text-gray-700 font-bold">{post.author && post.author.username}</h3>
              <div className="relative w-full">
                <span className="inline-block  md:mx-6 sm:mr-6 font-light text-gray-600">
                  {DateISOString(post.createdISO)}
                </span>
                {post.score ? (
                  <div className="inline-block ">
                    <svg
                      className="inline-block opacity-75 mb-1"
                      width="15"
                      height="14"
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
                ) : (
                  ''
                )}
                {post.numComments !== 0 && (
                  <span className="float-right">{post.numComments > 3 ? 3 : post.numComments} comments</span>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ListArticle;
