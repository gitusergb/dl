import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../features/products/productSlice';
import styled from 'styled-components';

const Filter = () => {
    const dispatch = useDispatch();

    const handleProductChange = (e) => {
        dispatch(filterProducts({ type: 'name', value: e.target.value }));
    };

    const handleMaterialChange = (e) => {
        dispatch(filterProducts({ type: 'material', value: e.target.value }));
    };

    const handleBulkActionChange = (e) => {
        // will Add bulk action handling logic 
    };

    const handleNumberChange= (e) => {
        // will Add Number of products needed
    };

    return (
        <Hori>
            <div>
            <select onChange={handleProductChange}>
               <option value="Products" disabled selected>Products</option>
                <option value="Pipes">Pipes</option>
                <option value="Alley Stad">Alley Stad</option>
                <option value="Aluminum F22 Pins">Aluminum F22 Pins</option>
                <option value="Tubing">Tubing</option>
            </select>
            <select onChange={handleMaterialChange}>
            <option value="Materials" disabled selected>Materials</option>
            <option value="Fique Firrings">Fique Firrings</option>      
            <option value="apper Nickel">apper Nickel</option>
            <option value="A Pres">A Pres</option>
            <option value="Forget Fittings">Forget Fittings</option>    
            <option value="Henges">Henges</option>
            <option value="Dustles Seve">Dustles Seve</option>
            <option value="Mali">Mali</option>
            <option value="Instrumentationinge">Instrumentationinge</option>
            <option value="Sheet & Pa">Sheet & Pa</option>
            <option value="Love Temporate Car">Love Temporate Car</option>
            <option value="Bars">Bars</option>
            <option value="Menu">Menu</option>
            <option value="fitainless Steel">fitainless Steel</option>
            <option value="Trankum">Trankum</option>
            </select>
            <input type="text" placeholder='Filter' name='Filter'/>
            </div>
            <div>
            <select onChange={handleBulkActionChange}>
               <option value="BulkActions" disabled selected>Bulk Actions</option>
            </select>
            <input type="text" placeholder='Apply'/>
            </div>
            <div>
            <span>Products</span>
            <select onChange={handleNumberChange}>
            {[...Array(18).keys()].map(i => (
                        <option value={i+1} key={i}>{i+1}</option>
                    ))}
            </select>
           
            </div>
            
          
        </Hori>
    );
};

export default Filter;
const  Hori = styled.div`
width: 99%;
display: flex;
justify-content:space-between;
div{
    display: flex;
gap: 10px;
}
span{
    color:black;
    background-color:#d1e9e75a;
    width: 70px;
    height: 30px;
    padding: 5px 2px 5px 2px;
    border-radius: 50px;
    border-color: #b0bdbc;
    /* border: 1px solid; */
}
input{
    border: 0px;
    width: 60px;
    height: 30px;
    border-radius: 10px;
    justify-content: center;
    padding: 0px 5px 0px 5px;
}
select{
    border: 0px;
    width: auto;
    height: 30px;
    border-radius: 10px; 
    padding: 0px 5px 0px 5px;

}


`