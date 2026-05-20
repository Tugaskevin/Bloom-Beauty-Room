import { Link } from "react-router-dom"

export default function ProductCard({product}){

  return(
    <Link to={`/product/${product.id}`}>

      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:scale-105 duration-300">

        <img
          src={product.image}
          className="w-full h-44 object-cover"
        />

        <div className="p-3">

          <p className="text-xs text-pink-400">
            {product.category}
          </p>

          <h2 className="font-bold mt-1 text-sm">
            {product.name}
          </h2>

          <p className="text-pink-500 font-bold mt-2">
            Rp {product.price.toLocaleString()}
          </p>

        </div>

      </div>

    </Link>
  )
}