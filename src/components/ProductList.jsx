import React, { useEffect, useState } from 'react';
// import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import  productReducer from '../features/products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProductRow from './ProductRow';
import Filter from './Filter';
import Pagination from './Pagination';
import { fetchProducts , filterProducts} from '../features/products/productSlice';
import AddProductModal from './AddProductModal';



const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalProducts = products.length;

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <ProductC>
      <First>
        <Pbutton onClick={() => setIsModalOpen(true)}>+ Add Products</Pbutton>
        <span><span className='Bol'>{totalProducts}/400</span> Products</span>
      </First>
      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Sec>
        <input type="text" name='search' placeholder='Search Products ...' />
        <button>Search</button>
      </Sec>

      <Filter />
     
      <MyT>
      <TABLE>
        <thead>
          <tr>
            <StyledTh>
              <ImgNa>
                <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSnCj0MQ6UqCG7zuVTtuaXBs9ELvpZ372_Q&s" alt="square" /></li>
                <li>Products</li>
              </ImgNa>
              
            </StyledTh>
            <StyledTh>Action</StyledTh>
            <StyledTh>Product Details</StyledTh>
            <StyledTh>Price in Unit</StyledTh>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
   
        </TABLE>
        </MyT>
        
      <Pagination
        currentPage={currentPage}
        totalCount={totalProducts}
        pageSize={productsPerPage}
        onPageChange={handlePageChange}
      />
    </ProductC>

  );
};

export default ProductList;

const ProductC = styled.div`
  padding: 20px;`

  const Pbutton = styled.button`
    background-color: #3474e6;
    color: #fafdfd;
    width: 250px;
    height: 40px;
    padding: 10px 20px;
    font-size: large;
    border-color: #b0bdbc;
    border-radius: 50px;
    cursor: pointer;
`;

const First = styled.div`
  display: flex;
  gap: 20px;
  span {
    color: black;
    background-color: white;
    width: 180px;
    height: 30px;
    padding: 5px;
    border-radius: 50px;
    border-color: #b0bdbc;
  }
  .Bol {
    font-weight: 700;
  }
`;

const Sec = styled.div`
  display: flex;
  input {
    width: 500px;
    height: 40px;
    border: 0.5px;
    padding: 0px 20px 0px 20px;
    border-radius: 10px 0px 0px 10px;
  }
  button {
    background-color: #3474e6;
    color: #fafdfd;
    width: 150px;
    height: 40px;
    padding: 5px 15px 5px 5px;
    font-size: large;
    border-color: #b0bdbc;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
  }
`;
const MyT = styled.div`
background-color: #ffffff29;
display: block;
  width: 99%;
  /* border: 1px solid yellow; */
  border-radius: 10px;
  
`;

const TABLE = styled.table`
background-color: white;
  width: 100%;
  border-radius: 10px;
  border-collapse: collapse;
  justify-content: left;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  img {
    height: 20px;
    width: auto;
  }
`;

const StyledTh = styled.th`
  background-color: #73ceff;
  padding: 10px;
  text-align: left;
  border: none;
`;
const ImgNa = styled.ul`
list-style-type:none;
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`