import OfferBanner from '@/Components/ParisTheme/OfferBanner';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { useContext } from 'react';
import { Col } from 'reactstrap';
import OtherSitesPrices from './OtherSitePrices';
// import VendorBox from './VendorBox';

const ProductDetailSidebar = ({ productState }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <Col xxl={3} xl={4} lg={5} className='d-none d-lg-block '>
      <div className='right-sidebar-box'>
        {/* <VendorBox productState={productState} /> */}
        {themeOption?.product?.is_trending_product && productState?.product?.categories?.length > 0 && <OtherSitesPrices productState={productState} />}
        {themeOption?.product?.banner_enable && themeOption?.product?.image_url && (
          <OfferBanner classes={{ customClass: 'ratio_156 pt-25', customHoverClass: 'home-contain' }} imgUrl={themeOption?.product?.image_url} ratioImage={true} />
        )}
      </div>
    </Col>
  );
};

export default ProductDetailSidebar;
