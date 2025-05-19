import type {ButtonHTMLAttributes} from "react";
import s from "./SuperButton.module.css"

/*
type SuperButtonProps = {
    onClick: () => void;
    color: string;
    title?: string;
    children?: ReactNode;
};
*/

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    backGround?: string
} & Omit<ColorsProps, "color4" | "color5">

export const SuperButton =(props: SuperButtonProps) => {
const {onClick, color, children, title, className, disabled, ...restProps} = props

   /* const finalClassName =
        styles.button +
        (disabled
            ? " " + styles.disabled
            : color === "red"
                ? " " + styles.red
                : color === "secondary"
                    ? " " + styles.secondary
                    : " " + styles.default) +
        (className ? " " + className : "");*/

    const finalClassName = `
      ${s.button}
      ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
      ${disabled ? s.disabled : ""}
    `

    return (
        <button className={finalClassName}>{children}</button>
    )
}