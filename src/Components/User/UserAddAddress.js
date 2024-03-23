import React from "react";
import { ToastContainer } from 'react-toastify';
import AddAddressHook from "../../Custom/User/addAddressHook";

const UserAddAddress = () => {
    const [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit] = AddAddressHook()
    return (
        <div className="container">
            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">
            Add a new address
            </div>

            <div>
                <input
                    value={alias}
                    onChange={onChangeAlias}
                    type="text"
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="Naming the address, for example (home - work)"
                />
                <textarea
                    value={details}
                    onChange={onChangeDetails}
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 pt-3 h-24 w-9/12 outline-none"
                    placeholder="Detailed address"
                />
                <input
                    value={phone}
                    onChange={onChangePhone}
                    type="text"
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="phone number"
                />
            </div>
            <div className="flex justify-end  mt-5 w-9/12">
                <button onClick={onSubmit}  className="py-3  px-4 rounded-lg  font-medium bg-base hover:bg-amber-400">
                    Add address
                </button>
            </div>
            <ToastContainer />

        </div>
    );
};

export default UserAddAddress;
