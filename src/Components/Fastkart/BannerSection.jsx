import WrapperComponent from '../Common/WrapperComponent';
import SingleBanner from '../ParisTheme/SingleBanner';

const BannerSection = ({ dataAPI }) => {
  return (
    <WrapperComponent colProps={{ xs: 12 }} classes={{ fluidClass: 'sale-banner' }}>
      <SingleBanner image_url={dataAPI?.image_url} height={139} width={1585} dataAPI={dataAPI} />
    </WrapperComponent>
  );
};

export default BannerSection;
