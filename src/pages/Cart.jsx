import BottomNav from "../components/BottomNav"

export default function Cart(){

  return(
    <div className="pb-28 min-h-screen">

      <div className="bg-[#f89ca9] text-white p-4 text-center font-bold text-xl">
        My Cart
      </div>

      <div className="p-4">

        <div className="bg-white rounded-3xl p-5 shadow-md">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="font-bold">
                Luxcrime Lip Velvet
              </h2>

              <p className="text-pink-500 mt-2">
                Rp 89.000
              </p>
            </div>

            <div className="text-2xl">
              🛒
            </div>

          </div>

        </div>

        <button className="w-full bg-[#f89ca9] text-white p-4 rounded-2xl mt-6 font-bold">
          CHECKOUT
        </button>

      </div>

      <BottomNav />

    </div>
  )
}