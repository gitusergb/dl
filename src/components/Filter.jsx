import React from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../features/products/productSlice';
import styled from 'styled-components';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(filterProducts(e.target.value));
    };

    return (
        <Hori>
            <div>
            <select onChange={handleFilterChange}>
               <option value="Products">Products</option>
            </select>
            <select onChange={handleFilterChange}>
            <option value="Materials">Materials</option>
            </select>
            <input type="text" placeholder='Filter'/>
            </div>
            <div>
            <select onChange={handleFilterChange}>
               <option value="BulkActions">Bulk Actions</option>
            </select>
            <input type="text" placeholder='Apply'/>
            </div>
            <div>
            <input type="text" placeholder='Product'/>
            <select onChange={handleFilterChange}>
            <option value="25">25</option>
            </select>
           
            </div>
            
          
        </Hori>
    );
};

export default Filter;
const  Hori = styled.div`
display: flex;
justify-content: space-between;
div{
    display: flex;
justify-content: space-between;
gap: 10px;
}
span{
    color:black;
    background-color:white;
    width: 250px;
    height: 30px;
    padding: 5px;
    border-radius: 50px;
    border-color: #b0bdbc;
    /* border: 1px solid; */
}
input{
    border: 0px;
    width: 50px;
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