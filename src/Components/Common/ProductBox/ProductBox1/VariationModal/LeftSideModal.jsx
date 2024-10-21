import I18NextContext from '@/Helper/I18NextContext';
import TextLimit from '@/Utils/CustomFunctions/TextLimit';
import Image from 'next/image';
import { useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Col } from 'reactstrap';
import { placeHolderImage } from '../../../../../../Data/CommonPath';
import { viewModalSliderOption } from '../../../../../../Data/SliderSettingsData';

const LeftSideModal = ({ cloneVariation, productObj }) => {
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const { nav1, nav2 } = state;
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  return (
    <Col lg='6'>
      <div className='view-image-slider'>
        <Slider asNavFor={nav2} ref={(slider) => (slider1.current = slider)}>
          {cloneVariation?.product?.product_galleries?.map((item, i) => (
            <div className='slider-image' key={i}>
              <Image src={item ? item?.original_url : placeHolderImage} className='img-fluid' alt={cloneVariation?.product?.name} width={500} height={500} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="thumbnail-slider">
        <Slider {...viewModalSliderOption} slidesToShow={cloneVariation?.product?.product_galleries?.length - 1} asNavFor={nav1} ref={(slider) => (slider2.current = slider)}>
          {cloneVariation?.product?.product_galleries?.map((item, i) => (
            <div className='slider-image' key={i}>
              <div className="thumbnail-image">
                <Image src={item ? item?.original_url : placeHolderImage} className='img-fluid' alt={cloneVariation?.product?.name} width={500} height={500} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/*>
       
       */}

      <div className='product-detail'>
        <h4>{t('Product Details')}:</h4>
        <div className='mt-2'>
          <TextLimit value={cloneVariation?.product?.short_description} maxLength={200} tag={'p'}/>
        </div>
      </div>

{/* <div className='pickup-box'>
        <div className='product-title'>
          <h4>{t('ProductInformation')}</h4>
        </div>
        <div className='product-info'>
          <ul className='product-info-list'>
            <li>
              {t('SKU')} : {cloneVariation?.selectedVariation?.sku ?? cloneVariation?.product?.sku}
            </li>
            <li>
              {t('StockStatus')} :
              {cloneVariation?.selectedVariation?.stock_status
                ? ModifyString(cloneVariation?.selectedVariation?.stock_status, false, '_')
                : ModifyString(cloneVariation?.product?.stock_status, false, '_')}
            </li>
            <li>
              {t('Quantity')} : {cloneVariation?.selectedVariation?.quantity ?? cloneVariation?.product?.quantity} {t('ItemsLeft')}
            </li>
          </ul>
        </div>
      </div> */}
    </Col>
  );
};

export default LeftSideModal;
