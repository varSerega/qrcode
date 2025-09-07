import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import s from'./Qrcode.module.css'
import { GENERATE_DATA } from '../../constants';

export const QrCodGenerator = () => {
    const [value, setValue] = useState('')
    const[result, setResult] = useState('')


    const onClickHandler = () =>{
     
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)||'[]');
        localStorage.setItem(GENERATE_DATA,
        JSON.stringify([...prevData,value]))
        setResult(value)
        setValue('')
    }

    const onChangeHandler = (event)=>{
        setValue(event.target.value)
        setResult('')
    }
    return (
        <>
        <div className={s.container}>  
         <input 
         type="text"
          placeholder="введите текст" 
          value={value} 
          onChange={onChangeHandler} 
          className={s.input}/>
         <button onClick={onClickHandler}

          className={s.button}>Сгенерировать</button>
           { result !== '' && ( <div className={s.qrWrapper}><QRCodeSVG value={result} size={200} /></div>) } 
         
         </div>
      
        </>
       
    )
}