import { useTranslation } from '@/app/i18n/client';
import Avatar from '@/Components/Common/Avatar';
import CustomHeading from '@/Components/Common/CustomHeading';
import CategoryContext from '@/Helper/CategoryContext';
import I18NextContext from '@/Helper/I18NextContext';
import Link from 'next/link';
import { useContext } from 'react';
import Slider from 'react-slick';
import { placeHolderImage } from '../../../../Data/CommonPath';

const ProductSection2 = ({ dataAPI, isHeadingVisible = false, classes = {}, svgUrl }) => {
  const { filterCategory } = useContext(CategoryContext);
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const categoryData = filterCategory('product');
  return (
    <>
      {isHeadingVisible ? <CustomHeading customClass={classes?.noCustomClass ? '' : 'section-t-space title'} title={dataAPI?.title} svgUrl={svgUrl} subTitle={dataAPI?.description} /> : ''}

      <div className='category-slider-2 product-wrapper arrow-slider'>
        <Slider {...classes?.sliderOption}>
          {categoryData?.map((elem) => (
            <div key={elem.id}>
              <Link href={`/${i18Lang}/collections?category=${elem?.slug}`} className={`category-box ${classes?.link} category-dark`}>
                <div>
                  <Avatar data={elem?.category_icon} placeHolder={placeHolderImage} name={elem.name} />
                  <h5>{elem.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductSection2;
