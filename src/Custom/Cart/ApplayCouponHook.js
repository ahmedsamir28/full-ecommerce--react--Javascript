import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import notify from '../UseNotifaction';
import { applayCouponCart } from '../../redux/actions/cartAction';
import {  useNavigate } from 'react-router-dom'

const ApplayCouponHook = (cartItems) => {
    const dispatch = useDispatch();


    const [couponName, setCouponName] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCoupon = (e) => {
        setCouponName(e)
    }

    const handelSubmitCoupon = async () => {
        if (couponName === "") {
            notify("Please enter the coupon.", "warn")
            return
        }
        setLoading(true)
        await dispatch(applayCouponCart({
            couponName: couponName
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.cartReducer.applayCoupon)

    useEffect(() => {

        if (loading === false) {
            if (res && res.status === 200) {
                notify("The coupon was applied successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);

            } else {
                notify("This coupon is invalid or expired", "warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
        }
    }, [loading])

    const navigate = useNavigate()
    
    const handelCheckout = () => {
        if (cartItems.length >= 1) {
            navigate('/order/paymethoud')
        }
        else {
            notify("من فضلك اضف منتجات للعربة اولا", "warn")
        }
    }
    return [couponName, onChangeCoupon, handelSubmitCoupon,handelCheckout]
}

export default ApplayCouponHook;
