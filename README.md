Programación y Plataformas Web (PPW)

Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

Asignatura: Programación y Plataformas Web

Unidad: 1.2 – Estándares Web

Estudiante: Sebastián Gómez Repositorio: https://github.com/SebastianGomez0910/icc-ppw-u1-mi_pagina_web/tree/main

Página desplegada (GitHub Pages): https://sebastiangomez0910.github.io/icc-ppw-u1-mi_pagina_web/ 

Estructura HTML utilizada
|Componente	|Descripción	|Implementación |
|-----------|-------------|---------------|
| < !DOCTYPE html > |	Declaración del documento| HTML5	Línea 1|
| < html lang="es" > |	Idioma del documento|	Español|
| < header > |	Encabezado principal|	Contiene < h1 > y < h2 >|
| < section > |	Agrupa contenido principal|	Dos secciones con < h2 >|
| < table > |	Muestra los elementos estudiados|	Tres filas con < th > y < td >  |
| < footer > |	Pie de página|	Nombre del estudiante y asignatura|

Nuevas etiquetas exploradas
|Etiqueta	|Descripción	|Implementación|
|---------|-------------|--------------|
|< figure > |Contenedor para imagen con pie de foto	|Logo con < figcaption >|
|< article >|	Representa un contenido independiente dentro de una página	|Un bloque con un título < h2 > y un párrafo < p >|

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
      | style.css |	Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) |	Carpeta raíz del proyecto|
      | script.js |	Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico |	Carpeta raíz del proyecto|

Estructura final del proyecto:

        icc-ppw-u1-mi_pagina_web/
        │
        ├── index.html
        ├── style.css
        ├── script.js
        └── README.md
Implementacion en HTML:

Los nuevos archivos se enlazaron dentro del documento index.html de la siguiente forma:

      En el < head> (para el CSS):
      <link rel="stylesheet" href="style.css">
      Antes de cerrar el <body> (para el JavaScript):
      <script src="script.js"></script>

3. Estilos aplicados con CSS
      |Elemento	|Estilo implementado	|Descripción|
      |---------|---------------------|-----------|
      | body|		|background-color, font-family, margin |Define el color de fondo, tipo de letra y márgenes generales|
      | header	|background-color, color, text-align, padding	|Da color al encabezado, centra el texto y agrega espacio interno |
      | table	|	border, border-collapse, width, text-align|Define bordes, ajusta ancho y alinea el contenido de la tabla| 
      | button|background-color, color, padding, border-radius | Da color, forma y espaciado a los botones |
      | section|	margin, padding, border	|Separa las secciones y mejora su presentación visual |
      | progress|	accent-color: #007bff; width: 100%;|	Personalización de la barra de progreso|
Ejemplo en el codigo

        h2{
            text-transform: uppercase;
        }
        
        button{
            transition: background-color 0.3s ease;
        }
4. Interactividad agregada con JavaScript

El archivo script.js incorpora dos acciones básicas:



Capturas de pantalla del proyecto final
<img width="1104" height="1035" alt="image" src="https://github.com/user-attachments/assets/1153ef07-1236-4b1d-a6de-432527ac7250" />

<img width="1499" height="1038" alt="image" src="https://github.com/user-attachments/assets/be36be22-7438-4bff-b7cf-b8a969ed1c8a" />



