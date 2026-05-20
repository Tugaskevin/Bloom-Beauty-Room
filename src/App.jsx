import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom"

import { useState } from "react"

import logo from "./assets/logo.png"

const products = [
  {
    id:1,
    name:"Skintific Moisture Gel",
    price:129000,
    image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800"
  },
  {
    id:2,
    name:"Somethinc Niacinamide",
    price:98000,
    image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800"
  },
  {
    id:3,
    name:"Avoskin Toner",
    price:110000,
    image:"https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800"
  },
  {
    id:4,
    name:"The Originote Serum",
    price:75000,
    image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=800"
  },
  {
    id:5,
    name:"Wardah Lightening",
    price:56000,
    image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800"
  },
  {
    id:6,
    name:"Facetology Cleanser",
    price:89000,
    image:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800"
  },
  {
    id:7,
    name:"Glad2Glow Serum",
    price:67000,
    image:"https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=800"
  },
  {
    id:8,
    name:"Anua Heartleaf Toner",
    price:210000,
    image:"https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?q=80&w=800"
  }
]

const formatPrice = (price)=>{
  return `Rp ${price.toLocaleString("id-ID")}`
}

function BottomNav({cartCount}){

  return(
    <div style={{
      position:"fixed",
      bottom:0,
      left:0,
      right:0,
      background:"white",
      display:"flex",
      justifyContent:"space-around",
      padding:"16px",
      borderTop:"1px solid #eee",
      zIndex:100
    }}>

      <Link to="/" style={navStyle}>Home</Link>
      <Link to="/explore" style={navStyle}>Explore</Link>

      <Link to="/cart" style={navStyle}>
        Cart ({cartCount})
      </Link>

      <Link to="/profile" style={navStyle}>Profile</Link>

    </div>
  )
}

const navStyle = {
  textDecoration:"none",
  color:"#ff5c8a",
  fontWeight:"600"
}

function ProductCard({item,onAddCart}){

  const navigate = useNavigate()

  return(
    <div style={{
      background:"white",
      borderRadius:"22px",
      overflow:"hidden",
      boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
    }}>

      <img
        src={item.image}
        onClick={()=>navigate(`/product/${item.id}`)}
        style={{
          width:"100%",
          height:"180px",
          objectFit:"cover",
          cursor:"pointer"
        }}
      />

      <div style={{
        padding:"14px"
      }}>

        <h3 style={{
          fontSize:"15px",
          marginBottom:"8px"
        }}>
          {item.name}
        </h3>

        <p style={{
          color:"#ff4f7b",
          fontWeight:"700"
        }}>
          {formatPrice(item.price)}
        </p>

        <button
          onClick={()=>onAddCart(item)}
          style={{
            width:"100%",
            marginTop:"10px",
            background:"#ff7d9c",
            color:"white",
            border:"none",
            padding:"12px",
            borderRadius:"12px",
            cursor:"pointer",
            fontWeight:"600"
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  )
}

function Home({cart,onAddCart}){

  return(
    <div style={pageStyle}>

      <div style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>

        <div>
          <h1 style={{
            color:"#ff4f7b",
            margin:0
          }}>
            Bloom Beauty Room 
          </h1>

          <p>
            Skincare For Your Glow ✨
          </p>
        </div>

        <img
  src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
  style={{
    width:"55px",
    height:"55px",
    borderRadius:"50%",
    objectFit:"cover",
    border:"3px solid white",
    background:"white"
  }}
/>

      </div>

      <input
        placeholder="Search skincare..."
        style={searchStyle}
      />

      <div style={{
        marginTop:"25px",
        background:"linear-gradient(135deg,#ff8fab,#ffb3c6)",
        borderRadius:"25px",
        padding:"25px",
        color:"white"
      }}>

        <h2>
          Beauty Starts
          <br />
          With Healthy Skin
        </h2>

        <button style={shopButton}>
          Shop Now
        </button>

      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"15px",
        marginTop:"25px"
      }}>

        {products.map((item)=>(
          <ProductCard
            key={item.id}
            item={item}
            onAddCart={onAddCart}
          />
        ))}

      </div>

      <BottomNav cartCount={cart.length} />

    </div>
  )
}

function Explore({cart,onAddCart}){

  return(
    <div style={pageStyle}>

      <h1 style={{
        color:"#ff4f7b"
      }}>
        Explore Products
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"15px",
        marginTop:"25px"
      }}>

        {products.map((item)=>(
          <ProductCard
            key={item.id}
            item={item}
            onAddCart={onAddCart}
          />
        ))}

      </div>

      <BottomNav cartCount={cart.length} />

    </div>
  )
}

function ProductDetail({cart,onAddCart}){

  const {id} = useParams()

  const navigate = useNavigate()

  const product = products.find((item)=>item.id == id)

  return(
    <div style={pageStyle}>

      <button
        onClick={()=>navigate(-1)}
        style={backButton}
      >
        Back
      </button>

      <img
        src={product.image}
        style={{
          width:"100%",
          borderRadius:"25px",
          marginTop:"20px"
        }}
      />

      <h1 style={{
        color:"#ff4f7b"
      }}>
        {product.name}
      </h1>

      <h2>
        {formatPrice(product.price)}
      </h2>

      <p style={{
        color:"#555",
        lineHeight:"28px"
      }}>
        Premium skincare product to hydrate,
        brighten, and improve your skin barrier.
      </p>

      <button
        onClick={()=>onAddCart(product)}
        style={{
          width:"100%",
          background:"#ff4f7b",
          color:"white",
          border:"none",
          padding:"16px",
          borderRadius:"16px",
          fontSize:"16px",
          fontWeight:"700"
        }}
      >
        Add To Cart
      </button>

      <BottomNav cartCount={cart.length} />

    </div>
  )
}

function Cart({cart}){

  const total = cart.reduce((a,b)=>a+b.price,0)

  return(
    <div style={pageStyle}>

      <h1 style={{
        color:"#ff4f7b"
      }}>
        My Cart
      </h1>

      {cart.map((item,index)=>(
        <div
          key={index}
          style={{
            background:"white",
            borderRadius:"20px",
            padding:"15px",
            marginTop:"15px",
            display:"flex",
            gap:"15px"
          }}
        >

          <img
            src={item.image}
            style={{
              width:"80px",
              height:"80px",
              borderRadius:"15px",
              objectFit:"cover"
            }}
          />

          <div>
            <h3>{item.name}</h3>
            <p>{formatPrice(item.price)}</p>
          </div>

        </div>
      ))}

      <div style={{
        background:"white",
        padding:"20px",
        borderRadius:"20px",
        marginTop:"25px"
      }}>

        <h2>Total: {formatPrice(total)}</h2>

        <button style={{
          width:"100%",
          background:"#ff4f7b",
          color:"white",
          border:"none",
          padding:"16px",
          borderRadius:"15px",
          fontWeight:"700"
        }}>
          Checkout
        </button>

      </div>

      <BottomNav cartCount={cart.length} />

    </div>
  )
}

function Profile({cart}){

  return(
    <div style={pageStyle}>

      <div style={{
        background:"linear-gradient(135deg,#ff8fab,#ffb3c6)",
        borderRadius:"30px",
        padding:"30px",
        color:"white",
        textAlign:"center",
        position:"relative",
        overflow:"hidden"
      }}>

        <img
          src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          style={{
            width:"110px",
            height:"110px",
            borderRadius:"50%",
            border:"4px solid white",
            objectFit:"cover",
            background:"white"
          }}
        />

        <h2 style={{
          marginTop:"15px",
          marginBottom:"5px"
        }}>
          Eka Lestari
        </h2>

        <p style={{
          opacity:"0.9"
        }}>
          bloombeautyroom@gmail.com
        </p>

        <div style={{
          display:"flex",
          justifyContent:"space-around",
          marginTop:"25px"
        }}>

          <div>
            <h3 style={{margin:0}}>24</h3>
            <p style={{margin:0}}>Orders</p>
          </div>

          <div>
            <h3 style={{margin:0}}>12</h3>
            <p style={{margin:0}}>Wishlist</p>
          </div>

          <div>
            <h3 style={{margin:0}}>{cart.length}</h3>
            <p style={{margin:0}}>Cart</p>
          </div>

        </div>

      </div>

      <div style={{
        marginTop:"25px",
        background:"white",
        borderRadius:"25px",
        padding:"10px 20px"
      }}>

        {[
          "My Orders",
          "Wishlist",
          "Shipping Address",
          "Payment Methods",
          "Beauty Points",
          "Notifications",
          "Customer Support",
          "Settings"
        ].map((item)=>(
          <div
            key={item}
            style={{
              padding:"18px 0",
              borderBottom:"1px solid #f1f1f1",
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center",
              cursor:"pointer"
            }}
          >

            <span style={{
              fontWeight:"500",
              color:"#444"
            }}>
              {item}
            </span>

            <span style={{
              color:"#ff7d9c",
              fontSize:"20px"
            }}>
              ›
            </span>

          </div>
        ))}

      </div>

      <div style={{
        background:"white",
        borderRadius:"25px",
        padding:"20px",
        marginTop:"25px",
        textAlign:"center"
      }}>

        <h3 style={{
          color:"#ff4f7b"
        }}>
          GlowBeauty Member
        </h3>

        <p style={{
          color:"#666",
          lineHeight:"26px"
        }}>
          Enjoy exclusive skincare promos,
          beauty rewards, and special discounts
          every month.
        </p>

        <button style={{
          marginTop:"10px",
          background:"#ff4f7b",
          color:"white",
          border:"none",
          padding:"14px 22px",
          borderRadius:"14px",
          fontWeight:"700",
          cursor:"pointer"
        }}>
          Upgrade Membership
        </button>

      </div>

      <BottomNav cartCount={cart.length} />

    </div>
  )
}

const pageStyle = {
  background:"#ffd6dc",
  minHeight:"100vh",
  padding:"20px",
  paddingBottom:"100px",
  fontFamily:"sans-serif"
}

const searchStyle = {
  width:"100%",
  padding:"16px",
  borderRadius:"18px",
  border:"none",
  marginTop:"20px",
  outline:"none",
  fontSize:"15px"
}

const shopButton = {
  background:"white",
  color:"#ff4f7b",
  border:"none",
  padding:"12px 18px",
  borderRadius:"12px",
  fontWeight:"700"
}

const backButton = {
  border:"none",
  padding:"10px 15px",
  borderRadius:"12px"
}

export default function App(){

  const [cart,setCart] = useState([])

  const addToCart = (product)=>{
    setCart([...cart,product])
  }

  return(
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              cart={cart}
              onAddCart={addToCart}
            />
          }
        />

        <Route
          path="/explore"
          element={
            <Explore
              cart={cart}
              onAddCart={addToCart}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cart={cart}
              onAddCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        <Route
          path="/profile"
          element={<Profile cart={cart} />}
        />

      </Routes>

    </BrowserRouter>
  )
}