import React, { useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import AdminCouponCard from './AdminCouponCard';
import AddCouponHook from '../../Custom/Coupon/addCouponHook';

const AdminAddCoupon = () => {
    const dateRef = useRef();
    const [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, coupons] = AddCouponHook()
    return (
        <div>
            <div className="container">
                <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Add a new coupon</div>
                <div className="flex flex-col gap-2 justify-between items-start">
                    <input
                        value={couponName}
                        onChange={onChangeName}
                        type="text"
                        className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        placeholder="Coupon name"
                    />
                    <input
                        ref={dateRef}
                        type="text"
                        className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                        placeholder="Expiry date"
                        onChange={onChangeDate}
                        value={couponDate}
                        onFocus={() => dateRef.current.type = "date"}
                        onBlur={() => dateRef.current.type = "text"}
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

                <div className="flex justify-end mt-3 w-9/12 ">
                    <button onClick={onSubmit} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">حفظ الكوبون</button>
                </div>

            <div className="w-9/12">
                {
                    coupons ? (coupons.map((item, index) => {
                        return <AdminCouponCard key={index} coupon={item} />
                    })) : <h6>No coupons yet</h6>
                }
            </div>

            <ToastContainer />
        </div>


    );
}

export default AdminAddCoupon;
