import { useFormik } from 'formik';

const Category = () => {

  const formik = useFormik({
    initialValues: {
      category: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className='w-full h-auto p-2 mt-4'>
        <h2 className="block text-lg dark:text-gray-400 font-medium mb-2 capitalize">add new category</h2>
        <form onSubmit={formik.handleSubmit} className="w-full grid lg:grid-cols-2 mb:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 items-center gap-2">
          <input type="text" name='category' id='category' className="py-3 px-4 block w-full border-gray-400 bg-transparent rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-300" required placeholder="e.g groceries" onChange={formik.handleChange} value={formik.values.category}/>
          <button type="submit" className="py-3 px-4 h-10 block w-full border-violet-700 hover:border-2 rounded-lg text-sm bg-violet-700 hover:border-violet-700 capitalize text-white hover:text-violet-700 hover:bg-transparent">submit</button>
        </form>
    </div>
  )
}

export default Category