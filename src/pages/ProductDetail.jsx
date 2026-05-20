import { useParams } from "react-router-dom"
import { products } from "../data/products"

export default function ProductDetail(){

  const { id } = useParams()

  const product = products.find(p => p.id == id)

  return(
    <div className="min-h-screen bg-white pb-10">

      <img
        src={product.image}
        className="w-full h-96 object-cover"
      />

      <div className="p-5">

        <p className="text-pink-400 text-sm">
          {product.category}
        </p>

        <h1 className="font-bold text-2xl mt-2">
          {product.name}
        </h1>

        <p className="text-pink-500 font-bold text-2xl mt-4">
          Rp {product.price.toLocaleString()}
        </p>

        <p className="text-gray-500 mt-4 leading-7">
          Premium skincare product with gentle ingredients suitable for daily beauty routine.
        </p>

        <button className="w-full bg-[#f89ca9] text-white p-4 rounded-2xl mt-8 font-bold">
          ADD TO CART
        </button>

      </div>

    </div>
  )
}