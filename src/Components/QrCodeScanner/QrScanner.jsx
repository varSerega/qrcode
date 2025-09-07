import { Scanner } from '@yudiel/react-qr-scanner';
import {useState} from 'react'
import  s from './QrCodeScanner.module.css'
import  { SCAN_DATA } from '../../constants';


export const QrCodeScanner = () => {
  const [scan, setScan]=useState(null)
 console.log(SCAN_DATA)

    const settings = {
        audio:false,
        finder:false
    }

    const scanHandler = (result) => {setScan(result[0].rawValue)

     const prevData = JSON.parse(localStorage.getItem(SCAN_DATA)||'[]');
     
      localStorage.setItem(SCAN_DATA,
        JSON.stringify([...prevData,result[0].rawValue]))
    }

 
    return (
    <div className={s.container}>
    <Scanner
     onScan={scanHandler}
     components={ settings}
     styles={{container:{
            width:200,
        }}}
     />;
   <p className={s.result}>{scan}</p>
     </div>
    )
};