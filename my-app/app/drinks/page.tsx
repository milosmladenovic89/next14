import DrinksList from "@/components/DrinksList";


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";



async function FetchDrinks() {
   // await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Fail to fetch')
    }

    const data = await response.json()
    return data
}





export default async function Drinks() {



    const data = await FetchDrinks()

    return (
        <div>
            <DrinksList drinks={data.drinks} />


        </div>

    )
}

