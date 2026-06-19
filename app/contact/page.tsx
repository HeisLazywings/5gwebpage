export default function ContactPage(){

return (

<main className="
min-h-screen
bg-black
text-white
">


<section className="
max-w-6xl
mx-auto
px-6
py-24
">


<div className="
text-center
">


<p className="
uppercase
tracking-[6px]
text-red-400
">

Contact 5G Silver Square

</p>


<h1 className="
text-5xl
md:text-7xl
font-bold
mt-5
">

Visit Us Today

</h1>


<p className="
mt-6
text-gray-300
text-lg
">

Your premium destination for food,
fitness and entertainment in Zaria.

</p>


</div>




<div className="
grid
md:grid-cols-2
gap-10
mt-16
">



{/* Contact Information */}


<div className="
bg-white/10
rounded-3xl
p-8
border
border-white/10
">


<h2 className="
text-3xl
font-bold
">

Location

</h2>



<p className="
mt-5
text-gray-300
">

Opposite Silver Jubilee Quarters,
<br/>

Sokoto Road,
<br/>

Samaru, Zaria

</p>




<h3 className="
text-2xl
font-bold
mt-10
">

Opening Hours

</h3>


<p className="
mt-4
text-gray-300
">

Monday - Friday
<br/>

7:30 AM - 9:00 PM

<br/><br/>

Saturday - Sunday
<br/>

7:30 AM - 10:00 PM

</p>




<div className="
flex
gap-4
mt-8
flex-wrap
">


<a

href="tel:+2349055000737"

className="
bg-red-600
px-6
py-3
rounded-full
font-semibold
"

>

Call Now

</a>



<a

href="https://wa.me/2349055000737"

className="
bg-green-600
px-6
py-3
rounded-full
font-semibold
"

>

WhatsApp

</a>


</div>



</div>





{/* Map */}


<div className="
rounded-3xl
overflow-hidden
min-h-[400px]
">


<iframe

src="https://maps.google.com/maps?q=Samaru%20Zaria&t=&z=15&ie=UTF8&iwloc=&output=embed"

className="
w-full
h-full
min-h-[400px]
border-0
"

loading="lazy"

/>


</div>



</div>







{/* FAQ */}


<section className="
mt-20
">


<h2 className="
text-4xl
font-bold
text-center
">

Frequently Asked Questions

</h2>



<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


<div className="
bg-white/10
rounded-2xl
p-6
">

<h3 className="
font-bold
text-xl
text-red-400
">

Is parking available?

</h3>


<p className="
mt-3
text-gray-300
">

Yes, we provide free parking for customers.

</p>


</div>





<div className="
bg-white/10
rounded-2xl
p-6
">

<h3 className="
font-bold
text-xl
text-red-400
">

Is it kid friendly?

</h3>


<p className="
mt-3
text-gray-300
">

Yes. We have a dedicated kids playground.

</p>


</div>





<div className="
bg-white/10
rounded-2xl
p-6
">

<h3 className="
font-bold
text-xl
text-red-400
">

Can I bring a backpack?

</h3>


<p className="
mt-3
text-gray-300
">

Security restrictions may apply.

</p>


</div>


</div>


</section>



</section>


</main>

)

}