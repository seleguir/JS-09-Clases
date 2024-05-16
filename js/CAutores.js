class CAutores{
    constructor (nombre, apellido, nacionalidad, mejorObra, anioPublicacion, edadPublicacion){
        this.nombre = nombre; 
        this.apellido = apellido;
        this.nacionalidad = nacionalidad; 
        this.mejorObra = mejorObra;
        this.anioPublicacion = anioPublicacion; 
        this.edadPublicacion = edadPublicacion;
    }
}
    const autores = [
    new CAutores("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new CAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56),
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38),
    new CAutores("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29),
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31),
]; 

    // Listar todos los autores que sean de nacionalidad Argentina
    function listarPorNacionalidad(){
    document.write("<p>Autores con nacionalidad argentina: </p>");
    document.write("<ul>");
    for(let i = 0 ; i < autores.length ; i++){
    if(autores[i].nacionalidad == "Argentino"){
        document.write("<li>");
        document.write("<strong>Nombre: </strong>" + autores[i].nombre + "<br>");
        document.write("<strong>Apellido: </strong>" + autores[i].apellido + "<br>");
        document.write("<strong>Nacionalidad: </strong>" + autores[i].nacionalidad + "<br>");
        document.write("</li>");
        }
    }
    document.write("</ul>");
}

    // Listar todos los autores que publicaron entre 1960 y 1980
    function listarPorRangoAnioPublicacion(){
    document.write("<p>Autores que publicaron entre 1960 y 1980: </p>");
    document.write("<ul>");
    for(let i = 0 ; i < autores.length ; i++){
    if(autores[i].anioPublicacion >= 1960 && autores[i].anioPublicacion <= 1980){
        document.write("<li>");
        document.write("<strong>Nombre: </strong>" + autores[i].nombre + "<br>");
        document.write("<strong>Apellido: </strong>" + autores[i].apellido + "<br>");
        document.write("<strong>Año de publicación: </strong>" + autores[i].anioPublicacion + "<br>");
        document.write("</li>");
        }
    }
    document.write("</ul>");
}

    // Mostrar el promedio de la edad de publicación
    function promedioEdadPublicacion(){
    let promedio = 0; 
    for (let i = 0 ; i < autores.length ; i++){
        promedio += autores[i].edadPublicacion;
    }
    document.write ("Promedio de la edad de publicación: " + promedio / autores.length);  // también puede ser / 8 (cantidad de autores)
}

    // Listar todos los autores
    function listarAutores(){
    document.write("<p>Todos los autores: </p>");
    document.write("<table border=1>");
    document.write("<th>Nombre</th>");
    document.write("<th>Apellido</th>");
    document.write("<th>Nacionalidad</th>");
    document.write("<th>Mejor obra</th>");
    document.write("<th>Año de publicación</th>");
    document.write("<th>Edad en publicación</th>");
    for(let i = 0 ; i < autores.length ; i++){
        document.write("<tr>");
        document.write("<td>" + autores[i].nombre + "</td>");
        document.write("<td>" + autores[i].apellido + "</td>");
        document.write("<td>" + autores[i].nacionalidad + "</td>");
        document.write("<td>" + autores[i].mejorObra + "</td>");
        document.write("<td>" + autores[i].anioPublicacion + "</td>");
        document.write("<td>" + autores[i].edadPublicacion + "</td>");
        document.write("</tr>")
    }
    document.write("</table>");
}

listarPorNacionalidad(); 
listarPorRangoAnioPublicacion(); 
promedioEdadPublicacion(); 
listarAutores(); 