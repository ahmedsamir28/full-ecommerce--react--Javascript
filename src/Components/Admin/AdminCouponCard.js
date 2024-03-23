import React from 'react';
import { Link } from 'react-router-dom';
import CouponCardHook from '../../Custom/Coupon/couponCardHook';
import Modal from 'react-modal';

const AdminCouponCard = ({coupon}) => {
    const [formatDate, dateString, modalIsOpen, handleClose, handleShow, handelDelete] = CouponCardHook(coupon)

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

    let subtitle;
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }
    return (
        <div className='container border-2 rounded-lg my-8 py-5 bg-zinc-50' >
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={handleClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className='' ref={(_subtitle) => (subtitle = _subtitle)}>Delete coupon</h2>

                    <div className='border-y-2 py-2 mt-2'>Are you sure to delete the coupon ?</div>
                    <div className='flex my-2 justify-end gap-2 pt-2 items-center'>
                        <button className='capitalize rounded-md text-black bg-zinc-200 py-1 px-2 hover:bg-zinc-300' onClick={handleClose}>close</button>
                        <button className='capitalize rounded-md text-white bg-amber-500 hover:bg-amber-600  py-1 px-2' onClick={handelDelete}>delete</button>
                    </div>

                </Modal>
            </div>
            <div className='flex justify-between  items-start'>
                <div className='flex justify-start flex-col gap-3'>
                    <h3 className='font-medium capitalize'>Coupon name : <span className='text-zinc-500'> {coupon.name} </span></h3>
                    <div className=' font-medium capitalize'>Expiry date : <span className='text-zinc-500'> {formatDate(dateString)} </span></div>
                    <div className='capitalize font-medium'>discount percentage : <span className='text-zinc-500'> % {coupon.discount} </span></div>
                </div>
                <div className='flex justify-start items-center gap-5'>
                    <Link to={`/admin/editcoupon/${coupon._id}`}>
                    <div className='cursor-pointer font-bold text-zinc-500'>edit <i class="text-xl hover:text-amber-500 text-black ml-2 fa-regular fa-pen-to-square"></i></div>
                    </Link>
                    <div onClick={handleShow} className='cursor-pointer font-bold text-zinc-500'>remove <i class="text-xl hover:text-amber-500 text-black ml-2 fa-regular fa-trash-can"></i> </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCouponCard;
