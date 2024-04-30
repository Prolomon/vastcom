// import React from 'react'
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo";
import { useFormik } from 'formik';

const Form = () => {

  const formik = useFormik({
    initialValues: {
      avatar: '',
      productName: '',
      productPrice: '',
      sellPrice: '',
      quantity: '',
      category: '',
      subCategory: '',
      uniqueId: '',
      discount: ''
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="h-auto py-3 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-2">
      <SectionOne avatar={formik.values.avatar} change={formik.handleChange} productPrice={formik.values.productPrice} productName={formik.values.productName} sellPrice={formik.values.sellPrice} />
      <SectionTwo change={formik.handleChange} quantity={formik.values.quantity} purchaseDate={formik.values.purchaseDate} category={formik.values.category} uniqueId={formik.values.uniqueId} discount={formik.values.discount}/>
    </form>
  )
}

export default Form