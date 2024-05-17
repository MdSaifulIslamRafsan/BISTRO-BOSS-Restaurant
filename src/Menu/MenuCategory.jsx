import Cover from "../component/SharePage/Cover";
import MenuItem from "../component/SharePage/MenuItem";

const MenuCategory = ({ items, img, title, description }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} description={description}></Cover>}
      <div className="grid my-10 md:grid-cols-2 gap-6">
        {items?.map((item) => (
          <MenuItem key={item?._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
