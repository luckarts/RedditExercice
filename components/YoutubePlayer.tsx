interface YoutubePlayerProps {
  url: string;
}
const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ url }) => {
  return (
    <iframe
      id="ytplayer"
      data-type="text/html"
      width="460"
      height="360"
      src={url}
      frameBorder="0"
    ></iframe>
  );
};

export default YoutubePlayer;
