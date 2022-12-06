import "./Card.css";
export default function Card (){
    let imagen = 'imagenes/gatito.jpg';
    let titulo="Este gatito";
    let precio="1997";
    let envioGratis=true;
return(
<div className="ejemplo">
    <img className="card-img" src={imagen} alt=""/>
    <div className= "card">
        <h3 className= "cardtitulo" > {titulo}</h3>
        <p className= "precio"> {precio} </p>
    </div>
    {precio}
    {envioGratis}
</div>    
)

}