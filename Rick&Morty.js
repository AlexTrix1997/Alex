var elementoBoton = document.getElementById("boton")
elementoBoton.addEventListener("click", cambiarImagen)

var elementoimagen = document.getElementById("Imagen-Rick-y-Morty")

function cambiarImagen ()
{
  if(elementoBoton.classList.contains("paso-1"))
  { 
    elementoBoton.classList.remove("paso-1")
    elementoBoton.classList.add("paso-2")
    elementoimagen.src = "https://e7.pngegg.com/pngimages/375/440/png-clipart-rick-sanchez-morty-smith-middle-finger-miscellaneous-grass.png"
  }
  
 else if(elementoBoton.classList.contains("paso-2"))
  {
    elementoBoton.classList.remove("paso-2")
    elementoBoton.classList.add("paso-1")
    elementoimagen.src = "https://images3.alphacoders.com/812/812062.png"
  }
}
var elementoBoton = document.getElementById("boton")
elementoBoton.addEventListener("click", cambiarImagen)

var elementoimagen = document.getElementById("Imagen-Rick-y-Morty")

function cambiarImagen ()
{
  if(elementoBoton.classList.contains("paso-1"))
  { 
    elementoBoton.classList.remove("paso-1")
    elementoBoton.classList.add("paso-2")
    elementoimagen.src = "https://e7.pngegg.com/pngimages/375/440/png-clipart-rick-sanchez-morty-smith-middle-finger-miscellaneous-grass.png"
  }
  
 else if(elementoBoton.classList.contains("paso-2"))
  {
    elementoBoton.classList.remove("paso-2")
    elementoBoton.classList.add("paso-1")
    elementoimagen.src = "https://images3.alphacoders.com/812/812062.png"
  }
}
