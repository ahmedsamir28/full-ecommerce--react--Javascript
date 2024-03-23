import React from 'react';
import AddSubCategoryHook from '../../Custom/SubCategory/AddSubCategoryHook';
import { ToastContainer } from 'react-toastify';

const SubCategory = () => {
    const [id, name, loading, category, subcategory, handelChange, handelSubmit, onChangeName] =AddSubCategoryHook()
    return (
        <div className='container'>
            <div className="">
                <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Add a new subcategory</div>
                <div className='flex justify-between items-start flex-col'>
                    <input 
                    type="text" 
                    value={name}
                    onChange={onChangeName} 
                    className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none"
                    placeholder="Category name" 
                    />
                    <select name="category" id="cat" onChange={handelChange} className="text-zinc-400 capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none">
                        <option value="0">Choose a main category</option>
                        {
                            category.data ? (category.data.map(item => {
                                return (<option key={item._id} value={item._id}>{item.name}</option>)
                            })) : null
                        }
                        
                    </select>
                    
                </div>
            </div>
            <div className="flex justify-end mt-3 w-9/12 ">
                <button onClick={handelSubmit} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">Save edits</button>
            </div>
            <ToastContainer/>

        </div>
    );
}

export default SubCategory;
