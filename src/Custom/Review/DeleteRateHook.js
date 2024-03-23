import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteReviewOnProduct } from '../../redux/actions/reviewAction';
import notify from '../UseNotifaction';

const DeleteRateHook = (review) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isUser, setIsUser] = useState(false)
    const [loading, setLoading] = useState(true)

    const [modalIsOpen, setIsOpen]= useState(false);

    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);

    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (review.user._id === user._id) {
            setIsUser(true);
        }
    }, [])


    const handelDelete = async () => {
        setLoading(true)
        await dispatch(deleteReviewOnProduct(review._id))
        setLoading(false)
        handleClose();
    }
    const res = useSelector(state => state.reviewReducer.deleteReview)

    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("Rating successfully deleted", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else
                notify("There is a problem with the scanning process", "error")
        }
    }, [loading])

    return [isUser, handelDelete, handleShow, handleClose, modalIsOpen]
}

export default DeleteRateHook;
