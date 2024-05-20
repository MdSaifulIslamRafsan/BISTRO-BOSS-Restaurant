import { Helmet } from "react-helmet";
import banner3 from "../assets/menu/banner3.jpg";
import dessert from "../assets/menu/dessert-bg.jpeg";
import pizza from "../assets/menu/pizza-bg.jpg";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../component/SharePage/SectionTitle";
import MenuCategory from "../Menu/MenuCategory";
import Cover from "../component/SharePage/Cover";
const MenuPage = () => {
  const [menuData] = useMenu();
  const desserts = menuData.filter((item) => item?.category === "dessert");
  const soups = menuData.filter((item) => item?.category === "soup");
  const salads = menuData.filter((item) => item?.category === "salad");
  const pizzas = menuData.filter((item) => item?.category === "pizza");
  const offered = menuData.filter((item) => item?.category === "offered");
  return (
    <>
        <Helmet>
          <title>Bistro || Menu</title>
        </Helmet>
      <div>
        <Cover
          img={banner3}
          title={"OUR MENU"}
          description={"Would you like to try a dish?"}
        ></Cover>

        <SectionTitle
          subHeading={"---Don't miss---"}
          heading={"TODAY'S OFFER"}
        ></SectionTitle>

        <MenuCategory
          items={desserts}
          img={dessert}
          title={"desserts"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
          }
        ></MenuCategory>

        <MenuCategory
          items={pizzas}
          img={pizza}
          title={"pizzas"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
          }
        ></MenuCategory>

        <MenuCategory
          items={salads}
          img={salad}
          title={"salads"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
          }
        ></MenuCategory>

        <MenuCategory
          items={soups}
          img={soup}
          title={"soups"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?"
          }
        ></MenuCategory>
      </div>
    </>
  );
};

export default MenuPage;
