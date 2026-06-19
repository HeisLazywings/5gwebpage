"use client";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";


const services = [
  {
    title: "Restaurant & Bakery",
    description: "Delicious meals, pastries and fresh baked treats.",
    image: "/images/restaurant.jpg",
  },

  {
    title: "Gym & Fitness Center",
    description: "Train, build strength and stay healthy.",
    image: "/images/gym.jpg",
  },

  {
    title: "Game House",
    description: "Pool table, games and entertainment.",
    image: "/images/gamehouse.jpg",
  },

  {
    title: "5-a-Side Football Pitch",
    description: "Enjoy competitive football with friends.",
    image: "/images/pitch.jpg",
  },

  {
    title: "Barbershop",
    description: "Professional grooming and fresh cuts.",
    image: "/images/barber.jpg",
  },

  {
    title: "Suya Spot",
    description: "Authentic Nigerian grilled flavour.",
    image: "/images/suya.jpg",
  },

  {
    title: "Kids Playground",
    description: "A safe fun space for children.",
    image: "/images/playground.jpg",
  },
];



export default function Services() {

return (

<section className="
bg-black
py-28
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
text-red-500
uppercase
tracking-[8px]
text-sm
font-semibold
">

Our Services

</p>


<h2 className="
text-5xl
md:text-6xl
font-bold
mt-4
text-white
">

Everything Under One Roof

</h2>


<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

From food and fitness to entertainment,
5G Silver Square brings everything together.

</p>


</div>





<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{services.map((service,index)=>(


<motion.div

key={service.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.6,
delay:index * .1
}}

whileHover={{
y:-10
}}

className="
group
relative
overflow-hidden
rounded-3xl
h-[420px]
shadow-2xl
border
border-white/10
"


>


<img

src={service.image}

alt={service.title}

className="
absolute
inset-0
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/60
to-transparent
"/>



<div className="
absolute
bottom-0
p-8
text-white
">


<h3 className="
text-3xl
font-bold
drop-shadow-lg
">

{service.title}

</h3>


<p className="
mt-3
text-gray-300
text-lg
">

{service.description}

</p>


</div>



</motion.div>


))}


</div>


</div>


</section>


)

}