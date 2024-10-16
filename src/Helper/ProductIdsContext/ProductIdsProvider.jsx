import request from '@/Utils/AxiosUtils';
import { ProductAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ProductIdsContext from '.';

const ProductIdsProvider = (props) => {
  const [getProductIds, setGetProductIds] = useState({});
  const [filteredProduct, setFilteredProduct] = useState([]);

  //the tanstack query function
  const { data, refetch, isLoading } = useQuery([ProductAPI, getProductIds?.ids], () => request({ url: ProductAPI, params: { ...getProductIds, status: 1 } }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data.data,
  });
  
  // console.log( getProductIds.length);

  useEffect(() => {
    // if user sets any slug to the getProductIds state, then by requesting to this route '/api/product', find out all the relevant product ids. but length diye checking korar karon ekhono sure na.
    Object.keys(getProductIds).length > 0 && refetch();
  }, [getProductIds?.ids]);

  useEffect(() => {
    if (data) {
      setFilteredProduct((prev) => data);
    }
  }, [isLoading, getProductIds]);
  
  return <ProductIdsContext.Provider value={{ ...props, filteredProduct, setGetProductIds, isLoading }}>{props.children}</ProductIdsContext.Provider>;
};

export default ProductIdsProvider;
