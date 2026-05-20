import BottomNav from "../components/BottomNav"

export default function Profile(){

  return(
    <div className="pb-28 min-h-screen">

      <div className="bg-[#f89ca9] text-white p-4 text-center font-bold text-xl">
        Profile
      </div>

      <div className="p-4">

        <div className="bg-white rounded-3xl p-6 shadow-md text-center">

          <img
            src="https://i.pravatar.cc/150"
            className="w-28 h-28 rounded-full mx-auto"
          />

          <h1 className="font-bold text-xl mt-4">
            refaadinaa
          </h1>

          <p className="text-gray-500 mt-2">
            Beauty Enthusiast
          </p>

          <button className="mt-5 border border-pink-400 text-pink-500 px-5 py-2 rounded-full">
            Edit Profile
          </button>

        </div>

      </div>

      <BottomNav />

    </div>
  )
}