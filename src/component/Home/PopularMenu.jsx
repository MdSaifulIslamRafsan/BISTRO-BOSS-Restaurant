import SectionTitle from "../SharePage/SectionTitle";
import MenuItem from "../SharePage/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menuData] = useMenu();
  const popularItems = menuData.filter((item) => item.category === "popular");
  return (
    <section className="mb-20">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid mt-10 md:grid-cols-2 gap-6">
        {popularItems.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-b-4 outline-none border-0 block my-10 mx-auto">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
