import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateReviewOnProduct } from '../../redux/actions/reviewAction';
import notify from '../UseNotifaction';
const EditRateHook = (review) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)

    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const [editModalIsOpen, editSetIsOpen] = useState(false);
    const handleCloseEdit = () => editSetIsOpen(false);
    const handleShowEdit = () => editSetIsOpen(true);

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }
    const OnChangeRateValue = (val) => {
        setNewRateValue(val)
    }

    const handelEdit = async () => {
        setLoading(true)
        await dispatch(updateReviewOnProduct(review._id, {
            review: newRateText,
            rating: newRateValue
        }))
        setLoading(false)
        handleCloseEdit();
    }
    const res = useSelector(state => state.reviewReducer.updateReview)

    useEffect(() => {
        if (loading === false) {
            console.log(res)
            if (res.status && res.status === 200) {
                notify("Rating has been successfully modified", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000);
            }
            else
                notify("There is a problem with the editing process", "error")
        }
    }, [loading])

    return [editModalIsOpen, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue]
}

export default EditRateHook;
