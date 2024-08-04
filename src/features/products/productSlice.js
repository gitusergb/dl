
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://bb-nwfw.onrender.com/hw');
    return response.data;
});
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        filteredProducts: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.filteredProducts.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...action.payload.details };
                state.filteredProducts[index] = { ...state.filteredProducts[index], ...action.payload.details };
            }
        },
        filterProducts: (state, action) => {
            state.filteredProducts = state.products.filter(product => 
                product.product.includes(action.payload) || product.material.includes(action.payload)
            );
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addProduct, updateProduct, filterProducts } = productSlice.actions;
export default productSlice.reducer;
