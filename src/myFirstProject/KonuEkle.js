import React, {useState} from 'react'

function KonuEkle() {
const [Konu, setKonu]= useState("");
const [Isim, setIsim]= useState("");
const [print, setPrint] = useState(false);


function EkleKonu(event){
    setKonu(event.target.value);
    setPrint(false);
}
function EkleIsim(event){
    setIsim(event.target.value);
    setPrint(false);
}

    return (
        <div className="konuEkle">

        <label>Konu: </label>
        <input 
        type="text"
       // name="Konu"
        onChange={EkleKonu}        
        
        ></input>
        <label>Isim</label>
        <input
        type="text"
        onChange={EkleIsim} 

        ></input>
        <button onClick={()=> setPrint(true)}>Ekle</button>
        {print? <div className="input"> <h3>Konu: {Konu} </h3> <h3>ISIM: {Isim}</h3> </div>: null }
            
        </div>
    )
}

export default KonuEkle




