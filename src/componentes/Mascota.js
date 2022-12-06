export default function Mascota (){
    let mascota ={
    nombre : 'Umma',
    edad:3,
    tipo:'Perro',
    colores: [ 'blanca' ,
        'gris'
    ]
}
    return (
        <div>
            <h2>{mascota.nombre}</h2>
        <p>
            Edad:{mascota.edad}<br/>
            Tipo:{mascota.tipo} <br/>
            Color:{mascota.colores}
        </p>
        </div>
    )
}