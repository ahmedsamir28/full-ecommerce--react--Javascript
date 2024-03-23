import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import GetAllUserCartHook from '../Cart/GetAllUserCartHook';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../UseNotifaction';
import { createOrderCash } from '../../redux/actions/checkoutAction';

const OrderPayCashHook = () => {
    const [loading, setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [, , , , , cartID] = GetAllUserCartHook()
    //when change address bu user
    const handelChooseAddress = (e) => {
        setAddressDetails([])
        if (e.target.value != '0')
            get(e.target.value);
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    //get address details for user
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data)
            } else
            setAddressDetails([])
        }
    }, [loading])



    //when user click
    const handelCreateOrderCash = async () => {
        if (cartID === '0') {
            notify("Please add products to the cart first.", "warn")
            return
        }
        if (addressDetails.length <= 0) {
            notify("Please choose a title first.", "warn")
            return
        }
        setLoadingCreate(true)
        await dispatch(createOrderCash(cartID, {
            shippingAddress: {
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: ""
            }
        }))
        setLoadingCreate(false)
    }


    //get response for create order cash
    const resOrderCash = useSelector(state => state.checkoutReducer.createOrderCash)
    useEffect(() => {
        if (loadingCreate === false) {
            if (resOrderCash && resOrderCash.status === 201) {
                notify("Your order has been created successfully", "success")
                setTimeout(() => {
                    navigate('/user/allorders')
                }, 1500);
            } else {
                notify("The request failed to complete. Please try again.", "warn")
            }
        }
    }, [loadingCreate])


    return [handelChooseAddress, addressDetails, handelCreateOrderCash]
}

export default OrderPayCashHook;
