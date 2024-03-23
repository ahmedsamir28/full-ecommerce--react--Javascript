import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import ViewAddressesHook from '../../Custom/User/viewAddressesHook';
import OrderPayCashHook from '../../Custom/Checkout/orderPayCashHook';
import OrderPayCardHook from '../../Custom/Checkout/orderPayCardHook';
import GetAllUserCartHook from '../../Custom/Cart/GetAllUserCartHook';
import notify from '../../Custom/UseNotifaction';

const PayMethoud = () => {

    const [res] = ViewAddressesHook()
    const [handelChooseAddress, addressDetails, handelCreateOrderCash] = OrderPayCashHook()
    const [handelCreateOrderCARD] = OrderPayCardHook(addressDetails)
    const [, , totalCartPrice, , totalCartPriceAfterDiscount,] = GetAllUserCartHook()

    const [type, setType] = useState('')

    const changeMathoud = (e) => {
        setType(e.target.value)
    }

    const handelPay = () => {
        if (type === "CARD") {
            handelCreateOrderCARD()
        } else if (type === "CASH") {
            handelCreateOrderCash();
        } else {
            notify("Please choose a payment method", "warn")
        }
    }

    return (
        <div className='container'>

            <div className='py-5 pl-5 rounded-lg bg-zinc-50'>

                <div>
                    <input
                        onChange={changeMathoud}
                        name="group"
                        id="group1"
                        type="radio"
                        value="CARD"
                        className="cursor-pointer"
                    />
                    <label className="mx-2 cursor-pointer" for="group1"> Payment via credit card</label>
                </div>

                <div>
                    <input
                        onChange={changeMathoud}
                        name="group"
                        id="group2"
                        type="radio"
                        value="CASH"
                        className="mt-10 cursor-pointer" />
                    <label className="mx-2 cursor-pointer" for="group2">Paiement when recieving</label>
                </div>

            </div>

            <div className="mt-2">
                <div xs="4" className="flex">
                    <select name="address" id="address" className="w-3/12 py-2 border-2 rounded-md cursor-pointer" onChange={handelChooseAddress} >
                        <option value="0">Select shipping address</option>
                        {
                            res.data ? (res.data.map((item, index) => {
                                return <option key={item._id} value={item._id}>{item.alias}</option>
                            })) : <option key={0} value={0}>There are no registered addresses</option>
                        }
                    </select>
                </div>
            </div>

            <div>
                <div className="flex justify-end gap-2 mt-5">
                    <div className="px-5 py-2 border rounded-lg bg-zinc-50">
                        {
                            totalCartPriceAfterDiscount >= 1 ?
                                <div>
                                    <span style={{ textDecorationLine: 'line-through' }}>$ {totalCartPrice} </span>
                                    <span className='pl-4'> $ {totalCartPriceAfterDiscount}</span>
                                </div>
                                :
                                ` $ ${totalCartPrice}`
                        }
                    </div>
                    <div onClick={handelPay} className="px-5 py-2 border rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-400">purchase</div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default PayMethoud;
