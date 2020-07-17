import '../styles/index.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="bg-gray-100 min-h-screen">
      {router.pathname !== '/' && <Navbar />}

      <Component {...pageProps} />
    </div>
  );
}

export default App;
