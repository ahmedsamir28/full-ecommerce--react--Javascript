import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';
const DeleteAddressHook = (id) => {
    const dispatch = useDispatch()

    const [modalIsOpen, setIsOpen]= useState(false);
    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);

    const handelDelete = async () => {
        await dispatch(deleteUserAddress(id))
        setIsOpen(false);
        window.location.reload(false);
    }

    
    return [modalIsOpen, handleClose, handleShow, handelDelete]
}

export default DeleteAddressHook;
