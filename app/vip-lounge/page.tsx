import Image from "next/image";

export default function VipLounge(){

return (

<main className="bg-black text-white">


{/* Hero */}

<section className="
relative
h-[80vh]
flex
items-center
overflow-hidden
">


<Image

src="/images/vip-lounge.jpg"

alt="5G Silver Square VIP Lounge"

fill

className="
object-cover
opacity-60
"

/>


<div className="
absolute
inset-0
bg-gradient-to-r
from-black
via-black/70
to-red-900/40
">
</div>


<div className="
relative
z-10
max-w-6xl
mx-auto
px-6
">


<p className="
uppercase
tracking-[6px]
text-red-400
">

VIP EXPERIENCE

</p>


<h1 className="
text-5xl
md:text-7xl
font-bold
mt-5
">

Luxury.
Comfort.
Privacy.

</h1>


<p className="
max-w-xl
mt-6
text-gray-300
text-lg
">

Experience premium Arabian-inspired seating,
private dining and unforgettable moments
at 5G Silver Square.

</p>


</div>


</section>




{/* Features */}


<section className="
py-20
max-w-6xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
">

Premium VIP Services

</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{
[
{
title:"Arabian Seating",
text:"Elegant traditional design with modern comfort."
},

{
title:"Private Dining",
text:"Perfect atmosphere for families and special occasions."
},

{
title:"Premium Service",
text:"Dedicated attention for a memorable experience."
}

].map((item)=>(
<div

key={item.title}

className="
bg-white/10
backdrop-blur
p-8
rounded-2xl
border
border-white/10
hover:scale-105
transition
"

>

<h3 className="
text-2xl
font-bold
text-red-400
">

{item.title}

</h3>


<p className="
mt-4
text-gray-300
">

{item.text}

</p>


</div>
))

}


</div>


</section>





{/* Gallery */}


<section className="
pb-20
max-w-6xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
mb-10
">

VIP Gallery

</h2>



<div className="
grid
grid-cols-2
md:grid-cols-3
gap-5
">


{
[
"vip1.jpg",
"vip2.jpg",
"vip3.jpg",
"vip4.jpg",
"vip5.jpg",
"vip6.jpg"

].map((image)=>(

<div
key={image}
className="
relative
h-64
rounded-xl
overflow-hidden
"
>

<Image

src={`/images/${image}`}

alt="VIP Lounge"

fill

className="
object-cover
hover:scale-110
transition
duration-700
"

/>

</div>


))

}


</div>


</section>



</main>

)

}