"use client";

import { motion } from "framer-motion";


const menu = [
  {
    category: "Bakery",
    items: [
      {
        name: "Meat Pie",
        image: "/images/meatpie.jpg",
      },
      {
        name: "Sausage Roll",
        image: "/images/sausage.jpg",
      },
      {
        name: "Donut",
        image: "/images/donut.jpg",
      },
      {
        name: "Croissant",
        image: "/images/croissant.jpg",
      },
      {
        name: "Marble Cake",
        image: "/images/cake.jpg",
      },
    ],
  },


  {
    category: "Fast Food",
    items: [
      {
        name: "Pepperoni Pizza",
        image: "/images/pizza.jpg",
      },
      {
        name: "Chicken Shawarma",
        image: "/images/shawarma.jpg",
      },
      {
        name: "Beef Shawarma",
        image: "/images/shawarma.jpg",
      },
      {
        name: "Burgers",
        image: "/images/burger.jpg",
      },
    ],
  },


  {
    category: "Main Meals",
    items: [
      {
        name: "Stir Fry Pasta",
        image: "/images/pasta.jpg",
      },
      {
        name: "Jollof Rice",
        image: "/images/jollof.jpg",
      },
      {
        name: "Fried Rice",
        image: "/images/friedrice.jpg",
      },
      {
        name: "Grilled Chicken",
        image: "/images/chicken.jpg",
      },
    ],
  },


  {
    category: "Drinks",
    items: [
      {
        name: "Banana Smoothie",
        image: "/images/smoothie.jpg",
      },
      {
        name: "Mocktails",
        image: "/images/mocktail.jpg",
      },
      {
        name: "Zobo",
        image: "/images/zobo.jpg",
      },
      {
        name: "Lebanese Tea",
        image: "/images/tea.jpg",
      },
    ],
  },
];



export default function MenuPage(){

return(

<main className="
bg-gray-50
min-h-screen
py-24
">


<div className="
max-w-7xl
mx-auto
px-6
">


<div className="
text-center
mb-16
">


<p className="
text-red-600
uppercase
tracking-[5px]
text-sm
font-semibold
">
Our Menu
</p>


<h1 className="
text-5xl
font-bold
mt-4
">
Taste The Experience
</h1>


<p className="
text-gray-600
mt-5
">
Fresh meals, bakery treats and premium drinks.
</p>


</div>



{
menu.map((section)=>(


<section
key={section.category}
className="mb-20"
>


<h2 className="
text-3xl
font-bold
mb-8
">

{section.category}

</h2>



<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
">


{
section.items.map((item,index)=>(


<motion.div

key={item.name}

whileHover={{
y:-8
}}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
"

>


<img

src={item.image}

alt={item.name}

className="
h-56
w-full
object-cover
"

/>


<div className="
p-6
">

<h3 className="
font-bold
text-xl
">

{item.name}

</h3>


<button className="
mt-5
bg-red-600
text-white
px-5
py-3
rounded-full
text-sm
">

Order Now

</button>


</div>


</motion.div>


))
}


</div>


</section>


))
}


</div>


</main>


)

}