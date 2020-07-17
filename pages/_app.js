import '../styles/index.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
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
