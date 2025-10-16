document.getElementById("agregarFila").addEventListener("click", () =>{
    const tabla = document.querySelector("table");
    const nuevaFila = tabla.insertRow(); 
    nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
});

const titulo = document.getElementById("titulo");
titulo.addEventListener("mouseover", () =>{
    titulo.style.color = "orange";
});
titulo.addEventListener("mouseout", () =>{
    titulo.style.color = "white";
});

const boton = document.getElementById("agregarFila");
boton.addEventListener("click", () =>{
    alert("se agrego una fila a la tabla");
});

