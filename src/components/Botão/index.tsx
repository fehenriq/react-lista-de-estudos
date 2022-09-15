import React from "react";
import { IProps } from "../../types/IProps";
import style from './Botao.module.scss';

class Botao extends React.Component<IProps> {
    render(): React.ReactNode {
        const {type = "button"} = this.props;
        return (
            <button type={type} className={style.botao}>
                { this.props.children }
            </button>
        )
    }
}

export default Botao;