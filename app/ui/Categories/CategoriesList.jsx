'use server'

import { fetchCategorys, fetchGames } from "@/app/lib/data";
import Category from "./Category";

export default async function CategoriesList(){
  const list = await fetchCategorys()

  async function selectGames(category){
    'use server'
    return fetchGames(category)
  }

  return(
    <>
      {list.map((item) => {
        return <Category text={item} key={item} update={selectGames(item)} />
      })}
    </>
  )
}