import { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard';
import Pagination from '../../Utils/Pagination';
import mobile_1 from "../../Assets/Images/mobile1.png";
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import ProductsContainer from '../Products/ProductsContainer';

const UserFavoriteProduct = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }
        get()
    }, [])

const res = useSelector(state => state.addToWishListReducer.allWishList)
    useEffect(() => {
        if (loading === false) {
            if (res)
                setItems(res.data)
        }
    }, [loading])

    return (
        <div className='container'>
            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Favorites list</div>
            <div style={{width:'1000px'}}>
                {
                    items.length >= 0 ? <ProductsContainer products={items} title="" btntitle="" />  : (<h6>There are currently no favorite products</h6>) 
                }
            </div >
        </div>
    );
}

export default UserFavoriteProduct;
