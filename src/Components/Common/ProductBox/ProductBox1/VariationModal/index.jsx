import CustomModal from '@/Components/Common/CustomModal';
import ProductAttribute from '@/Components/ProductDetails/Common/ProductAttribute/ProductAttribute';
import { useState } from 'react';
import { Col, Row } from 'reactstrap';
import LeftSideModal from './LeftSideModal';
import RightVariationModal from './RightSideModal';
import VariationAddToCart from './VariationAddToCart';
import VariationModalQty from './VariationModalQty';

const VariationModal = ({ productObj, variationModal, setVariationModal }) => {
  const [cloneVariation, setCloneVariation] = useState({ product: productObj, attributeValues: [], productQty: 1, selectedVariation: '', variantIds: [] });

  const products = [
    {
      image: 'https://img.freepik.com/free-photo/arrangement-healthy-food-fridge_23-2149022056.jpg',
      name: 'Product 1',
      brand: 'Brand A',
      price: 29.99,
      details: 'This is a great product.',
    },
    {
      image: 'https://img.freepik.com/free-vector/glowing-open-fridge-illustration_1284-23313.jpg',
      name: 'Product 2',
      brand: 'Brand B',
      price: 39.99,
      details: 'This product is even better.',
    },
  ];

  return (
    <CustomModal modal={productObj?.id == variationModal} setModal={setVariationModal} classes={{ modalClass: 'view-modal modal-lg theme-modal', modalHeaderClass: 'p-0' }}>
      <Row className='g-sm-4 g-2'>
        <LeftSideModal cloneVariation={cloneVariation} productObj={productObj} />
        <Col lg='6'>
          <div className='right-sidebar-modal'>
            <RightVariationModal cloneVariation={cloneVariation} />
            {cloneVariation?.product && productObj?.id == variationModal && <ProductAttribute productState={cloneVariation} setProductState={setCloneVariation} />}
            <div className='modal-bottom-cart'>
              <VariationModalQty cloneVariation={cloneVariation} setCloneVariation={setCloneVariation} />
              <VariationAddToCart cloneVariation={cloneVariation} setVariationModal={setVariationModal} />
            </div>

            {/* same product price on other sites */}
            {products.map((product, index) => (
        <div key={index} className="row bg-light mb-3 p-3">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h5>{product.name}</h5>
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>{product.details}</p>
          </div>
        </div>
      ))}
          </div>
        </Col>
      </Row>
    </CustomModal>
  );
};

export default VariationModal;
