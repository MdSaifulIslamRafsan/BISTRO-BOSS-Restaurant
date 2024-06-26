import { useEffect, useState } from "react";


const useMenu = () => {
    const [menuData , setMenuDate] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        const getMenuData = async () =>{
            const res = await fetch('http://localhost:5000/menu')
            const data =await res.json();
            setMenuDate(data);
            setLoading(false);
        } 
        getMenuData();
    },[]);
    return [menuData , loading];
};

export default useMenu;