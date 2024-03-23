import React from 'react'
import DeleteRateHook from '../../Custom/Review/DeleteRateHook'
import EditRateHook from '../../Custom/Review/EditRateHook'
import { ToastContainer } from 'react-toastify';
import ReactStars from 'react-rating-stars-component'

import Modal from 'react-modal';

const RateItem = ({ review }) => {

    const customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            background: 'white',
        },
    };

    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
    }

    const [isUser, handelDelete, handleShow, handleClose, modalIsOpen] = DeleteRateHook(review);
    const [editModalIsOpen, handleCloseEdit, handleShowEdit, handelEdit, onChangeRateText, newRateText, OnChangeRateValue, newRateValue] = EditRateHook(review)


    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            OnChangeRateValue(newValue);
        }
    };
    return (

        <div className='container'>

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={handleClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className='' ref={(_subtitle) => (subtitle = _subtitle)}>Delete confirmation</h2>
                    <div className='border-y-2 py-2 mt-2'>Are you sure to delete the rating ?</div>
                    <div className='flex my-2 justify-end gap-2 pt-2 items-center'>
                        <button className='capitalize rounded-md text-black bg-zinc-200 py-1 px-2 hover:bg-zinc-300' onClick={handleClose}>close</button>
                        <button className='capitalize rounded-md text-white bg-amber-500 hover:bg-amber-600  py-1 px-2' onClick={handelDelete}>delete</button>
                    </div>

                </Modal>
            </div>

            <div>
                <Modal
                    isOpen={editModalIsOpen}
                    onRequestClose={handleCloseEdit}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className='text-start border-b-2 pb-2 ' >Edit confirmation</h2>

                    <div className='py-2'>
                        <ReactStars {...setting} />
                        <input
                            onChange={onChangeRateText}
                            value={newRateText}
                            type="text"
                            className='w-full 
                        mt-2 outline-none 
                        rounded-md
                        pl-3
                        py-1
                        bg-zinc-100
                        border
                        border-zinc-500
                        text-zinc-700
                        '
                        />
                    </div>

                    <div className='flex my-2 justify-end gap-2 items-center'>
                        <button className=' rounded-md text-black bg-zinc-200 py-1 px-2 hover:bg-zinc-300' onClick={handleCloseEdit}>close</button>
                        <button className='rounded-md text-white bg-amber-500 hover:bg-amber-600  py-1 px-2' onClick={handelEdit}>change</button>
                    </div>

                </Modal>
            </div>

            <div className='container border-y '>
                <div className="mt-3">
                    <div className="flex justify-start items-center gap-2">
                        <div className="capitalize text-md font-bold text-zinc-600">{review.user.name}</div>
                        <div className="text-amber-400 "><i class="fa-solid fa-star"></i></div>
                        <div className="text-base">{review.rating}</div>
                    </div>
                </div>
                <div className="ml-8 my-2 flex justify-between items-start">
                    <div className="text-zinc-500">
                        {review.review}
                    </div>

                    {
                        isUser === true ? (
                            <div className='flex gap-5 justify-center items-center'>
                                <div
                                    className='cursor-pointer rounded-md border-2 hover:text-amber-500 py-1 px-2'
                                    data-te-toggle="modal"
                                    data-te-target="#exampleModal-1"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={handleShow}                                >
                                    <i
                                        class="fa-regular fa-trash-can"></i>
                                </div>
                                <div
                                    className='cursor-pointer rounded-md border-2 hover:text-amber-500 py-1 px-2'
                                    data-te-toggle="modal"
                                    data-te-target="#exampleModal-2"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    onClick={handleShowEdit}
                                >
                                    <i
                                        class=" fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                        ) : null
                    }

                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default RateItem
