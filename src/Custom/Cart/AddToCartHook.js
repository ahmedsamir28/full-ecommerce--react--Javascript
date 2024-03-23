import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import notify from '../../Custom/UseNotifaction';
import { addProductToCart } from '../../redux/actions/cartAction';

const AddToCartHook = (prdID, item) => {
    const dispatch = useDispatch();

    const [indexColor, setIndexColor] = useState('')
    const [colorText, setColorText] = useState('')
    const [loading, setLoading] = useState(true)

    const colorClick = (index, color) => {
        setIndexColor(index)
        setColorText(color)
    }

    //add product to cart
    const addToCartHandel = async () => {
        if (item.availableColors.length >= 1) {
            if (colorText === "") {
                notify("Please choose a color for the product first.", "warn")
                return
            }
        } else {
            setColorText('')
        }
        setLoading(true)
        await dispatch(addProductToCart({
            productId: prdID,
            color: colorText
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.addToCart)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === 200) {
                notify("The product was added to the cart successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            } else {
                notify("Log in first", "warn")
            }
        }
    }, [loading])

    return [colorClick, indexColor, addToCartHandel]

}

export default AddToCartHook;
