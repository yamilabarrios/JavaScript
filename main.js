const servicios = [
    { nombre: "Lifting", precio: 20000 },
    { nombre: "Botox", precio: 5000 },
    { nombre: "Perfilado de cejas", precio: 17000 },
    { nombre: "Laminado de cejas", precio: 11000 },
    { nombre: "Pelo por Pelo", precio: 25000 },
    { nombre: "Lifitng + Botox", precio: 23000},
];

let carrito = [];
let seleccion = prompt("Hola, ¿desea alguno de nuestros servicios? Por favor indique SI o NO");

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no");
    seleccion = prompt("¿Desea alguno de nuestros servicios? SI o NO");
}

if (seleccion == "si") {
    alert("Nuestros Servicios");
    let todosLosServicios = servicios.map((servicio) => servicio.nombre + " " + servicio.precio + "$");
    alert(todosLosServicios.join(" - "));
} else if (seleccion == "no") {
    alert("Gracias por visitarnos, hasta pronto!!");
}

while (seleccion != "no") {
    let servicio = prompt("Añada un servicio a su carrito").toLowerCase();
    let precio = 0;
    let unidades = 1; 

    if (servicio == "lifting" || servicio == "botox" || servicio == "perfilado de cejas" || servicio == "laminado de cejas" || servicio == "pelo por pelo") {
        switch (servicio) {
            case "lifting":
                precio = 20000;
                break;
            case "botox":
                precio = 5000;
                break;
            case "perfilado de cejas":
                precio = 17000;
                break;
            case "laminado de cejas":
                precio = 11000;
                break;
            case "pelo por pelo":
                precio = 25000;
                break;
            default:
                break;
        }

        //Comprobación de promoción
        if (carrito.some(item => item.servicio === 'lifting') && servicio === 'botox'){
            precio = 0; //El botox es gratuito si ya hay un lifting
        }
        if (carrito.some(item => item.servicio === 'botox') && servicio === 'lifting'){
            precio = 0; //El lifting es gratuito si ya hay un botox
        }


        unidades = parseInt(prompt("Cantidad de servicios seleccionados"));
        carrito.push({ servicio, unidades, precio });
        console.log(carrito);
    } else {
        alert("No tenemos disponible ese servicio");
    }

    seleccion = prompt("¿Desea otro servicio? SI o NO");

    while (seleccion == "no") {
        alert("Gracias por elegirnos");
        let total = 0;
        carrito.forEach((final) => {
          total += final.unidades * final.precio;
          console.log(`
              Servicio: ${final.servicio},
              Unidades: ${final.unidades},
              Total: ${final.unidades * final.precio}
              `);
        });

        // Aplicacion de la promocion si se seleccionaron ambos servicios
        const liftingCount = carrito.filter(item => item.servicio === 'lifting').length;
        const botoxCount = carrito.filter(item => item.servicio === 'botox').length;

        if (liftingCount > 0 && botoxCount > 0) {
            total = 23000*(Math.min(liftingCount, botoxCount)) + (liftingCount > botoxCount ? (liftingCount-botoxCount)*20000 : (botoxCount - liftingCount)*5000);
        }


        console.log(`Precio Final: ${total}`);
        break;
    }
}
