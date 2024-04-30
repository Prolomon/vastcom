import Input from "./Input"
import Avatar from "./Avatar"
import SellPrice from "./SellPrice"

const SectionOne = ({change, productName, productPrice, sellPrice, avatar}) => {
  return (
    <div>
      <label htmlFor="avatar" className="block dark:text-gray-400 text-md font-medium mb-2 capitalize">product image</label>
      <Avatar change={change} value={avatar} />
      {/* Product Name */}
      <Input UniqueId="p_name" Label="product name" Type="text" Placeholder="e.g Dano milk" change={change} value={productName} name="productName"/>
      {/* Product Price */}
      <Input UniqueId="p_price" Label="product price" Type="number" Placeholder="e.g #450" change={change} value={productPrice} name="productPrice" />
      {/* Purchase Price */}
      <SellPrice change={change} value={sellPrice}/>
    </div>
  )
}

export default SectionOne