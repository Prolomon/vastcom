

const Card = ({title, icon, data, update, style, path}) => {
  return (
    <div className="h-auto p-4 shadow-sm bg-white dark:bg-slate-800 dark:border border-slate-500  rounded-2xl">
      <div className="w-full flex items-center justify-between py-1">
        <div className="">
          <h6 className="capitalize text-sm text-gray-600 dark:text-gray-300">{title}</h6>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-400">{data}</h1>
        </div>
        <div className={style}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default Card