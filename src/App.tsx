import React, {useState} from 'react';
import './App.css';

type MoneyArrayType = {
    banknot: BanknotType
    nominal: number
    banknotNumber: string
}[]

type BanknotType = `all` | `rubles` | `dollars` | `BYN`

function App() {

    const money: MoneyArrayType = [
        {banknot: `rubles`, nominal: 100, banknotNumber: `ARX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `BRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `CRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `DRX1234567890`  },
        {banknot: `rubles`, nominal: 100, banknotNumber: `ERX1234567890`  },
        {banknot: `dollars`, nominal: 100, banknotNumber: `AAX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `BBX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `CCX1234567890` },
        {banknot: `dollars`, nominal: 100, banknotNumber: `DDX1234567890` },
        {banknot: `BYN`, nominal: 100, banknotNumber: `ZAX1234567890` },
        {banknot: `BYN`, nominal: 100, banknotNumber: `ZBX1234567890` },
        {banknot: `BYN`, nominal: 100, banknotNumber: `ZCX1234567890` },
        {banknot: `BYN`, nominal: 100, banknotNumber: `ZDX1234567890` },
    ]
    const [nameBanknoteFilteredState, setNameBanknoteFilteredState] = useState(`all`)
    console.log(22, `nameBanknoteFilteredState = ${nameBanknoteFilteredState}`)

    let currentBanknote = money
    if (nameBanknoteFilteredState === `rubles`) { currentBanknote = money.filter((x)=>x.banknot===`rubles`)}
    if (nameBanknoteFilteredState === `dollars`) { currentBanknote = money.filter((x)=>x.banknot===`dollars`)}
    if (nameBanknoteFilteredState === `BYN`) { currentBanknote = money.filter((x)=>x.banknot===`BYN`)}


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
        })}
        <button onClick={()=>onClickHandler(`all`)}>all</button>
        <button onClick={()=>onClickHandler(`rubles`)}>rubles</button>
        <button onClick={()=>onClickHandler(`dollars`)}>dollars</button>
        <button onClick={()=>onClickHandler(`BYN`)}>белорусские рубли</button>
    </div>
  );
}

export default App;
