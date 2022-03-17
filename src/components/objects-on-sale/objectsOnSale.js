import React from 'react';
import './objectsOnSale.css'

const ObjectsOnSale = () => {
    return (
        <div className='sale_objects'>
            <div className='container'>
                <h1>Объекты в продаже</h1>
                <div className="onSale">
                    <div className="sale-cards"></div>
                    <div className="sale-cards"></div>
                    <div className="sale-cards"></div>
                    <div className="sale-cards"></div>
                </div>
            </div>
        </div>
    );
};

export default ObjectsOnSale;