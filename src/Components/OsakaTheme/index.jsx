'use client';
import ProductIdsContext from '@/Helper/ProductIdsContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Loader from '@/Layout/Loader';
import StickyCart from '@/Layout/StickyCart';
import request from '@/Utils/AxiosUtils';
import { HomePageAPI } from '@/Utils/AxiosUtils/API';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { osakaCategoryOption, osakaFeatureBlogOption } from '../../../Data/SliderSettingsData';
import { LeafSVG } from '../Common/CommonSVG';
import CustomHeading from '../Common/CustomHeading';
import WrapperComponent from '../Common/WrapperComponent';
import FeatureBlog from '../ParisTheme/FeatureBlog';
import NewsLetter from '../ParisTheme/NewsLetter';
import ProductSection2 from '../ParisTheme/ProductSections/ProductSection2';
import TopSelling from '../TokyoTheme/TopSelling';
import BannerSection from './BannerSection';
import HomeBannerOsaka from './HomeBannerOsaka';
import MiddleContent from './MiddleContent';

const FastKart = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  const { data, isLoading, refetch, fetchStatus } = useQuery(['osaka'], () => request({ url: `${HomePageAPI}/osaka` }), {
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
      <HomeBannerOsaka dataAPI={data?.content?.home_banner} />

      {data?.content?.categories_icon_list.status && (
        <WrapperComponent noRowCol={true}>
          <ProductSection2
            isHeadingVisible={true}
            dataAPI={data?.content?.categories_icon_list}
            svgUrl={<LeafSVG className='icon-width' />}
            classes={{ sliderOption: osakaCategoryOption, noCustomClass: true }}
          />
        </WrapperComponent>
      )}

      {data?.content?.coupons?.status && <BannerSection dataAPI={data?.content?.coupons} />}

      <MiddleContent dataAPI={data?.content} />

      {data?.content?.slider_products?.status && <TopSelling dataAPI={data?.content?.slider_products} classes={{ boxClass: 'category-menu', colClass: { sm: 6, xl: 4, xxl: 3 } }} />}

      {data?.content?.featured_blogs?.status && data?.content?.featured_blogs?.blog_ids?.length > 0 && (
        <WrapperComponent noRowCol={true}>
          <CustomHeading title={data?.content?.featured_blogs?.title} subTitle={data?.content?.featured_blogs?.description} svgUrl={<LeafSVG className='icon-width' />} />
          <Row>
            <Col xs={12}>
              <FeatureBlog dataAPI={data?.content?.featured_blogs} classes={{ sliderClass: 'slider-5 ratio_87', sliderOption: osakaFeatureBlogOption, height: 238, width: 417 }} />
            </Col>
          </Row>
        </WrapperComponent>
      )}

      {data?.content?.news_letter?.status && <NewsLetter dataAPI={data?.content?.news_letter} />}
      {themeOption?.general?.sticky_cart_enable && themeOption?.general?.cart_style !== 'cart_sidebar' && <StickyCart />}
    </>
  );
};

export default FastKart;
// test