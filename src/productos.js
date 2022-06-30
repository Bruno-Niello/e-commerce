import imgPbc01 from './media/pipa-bc01.jpg';
import imgPsa01 from './media/pipa-sa01.jpg';
import imgPpe01 from './media/pipa-pe01.jpg';
import imgPbc01M from './media/pipa-bc01M.jpg';
import imgPsa01M from './media/pipa-sa01M.jpg';
import imgPpe01M from './media/pipa-pe01M.jpg';
import imgTdh01 from './media/tabaco-dh01.jpg';
import imgTpe01 from './media/tabaco-pe01.jpg';
import imgTsg01 from './media/tabaco-sg01.jpg';
import imgTdh01M from './media/tabaco-dh01M.jpg';
import imgTpe01M from './media/tabaco-pe01M.jpg';
import imgTsg01M from './media/tabaco-sg01M.jpg';
import imgAgt01 from './media/acc-gt01.jpg';
import imgApe01 from './media/acc-pe01.jpg';
import imgApp01 from './media/acc-pp01.jpg';
import imgAgt01M from './media/acc-gt01M.jpg';
import imgApe01M from './media/acc-pe01M.jpg';
import imgApp01M from './media/acc-pp01M.jpg';


const productos = [
    {id: 1, categoria: "pipas", stock: 3, name:"Butz Choquin", model:"Cobra", description:'Brezo | 15,5cm | Francesa | Curva', price:'18400', img: imgPbc01, imgM: imgPbc01M, detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue maximus fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper odio et sollicitudin interdum. Sed sit amet nibh magna. Morbi sollicitudin vitae nisi aliquet sollicitudin. Etiam bibendum mauris nisl, et eleifend mauris commodo id. Ut placerat tincidunt ante, in porttitor tortor suscipit vel. Sed in tortor vel sapien bibendum dapibus in vitae dolor. Sed eu elit molestie, condimentum massa ac, lacinia lacus. Vivamus sagittis hendrerit felis eu congue. Proin orci ante, bibendum at pellentesque id, molestie sed turpis. Maecenas nec aliquet nisi, nec dapibus nisl.'},
    {id: 2, categoria: "pipas", stock: 4, name:"Savinelli", model:"Ontario", description:'Brezo | 16cm | Italiana | Recta', price:'23700', img: imgPsa01, imgM: imgPsa01M, detail:'Morbi at blandit ante. Pellentesque non sapien eu nisi interdum vestibulum vel vel eros. Etiam sagittis magna est, vitae fermentum est consequat in. Nulla eget lacinia nibh, iaculis malesuada lectus. Aenean ornare dui ante. Etiam augue sem, consequat vel magna non, molestie efficitur risus. Fusce sed ipsum eu libero lacinia ullamcorper. Maecenas cursus quam nec vulputate tincidunt. Nam posuere diam in tellus sollicitudin luctus at a ante. Morbi congue eu libero at scelerisque. Nulla cursus metus ac porttitor dapibus. Sed gravida nunc vitae justo molestie euismod.'},
    {id: 3, categoria: "pipas", stock: 7, name:"Peterson", model:"Churchwarden Ebony", description:'Brezo | 27cm | Irlandesa | Lectura', price:'41400', img: imgPpe01, imgM: imgPpe01M, detail:'Nullam vitae ex est. Morbi metus mi, bibendum eu neque euismod, fringilla ultricies urna. Sed id quam vel elit dapibus tincidunt. Morbi nisl mi, porta et lorem eu, pulvinar aliquam libero. Nulla nunc felis, fermentum vel suscipit dictum, rutrum consequat magna. Integer fermentum orci vel justo tempor venenatis. Fusce et orci nec elit fermentum sagittis. Suspendisse finibus enim porta leo euismod dictum. Nulla massa tortor, auctor et cursus sed, consequat quis metus.'},
    {id: 4, categoria: "tabaco", stock: 14, name:"Peterson", model:"Irish Whiskey", description:'Lata | 50g | Irlandes', price:'2900', img: imgTpe01, imgM: imgTpe01M, detail:'Una mezcla suave de Virginias Anaranjados y Caoba con Burley de Thailandia y Kentucky Dark Fired, todo con un toque de whisky irlandés.'},
    {id: 5, categoria: "tabaco", stock: 22, name:"Samuel Gawith", model:"Black XX", description:'Lata | 50g | Ingles', price:'2700', img: imgTsg01, imgM: imgTsg01M, detail:'Un "rope" clásico cuya receta tiene cerca de 200 años y que es una soga trenzada, prensada y calentada de puros Virginias. Especiado, de mucho cuerpo, y con un alto contenido de nicotina.'},
    {id: 6, categoria: "tabaco", stock: 9, name:"Dunhill", model:"Early Morning Pipe", description:'Lata | 50g | Ingles', price:'3200', img: imgTdh01, imgM: imgTdh01M, detail:'Dulces Orientales con una pizca de Latakia cuidadosamente mezclados con Virginias Rojos y Brillantes, prensados y ligeramente calentados. Es perfecto como "primera pipa de la mañana" despertando el paladar para los demás placeres del día.'},
    {id: 7, categoria: "accesorio", stock: 3, name:"Peterson", model:"Pipero x3 pipas", description:'Ceramica | ebano | Ingles', price:'17500', img: imgApe01, imgM: imgApe01M, detail:'Para los amantes de la legendaria casa irlandesa, como yo, un pipero perfecto para lucir sus piezas favoritas como se merecen. Medidas 22.5 cm x 10 cm x 10 cm'},
    {id: 8, categoria: "accesorio", stock: 1, name:"de Gres", model:"Gran tabaquera alemana de Gres", description:'Ceramica | Aleman', price:'50000', img: imgAgt01, imgM: imgAgt01M, detail:'Gran Tabaquera alemana de Gres Ceramico. Alto de 21cm y diámetro de 14,7cm'},
    {id: 9, categoria: "accesorio", stock: 12, name:"Big Ben", model:"Pouch portapipa y tabaquera", description:'Cuero | Holandes', price:'8750', img: imgApp01, imgM: imgApp01M, detail:'Realizado en cuero de excelente calidad, este práctico estuche está diseñado para acomodar una pipa, todos tus accesorios, y, además, tiene una tabaquera de muy buena capacidad forrada en mylar. Todo con la calidad habitual de esta tradicional casa holandesa.'}
]

export const detalles = new Promise((res, rej)=>{

    setTimeout(()=>{
      res(productos);
      rej('hubo un problema');
    }, 2000);
  })