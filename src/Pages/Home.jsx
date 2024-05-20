import { Helmet } from "react-helmet";
import Banner from "../component/Home/Banner";
import BistroBoss from "../component/Home/BistroBoss";
import CallUs from "../component/Home/CallUs";
import Category from "../component/Home/Category";
import Featured from "../component/Home/Featured";
import PopularMenu from "../component/Home/PopularMenu";
import Testimonials from "../component/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
    <div>
      <Banner></Banner>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
    </>
  );
};

export default Home;
