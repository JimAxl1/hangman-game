import { promises as fs } from 'fs';

export async function fetchCategorys(){
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);

  return Object.keys(data.categories)
}

export async function fetchGames(category){
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);

  const listGames = data.categories[category].map((item) => {
    return item.name
  })

  return listGames
}

export async function fetchTitle(category){
  const games = category

  let played = true
  let randomIndex
  while (played === true){
    randomIndex = Math.floor(Math.random() * games.length)
    played = games[randomIndex].selected
  }

  return games[randomIndex].name
}