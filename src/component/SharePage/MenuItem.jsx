const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return <div className="flex  gap-5">
    <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[90px]" src={image} alt="" />
    <div>
        <h3 className="uppercase">{name}-----------</h3>
        <p>{recipe}</p>
    </div>
    <p className="text-[#BB8506]">${price}</p>
  </div>;
};

export default MenuItem;
