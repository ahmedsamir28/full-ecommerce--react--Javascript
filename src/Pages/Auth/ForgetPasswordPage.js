import React from 'react';
import ForgetPasswordHook from '../../Custom/Auth/ForgetPasswordHook';
import { ToastContainer } from 'react-toastify';

const ForgetPasswordPage = () => {
    const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook()

    return (
        <div>
            <div className='container' style={{ minHeight: "690px" }}>
                <div className="py-5 flex justify-center ">
                    <div sm="12" className="flex flex-col">

                    <div className="relative" >
                                    <input
                                    
                                        type="text"
                                        onChange={OnChangeEmail}
                                        value={email}
                                        className='w-80 py-1 pl-2'
                                        placeholder='Enter-Email'
                                    />
                                    
                                </div>
                        <button  onClick={onSubmit} className="bg-amber-400 hover:bg-amber-500 w-fit m-auto mt-3 py-2 px-3 rounded-md">Send code</button>

                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default ForgetPasswordPage;
