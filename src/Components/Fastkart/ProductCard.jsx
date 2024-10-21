import ProductIdsContext from '@/Helper/ProductIdsContext';
import { useContext } from 'react';
import { Col } from 'reactstrap';
import { categorySliderOption } from '../../../Data/SliderSettingsData';
import { LeafSVG } from '../Common/CommonSVG';
import ProductSection1 from './ProductSections/ProductSection1';
import ProductSection2 from './ProductSections/ProductSection2';
import ProductSection3 from './ProductSections/ProductSection3';
import ProductSection4 from './ProductSections/ProductSection4';
import ShopCategory from './ShopCategory';
import ShowCaseBanner from './ShowCaseBanner';
import SingleBanner from './SingleBanner';
import TwoBanners from './TwoBanners';
import VegetableBanner from './VegetableBanner';

const ProductCard = ({ dataAPI }) => {
  const { filteredProduct } = useContext(ProductIdsContext);

  return (
    <Col xxl={dataAPI?.main_content?.sidebar?.status ? 9 : 12} xl={dataAPI?.main_content?.sidebar?.status ? 8 : 12}>
      {dataAPI?.main_content?.section1_products?.status && dataAPI?.main_content?.section1_products?.product_ids.length > 0 && (
        <ProductSection1
          dataAPI={dataAPI?.main_content?.section1_products}
          ProductData={filteredProduct}
          // svgUrl={<LeafSVG className='icon-width' />}
          noCustomClass={true}
          classObj={{ productStyle: 'product-modern', productBoxClass: '' }}
        />
      )}


      {dataAPI?.categories_image_list?.status && <ShopCategory dataAPI={dataAPI?.categories_image_list} />}
      
      {dataAPI?.main_content?.section2_categories_list?.status && (
        <ProductSection2
          isHeadingVisible={true}
          dataAPI={dataAPI?.main_content?.section2_categories_list}
          svgUrl={<LeafSVG className='icon-width' />}
          classes={{ sliderOption: categorySliderOption }}
        />
      )}
      {dataAPI?.main_content?.section3_two_column_banners?.status && <ShowCaseBanner dataAPI={dataAPI?.main_content?.section3_two_column_banners} />}
      {dataAPI?.main_content?.section4_products?.status && (
        <ProductSection3 dataAPI={dataAPI?.main_content?.section4_products} ProductData={filteredProduct} svgUrl={<LeafSVG className='icon-width' />} />
      )}
      {dataAPI?.main_content?.section5_coupons?.status && (
        <SingleBanner
          classes={{ sectionClass: 'section-t-space sale-banner' }}
          image_url={dataAPI?.main_content?.section5_coupons?.image_url}
          height={138}
          width={1137}
          dataAPI={dataAPI?.main_content?.section5_coupons}
        />
      )}
      {dataAPI?.main_content?.section6_two_column_banners?.status && <TwoBanners dataAPI={dataAPI} />}
      {dataAPI?.main_content?.section7_products?.status && (
        <ProductSection4 dataAPI={dataAPI?.main_content?.section7_products} ProductData={filteredProduct} svgUrl={<LeafSVG className='icon-width' />} noCustomClass={true} />
      )}
      {dataAPI?.main_content?.section8_full_width_banner?.status && <VegetableBanner dataAPI={dataAPI} />}

    </Col>
  );
};

export default ProductCard;
