import React from 'react';
import clothes from "../../Assets/Images/clothes.jpg";
import DeleteCartHook from '../../Custom/Cart/DeleteCartHook';
import Modal from 'react-modal';

const CartItem = ({ item }) => {
    const [handelDeleteCart, show, handleClose, handleShow, handelDeleteItem, itemCount, onChangeCount, handeleUpdateCart] = DeleteCartHook(item)
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
        <div className='container flex justify-between p-8 border-t-2 '>
            
                <Modal
                    isOpen={show}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={handleClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 className='text-center' ref={(_subtitle) => (subtitle = _subtitle)}>Delete coupon</h2>
                    <div className='border-y-2 py-2 mt-2'>Are you sure to delete the coupon ?</div>
                    <div className='flex my-2 justify-end gap-2 pt-2 items-center'>
                        <button className='capitalize rounded-md text-black bg-zinc-200 py-1 px-2 hover:bg-zinc-300' onClick={handleClose}><i class="fa-solid fa-xmark"></i></button>
                        <button className='capitalize rounded-md text-white bg-amber-500 hover:bg-amber-600  py-1 px-2' onClick={handelDeleteItem}><i class="fa-regular fa-trash-can"></i></button>
                    </div>

                    

                </Modal>
            
            <div className='flex items-start gap-5 '>
                <div className='h-56 border bg-zinc-100'>
                    <img width="150px" height="80px" src={item.product ? item.product.imageCover : clothes} alt="" />
                </div>

                <div className='flex justify-start flex-col  gap-1.5 items-start'>
                    <span className='font-semibold text-md text-zinc-400'>{item.product.category.name || ""}</span>
                    <h6 className='text-sm '> {item.product.title}  </h6>
                    <span className='font-semibold text-md text-zinc-400'>rate : <span className='font-normal text-amber-500'>{item.product.ratingsAverage || 0}</span> </span>
                    <span className='font-semibold text-md text-zinc-400'>brand : <span className='font-normal text-black capitalize'>{item.product.brand.name || ""}</span> </span>
                    <div className='flex justify-start items-center gap-2 '>
                    <input
                        value={itemCount}
                        onChange={onChangeCount}
                        type='number'
                        className='border-2 pl-2 py-2 rounded-md outline-none w-14 focus:border-amber-400'
                    />
                    <button onClick={handeleUpdateCart} className='py-2 px-3 border rounded-lg bg-amber-300 hover:bg-amber-400 capitalize' >call</button>
                    </div>
                    

                    <span>$ {item.price}</span>

                    <div>
                        {
                            item.color === "" ? null : (<div
                                style={{ backgroundColor: `${item.color}` }}
                                className='w-8 h-8 border rounded-full '
                            > </div>)
                        }
                    </div>

                </div>
            </div>
            <div onClick={handleShow} className='text-xl cursor-pointer h-fit text-zinc-500'>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        </div>
    );
}

export default CartItem;
