### MEFE PIPAS
## ecommerce de pipas ficticio. react.js/firebase/sass

*Página realizada durante el cursado de React en Coderhouse. Bruno Niello. 2022*


## Herramientas utilizadas: 
    realizado en **React.js**
    backend con **Firebase**
    estilizado en su totalidad con **Sass (scss)**

## Librerias instaladas:
    react routes
    sweet alert 2

*fondos y patrones css extraidos de: https://dinpattern.com/*

## sobre la app y sus funcionalidades:

- La app cuenta con una home que extrae e imprime los productos desde una base de datos en Firestore.
- El carrito funciona con localStorage para evitar perderse en los refrescos de la página. 
- Las funciones del carrito están en un Context (custom hook) de uso global en la App. 
- La App cuenta con estados de react y useEffects para el renderizado y envió de componentes. 
- A la hora de finalizar la compra en el carrito se envía un documento con la orden de compra al Firestore con los datos de usuario del formulario validado y los      productos seleccionados. 

 ## Problemas encontrados: 
 
 ## ***Perdida de propiedades de objeto con Firestore:***
 
 De los 9 objetos recuperados de Firestore se observan tres perdidas de propiedades.
 
 Cada objeto "producto" contiene nueve (9) propiedades a ser: 
 - categoria
 - nombre
 - modelo
 - descripción
 - detalle
 - precio
 - stock
 - imagen
 - imagen grande
 
 Los siguientes dos objetos perdieron propiedades: 
 - Tabaco Dunhill **perdio la propiedad descripción y la propiedad categoria** (no aparece a la hora de filtrar por categorias)
 - Tabaco Peterson **perdio la propiedad imagen** (copia por algún motivo la imagen de Dunhill, sin embargo en detalles se observa su imagen grande)
 
 La solución de este problema escapo totalmente a mis manos y no encontre documentación para solucionarlo. 

## ***Problema con alertas a la hora de manejar un estado***

Se usa un useState (estado) llamado "mostrarAlerta”, es un booleano y viene por defecto en true. Dependiendo su condición muestra una u otra alerta. 
Este estado cambia en una función que se ejecuta en un evento onClick. Al estar en true muestra una alerta de “agregaste X producto”. Al estar en false muestra una alerta de “no hay más stock”.

Funciona. 

Pero funciona con cierto error: debido a que el estado false o true se setea en un click, obliga a hacer dos clicks para ver el resultado esperado. 

Ejemplo: 

Tenemos dos unidades de stock de tabaco. Al agregar 2 veremos la alerta de que fue agregado con éxito. 

El problema viene en la tercera unidad, la tercera unidad NO se agregará, pero la alerta de que fue agregado con éxito se disparara igual.  Y recién entonces el estado cambiara a false. 

Lo mismo ocurrirá en viceversa, ya que ahora que esta false, no importa que producto agreguemos va a dispararse si o si la alerta de que no hay stock, y entonces cambiara el estado de nuevo. 

Esto es relativamente fácil de arreglar, pero por falta de tiempo para la entrega final se dejará así hasta una próxima versión.   

GIF mostrando el problema:

![problema de alerts](https://firebasestorage.googleapis.com/v0/b/mefe-pipas.appspot.com/o/MEFE-PIPAS%20PROBLEMA.gif?alt=media&token=1014a56d-f1ff-4f79-85a5-7517a46659dd)

*en caso de que se vea en baja calidad, o no se vea el gif: https://www.youtube.com/watch?v=CMzTvELKIKQ&ab_channel=BrunoNiello (video de 30s con el problema)*

## hoja de ruta: 

hoja de ruta de trabajo del mes de Julio. 

![hoja de ruta Julio 2022](https://firebasestorage.googleapis.com/v0/b/mefe-pipas.appspot.com/o/hoja%20de%20ruta.png?alt=media&token=0e5a02a1-875c-4846-93fb-0b3533ed751a)

