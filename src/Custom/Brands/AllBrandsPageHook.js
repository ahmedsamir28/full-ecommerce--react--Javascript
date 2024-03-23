import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBrands, getAllBrandsPage } from '../../redux/actions/brandsActions';


const AllBrandsPageHook = () => {
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllBrands(6));
    }, [])

    //to get state from redux
    const brands = useSelector(state => state.allBrands.brand)
    const loading = useSelector(state => state.allBrands.loading)


    //to get page count
    let pageCount = 0;
    if (brands.paginationResult)
        pageCount = brands.paginationResult.numberOfPages

    //when press pagination
    const getPage = (page) => {
        dispatch(getAllBrandsPage(page));
    }
    return [brands,loading,pageCount,getPage]

}
export default AllBrandsPageHook ;
