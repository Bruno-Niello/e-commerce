import imgPbc01 from './media/pipa-bc01.jpg';
import imgPsa01 from './media/pipa-sa01.jpg';
import imgPpe01 from './media/pipa-pe01.jpg';
import imgTdh01 from './media/tabaco-dh01.jpg';
import imgTpe01 from './media/tabaco-pe01.jpg';
import imgTsg01 from './media/tabaco-sg01.jpg';
import imgTdh01M from './media/tabaco-dh01M.jpg';
import imgTpe01M from './media/tabaco-pe01M.jpg';
import imgTsg01M from './media/tabaco-sg01M.jpg';

const productos = [
    {id: 1, categoria: "pipas", stock: 3, name:"Butz Choquin", model:"Cobra", description:'Brezo | 15,5cm | Francesa | Curva', price:'$18,400', img: imgPbc01, detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue maximus fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper odio et sollicitudin interdum. Sed sit amet nibh magna. Morbi sollicitudin vitae nisi aliquet sollicitudin. Etiam bibendum mauris nisl, et eleifend mauris commodo id. Ut placerat tincidunt ante, in porttitor tortor suscipit vel. Sed in tortor vel sapien bibendum dapibus in vitae dolor. Sed eu elit molestie, condimentum massa ac, lacinia lacus. Vivamus sagittis hendrerit felis eu congue. Proin orci ante, bibendum at pellentesque id, molestie sed turpis. Maecenas nec aliquet nisi, nec dapibus nisl.'},
    {id: 2, categoria: "pipas", stock: 4, name:"Savinelli", model:"Ontario", description:'Brezo | 16cm | Italiana | Recta', price:'$23,700', img: imgPsa01, detail:'Morbi at blandit ante. Pellentesque non sapien eu nisi interdum vestibulum vel vel eros. Etiam sagittis magna est, vitae fermentum est consequat in. Nulla eget lacinia nibh, iaculis malesuada lectus. Aenean ornare dui ante. Etiam augue sem, consequat vel magna non, molestie efficitur risus. Fusce sed ipsum eu libero lacinia ullamcorper. Maecenas cursus quam nec vulputate tincidunt. Nam posuere diam in tellus sollicitudin luctus at a ante. Morbi congue eu libero at scelerisque. Nulla cursus metus ac porttitor dapibus. Sed gravida nunc vitae justo molestie euismod.'},
    {id: 3, categoria: "pipas", stock: 7, name:"Peterson", model:"Churchwarden Ebony", description:'Brezo | 27cm | Irlandesa | Lectura', price:'$35,900', img: imgPpe01, detail:'Nullam vitae ex est. Morbi metus mi, bibendum eu neque euismod, fringilla ultricies urna. Sed id quam vel elit dapibus tincidunt. Morbi nisl mi, porta et lorem eu, pulvinar aliquam libero. Nulla nunc felis, fermentum vel suscipit dictum, rutrum consequat magna. Integer fermentum orci vel justo tempor venenatis. Fusce et orci nec elit fermentum sagittis. Suspendisse finibus enim porta leo euismod dictum. Nulla massa tortor, auctor et cursus sed, consequat quis metus.'},
    {id: 4, categoria: "tabaco", stock: 14, name:"Peterson", model:"Irish Whiskey", description:'Lata | 50g | Irlandesa', price:'$2,900', img: imgTpe01, imgM: imgTpe01M, detail:'Una mezcla suave de Virginias Anaranjados y Caoba con Burley de Thailandia y Kentucky Dark Fired, todo con un toque de whisky irlandés.'},
    {id: 5, categoria: "tabaco", stock: 22, name:"Samuel Gawith", model:"Black XX", description:'Lata | 50g | Inglesa', price:'$2,700', img: imgTsg01, imgM: imgTsg01M, detail:'Un "rope" clásico cuya receta tiene cerca de 200 años y que es una soga trenzada, prensada y calentada de puros Virginias. Especiado, de mucho cuerpo, y con un alto contenido de nicotina.'},
    {id: 6, categoria: "tabaco", stock: 9, name:"Dunhill", model:"Early Morning Pipe", description:'Lata | 50g | Inglesa', price:'$3,200', img: imgTdh01, imgM: imgTdh01M, detail:'Dulces Orientales con una pizca de Latakia cuidadosamente mezclados con Virginias Rojos y Brillantes, prensados y ligeramente calentados. Es perfecto como "primera pipa de la mañana" despertando el paladar para los demás placeres del día.  '}
]

export const detalles = new Promise((res, rej)=>{

    setTimeout(()=>{
      res(productos);
      rej('hubo un problema');
    }, 2000);
  })