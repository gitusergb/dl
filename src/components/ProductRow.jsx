import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/products/productSlice';
import styled from 'styled-components';

const ProductRow = ({ product }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [details, setDetails] = useState({ ...product.details});
    const handleClose = () => setIsEditing(false);
    // const handleQuickEdit = () => setIsEditing(!isEditing);
    const handleQuickEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => setDetails({ ...details, [e.target.name]: e.target.value });
    const handleSave = () => {
       // console.log(product , product._id, details)
        dispatch(updateProduct({ productID: product._id, updates:details }));
        // setIsEditing(true);
        setIsEditing(false);

    };

    return (
        <TR>
              {!isEditing ? (
                // < StyledTd >
               <>
            
            <td>
                <ImgNa>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSnCj0MQ6UqCG7zuVTtuaXBs9ELvpZ372_Q&s" alt="square" /></li>
                <li>{product.name}</li>
            </ImgNa>
                
                </td>
            <td>
                <button className="edit" onClick={handleQuickEdit}>Quick Edit | Add Product Details</button>
            </td>
            <td>
                <ul>
                <li>Material:{product.material}</li>
                <li>Length:{product.Length}</li>
                <li>Shape:{product.Shape}</li>
                <li>Price: {product.Price}</li>

            </ul>

            </td>
            <td>{product.Price}</td>
            </>
            // </ StyledTd >
            ) :(
                <td colSpan="4">
                      <EditContainer>
                 <div>
                 <h4>Quick Edit </h4>
                 <div className='flexclass'>
                            <label >
                                Title: </label>
                                <input
                                    name="name"
                                    value={details.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                />
                           
                            <label >
                                Price: </label>
                                <input
                                    name="Price"
                                    value={details.Price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    required
                                />
                           
                 </div>
                 </div>
                    <hr />
                    <h5>Product Details: </h5>
                <div className='flexclass'>
                            <label >
                                Material:</label>
                                <input
                                    name="material"
                                    value={details.material}
                                    onChange={handleChange}
                                    placeholder="Material"
                                />
                            
                            <label >
                                Length:</label>
                                <input
                                    name="Length"
                                    value={details.Length}
                                    onChange={handleChange}
                                    placeholder="Length"
                                />
                            
                </div>
                <div className='flexclass'>
                             <label  >
                                Shape:
                                </label>  
                                <input
                                    name="Shape"
                                    value={details.Shape}
                                    onChange={handleChange}
                                    placeholder="Shape"
                                />
                                             
                            <label  >
                                Grade:
                                </label>
                                <input
                                    name="grade"
                                    value={details.grade}
                                    onChange={handleChange}
                                    placeholder="Grade"
                                />
                            
                </div>
                <div className='flexclass'>
                <Pbutton onClick={handleSave}>Update</Pbutton>
                <button onClick={handleClose}>Cancel</button>
                </div>
            </EditContainer>
            </td>
            )}
        </TR>
    );
};

export default ProductRow;
const TR = styled.tr`
    /* Styles */
   
 border-bottom: 1px solid gray;
 
 .edit{
    background-color:#d2fcfc1f;
    color:#4e8d8d;
    width: 200px;
    height: 40px;
    padding: 5px;
    font-size: small;
   border: none;
   cursor: pointer;
  }
`;

const Pbutton = styled.button`
    background-color: #3474e6;
    color: #fafdfd;
    width: 150px;
    height: 30px;
    padding: 5px;
    font-size:medium;
    border-color: #b0bdbc;
    border-radius: 50px;
    cursor: pointer;
`;

const ImgNa = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px;
gap: 10px;
`

// //////////////////gb//////////////////////////

// const StyledTd = styled.td`
//     padding: 8px;
//     border: 1px solid #ccc;
// `;

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .flexclass {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-left: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        margin-top:5px;
        background-color: #3474e6;
        color: #fafdfd;
        width: 150px;
        height: 30px;
        padding: 5px;
        font-size:medium;
        border-color: #b0bdbc;
        border-radius: 50px;
    cursor: pointer;
        &:hover {
            background-color: #0056b3;
        }
    }
`;
