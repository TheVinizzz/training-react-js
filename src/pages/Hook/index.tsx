import { ChangeEvent, FC, useState } from "react"
import * as Style from "./styles"
import useLocalStorage from "../../hooks/useLocalStorage"

const Hook: FC = () => {
    const [name, setName] = useLocalStorage("name", '')
    const [email, setEmail] = useLocalStorage('email', '')

    return (
        <>
            <h1>Hook ( Custom Hook )</h1>
            <Style.Container>
                <div className="inputContainer">
                    <input type="text" name="name" value={name} onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)} placeholder="nome" />
                    <input type="email" name="email" value={email} onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} placeholder="E-mail" />
                </div>
                <h1>Nome: {name || ''}</h1>
                <h1>Email: {email || ''}</h1>
            </Style.Container>
        </>
    )
}

export default Hook