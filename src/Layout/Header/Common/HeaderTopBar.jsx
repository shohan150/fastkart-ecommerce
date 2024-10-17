import I18NextContext from '@/Helper/I18NextContext';
import ThemeOptionContext from '@/Helper/ThemeOptionsContext';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'reactstrap';
// import HeaderCurrency from './HeaderCurrency';
import Link from 'next/link';
import TopbarLeft from './TopbarLeft';
import TopbarSlider from './TopbarSlider';
// import TopLanguage from './TopLanguage';

const HeaderTopBar = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { themeOption } = useContext(ThemeOptionContext);
  const addClass = useRef(null);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName == `/${i18Lang}/theme/tokyo`) {
      addClass.current?.classList.add('bg-dark');
    }

    return () => {
      addClass.current?.classList.remove('bg-dark');
    };
  }, [i18Lang, pathName]);
  return (
    <div className={`header-top${themeOption?.header?.page_top_bar_dark ? ' bg-dark' : ''}`} ref={addClass}>
      <div className='container-fluid-lg'>
        <Row>
          <TopbarLeft />
          <TopbarSlider />
          <Col lg={3}>
            <ul className='about-list right-nav-about'>
              {/* <li className='right-nav-list'>
                <TopLanguage />
              </li>
              <li className='right-nav-list'>
                <HeaderCurrency />
              </li> */}
              <li className='right-nav-list'>
                <Link href={`/${i18Lang}/all-products`} className='text-white'>
                  All Products
                </Link>
              </li> 
              <li className='right-nav-list'>
                <Link href={`/${i18Lang}/all-offers`} className='text-white'>
                  All Offers
                </Link>
              </li> 
            </ul>

          </Col>
        </Row>
      </div>
    </div>
  );
};
export default HeaderTopBar;
