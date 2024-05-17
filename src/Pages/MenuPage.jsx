import { Helmet } from "react-helmet";
import banner3 from "../assets/menu/banner3.jpg"
import dessert from "../assets/menu/dessert-bg.jpeg"
import pizza from "../assets/menu/pizza-bg.jpg"
import salad from "../assets/menu/salad-bg.jpg"
import soup from "../assets/menu/soup-bg.jpg"
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../component/SharePage/SectionTitle";
import MenuCategory from "../Menu/MenuCategory";
const MenuPage = () => {
  const [menuData] = useMenu();
  const desserts = menuData.filter(item => item?.category === "dessert" );
  const soups = menuData.filter(item => item?.category === "soup" );
  const salads = menuData.filter(item => item?.category === "salad" );
  const pizzas = menuData.filter(item => item?.category === "pizza" );
  const offered = menuData.filter(item => item?.category === "offered" );
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <MenuCategory img={banner3} title={"OUR MENU"} description={"Would you like to try a dish?"}></MenuCategory>
      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory img={dessert} title={"DESSERTS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"}></MenuCategory>
      <MenuCategory items={desserts}></MenuCategory>
      <MenuCategory img={pizza} title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"}></MenuCategory>
      <MenuCategory items={pizzas}></MenuCategory>
      <MenuCategory img={salad} title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"}></MenuCategory>
      <MenuCategory items={salads}></MenuCategory>
      <MenuCategory img={soup} title={"soup"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"}></MenuCategory>
      <MenuCategory items={soups}></MenuCategory>
    </div>
  );
};

export default MenuPage;
