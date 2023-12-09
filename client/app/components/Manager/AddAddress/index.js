/**
 *
 * AddAddress
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import Checkbox from '../../Common/Checkbox';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const AddAddress = props => {
  const { addressFormData, formErrors, addressChange, addAddress } = props;

  const handleSubmit = event => {
    event.preventDefault();
    addAddress();
  };

  return (
    <div className='add-address'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['address']}
              label={'Хаяг'}
              name={'address'}
              placeholder={'Хаяг: Хороо, гудамж, байр, тоот'}
              value={addressFormData.address}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              error={formErrors['city']}
              label={'Хот/Аймаг'}
              name={'city'}
              placeholder={'Хот/Аймаг'}
              value={addressFormData.city}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['state']}
              label={'Дүүрэг/Сум'}
              name={'state'}
              placeholder={'Дүүрэг/Сум'}
              value={addressFormData.state}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
          {<Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['country']}
              label={'Орцны код:'}
              name={'country'}
              placeholder={'Орцны код'}
              value={addressFormData.country}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col> }
          { <Col xs='12' lg='6'>
            <Input
              type={'text'}
              error={formErrors['zipCode']}
              label={'Нэмэлт мэдээлэл:'}
              name={'zipCode'}
              placeholder={'нэмэлтээр оруулах мэдээлэл'}
              value={addressFormData.zipCode}
              onInputChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col> }
          <Col xs='12' md='12'>
            <Checkbox
              id={'default'}
              label={'Үндсэн хаяг'}
              name={'isDefault'}
              checked={addressFormData.isDefault}
              onChange={(name, value) => {
                addressChange(name, value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-address-actions'>
          <Button type='submit' text='Хаягыг нэмэх' />
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
