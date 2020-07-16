import '../styles.css';
import Navbar from '../components/Navbar';
function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
