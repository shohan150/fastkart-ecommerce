'use client';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Loader from '@/Layout/Loader';
import StickyCart from '@/Layout/StickyCart';
import request from '@/Utils/AxiosUtils';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import HomeBanner from './HomeBanner';
import NewsLetter from './NewsLetter';
import ProductSection from './ProductSection';
import TopBanner from './TopBanner';

const ParisTheme = () => {
  const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const { data, isLoading, refetch, fetchStatus } = useQuery(['paris'], () => request({ url: `${HomePageAPI}/paris` }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });
  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (!isLoading && fetchStatus == 'fetching') {
      document.body.classList.add('skeleton-body');
    } else {
      document.body.classList.remove('skeleton-body');
    }

    if (data?.content?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.content?.products_ids))?.join(',') });
    }
  }, [fetchStatus == 'fetching', !isLoading]);
  if (isLoading) return <Loader />;
  return (
    <>
      <TopBanner dataAPI={data?.content} />

      {data?.content?.featured_banners?.status && <HomeBanner bannersData={data?.content?.featured_banners?.banners} />}

      <ProductSection dataAPI={data?.content} />

      {data?.content?.news_letter?.status && <NewsLetter dataAPI={data?.content?.news_letter} />}
      {themeOption?.general?.sticky_cart_enable && themeOption?.general?.cart_style !== 'cart_sidebar' && <StickyCart />}
    </>
  );
};

export default ParisTheme;
