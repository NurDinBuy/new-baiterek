import React from 'react';
import Slider from "../../slider";
import ObjectsOnSale from "../../objects-on-sale";


const SaleInformation = () => {
    return (
        <div className='Information'>
            <div className="container">
                <Slider/>
                <ObjectsOnSale/>
            </div>
        </div>
    );
};

export default SaleInformation;