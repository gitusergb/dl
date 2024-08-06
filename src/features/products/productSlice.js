
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://pl-uzk8.onrender.com/hwpro/');
    return response.data;
});
// Add a new product to the server and update the state
export const addProduct = createAsyncThunk('products/addProduct', async (product, { rejectWithValue }) => {
    try {
       //console.log('Adding product:', product);
        const response = await axios.post('https://pl-uzk8.onrender.com/hwpro/create', product);
        //console.log('Product added:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
        return rejectWithValue(error.response.data);
    }
});


export const updateProduct = createAsyncThunk('products/updateProduct', async ({productID, updates }) => {
    // console.log('Product',typeof(+productID), id, updates );
    const response = await axios.patch(`https://pl-uzk8.onrender.com/hwpro/update/${productID}`, updates);
    console.log('Product data',response.data );
    return response.data;
});

export const searchProducts = createAsyncThunk('products/searchProducts', async (searchTerm) => {
    const response = await axios.get(`https://pl-uzk8.onrender.com/hwpro/search`, {
        params: { q: searchTerm }
    });
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
        filterProducts: (state, action) => {
            const { type, value } = action.payload;
            state.filteredProducts = state.products.filter(product => 
                product.product[type].includes(value) || product.material.includes(action.payload)
            );
        }
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
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
                state.filteredProducts.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || action.error.message;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                
                const index = state.products.findIndex(p => p._id === action.payload._id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                    state.filteredProducts = state.products;
                }
            })
            .addCase(searchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.filteredProducts = action.payload;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { filterProducts} = productSlice.actions;
export default productSlice.reducer;
