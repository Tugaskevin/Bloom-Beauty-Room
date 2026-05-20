import BottomNav from "../components/BottomNav"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

export default function Explore(){

  return(
    <div className="pb-28 min-h-screen">

      <div className="bg-[#f89ca9] text-white text-center p-4 font-bold text-xl">
        Explore
      </div>

      <div className="p-4">

        <div className="grid grid-cols-2 gap-4">

          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

      <BottomNav />

    </div>
  )
}