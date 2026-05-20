import { House, Search, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

export default function BottomNav(){

  return(
    <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-around items-center p-4 shadow-2xl rounded-t-3xl z-50">

      <Link to="/">
        <House />
      </Link>

      <Link to="/explore">
        <Search />
      </Link>

      <Link to="/cart">
        <ShoppingCart />
      </Link>

      <Link to="/profile">
        <User />
      </Link>

    </div>
  )
}