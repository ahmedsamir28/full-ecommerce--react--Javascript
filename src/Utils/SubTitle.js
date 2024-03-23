import React from 'react';
import { Link } from 'react-router-dom';

const SubTitle = ({ title, buttonTitle, pathText }) => {
    return (
        <>
            <div className='container flex justify-between items-center'>
                <h6 className='capitalize text-md xs:text-2xl font-semibold '> {title} </h6>
                {
                buttonTitle ? (
                    <Link to={`${pathText}`}>
                        <span className='capitalize text-sm sm:text-sm hover:text-amber-500 cursor-pointer'> {buttonTitle} <i class="ml-2 fa-solid fa-arrow-right-long"></i> </span>
                    </Link>): null}
            </div>
        </>
    );
}

export default SubTitle;
