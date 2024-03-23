import React from 'react';
import ResetPasswordHook from '../../Custom/Auth/ResetPasswordHook';
import { ToastContainer } from 'react-toastify';

const ResetPasswordPage = () => {
    const [password, confirmPassword, , OnChangePassword, OnChangeConfirmPassword, onSubmit] = ResetPasswordHook()
    return (
        <div>
            <div className='container' style={{ minHeight: "690px" }}>
                <div className="py-5 flex justify-center ">
                    <div sm="12" className="flex flex-col">

                        <label className="mx-auto ">Forgot your password</label>
                        <input
                            value={password}
                            onChange={OnChangePassword}
                            placeholder="Enter the new password"
                            type="password"
                            className=""
                        />
                        <input
                            value={confirmPassword}
                            onChange={OnChangeConfirmPassword}
                            placeholder="Confirm new password"
                            type="password"
                            className=""
                        />
                        <button onClick={onSubmit} className="">Save</button>

                    </div>

                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default ResetPasswordPage;
