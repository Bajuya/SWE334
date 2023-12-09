/**
 *
 * EditProduct
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { ROLES } from '../../../constants';
import Input from '../../Common/Input';
import Switch from '../../Common/Switch';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';

const taxableSelect = [
  { value: 1, label: 'Тийм' },
  { value: 0, label: 'Үгүй' }
];

const EditProduct = props => {
  const {
    user,
    product,
    productChange,
    formErrors,
    brands,
    updateProduct,
    deleteProduct,
    activateProduct
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateProduct();
  };

  return (
    <div className='edit-product'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Бүтээгдэхүүний холбоос: </label>
        <Link to={`/product/${product.slug}`} className='default-link'>
          {product.slug}
        </Link>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Name'}
              name={'name'}
              placeholder={'Product Name'}
              value={product.name}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['sku']}
              label={'Тоо/Ш'}
              name={'sku'}
              placeholder={'Бүтээгдэхүүний Тоо/Ш'}
              value={product.sku}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['slug']}
              label={'Линк дээр харагдах нэр'}
              name={'slug'}
              placeholder={'Линк дээр харагдах нэр'}
              value={product.slug}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Тайлбар'}
              name={'description'}
              placeholder={'Бүтээгдэхүүний тайлбар'}
              value={product.description}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['quantity']}
              label={'Тоо/ш'}
              name={'quantity'}
              decimals={false}
              placeholder={'Product Quantity'}
              value={product.quantity}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'number'}
              error={formErrors['price']}
              label={'Үнэ'}
              name={'price'}
              min={1}
              placeholder={'Бүтээгдэхүүний үнэ'}
              value={product.price}
              onInputChange={(name, value) => {
                productChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['taxable']}
              label={'Урамшуулалтай эсэх'}
              multi={false}
              name={'taxable'}
              value={[product.taxable ? taxableSelect[0] : taxableSelect[1]]}
              options={taxableSelect}
              handleSelectChange={value => {
                productChange('taxable', value.value);
              }}
            />
          </Col>
          {user.role === ROLES.Admin && (
            <Col xs='12' md='12'>
              <SelectOption
                error={formErrors['brand']}
                label={'Брендийг сонгоно уу'}
                multi={false}
                value={product.brand}
                options={brands}
                handleSelectChange={value => {
                  productChange('brand', value);
                }}
              />
            </Col>
          )}
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              id={`enable-product-${product._id}`}
              name={'isActive'}
              label={'Бэлэн байгаа эсэх?'}
              checked={product?.isActive}
              toggleCheckboxChange={value => {
                productChange('isActive', value);
                activateProduct(product._id, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Хадгалах'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Устгах'
            onClick={() => deleteProduct(product._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
