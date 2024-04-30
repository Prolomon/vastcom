import { useFormik } from "formik"

const AddProduct = () => {

  const formik = useFormik({
    initialValues: {
      uniqueID: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full mt-2 flex gap-2 lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col">
        <input type="number" name="uniqueID" id="uniqueID"  className="py-3 px-4 bg-transparent block w-full border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none" required placeholder="e.g ###36" onChange={formik.handleChange} value={formik.values.uniqueID} />
        <input type="submit" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-violet-700 text-white focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none" />
    </form>
  )
}

export default AddProduct