import React from 'react';
import avatar from '../../Assets/Images/avatar.png'
import Multiselect from 'multiselect-react-dropdown';
import AdminAddProductsHook from '../../Custom/Products/addProductsHook';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import { ToastContainer } from 'react-toastify';

const AdminAddProducts = () => {
    const [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName] =
        AdminAddProductsHook();


    return (
        <div className='container'>
            <div className="">
                <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Add a new product</div>
                <div>
                    <div className="capitalize text-sm font-medium text-zinc-400 mb-2">product image</div>
                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={4}
                    />
                    <div className='flex flex-col gap-2 justify-between items-start'>
                        <input
                            type="text"
                            value={prodName}
                            onChange={onChangeProdName}
                            className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                            placeholder="product name" />

                        <textarea
                            value={prodDescription}
                            onChange={onChangeDesName}
                            className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 pt-3 h-24 w-9/12 outline-none"
                            placeholder="Product Description" />

                        <input
                            type="number"
                            value={priceBefore}
                            onChange={onChangePriceBefor}
                            className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                            placeholder="Price before discount" />

                        <input
                            type="number"
                            value={priceAftr}
                            onChange={onChangePriceAfter}
                            className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                            placeholder="Price after discount" />

                        <input
                            type="number"
                            value={qty}
                            onChange={onChangeQty}
                            className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                            placeholder="Quantity available" />

                        <select
                            onChange={onSeletCategory}
                            name="ؤشف" id="lang" className="text-zinc-400 capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none">
                            <option value="0">Main category</option>
                            {
                                category.data ? (category.data.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )
                                })) : null
                            }
                        </select>

                        <Multiselect
                            className="text-end capitalize rounded-lg mt-5 min-w-96 border "
                            placeholder="Main category"
                            options={options}
                            onSelect={onSelect}
                            onRemove={onRemove}
                            displayValue="name"
                            style={{ color: "read" }}
                        />

                        <select 
                            onChange={onSeletBrand}
                            name="brand" id="lang" 
                            className="text-zinc-400 capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none">
                            <option value="0">Choose a brand</option>
                            {
                            brand.data ? (brand.data.map((item,index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null
                        }
                        </select>

                        <h6 className='capitalize font-medium text-zinc-500'>Available colors of the product</h6>
                        <div className='flex justify-start gap-2 items-center ml-5'>
                            {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className=' w-8 border h-8 rounded-full'
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })

                            ) : null
                        }

                            <div onClick={onChangeColor} className='w-8 border-2  cursor-pointer h-8 flex justify-center items-center text-sm text-zinc-400 rounded-full'><i class="fa-solid fa-plus"></i></div>
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        }
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex justify-end mt-3 w-9/12 ">
                <button onClick={handelSubmit} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">Save edits</button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AdminAddProducts;
