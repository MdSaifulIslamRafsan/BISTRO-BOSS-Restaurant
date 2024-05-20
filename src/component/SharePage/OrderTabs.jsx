import FoodCard from "./FoodCard";

const OrderTabs = ({item}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                item?.map(item => <FoodCard items={item} key={item?._id}>

                </FoodCard>)
            }
           </div>
    );
};

export default OrderTabs;