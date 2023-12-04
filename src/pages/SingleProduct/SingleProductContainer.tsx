import React from 'react';
import SingleProductView from './SingleProductView';
import useGlobalStore from 'shared/zustand/globalStore';
import { useProductService } from 'shared/service/productService';

const SingleProductContainer = () => {
  // ALL STATE

  // ZUSTAND GLOBAL STATE
  const { selectedProduct } = useGlobalStore();
  // ALL HOOKS
  const { getSingleProduct } = useProductService();
  const {
    data: singleProductData,
    isLoading: singleProductDataLoading,
    isFetching: singleProductDataFetching,
  } = getSingleProduct(selectedProduct);

  return (
    <SingleProductView
      singleProductData={singleProductData}
      singleProductDataLoading={singleProductDataLoading}
      singleProductDataFetching={singleProductDataFetching}
    />
  );
};

export default SingleProductContainer;
