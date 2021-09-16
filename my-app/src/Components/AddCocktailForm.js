import React from "react";

function newCocktail({ renderNewCocktail }) {

        const handleSubmit = (e) => {
            console.log(e.target)
            console.log(e.target.image.value)
            fetch("http:/localhost:3000/cocktails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: e.target.name.value,
                    image: e.target.image.value,
                    price: e.target.price.value

                })

            })
            .then(res => res.json())
            .then(newCocktail => renderNewCocktail(newCocktail))
        }



        return(
            <div className="new-cocktail-form">
                <h2>New Cocktail</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="name" placeholder="Cocktail Name" />
                    <input type="text" name="image" placeholder="Image URL" />
                    <input type="number" name="price" placeholder="Cocktail Price" />
                    <button type="submit">Add Cocktail</button>
                </form>
            </div>
        );
}

export default AddCocktailForm;