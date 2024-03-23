import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import EditAddressHook from '../../Custom/User/editAddressHook';

const UserEditAddress = () => {
    const { id } = useParams()
    const [handelEdit, alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone] = EditAddressHook(id)
    return (
        <div className="container">
            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">
                Edit address
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
                <button onClick={handelEdit} className="py-3  px-4 rounded-lg  font-medium bg-base hover:bg-amber-400">
                Save edited address
                </button>
            </div>
        </div>
    );
}

export default UserEditAddress;
