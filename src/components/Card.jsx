import React from 'react'; /* importar */
import '../stylesheets/Card.css'
function Card (props){
    return(
   <body>
    <main className='container'>
        <div className='equilibrium'>
        <img className='img-principal'src={require(`../images/${props.equilibrium}`)} alt=""/>
        </div>
        <div className='info'>
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}
            </p>
            <div className='texto'>
                <div className='icono1'>
                <img className='icono'src={require(`../images/${props.ethereum}`)} alt=""/>
                    <p className='color'>{props.numero}</p>
                </div>
                <div className='icono2'>
                <img className='reloj'src={require(`../images/${props.clock}`)} alt=""/>
                    <p className='text-reloj'>{props.dias}</p>
                </div>
            </div>
        </div>
        <div className='linea'>
        </div>
        <div className='info-avatar'>
        <img className='avatar'src={require(`../images/${props.principal}`)} alt=""/> 
            <p className='creation'> {props.creacion}</p>
            <p className='jules'>{props.avatar}</p>
        </div>
    </main>

</body>
    );
}

export default Card;