import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';

const AddProductModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [material, setMaterial] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = () => {
        console.log({ name, material, grade })
        dispatch(addProduct({ name, material, grade }));
     
    };

    const handleClose=()=>{
        onClose();
    }

    if (!isOpen) return null;

    return (
        <ModalBackdrop>
            <ModalContent>
            
                <ModalFir>
                    <h2>Add Products</h2>
                    <span>
                        {/* selected products from all the products */}
                        Products Selected
                        </span>
                        <CloseButton onClick={handleClose}>&times;</CloseButton>
                </ModalFir>
                <ModalMain>
                <select onChange={(e) => setName(e.target.value)}>
                    {/* Product options */}
                    <option value="" disabled selected> Products</option>
                    <option value="Pipes" type="text"name="Pipes">Pipes 21</option>
                    <option value="Forget Fittings">Forget Fittings 28</option>
                        <option value="Henges">Henges 28</option>
                        <option value="Dustles Seve">Dustles Seve 28</option>
                        <option value="Mali">Mali 27</option>
                </select>
                <select onChange={(e) => setMaterial(e.target.value)}>
                    {/* Material options */}
                    <option value="" disabled selected> Material</option>
                        <option value="Tubing">Tubing 21</option>
                        <option value="Fique Firrings">Fique Firrings 28</option>
                        <option value="apper Nickel">apper Nickel 28</option>
                        <option value="A Pres">A Pres 28</option>
                        <option value="Forget Fittings">Forget Fittings 28</option>
                        <option value="Henges">Henges 28</option>
                        <option value="Dustles Seve">Dustles Seve 28</option>
                        <option value="Mali">Mali 27</option>
                        <option value="Instrumentationinge">Instrumentationinge 27</option>
                        <option value="Sheet & Pa">Sheet & Pa 27</option>
                        <option value="Love Temporate Car">Love Temporate Car 27</option>
                        <option value="Bars">Bars 27</option>
                        <option value="Menu">Menu 27</option>
                        <option value="fitainless Steel">fitainless Steel 27</option>
                        <option value="Trankum">Trankum 27</option>
                        
                </select>
                <select onChange={(e) => setGrade(e.target.value)}>
                    {/* Grade options */}
                    <option value="" disabled selected> Grades</option>
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                </select>
                </ModalMain>
                <ButtonContainer>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleClose}>Cancel</button>
                </ButtonContainer>
            </ModalContent>
        </ModalBackdrop>
    );
};

export default AddProductModal;

// Styled components
const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

    h2 {
        margin-top: 0;
    }

    select {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    button {
        padding: 10px 30px;
        margin-right: 10px;
        border: none;
        background: #3474e6;
        color: white;
        cursor: pointer;
        border-radius: 50px;
        font-size: small;
    }

    button:last-of-type {
        background: #ccc;
    }
`;
const ModalFir = styled.div`

display: flex;
justify-content: space-around;
align-content: center;
span{
    margin: 10px;
}

`
const ModalMain = styled.div`

display: flex;
justify-content: space-around;
align-content: center;

`
const CloseButton = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content:center;
    gap: 10px;
`;
