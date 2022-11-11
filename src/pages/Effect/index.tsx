import { FC, useEffect, useState } from "react"
import * as Style from "./styles"
import Button from "../../components/Button"

const Effect: FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    const toggle = () => {
        setSeconds(0);
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval: any = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
            <h1>Effect ( UseEffect )</h1>
            <Style.Container>
                <div className="time">
                    <span>{seconds}</span> segundos
                </div>
                <div className="containerButtons">
                    <Button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</Button>
                    <Button onClick={reset}>Reset</Button>
                </div>
            </Style.Container>
        </>
    )
}

export default Effect