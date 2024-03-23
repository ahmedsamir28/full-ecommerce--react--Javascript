import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css';
import avatar from '../../Assets/Images/avatar.png'
import notify from '../UseNotifaction';
import { createCategory } from '../../redux/actions/categoryActions';

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false)

//To change name state
const onChangeName = (event) => {
    event.persist();
    setName(event.target.value)
}

 //When image change save it 
const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        setImg(URL.createObjectURL(event.target.files[0]))
        setSelectedFile(event.target.files[0])
    }
}

const res = useSelector(state => state.allCategory.category)

 //save data in database
const handelSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
        notify('Please complete the data', "warn");
        return;
    }
    const formData = new FormData();
    formData.append("name", name)
    formData.append("image", selectedFile)
    setLoading(true)
    setIsPress(true)
    await dispatch(createCategory(formData))
    setLoading(false)
}

useEffect(() => {
    if (loading === false) {
        setImg(avatar)
        setName("")
        setSelectedFile(null)
        setLoading(true)
        setTimeout(() => setIsPress(false), 1000)

        if (res.status === 201) {
            notify('The addition was completed successfully', "success");
        }
        else {
            notify('There is a problem with the addition process', "error");
        }
    }
}, [loading])

    return [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName]
}

export default AddCategoryHook;
