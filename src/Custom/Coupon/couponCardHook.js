import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { deleteCoupon } from '../../redux/actions/couponReducer';

const CouponCardHook = (coupon) => {
    const dispatch = useDispatch()
    const dateString = coupon.expire;
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }


    const [modalIsOpen, setIsOpen]= useState(false);
    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);

    const handelDelete = async () => {

        await dispatch(deleteCoupon(coupon._id))
        setIsOpen(false);
        window.location.reload(false);
    }


    return [formatDate, dateString, modalIsOpen, handleClose, handleShow, handelDelete]
    
}

export default CouponCardHook;
