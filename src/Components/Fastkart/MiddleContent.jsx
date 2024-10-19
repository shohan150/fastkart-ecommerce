import ProductIdsContext from '@/Helper/ProductIdsContext';
import { useContext } from 'react';
import WrapperComponent from '../Common/WrapperComponent';
import OfferBanner from '../ParisTheme/OfferBanner';
import BrandCategory from './BrandCategory';
import DealProduct from './DealProducts';
import DetailedBanner from './DetailedBanner';



const MiddleContent = ({ dataAPI }) => {
  const { filteredProduct } = useContext(ProductIdsContext);
  return (
    <>
      {dataAPI?.product_with_deals?.status && <DealProduct dataAPI={dataAPI?.product_with_deals} />}

      {dataAPI?.offer_banner?.status && (
        <WrapperComponent colProps={{ xs: 12 }}>
          <OfferBanner classes={{ customHoverClass: 'offer-box hover-effect' }} imgUrl={dataAPI?.offer_banner?.image_url} elem={dataAPI?.offer_banner} />
        </WrapperComponent>
      )}

            {/* shop by brands (madrid) */}
            {dataAPI?.categories_image_list?.status && <BrandCategory dataAPI={dataAPI?.categories_image_list} />}

      {dataAPI?.product_bundles?.status && dataAPI?.product_bundles?.bundles?.length > 0 && (
        <WrapperComponent noRowCol={true}>
          <DetailedBanner dataAPI={dataAPI?.product_bundles?.bundles} />
        </WrapperComponent>
      )}
    </>
  );
};

export default MiddleContent;
