

const FoodCard = ({items}) => {
    const { name, recipe, image, price } = items;
    return (
        <div className="card bg-base-100 text-center  shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <p className="bg-slate-900 text-white absolute right-4 py-2 px-4 top-4">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;