import loader from '../media/loader.png'

export const Loader = ({loading}) => {



  return (
    <>
    <div>{loading && <div className='loader-contenedor-max'><div className='loader-contenedor'><img className='loader' src={loader}></img></div></div>}</div>
    </>
  )
}
