import { useEffect } from "react"
import img from "../../../public/img/camera.png"

const Avatar = ({change, value}) => {
  // const [pImg, setPImg] = useState(img)
  useEffect(() => {
    const Avatar = document.querySelector('input[name=avatar]')
    console.log(Avatar);
    // setPImg(URL.createObjectURL(Avatar.files[0]))
  }, [])

  
  return (
    <div className="flex items-center lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col gap-2 mb-2">
      <div className='h-56 lg:w-[34rem] md:w-[35rem] sm:w-full xs:w-full xxs:w-full rounded-lg bg-transparent shadow-lg flex items-center justify-center relative overflow-hidden'>
        <img src={img} className="object-scale-down " alt="stock img" />
      </div>
      <input type="file" readOnly id="avatar" name="avatar" className="p-2 block w-full border border-gray-400 rounded-lg text-sm focus:border-violet-700 focus:ring-violet-700 file:bg-violet-700 file:border-none file:rounded-lg file:me-4 file:py-2 file:px-4 file:text-sm file:font-semibold dark:text-gray-300 file:text-white disabled:opacity-50 disabled:pointer-events-none" required onChange={change} value={value}/>
    </div>
  )
}

export default Avatar
