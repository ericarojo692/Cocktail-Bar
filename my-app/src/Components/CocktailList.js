import React from 'react';
import CocktailContainer from './CocktailContainer';

const CocktailList = ({ cocktails = [] }) => {
    return (
        <div>
            <ul className="card">{cocktails.map(cocktail => <CocktailContainer cocktail={cocktail}/>)}</ul>
            {/* {console.log(cocktails)} */}
        </div>
    )
}

export default CocktailList;
