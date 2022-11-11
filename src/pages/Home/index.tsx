import { FC } from "react"
import Button from "../../components/Button"

const Home: FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={() => alert("Olá")} color="secondary">Inicial</Button>
        </div>
    )
}

export default Home