import { useState, useEffect } from 'react';
import { Modal, Ripple, initTE } from 'tw-elements';
import mobile_1 from "../../Assets/Images/mobile1.png";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts } from '../../redux/actions/productsAction';

const AdminProductCart = ({ item }) => {

    const dispatch = useDispatch();

    const handelDelete = async () => {
        await dispatch(deleteProducts(item._id))
        window.location.reload();
    }

    useEffect(() => {
        // Initialize TW Elements
        initTE({ Modal, Ripple });
    }, []);
    return (
        <div className='container'>

            {/* Modal */}
            <div
                data-te-modal-init
                className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
            >
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
                >
                    <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {/* Modal title */}
                            <h5 className="text-xl font-medium leading-normal text-black 0" id="exampleModalLabel">
                            Confirm deletion                            </h5>
                            {/* Close button */}
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        Are you sure about the product deletion process?                        
                        </div>

                        {/* Modal footer */}
                        <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <button
                                type="button"
                                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                                data-te-modal-dismiss
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="ml-1 inline-block rounded bg-amber-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-amber-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                onClick={handelDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='border-2 shadow-md rounded-xl'>
                <div className='relative h-64'>
                    <Link to={`/product/${item._id}`} >
                        <img src={item.imageCover} className='hover:scale-110 hover:rotate-2 duration-300 h-full w-full cursor-pointer' alt='' />
                    </Link>
                    <span className='p-3 hover:text-amber-500 hover:scale-110 hover:rotate-90 duration-300 absolute top-0 right-0 cursor-pointer text-xl'>
                        <i
                            data-te-toggle="modal"
                            data-te-target="#exampleModal"
                            data-te-ripple-init
                            data-te-ripple-color="light" class="fa-solid fa-xmark"></i>
                    </span>

                    <Link to={`/admin/editproduct/${item._id}`}>
                        <span className='p-3 hover:text-amber-500 hover:scale-110 hover:rotate-12 duration-300 absolute top-0 left-0 cursor-pointer text-xl'>
                            <i class="fa-solid fa-pen-to-square"></i>
                        </span>
                    </Link>

                </div>

                <Link to={`/product/${item._id}`}>
                    <h4 className='pl-5 mt-5 text-zinc-500 capitalize font-semibold text-sm'>{item.title}</h4>
                    <div className='pl-5 my-2 flex items-center justify-between'>
                        <span className='text-sm'>$ {item.price}</span>
                        <span className='mr-5 text-md cursor-pointer'>
                            {item.ratingsQuantity} <i class="text-base ml-2 fa-solid fa-star"></i>
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default AdminProductCart;
