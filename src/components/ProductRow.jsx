import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/products/productSlice';
import styled from 'styled-components';

const ProductRow = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [details, setDetails] = useState({ ...product.details });

    const handleQuickEdit = () => setIsEditing(!isEditing);
    const handleChange = (e) => setDetails({ ...details, [e.target.name]: e.target.value });
    const handleSave = () => {
        dispatch(updateProduct({ id: product.id, details }));
        setIsEditing(false);
    };

    return (
        <TR>
            <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSnCj0MQ6UqCG7zuVTtuaXBs9ELvpZ372_Q&s" alt="square" />{product.name}</td>
            <td>
                <button onClick={handleQuickEdit}>Quick Edit | Add Product Details</button>
                {isEditing && (
                    <div>
                        <input name="shape" value={details.shape} onChange={handleChange} placeholder="Shape" />
                        <input name="length" value={details.length} onChange={handleChange} placeholder="Length" />
                        <button onClick={handleSave}>Save</button>
                    </div>
                )}
            </td>
            <td>{product.material}</td>
            <td>{product.grade}</td>
           
        </TR>
    );
};

export default ProductRow;
const TR = styled.tr`
    /* Styles */
    border-bottom: 1px solid gray;
    button {
    background-color:#d2fcfc1f;
    color:#4e8d8d;
    width: 200px;
    height: 40px;
    padding: 5px;
    font-size: small;
   border: none;
  
  }
`;