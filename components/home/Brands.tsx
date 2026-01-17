// Brands Section
//Purpose: Social proof
export function Brands() {
  return(
    <section className="p-10">
      <h2 className="text-cente font-bold text -2xl mb-6">
        Popular Brands
      </h2>

      <div className="flex justify-center gap -10 grayscale">
        <img src="/brands/toyota.png" className="h -12"/>
         <img src="/brands/nissan.png" className="h -12"/>
          <img src="/brands/bmw.png" className="h -12"/>
      </div>
    </section>
  )
}
