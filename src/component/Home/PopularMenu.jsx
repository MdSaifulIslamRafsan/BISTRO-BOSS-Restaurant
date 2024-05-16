import { useEffect, useState } from "react";
import SectionTitle from "../SharePage/SectionTitle";
import MenuItem from "../SharePage/MenuItem";



const PopularMenu = () => {
    const [menuData , setMenuDate] = useState([]);

    useEffect(()=>{
        const getMenuData = async () =>{
            const res = await fetch('./menu.json')
            const data =await res.json();
            const popularItems = data.filter(item => item.category === "popular")
            setMenuDate(popularItems);
        } 
        getMenuData();
    },[])

    return (
        <section className="mb-20">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className="grid mt-10 md:grid-cols-2 gap-6">
                {
                    menuData.map(item=> <MenuItem key={item?._id} item={item}></MenuItem> )
                }
            </div>
        </section>
    );
};

export default PopularMenu;