import React from 'react';
import { Item } from './Item';

export const ItemList = () => {

  return (
    <>
        <h1 className='pipas'>Pipas:</h1>
        <div className='container-pipas'>
            <Item stock={3} name={"Butz Choquin"} model={"Cobra"} description={'Brezo | 15,5cm | Francesa | Curva'} price={'$18,400'} img={'../src/media/pipa-bc01.jpg'}/>
            <Item stock={4} name={"Savinelli"} model={"Ontario"} description={'Brezo | 16cm | Italiana | Recta'} price={'$23,700'} img={'../src/media/pipa-sa01.jpg'}/>
            <Item stock={7} name={"Peterson"} model={"Churchwarden Ebony"} description={'Brezo | 27cm | Irlandesa | Lectura'} price={'$35,900'} img={'../src/media/pipa-pe01.jpg'}/>
        </div>
    </>
  )
}

