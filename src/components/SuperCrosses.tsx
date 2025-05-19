import type {ReactNode} from "react";

type Props = {
    crosses: Cross[]
    children: ReactNode
};
type Cross = {
    id: number
    model: string
    size: string
}


export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map(cross => {
                    return (
                            <li key={cross.id}>
                                <div>{cross.id}</div>
                                <div>{cross.size}</div>
                                <div>{cross.model}</div>
                            </li>
                    )
                })}
            </ul>
            <hr/>
            {children}
        </div>
    );
};