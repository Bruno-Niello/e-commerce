import { Item } from './Item';



export const ItemList = ({items}) => {

  return (
    <>
        <div className='container-pipas'>
              {items?.map(items => <Item stock={items.stock} name={items.name} model={items.model} description={items.description} price={items.price} img={items.img} key={items.id} id={items.id}/>)}   
        </div>
    </>
  )
}

