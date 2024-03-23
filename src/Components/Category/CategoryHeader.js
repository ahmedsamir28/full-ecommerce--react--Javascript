import React, { useEffect, useState } from 'react';
import AllCategoryPageHook from '../../Custom/Category/AllCategoryPageHook';
import { Link } from 'react-router-dom';

const CategoryHeader = () => {
    const [category, loading, pageCount, getPage] = AllCategoryPageHook()

    const [items, setItems] = useState([])

    useEffect(() => {
        if (category)
            setItems(category.data)
    }, [category])

    return (
        <>
            <div className='container flex justify-start items-center border-b-2 py-2 capitalize flex-wrap'>

                <div className="hover:text-amber-500 cursor-pointer py-1 px-5">all</div>
                {
                    items ? (items.map((item, index) => {
                        return (<Link to={`/products/category/${item._id}`} style={{ textDecoration: 'none' }}>
                            <div key={index} className="hover:text-amber-500 cursor-pointer py-1 px-5">{item.name}</div>
                        </Link>
                        )
                    })) : null
                }
                <Link to="/categories">
                    <div
                        className="hover:text-amber-500 cursor-pointer py-1 px-5">
                            more
                    </div>
                </Link>

            </div>
        </>
    );
}

export default CategoryHeader;
