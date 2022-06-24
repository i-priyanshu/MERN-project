import Header from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className='homeContainer'></div>
    </>
  );
};

export default Home;
