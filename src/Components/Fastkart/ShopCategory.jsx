import CategoryContext from '@/Helper/CategoryContext';
import { useContext, useMemo } from 'react';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { romeCategoryOptionCopy } from '../../../Data/SliderSettingsData';
import CustomHeading from '../Common/CustomHeading';
import CategoryContent from './CategoryContent';

const ShopCategory = ({ dataAPI }) => {
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = useMemo(() => {
    return dataAPI?.category_ids.length > 0 ? filterCategory('product')?.filter((category) => dataAPI?.category_ids?.includes(category.id)) : filterCategory('product');
  }, [filterCategory('product')]);
  return (
    <div className='category-section-2 container-fluid mt-4'>
      <CustomHeading title={dataAPI?.title} />
      <Row>
        <Col xs={12}>
          <div className='category-slider arrow-slider'>
            <Slider {...romeCategoryOptionCopy}>
              {categoryData?.map((elem, i) => (
                <CategoryContent elem={elem} key={i} />
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopCategory;
