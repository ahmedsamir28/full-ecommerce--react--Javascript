import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../UseNotifaction';
import { resetPassword } from '../../redux/actions/authAction';

const ResetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const OnChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const onSubmit = async () => {
        if (password === "") {
            notify("Please enter your password", "error")
            return
        }
        if (password != confirmPassword) {
            notify("The password does not match the password confirmation", "error")
            return
        }

        setLoading(true)
        await dispatch(resetPassword({
            email: localStorage.getItem("user-email"),
            newPassword: password
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.verifyPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("Password successfully changed", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500);
                }
                if (res.data.status === "fail") {
                    notify("Please request a new code", "error")
                }
            }
        }
    }, [loading])

    return [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit]
    
}

export default ResetPasswordHook;
