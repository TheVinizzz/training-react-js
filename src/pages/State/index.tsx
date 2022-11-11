import { ChangeEvent, FC, useState } from "react"
import * as Style from "./styles"
import Button from "../../components/Button"

const State: FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [listUsers, setListUsers] = useState<any[]>([])

    const resetInputs = () => {
        setName('')
        setEmail('')
    }

    const handleSendUser = () => {
        //setListUsers(old => [...old, { name, email }])
        setListUsers([...listUsers, { name, email }])
        resetInputs()
    }

    const handleDeleteUser = (email: string) => {
        setListUsers(old => old.filter(val => val.email !== email))
    }

    return (
        <>
            <h1>Estado ( UseState )</h1>
            <Style.Container>
                <div className="inputContainer">
                    <input type="text" name="name" value={name} onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)} placeholder="nome" />
                    <input type="email" name="email" value={email} onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} placeholder="E-mail" />
                </div>
                <ul>
                    {listUsers.map(val => (
                        <li>Nome: {val.name} E-mail: {val.email}  <span onClick={() => handleDeleteUser(val.email)}>Deletar</span></li>
                    ))}
                </ul>
                <Button onClick={handleSendUser}>Adicionar</Button>
            </Style.Container>
        </>
    )
}

export default State