import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import notify from '../UseNotifaction';
import { forgetPassword } from '../../redux/actions/authAction';

const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)


    const OnChangeEmail = (e) => {
        
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
        if (email === "") {
            notify("Please enter your email", "error")
            return
        }
        
        localStorage.setItem("user-email" ,email)
        setLoading(true)
        await dispatch(forgetPassword({
            email,
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.forgetPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.status === "Success") {
                    notify("The code was sent to your email successfully", "success")
                    setTimeout(() => {
                        navigate("/user/verify-code")
                    }, 1000);
                }
                if (res.data.status === "fail") {
                    notify("We don't have this account", "error")
                }
                if (res.data.status === "error") {
                    notify("There was an error sending the email. Try again later!", "error")
                }
            }
        }
    }, [loading])

    return [OnChangeEmail, email, onSubmit]
}

export default ForgetPasswordHook;
