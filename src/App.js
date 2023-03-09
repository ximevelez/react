/* import logo from './logo.svg'; */
import './App.css';
import Card from './components/Card';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Review 
      texto="Me gustó la pelicula, me la volveria a ver!"
      nombre="Otoniel"
      cargo="Jefe de recursos humanos"
      images="wanda"/>
       <Review 
      texto="No me gustó mucho la pelicula"
      nombre="Valentina"
      cargo="Estudiante"
      images="ariana"/>
       <Review 
      texto="Estuvo genial"
      nombre="Mariana"
      cargo="Diseñadora"
      images="thor"/>

     
<div className="padre">
 <div class="c1">
      <Card 
      equilibrium="ilustracionm.jpg"

      
      titulo="Alejandra"
      parrafo="Our equilibrium collection promotes balance and calm."

       
      ethereum="icon-ethereum.svg"
      numero="0.041ETH"

       
      clock="icon-clock.svg"
      dias="1 days left"

      
      principal="muñeca.jpg"
      creacion="Creation of"
      avatar="Jules Wyvern"/>

</div>
<div class="c2">
<Card 
      equilibrium="ilustracion.jpg"

      
      titulo="Daniela"
      parrafo="Our equilibrium collection promotes balance and calm."

       
      ethereum="icon-ethereum.svg"
      numero="0.041ETH"

       
      clock="icon-clock.svg"
      dias="2git days left"

      
      principal="enfermera.jpg"
      creacion="Creation of"
      avatar="Jules Wyvern"/>


</div>
<div class="c3">
<Card 
      equilibrium="ilustracionw.jpg"

      
      titulo="Melissa"
      parrafo="Our equilibrium collection promotes balance and calm."

       
      ethereum="icon-ethereum.svg"
      numero="0.041ETH"

       
      clock="icon-clock.svg"
      dias="3 days left"

      
      principal="ramen.jpg"
      creacion="Creation of"
      avatar="Jules Wyvern"/>
</div>
</div>
    </div>
  );
}

export default App;
