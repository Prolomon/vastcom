import Input from "./Input";
import Discount from "./Discount";
import SelectCategory from "./SelectCategory";
import UniqueID from "./UniqueID";
import SubCategory from "./SubCategory";

const SectionTwo = ({change, quantity, category, subCategory, uniqueId, discount}) => {
  return (
    <div>
      {/* Select For Category  */}
      <SelectCategory change={change} value={category} />
      {/* Select For Sub-Category */}
      <SubCategory change={change} value={subCategory} />
      {/* Product Quantity */}
      <Input UniqueId="quantity"  Label="quantity" Type="number" change={change} value={quantity} name="quantity" />
      {/* Unique ID */}
      <UniqueID change={change} value={uniqueId} />
      {/* Discount for Comment */}
      <Discount change={change} value={discount} />
      {/* Submit Button */}
      <button type="submit" className="py-3 px-4 block w-full border-violet-700 hover:border-2 rounded-lg text-sm bg-violet-700 hover:border-violet-700 capitalize text-white hover:text-violet-700 hover:bg-transparent">submit
      </button>
    </div>
  );
};

export default SectionTwo;
