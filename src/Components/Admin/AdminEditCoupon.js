import React, { useRef } from 'react'
import EditCouponHook from '../../Custom/Coupon/editCouponHook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AdminEditCoupon = () => {
    const { id } = useParams();
    const [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit] = EditCouponHook(id)
    return (
        <div>
        <div className="">
            <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Edit a coupon</div>
            <div className="flex flex-col gap-2 justify-between items-start">
                <input
                    value={couponName}
                    onChange={onChangeName}
                    type="text"
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="Coupon name"
                />
                <input
                    type="text"
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="Expiry date"
                    onChange={onChangeDate}
                    value={couponDate}
                />
                <input
                    value={couponValue}
                    onChange={onChangeValue}
                    type="number"
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="Coupon discount percentage"
                />
            </div>
        </div>

        <div className="d-flex justify-content-end">
            <div className="flex justify-end mt-3 w-9/12 ">
                <button onClick={onSubmit} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">Save edit</button>
            </div>
        </div>

        <ToastContainer />
    </div>
    );
}

export default AdminEditCoupon;
