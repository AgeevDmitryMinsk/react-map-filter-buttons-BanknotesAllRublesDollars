import React, {useState} from 'react';
import './App.css';


type BanknotType = `all` | `rubles` | `dollars`

function App() {

    const money = [
        {banknot: `rubles`, nominal: 100, banknotNumber: `ARX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `BRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `CRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `DRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `ERX1234567890`  },
        {banknot: `dollars`, nominal: 100, banknotNumber: `AAX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `BBX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `CCX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `DDX1234567890` },
    ]
    const [nameBanknoteFilteredState, setNameBanknoteFilteredState] = useState(`all`)
    console.log(22, `nameBanknoteFilteredState = ${nameBanknoteFilteredState}`)

    let currentBanknote = money
    if (nameBanknoteFilteredState === `rubles`) { currentBanknote = money.filter((x)=>x.banknot===`rubles`)}
    if (nameBanknoteFilteredState === `dollars`) { currentBanknote = money.filter((x)=>x.banknot===`dollars`)}


    function onClickHandler(nameBanknote: BanknotType) {
        setNameBanknoteFilteredState(nameBanknote)
        return console.log(30, `nameBanknote = ${nameBanknote}`, `nameBanknoteFilteredState = ${nameBanknoteFilteredState}`)
    }

    return (
    <div className="App">
        {currentBanknote.map((x, index)=>{
            return(
                <li key={index}>
                    <span> {x.banknot} </span>
                    <span> {x.nominal} </span>
                    <span> {x.banknotNumber} </span>
                </li>
            )
            console.log(x)
        })}
        <button onClick={()=>onClickHandler(`all`)}>all</button>
        <button onClick={()=>onClickHandler(`rubles`)}>rubles</button>
        <button onClick={()=>onClickHandler(`dollars`)}>dollars</button>
    </div>
  );
}

export default App;
