import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";




async function GetSingleDrink(id: any) {
    const res = await fetch(`${url}${id}`)
    if (!res.ok) {
        throw new Error("Fail to fetch single drink")
    }
    return res.json()
}


export default async function SingleDrinkPage({ params }: any) {

    const data = await GetSingleDrink(params.id)
    console.log(data)

    const title = data?.drinks[0]?.strDrink
    const imgUrl = data?.drinks[0]?.strDrinkThumb
    const instructions = data?.drinks[0]?.strInstructions
    const Ingredient1 = data?.drinks[0]?.strIngredient1
    const Ingredient2 = data?.drinks[0]?.strIngredient2
    const Ingredient3 = data?.drinks[0]?.strIngredient3
    const Ingredient4 = data?.drinks[0]?.strIngredient4
    const Ingredient5 = data?.drinks[0]?.strIngredient5
    const Ingredient6 = data?.drinks[0]?.strIngredient6
    const Ingredient7 = data?.drinks[0]?.strIngredient7

    console.log(title, imgUrl)


    return (
        <div>
            <Link href={'/drinks'} className="btn btn-primary text-xl">Back to drinks</Link>

            <div className="card w-96 bg-base-100 shadow-xl my-4">
                <figure className="relative block w-full h-48"><Image className=" object-cover" src={imgUrl} alt="Drink" fill sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{instructions}</p>
                    <div className="card-actions justify-end">
                        <p>Ingredients :</p>
                        <ul>
                            <li>{Ingredient1}</li>
                            <li>{Ingredient2}</li>
                            <li>{Ingredient3}</li>
                            <li>{Ingredient4}</li>
                            <li>{Ingredient5}</li>
                            <li>{Ingredient6}</li>
                            <li>{Ingredient7}</li>


                        </ul>
                    </div>
                </div>
            </div>



        </div>
    )
}
