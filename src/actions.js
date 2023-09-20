import { redirect } from "react-router-dom";

// Deployed API base url
const URL = "https://cheesy-cz82.onrender.com"

// CREATE ACTION - Create a cheese
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    // send request to backend
    await fetch(URL + "/cheeses/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    // redirect back to index page
    return redirect("/")
};

// UPDATE ACTION - Update a cheese
export const updateAction = async({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get cheese id
    const id = params.id

    // construct request body
    const updatedCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    // send request to backend
    await fetch(URL + `/cheeses/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    // redirect back to show page
    return redirect(`/post/${id}`)
};

// DELETE ACTION - Delete a cheese
export const deleteAction = async ({params}) => {
    // get cheese id
    const id = params.id

    // send request to backend
    await fetch (URL + `/cheeses/${id}`,
    {
        method: "delete",
    })

    // redirect back to show page
    return redirect("/")
};
