

const CustomerList = () => {
  return (
    <li className='w-full flex items-center gap-2 mt-4' >
        <img src="../../public/img/profile.png" alt="costomer image" className="w-10 h-10 rounded-full" />
        <div className="dark:text-gray-400">
            <a href="#" className="hover:text-violet-900 font-medium">Jane Cooper</a>
            <h4 className="-mt-1">alma.lawson@gmail.com</h4>
        </div>
    </li>
  )
}

export default CustomerList