import React from 'react';
import "./style.css";

 function ImagesContainer (props){ 
   
    let array = ["vue", "jquery", "express", "react", "node", "javascript", "ember",
    "d3", "angular", "backbone"];

    function shuffle(arr1) {
        let counter = arr1.length;
        let temp;
        let index;

        while(counter>0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = arr1[counter];
            arr1[counter] = arr1[index];
            arr1[index] = temp;
        }
        return arr1;
    }

    shuffle(array);

    let images = array.map((image,i) => {
        return <img key={i} id={i} src={require(`../../assets/${image}.png`)} width="200px"
        onClick={props.handleImageClick}/>
    });

    return(
        <main className="images container">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                {images}
            </div>

        </main>
    );
}

export default ImagesContainer;