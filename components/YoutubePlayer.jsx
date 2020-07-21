function YoutubePlayer({ url }) {
  return <iframe id="ytplayer" type="text/html" width="460" height="360" src={url} frameborder="0" />;
}

export default YoutubePlayer;
