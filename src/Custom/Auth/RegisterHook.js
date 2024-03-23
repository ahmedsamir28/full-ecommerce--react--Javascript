import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../UseNotifaction';
import { createNewUser } from '../../redux/actions/authAction';

const RegisterHook = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const validationValues = () => {
        if (name === "") {
            notify("Please enter your username", "error")
            return;
        }
        if (phone.length <= 10) {
            notify("Please enter a valid phone number", "error")
            return;
        }
        if (password !== confirmPassword) {
            notify("Please confirm your password", "error")
            return;
        }
    }

    const res = useSelector(state => state.authReducer.createUser)

    //save data
    const OnSubmit = async () => {
        validationValues();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm: confirmPassword,
            phone
        }))
        setLoading(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res)
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token)
                    notify("Account has been successfully registered", "success")
                    setTimeout(() => {
                        window.open('/login')
                    }, 2000);
                }

                if (res.data.errors) {
                    if (res.data.errors[0].msg === "E-mail already in use")
                        notify("E-mail already in use", "error")
                }
                if (res.data.errors) {
                    if (res.data.errors[0].msg === "accept only egypt phone numbers")
                        notify("accept only egypt phone numbers", "error")
                }

                if (res.data.errors) {
                    if (res.data.errors[0].msg === "must be at least 6 chars")
                        notify("must be at least 6 chars", "error")
                }
            }
        }
    }, [loading])

    return [name, email, phone, password, confirmPassword, loading, onChangeName, onChangeEmail, onChangePhone, onChangePassword, onChangeConfirmPassword, OnSubmit]

}


export default RegisterHook;
