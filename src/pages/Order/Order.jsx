import React from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div className='lg:grid-cols-4 ms-5'>
            <Link to={'/orders'}><button className="btn mt-4  me-4">All</button></Link>
            <Link to={'/orders/pending'}><button className="btn mt-4  me-4">Pending</button></Link>
            <Link to={'/orders/confirmed'}><button className="btn mt-4  me-4">Confirmed</button></Link>
            <Link to={'/orders/cancelled'}><button className="btn mt-4  me-4">Cancelled</button></Link>
            
        </div>
    );
};

export default Order;