

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";



async function FetchDrinks() {
   // await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Fail to fetch')
    }

    const data = await response.json()
    return data
}





export default async function Drinks() {



    const data = await FetchDrinks()

    return (
        <div>
            <h1 className=' text-3xl bold font-bold'>Drinks</h1>

            <div className='  w-full  md:flex  flex-wrap justify-evenly'>
                {data.drinks.map((item: any, index: number) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl my-4">
                        <figure><img src={item.strDrinkThumb} alt="Drink" /></figure>
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
        </div>

    )
}
