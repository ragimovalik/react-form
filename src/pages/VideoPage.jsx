import ReactPlayer from 'react-player';
import PageBox from '../components/Box/PageBox';

const VideoPage = () => (
  <PageBox>
    <h2>Video Page title</h2>
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ margin: '5px auto' }}
      onPause={() => alert('Are you sure?')}
      url="https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org"
    />
  </PageBox>
);

export default VideoPage;
