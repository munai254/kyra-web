//2 HERO SECTION (High Conversion Area)
// components /Hero.tsx
export function Hero(){
  return(
    <section
    className="h- [80vh] flex  items-center bg-cover bg-center"
    style={{backgroundImage: "url('/hero-car.jpg') "}}
    >
      <div className="bg-black/60 p-10 text-white max-w-xl ml-10 rounded">
      <h1 className="text-4x1 font-bold">   FIND YOUR PERFECT RIDE TODAY </h1>
      <p className="mt -4">
          QUALITY VEHICLES. AFFORDABLE PRICES. TRUSTED DEALERS.
      </p>

    <button className="mt -6 bg -blue- 600 px -6 py -3 rounded">
      Browse Vehicles
    </button>   
      </div>
    </section>
  )
}