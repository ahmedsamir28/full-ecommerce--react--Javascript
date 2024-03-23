import { useEffect, useState } from "react";
import ViewSearchProductsHook from "../Products/viewSearchProductsHook";

const NavbarSearchHook = () => {
    const [items, pagination, onPress,getProduct]= ViewSearchProductsHook()
    const [searchWord, setSearchWord] = useState('')

    const OnChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value)
        setSearchWord(e.target.value)
        const path = window.location.pathname;
        if (path !== "/products") {
            window.location.href = "/products"
        }
    }

    
    useEffect(() => {
        setTimeout(() => {
            getProduct()
        }, 1000);
    }, [searchWord])

    return [OnChangeSearch,searchWord]
}

export default NavbarSearchHook;
