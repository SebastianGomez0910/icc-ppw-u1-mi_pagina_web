Programación y Plataformas Web (PPW)
Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript
Asignatura: Programación y Plataformas Web
Unidad: 1.2 – Estándares Web
Estudiante: Sebastián Gómez Repositorio:
Página desplegada (GitHub Pages): https://sebastiangomez0910.github.io/icc-ppw-u1-mi_pagina_web/ 

Estructura HTML utilizada
|Componente	|Descripción	|Implementación |
|-----------|-------------|---------------|
|<!DOCTYPE html>|	Declaración del documento HTML5	Línea 1|
|<html lang="es">|	Idioma del documento|	Español|
|<header>|	Encabezado principal|	Contiene <h1> y <h2>|
|<section>|	Agrupa contenido principal|	Dos secciones con <h2>|
|<table>|	Muestra los elementos estudiados|	Tres filas con <th> y <td>|
|<footer>|	Pie de página|	Nombre del estudiante y asignatura|

Nuevas etiquetas exploradas
|Etiqueta|	|Descripción|	|Implementación|
|<figure>|	|Contenedor para imagen con pie de foto|	|Logo con <figcaption>|
|<article>|	|Representa un contenido independiente dentro de una página|	|Un bloque con un título <h2> y un párrafo <p>|

Codigo usado:
<figure>
  <img src="coto.jpg" alt="Imagen de ejemplo">
  <figcaption>Cotopaxi</figcaption>
</figure>

Codigo usado:
 <article>
  <h3>Articulo de ejemplo</h3>
  <p>Este es un texto dentro de un articulo</p>
</article>

Práctica 2 – Adición de CSS y JavaScript
1. Archivos agregados
|Archivo	|Descripción|	Ubicación|
|-------|-------------|-----------|
|style.css|	Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.)|	Carpeta raíz del proyecto|
|script.js|	Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico|	Carpeta raíz del proyecto|

Estructura final del proyecto:

icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md

