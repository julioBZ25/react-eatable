import styled from '@emotion/styled';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../Button/Button';
import { useProducts } from '../Context/ProductsContext';
import { ContainerPage, ProductFooter } from '../Products-Dashboard/ProductsDashboard'

const FieldWrapper = ({ className, ...props }) => (
  <Field className={className} {...props} />
)
const FormWrapper = ({ className, ...props }) => (
  <Form className={className} {...props} />
)
export const CustomField = styled(FieldWrapper)`
  border: none;
  background-color: #e3e3eb;
  border-bottom: 1px solid black;
  width: 100%;
`
export const CustomForm = styled(FormWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ErrorMessage = styled.small`
  color: red;
`
const CreateProduct = () => {

  const { createProductDish, errors } = useProducts();

  return (
    <ContainerPage>
      <h1>Create Product</h1>
      <Formik
        initialValues={{
          name: '',
          price: '',
          description: '',
          category: '',
          picture_url: ''
        }}
        onSubmit={async (values) => {
          await createProductDish(values)
        }}
      >
        <CustomForm>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <CustomField type="text" id="name" name="name" placeholder="John Doe" />
            {errors && errors.name && errors.name.length > 0 && (
              <ErrorMessage>{`Name ${errors.name}`}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <br />
            <CustomField type="number" id="price" name="price" placeholder="$10.5" />
            {errors && errors.price && errors.price.length > 0 && (
              <ErrorMessage>{`Price ${errors.price}`}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <br />
            <CustomField
              id="description"
              name="description"
              placeholder="Awesome description for your product"
              type="text"
            />
            {errors && errors.description && errors.description.length > 0 && (
              <ErrorMessage>{`Description ${errors.description}`}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <br />
            <CustomField
              id="category"
              name="category"
              placeholder="Category for your product"
              type="text"
            />
            {errors && errors.category && errors.category.length > 0 && (
              <ErrorMessage>{`Category ${errors.category}`}</ErrorMessage>
            )}
          </div>
          <div>
            <label htmlFor="picture_url">Picture URL</label>
            <br />
            <CustomField
              id="picture_url"
              name="picture_url"
              placeholder="URL image for your product"
              type="url"
            />
            {errors && errors.picture_url && errors.picture_url.length > 0 && (
              <ErrorMessage>{`URL ${errors.picture_url}`}</ErrorMessage>
            )}
          </div>
          <ProductFooter>
            <Button type="submit">Submit</Button>
          </ProductFooter>
        </CustomForm>
      </Formik>
    </ContainerPage>
  )
}

export default CreateProduct