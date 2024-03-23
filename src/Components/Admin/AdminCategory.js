import React from 'react';
import AddCategoryHook from '../../Custom/Category/AddCategoryHook';
import { ToastContainer } from 'react-toastify';

const AdminCategory = () => {
    const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] = AddCategoryHook();

    return (
        <div className='container'>
            <div className="">
                <div className="text-2xl font-bold text-zinc-500  capitalize mb-5">Add a new category</div>
                <div>
                    <div className="capitalize text-sm font-medium text-zinc-400 mb-2">Category image</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input className='hidden'
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input value={name} onChange={onChangeName} type="text" className="capitalize border-2 mt-5 focus:border-black rounded-lg pl-3 h-10 w-9/12 outline-none" placeholder="Category name" />
                </div>
            </div>
            <div className="flex justify-end mt-3 w-9/12 ">
                <button onClick={handelSubmit} className="capitalize py-2 px-4 rounded-lg bg-base hover:bg-amber-400 font-medium mr-54">Save edits</button>
            </div>
            {
                isPress ? loading ? <div className='m-auto '>
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                    >
                        <span
                            className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip:rect(0,0,0,0)"
                        >
                            Loading...
                        </span>
                    </div>
                </div> : <h4>It's finished</h4> : null
            }
            <ToastContainer />
        </div>
    );
}

export default AdminCategory;
