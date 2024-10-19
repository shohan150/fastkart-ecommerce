'use client';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Loader from '@/Layout/Loader';
import StickyCart from '@/Layout/StickyCart';
import request from '@/Utils/AxiosUtils';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import BannerSection from './BannerSection';
import MiddleContent from './MiddleContent';
import RomeHomeBanner from './RomeHomeBanner';

const FastKart = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { getProductIds, setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);

  const { data, isLoading, refetch, fetchStatus } = useQuery(['fastkart'], () => request({ url: `${HomePageAPI}/fastkart` }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });

  // fetch data after mount
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (!isLoading && fetchStatus == 'fetching') {
      document.body.classList.add('skeleton-body');
    } else {
      document.body.classList.remove('skeleton-body');
    }

    //from the fetched data we get an array of product_ids ( [1, 2, 2, 3]). From that we are creating a Set so that we can get unique values; ensuring no repetitions ({1,2,3}), then convert the set back into array ([1,2,3]).concatenates all the elements of the array into a single string ("1,2,3"), comma separated. Then pass the string it to the ids property in the setGetProductIds setter function.
    if (data?.content?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.content?.products_ids))?.join(',') });
    }
  }, [fetchStatus == 'fetching', !isLoading]);
  
  if (isLoading) return <Loader />;
  return (
    <>
      <RomeHomeBanner dataAPI={data?.content?.home_banner} />


      {data?.content?.coupons?.status && <BannerSection dataAPI={data?.content?.coupons} />}

      <MiddleContent dataAPI={data?.content} />

  
      {themeOption?.general?.sticky_cart_enable && themeOption?.general?.cart_style !== 'cart_sidebar' && <StickyCart />}
    </>
  );
};

export default FastKart;
