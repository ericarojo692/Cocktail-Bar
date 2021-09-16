import React from "react";

function AddCocktailForm({ renderNewCocktail }) {

    function handleDeleteClick() {
       
      }


        const handleSubmit = (e) => {
                e.preventDefault()
           

            fetch("http://localhost:3000/cocktails", {
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
        
        return (
            <div className="new-cocktail-form">
                <h2>New Cocktail</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="name" placeholder="Cocktail Name" />
                    <input type="text" name="image" placeholder="Image URL" />
                    <input type="number" name="price" placeholder="Cocktail Price" />
                    <button type="submit">Add Cocktail</button>
                    <button className="del-btn" onClick={handleDeleteClick}> Delete </button>
                </form>
            </div>
        );
}

export default AddCocktailForm;