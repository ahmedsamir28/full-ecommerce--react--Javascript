import React from 'react';
import PayMethoud from '../../Components/Checkout/PayMethoud';

const PayMethoudPage = () => {
    return (
        <div className='container my-10 '  style={{minHeight:'800px'}}>
            <h1 className='text-2xl capitalize mb-8 font-bold text-zinc-600'>Choose payment method</h1>
            <PayMethoud/>
        </div>
    );
}

export default PayMethoudPage;
