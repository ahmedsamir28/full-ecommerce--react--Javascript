import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../UseNotifaction';
import { updateUserPassword, updateUserProfileData } from '../../redux/actions/authAction';

const ProfileHook = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let user = []
    if (localStorage.getItem("user") !== null)
        user = JSON.parse(localStorage.getItem("user"))

    const [modalIsOpen, setIsOpen]= useState(false);
    const handleClose = () => setIsOpen(false);
    const handleShow = () => setIsOpen(true);


    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [loading, setLoading] = useState(true)


    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }

    const onChangeEmail = (event) => {
        event.persist();
        setEmail(event.target.value)
    }
    const onChangePhone = (event) => {
        event.persist();
        setPhone(event.target.value)
    }

    const handelSubmit = async () => {

        let body
        if (user.email === email) {
            body = {
                name,
                phone
            }
        } else {
            body = {
                name,
                email,
                phone
            }
        }
        setLoading(true)
        await dispatch(updateUserProfileData(body))
        setLoading(false)
        setIsOpen(false);
    }

    const res = useSelector(state => state.authReducer.userProfile)
    useEffect(() => {
        if (loading === false) {
            if (res && res.status === 200) {
                notify("Update completed successfully", "success")

                localStorage.setItem("user",JSON.stringify(res.data.data.user))
                setTimeout(() => {
                    window.location.reload(false);
                }, 1500);

            } else {
                notify("Update failed", "warn")
            }
        }
    }, [loading])

    ///change user password
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loadingPass, setLoadingPass] = useState(true)


    const onChangeOldPass = (event) => {
        event.persist();
        setOldPassword(event.target.value)
    }

    const onChangeNewPass = (event) => {
        event.persist();
        setNewPassword(event.target.value)
    }
    const onChangeConfirmPass = (event) => {
        event.persist();
        setConfirmNewPassword(event.target.value)
    }

    const changePassword = async () => {

        if (confirmNewPassword !== newPassword) {
            notify("Confirm password does not match", "warn")
            return
        }
        setLoadingPass(true)
        await dispatch(updateUserPassword({
            currentPassword: oldPassword,
            password: newPassword,
            passwordConfirm: confirmNewPassword
        }))
        setLoadingPass(false)
    }

    const resPass = useSelector(state => state.authReducer.userChangePassword)
    useEffect(() => {
        if (loadingPass === false) {
            if (resPass && resPass.status === 200) {
                notify("Password changed successfully", "success")
                setTimeout(() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    navigate('/login')
                }, 1500);

            } else {
                notify("Update failed", "warn")
            }
        }
    }, [loadingPass])

    return [user, modalIsOpen, handleClose, handleShow, handelSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, changePassword, oldPassword, newPassword, confirmNewPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass]
}

export default ProfileHook