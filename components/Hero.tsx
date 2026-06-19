"use client";
import { motion } from "framer-motion";
export default function Hero() {

return (

<section className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-black
">


{/* Background Image */}

<div className="
absolute
inset-0
">

<motion.img

src="/images/hero.jpg"

alt="5G Silver Square"

initial={{
scale: 1.15
}}

animate={{
scale: 1
}}

transition={{
duration: 8,
ease: "easeOut"
}}

className="
w-full
h-full
object-cover
opacity-45
"

/>

</div>



{/* Dark premium overlay */}

<div className="
absolute
inset-0
bg-gradient-to-r
from-black/80
via-black/50
to-red-900/40
">
</div>



{/* Content */}

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1,
ease:"easeOut"
}}

className="
relative
z-10
max-w-6xl
mx-auto
px-6
text-white
">


<p className="
uppercase
tracking-[6px]
text-sm
text-red-300
mb-6
">

5G SILVER SQUARE

</p>



<h1 className="
text-6xl md:text-8xl
font-extrabold
leading-tight
">

Everything You Need

<br/>

<span className="
text-red-500
">

In One Place

</span>

</h1>



<p className="
mt-6
max-w-2xl
text-gray-200
">

Restaurant • Bakery • Gym • Games • VIP Lounge

<br/>

Zaria's ultimate destination for food,
fitness and entertainment.

</p>




<div className="
flex
flex-wrap
gap-5
mt-10
">


<button className="
bg-red-600
px-8
py-4
rounded-full
font-semibold
hover:bg-red-700
transition
shadow-lg
shadow-red-600/30
">

Order Food

</button>



<button className="
border
border-white/50
backdrop-blur
px-8
py-4
rounded-full
hover:bg-white
hover:text-black
transition
">

Visit Today

</button>


</div>



{/* Stats */}

<div className="
flex
gap-10
mt-14
">


<div>

<h3 className="
text-3xl
font-bold
">
7+
</h3>

<p>
Services
</p>

</div>



<div>

<h3 className="
text-3xl
font-bold
">
7 Days
</h3>

<p>
Open Weekly
</p>

</div>



<div>

<h3 className="
text-3xl
font-bold
">
Zaria
</h3>

<p>
Nigeria
</p>

</div>


</div>


</motion.div>


</section>

)

}