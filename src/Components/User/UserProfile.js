import React from 'react';
import ProfileHook from '../../Custom/User/profileHook';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

const UserProfile = () => {
    const [user, modalIsOpen, handleClose, handleShow, handelSubmit, name, email, phone, onChangeName, onChangeEmail, onChangePhone, changePassword, oldPassword, newPassword, confirmNewPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass] = ProfileHook()
    const customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width:'400px',
            background:'white'
        },
    };

    return (
        <div className='container'>
            
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className='text-center text-zinc-700' >Modify personal data</h2>
                   

                    <div>
                    <input 
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className='w-full 
                        mt-2 outline-none 
                        rounded-md
                        pl-3
                        py-1
                        bg-zinc-50
                        border-2
                        text-zinc-600
                        '
                        placeholder="user name"
                    />
                    <input 
                        value={email}
                        onChange={onChangeEmail}
                        type="email"
                        className='w-full 
                        mt-2 outline-none 
                        rounded-md
                        pl-3
                        py-1
                        bg-zinc-50
                        border-2
                        text-zinc-600
                        '
                        placeholder="Email"
                    />
                    <input 
                        value={phone}
                        onChange={onChangePhone}
                        type="phone"
                        className='w-full 
                        mt-2 outline-none 
                        rounded-md
                        pl-3
                        py-1
                        bg-zinc-50
                        border-2
                        text-zinc-600
                        '
                        placeholder="the phone"
                    />
                    </div>
                    <div className='flex my-2  text-white  mt-5 justify-center gap-10 items-center'>
                        <button className='capitalize rounded-md text-black bg-zinc-200 py-1 px-2 hover:bg-zinc-300' onClick={handleClose}><i class="fa-solid fa-xmark"></i></button>
                        <button className='capitalize rounded-md text-white bg-amber-500 hover:bg-amber-600  py-1 px-2' onClick={handelSubmit}><i class="fa-regular fa-pen-to-square"></i></button>
                    </div>

                </Modal>
            </div>

            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Profile page</div>
            <div className='flex justify-between border-2 p-5 rounded-lg bg-zinc-50 items-start'>
                <div className='flex justify-start flex-col gap-3'>
                    <h3 className='text-lg font-medium capitalize'>name : <span className='text-sm  text-zinc-500'>{user.name}</span></h3>
                    <div className='capitalize font-medium'>phone Number : <span className='text-zinc-500'> {user.phone} </span></div>
                    <div className='capitalize font-medium'>Email: <span className='lowercase text-zinc-500'> {user.email} </span></div>
                </div>
                <div className='flex justify-start items-center gap-5'>
                    <div onClick={handleShow} className='cursor-pointer font-bold text-zinc-500'>edit <i class="text-xl hover:text-amber-500 text-black ml-2 fa-regular fa-pen-to-square"></i></div>
                </div>
            </div>
            <div className="mt-5">
                <div className="text-xl font-bold text-zinc-500  capitalize ">change Password</div>
                <div className='flex justify-between items-start flex-col'>
                    <input
                        value={oldPassword}
                        onChange={onChangeOldPass}
                        type="password"
                        className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        placeholder="Enter your old password" />
                    <input
                        value={newPassword}
                        onChange={onChangeNewPass}
                        type="password"
                        className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        placeholder="Enter your new password" />
                    <input
                        value={confirmNewPassword}
                        onChange={onChangeConfirmPass}
                        type="password"
                        className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        placeholder="Enter your new password" />
                </div>
            </div>
            <div className="flex justify-end mt-3 w-9/12 ">
                <button  onClick={changePassword} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">save Password</button>
            </div>
            <ToastContainer />

        </div>
    );
}

export default UserProfile;
