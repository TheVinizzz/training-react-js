import { FC } from "react";
import { IButton, ISelectColor } from "./interfaces";
import * as StyleLocal from "./styles"

const Button: FC<IButton> = ({ children, onClick, color }) => {

    const SelectColor: ISelectColor = {
        primary: { font: "#000", background: "#9bf542" },
        secondary: { font: "#fff", background: "#f5427e" },
        default: { font: "#000", background: "#7fffd4" }
    }

    return (
        <StyleLocal.Button onClick={onClick} colorButton={SelectColor[color || 'default']}>
            {children}
        </StyleLocal.Button>
    )
}

export default Button;