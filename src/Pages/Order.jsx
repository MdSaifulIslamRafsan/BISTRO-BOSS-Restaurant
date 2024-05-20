import useMenu from "../Hooks/useMenu";
import coverImg from "../assets/shop/banner2.jpg";
import Cover from "./../component/SharePage/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTabs from "../component/SharePage/OrderTabs";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salads","pizzas","soups","desserts","drinks"];
  const {category} = useParams();

  const isActive = categories.indexOf(category);
  

  const [tabIndex, setTabIndex] = useState(isActive);
  const [menuData] = useMenu();
  const desserts = menuData.filter((item) => item?.category === "dessert");
  const soups = menuData.filter((item) => item?.category === "soup");
  const salads = menuData.filter((item) => item?.category === "salad");
  const pizzas = menuData.filter((item) => item?.category === "pizza");
  const drinks = menuData.filter((item) => item?.category === "drinks");
  return (
   <>
      <Helmet>
        <title>Bistro || Order Food</title>
      </Helmet>
     <div>
      <Cover
        img={coverImg}
        title={"Order Foods"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        className="my-20"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>

        <TabPanel className="my-10">
          <OrderTabs item={salads}></OrderTabs>
        </TabPanel>

        <TabPanel>
          <OrderTabs item={pizzas}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={soups}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={desserts}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs item={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
   </>
  );
};

export default Order;
