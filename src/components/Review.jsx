import React from 'react'; /* importar */
import '../stylesheets/Review.css'
function Review(props){
    return(
        <div className="box-container">
            <p>{props.texto}</p>
           
            <div className="box-user">

            <img src={require(`../images/${props.images}.jpg`)} alt="" 
            className="img-rounded"/>
            <div>
                <h3>{props.nombre}</h3>
                <p>{props.cargo}</p>
            </div>
           </div>
        </div>
    );
}

export default Review;

/* `Hola mundo yo me llamo ${nombre} y estoy aprendiendo ${tema}!!!`
`La suma de 2 + 2 es ${2+2}` */