import { Formik } from 'formik';
import React from 'react'
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { useProducts } from '../Context/ProductsContext';
import { CustomField, CustomForm, ErrorMessage } from '../Create-Product/CreateProduct';
import { ContainerPage, ProductFooter } from '../Products-Dashboard/ProductsDashboard';

const EditProduct = () => {
  const { editProductDish, errors, dishes } = useProducts();
  const { id } = useParams();
  const [dish] = dishes.filter((dish) => dish.id === +id)
  console.log(dish)

  return (
    <ContainerPage>
      <h1>Edit Product</h1>
      <Formik
        initialValues={{
          name: dish.name,
          price: dish.price,
          description: dish.description,
          category: dish.category,
          picture_url: dish.picture_url,
        }}
        onSubmit={async (values) => {
          await editProductDish(id, values)
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
            <Button type="submit" color={'orange'} size={'default'}>Submit</Button>
          </ProductFooter>
        </CustomForm>
      </Formik>
    </ContainerPage>
  )
}

export default EditProduct