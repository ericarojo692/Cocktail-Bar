import React from "react";

function Home() {
  return( 
    <div>
    <h1>GabRica</h1>
    <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="600" height="400"/>

    <h2>Sponsors</h2>
    <div className="sponsors">
      <div>
        <h3>Teremana</h3>
        <img src="https://cdn.trendhunterstatic.com/thumbs/teremana-tequila.jpeg" width="200" height="200"/>
      </div>
      <div>
        <h3>Titos</h3>
        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/12/all-time-favorite-vodka-cocktail.jpg" width="200" height="200"/>
      </div>
      <div>
        <h3>Hennesy</h3>
        <img src="https://notablelife.com/media/2016/12/hennessey2.png" width="200" height="200"/>
      </div>
    </div>
  </div>
  )
}

export default Home;