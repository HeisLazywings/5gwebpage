export default function Navbar() {

  return (

    <nav className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-white/80
    backdrop-blur-lg
    border-b
    ">


      <div className="
      max-w-6xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      ">


        <h1 className="
        text-2xl
        font-bold
        text-red-600
        ">
          5G Silver Square
        </h1>



        <div className="
        hidden
        md:flex
        gap-8
        font-medium
        ">

          <a href="#">
            Home
          </a>

          <a href="/menu">
            Menu
          </a>
          
          <a href="/order">
            Order
          </a>

          <a href="#">
            VIP Lounge
          </a>

          <a href="#">
            Order
          </a>
          
          <a href="/contact">
            Contact
            </a>
            
        </div>



        <button className="
        bg-red-600
        text-white
        px-5
        py-2
        rounded-full
        hover:bg-red-700
        transition
        ">

          Order Now

        </button>


      </div>


    </nav>

  );
}