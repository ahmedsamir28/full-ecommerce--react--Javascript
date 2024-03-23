import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBrands } from '../../redux/actions/brandsActions';

const HomeBrandsHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrands());
    }, [])

    //get last category state from redux
    const brands = useSelector(state => state.allBrands.brand)
    //get last loading state from redux
    const loading = useSelector(state => state.allBrands.loading)

    return [brands, loading]
}

export default HomeBrandsHook;
