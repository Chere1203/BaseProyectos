import {useContador} from "../hooks/useContador"
import { CONTADOR_TEXT } from "../constants/contador.constants"
import { useState } from "react"

export function Contador2({ count, setCount }) {

    const {handleDecrement } = useContador(setCount)

    return (
        <>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={count > 0 && handleDecrement}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>
    )
}