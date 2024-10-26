import { useTranslation } from '@/app/i18n/client';
import Avatar from '@/Components/Common/Avatar';
import Btn from '@/Elements/Buttons/Btn';
import CategoryContext from '@/Helper/CategoryContext';
import I18NextContext from '@/Helper/I18NextContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import { RiAlignLeft, RiCloseLine } from 'react-icons/ri';
import { placeHolderImage } from '../../../../Data/CommonPath';

const HeaderCategorySingle = ({ customClass, icon, dropDownClass }) => {
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory('product');
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const { themeOption } = useContext(ThemeOptionContext);
  const filteredCategories = useMemo(() => {
    return categoryData?.filter((elem) => themeOption?.header?.category_ids?.includes(elem.id));
  });
  return (
      <div className={`${customClass ? customClass : 'header-nav'}`} style={{marginRight: '20px'}}>
        <div className='header-nav-left'>
          <Btn className={`dropdown-category ${dropDownClass ?? ''}`}>
            {icon ? icon : <RiAlignLeft />}
            <span>{t('Categories')}</span>
          </Btn>

          <div className='category-dropdown'>
            <div className='category-title'>
              <h5>{t('Categories')}</h5>
              <Btn type='button' className='p-0 close-button text-content'>
                <RiCloseLine />
              </Btn>
            </div>

            <ul className='category-list'>
              {filteredCategories?.map((elem, i) => (
                <li className='onhover-category-list' key={i}>
                  <Link href={`/${i18Lang}/collections?category=${elem?.slug}`} className='category-name'>
                    <Avatar data={elem?.category_icon} placeHolder={placeHolderImage} name={elem.name} />
                    <h6>{elem?.name}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <ClassicHeaderMenu />

        <TodaysDeal /> */}
      </div>

  );
};

export default HeaderCategorySingle;
