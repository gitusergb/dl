import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import styled from 'styled-components';


const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

const App = () => {

    return (
        <Provider store={store}>
            <Container>
                <ProductList />
            </Container>
        </Provider>
    );
};

export default App;
// Styled components
const Container = styled.div`
    /* Styles */
    
    background-color:#dbe8f4;
    padding: 10px;
    div{
        padding: 10px;
    }
`;
