import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import ProductCard from "../components/ProductCard"
import BottomNav from "../components/BottomNav"
import { products } from "../data/products"

export default function Home(){

  return(
    <div className="pb-28 min-h-screen">

      <Header />

      <SearchBar />

      <div className="px-4">

        <div className="bg-white rounded-3xl overflow-hidden shadow-md">

          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400"
            className="w-full h-52 object-cover"
          />

          <div className="p-4">
            <h1 className="font-bold text-xl">
              Discover Your Beauty
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Explore skincare favorites and trending beauty products.
            </p>
          </div>

        </div>

      </div>

      <div className="p-4">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">
            Popular Products
          </h2>

          <span className="text-pink-500 text-sm">
            View All
          </span>
        </div>

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