// Deployed API base url
const URL = "https://cheesy-cz82.onrender.com"

// Index Loader - Get all cheeses
export const indexLoader  = async () => {
    const response = await fetch(URL + "/cheeses/")
    const cheeses = await response.json()
    return cheeses
}

// Show Loader - Get a single cheese
export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/cheeses/${params.id}/`)
    const cheese = await response.json()
    return cheese
}