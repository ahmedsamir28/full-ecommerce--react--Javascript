import React from 'react';
import SubTitle from '../../Utils/SubTitle';
import CategoryCard from '../Category/CategoryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryActions';
import { useEffect } from 'react';
import HomeCategoryHook from '../../Custom/Category/HomeCategoryHook';
const HomeCategory = () => {
    const [category, loading] = HomeCategoryHook();

    return (
        <>
            <div className='container mt-8 mb-10'>
                <SubTitle title="category name" buttonTitle="more of categories" pathText="/categories" />
                <div className='flex justify-between items-center mt-5 gap-y-14 flex-wrap'>
                    {
                        loading === false ? (
                            category.data ? ( 
                                category.data.slice(0, 4).map((item,index) => {
                                    return (<CategoryCard key={index} id={item._id} image={item.image} title={item.name} />)
                                })
                                    ) : <h4>There are no categories</h4>
                        ) : <div className='m-auto '>
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
                        </div>
                    }
                </div>
                <hr className='mt-10' />
            </div>
        </>
    );
}

export default HomeCategory;
