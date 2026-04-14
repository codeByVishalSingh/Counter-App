import { useSelector } from "react-redux";

const DisplayCounter = ()=>{
  const { counterVal }=  useSelector(Store => Store.counter);
    return(
        <div>

          <p className='lead mb-4'>
            Counter Current Value {counterVal} 
   </p>
        </div>
    )
}
export default DisplayCounter;