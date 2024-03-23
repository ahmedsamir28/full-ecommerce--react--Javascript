import React from 'react';
import VerifyPasswordHook from '../../Custom/Auth/VerifyPasswordHook';
import { ToastContainer } from 'react-toastify';

const VerifyPasswordPage = () => {
    const  [code, OnChangeCode, onSubmit] = VerifyPasswordHook()
    return (
        <div>
            <div className='container' style={{ minHeight: "690px" }}>
                <div className="py-5 flex justify-center ">
                    <div sm="12" className="flex flex-col">

                        <label className="mx-auto ">Enter the code sent in the email</label>
                        <input
                            value={code}
                            onChange={OnChangeCode}
                            placeholder="Enter the code"
                            type="email"
                            className=""
                        />
                        
                        <button onClick={onSubmit} className="">Confirm</button>

                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default VerifyPasswordPage;
