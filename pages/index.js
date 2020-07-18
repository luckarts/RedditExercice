import FormSearch from '../components/FormSearch';
function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-40">
      <span className=" text-5xl text-center text-gray-800 tracking-tight mb-6">Reddit Network</span>
      <div className="w-2/5 sm:w-90">
        <FormSearch className="w-full text-xl shadow-md border-2 border-gray-300 bg-white h-12 scr-16:h-16 xl:h-16 px-6 py-4 pr-16 rounded-full  focus:outline-none" />
      </div>
    </div>
  );
}

export default Home;
