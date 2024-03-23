import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import GetAllUserCartHook from '../Cart/GetAllUserCartHook';
import notify from '../UseNotifaction';
import { createOrderCARD } from '../../redux/actions/checkoutAction';

const OrderPayCardHook = (addressDetails) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook()

    //when user click
    const handelCreateOrderCARD = async () => {
        if (cartID === '0') {
            notify("Please add products to the cart first.", "warn")
            return
        }
        if (addressDetails.length <= 0) {
            notify("Please choose a title first.", "warn")
            return
        }
        setLoading(true)
        await dispatch(createOrderCARD(cartID, {
            shippingAddress: {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoading(false)
    }



    //get response for create order card
    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    useEffect(() => {
        if (loading === false) {
            if (resOrderCard && resOrderCard.status === "success") {
                if (resOrderCard.session.url) {
                    window.open(resOrderCard.session.url)
                }
            } else {
                notify("The request failed to complete. Please try again.", "warn")
            }
        }
    }, [loading])


    return [handelCreateOrderCARD]
}

export default OrderPayCardHook;
