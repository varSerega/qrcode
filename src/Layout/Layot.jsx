import {Navigation} from '../Components/Navigation/Navigation';
import { QrCodGenerator } from "../Components/QrCodGenerator/QrCodGenerator"
import { QrCodeScanner } from "../Components/QrCodeScanner/QrScanner" 
import { GenerateHistory } from '../Components/Navigation/GenerationHistory/GenHistory';
import { ScanHistory } from '../Components/Navigation/ScanHistory/ScanHistory';
import { Routes, Route } from 'react-router-dom';


export const Layout = () =>{



    return(
        <>
        <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodGenerator/>}/>
        <Route path='/scan' element={<QrCodeScanner/>}/>
        <Route path='/generatehistory' element={<GenerateHistory/>}/>
        <Route path='/scanhistory' element={<ScanHistory/>}/>

      </Routes>
       </>
       
    )
}
