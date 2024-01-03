import Link from "next/link"


export default function DrinksList({ drinks }: any) {


    return (

        <div className='  w-full  md:flex  flex-wrap justify-evenly'>

            {drinks.map((item: any, index: number) => (



                <div key={index} className="card w-96 bg-base-100 shadow-xl my-4">
                    <Link href={`/drinks/${item.idDrink}`}><figure><img src={item.strDrinkThumb} alt="Drink" /></figure> </Link>
                    <div className="card-body">
                        <h2 className="card-title">{item.strDrink}</h2>
                        <p>{item.strInstructions}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Drink Now</button>
                        </div>
                    </div>
                </div>


            ))}


        </div>

    )
}
