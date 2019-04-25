import React from 'react';
import "./style.css";

 function ImagesContainer (props){ 
   
    // let array = ["angular",  "backbone", "bootstrap", "ember",
    // "express", "javascript", "jquery", "materialize", "moment", "node", "react", "vue"];

    const array = [
    <img key="1" id="1" src={require(`../../assets/angular.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="ang"/>,
    <img key="2" id="2" src={require(`../../assets/backbone.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="bac"/>,
    <img key="3" id="3" src={require(`../../assets/bootstrap.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="boo"/>,
    <img key="4" id="4" src={require(`../../assets/ember.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="emb"/>,
    <img key="5" id="5" src={require(`../../assets/express.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="exp"/>,
    <img key="6" id="6" src={require(`../../assets/javascript.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="jav"/>,
    <img key="7" id="7" src={require(`../../assets/jquery.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="jqe"/>,
    <img key="8" id="8" src={require(`../../assets/materialize.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="mat"/>,
    <img key="9" id="9" src={require(`../../assets/moment.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="mom"/>,
    <img key="10" id="10" src={require(`../../assets/node.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="nod"/>,
    <img key="11" id="11" src={require(`../../assets/react.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="rea"/>,
    <img key="12" id="12" src={require(`../../assets/vue.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="vue"/>];
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

    // shuffle(array);

    // let images = array.map((image,i) => {
    //     return <img key={i} id={i} src={require(`../../assets/${image}.png`)} 
    //     onClick={props.handleImageClick} className="img-thumbnail"/>
    // });

    let images = shuffle(array);

    return(
        <main className="images">
            <div className="container">
                {images}
            </div>
        </main>
    );
}

export default ImagesContainer;