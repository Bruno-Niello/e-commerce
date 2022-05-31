import React, {useState, useEffect} from 'react'

export default function Test({desde}) {
  const [x, setX] = useState(0);

  //mount (montaje)
  useEffect(()=>{

    //dismount (desmontaje)
    return () => {
    }

  }, [] //array de dependecias, si esta vacio es el primer montaje
  )
  
  //en cada cambio y en la 1era vez es sin array
  useEffect(()=>{
    if (x == 10){
        alert("che loco andate a tu casa ya estas hace rato");
    }
  })
  //solamente aplicado a la x
  useEffect(()=>{
    if (x == 10){
        alert("che loco andate a tu casa ya estas hace rato");
    }
  }, [x])


return (
    <>
    <div>desde: {x} </div>
    <button onClick={()=>{
        setX(x++);
    }}>Sumar</button>
    </>
  )
}


//el stock es una prop bro xdxdxdxdxdxdxd
