import React from 'react';


const CocktailList = ({ cocktails = [] }) => {
    return (
        <div>
            <ul className="card">{cocktails.map(cocktail => cocktail)}</ul>
           
        </div>
    )
}

export default CocktailList;
