import CustomHeading from '@/Components/Common/CustomHeading';
import ProductBox1 from '@/Components/Common/ProductBox/ProductBox1/ProductBox1';
import { useMemo } from 'react';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { productSliderOption } from '../../../../Data/SliderSettingsData';

const ProductSection1 = ({ dataAPI, ProductData, svgUrl, noCustomClass = false, customClass, classObj, customSliderOption = productSliderOption, isHeadingVisible = true }) => {

  const filterProduct = useMemo(() => {
    return ProductData?.filter((el) => (dataAPI?.product_ids ? dataAPI?.product_ids?.includes(el.id) : el));
  }, [ProductData, dataAPI]);

  // console.log(ProductData, dataAPI?.product_ids);
  
  return (
    <>
      {isHeadingVisible ? (
        <CustomHeading title={dataAPI?.title} svgUrl={svgUrl} subTitle={dataAPI?.description} customClass={customClass ? customClass : noCustomClass ? '' : 'section-t-space title'} />
      ) : null}
      <div className={`${classObj?.productStyle} overflow-hidden`}>
        <div className='no-arrow'>
          <Slider {...customSliderOption}>
            {filterProduct?.map((elem) => (
              <div key={elem?.id}>
                <Row className='m-0'>
                  <Col xs={12} className='px-0'>
                    <ProductBox1 imgUrl={elem?.product_thumbnail} productDetail={{ ...elem }} classObj={classObj} />
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ProductSection1;
