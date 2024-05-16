import Banner from "../component/Home/Banner";
import Category from "../component/Home/Category";
import PopularMenu from "../component/Home/PopularMenu";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;