import './App.css';
import {Modal} from "./components/modal/Modal";


export const App = () => {


    return (
        <div>

     {/*       <SuperButton className={styles.redForSuperButton} onClick={()=>{}}>Red super Button</SuperButton>
            <SuperButton className={styles.blueForSuperButton} onClick={()=>{}}>Blue super Button</SuperButton>

            <SuperButton color={"red"}>Red SuperButton</SuperButton>
            <SuperButton color={"secondary"}>Secondary SuperButton</SuperButton>
            <SuperButton>Default SuperButton</SuperButton>
            <SuperButton disabled>Disabled SuperButton</SuperButton>

            <SuperCrosses crosses={cross}>
                <div>Куча всякой инфы</div>
                <div>Куча всякой инфы</div>
                <div>Куча всякой инфы</div>
                <div>Куча всякой инфы</div>
                <SuperButton color={"red"}>Red SuperButton</SuperButton>
                <SuperButton color={"secondary"}>Secondary SuperButton</SuperButton>
                <SuperButton>Default SuperButton</SuperButton>
                <SuperButton disabled>Disabled SuperButton</SuperButton>
            </SuperCrosses>

            <SuperCrosses crosses={cross}>
                <div>Куча всякой инфы</div>
                <div>Куча всякой инфы</div>
                <SuperButton color={"red"}>Red SuperButton</SuperButton>
                <SuperButton color={"secondary"}>Secondary SuperButton</SuperButton>
            </SuperCrosses>

            <SuperCrosses crosses={cross}>
                <input type={"text"} />
                <input type={"text"} />
                <input type={"text"} />
                <input type={"text"} />
                <div>Куча всякой инфы</div>
                <div>Куча всякой инфы</div>
                <SuperButton color={"red"}>Red SuperButton</SuperButton>
                <SuperButton color={"secondary"}>Secondary SuperButton</SuperButton>
           </SuperCrosses>
*/}

 {/*           <Modal>
                <input type={"email"} placeholder={'email'}/>
                <input type={"password"} placeholder={'pass'}/>
                <button>Send</button>
            </Modal>*/}

            <Modal>
                <h2>Confident Information</h2>
                <input type={"email"} placeholder={'email'}/>
                <input type={"password"} placeholder={'pass'}/>
                <input type={"password"} placeholder={'pass'}/>
                <label>
                    <input type={"checkbox"}/>
                    I agree
                </label>


                <button>Send</button>
            </Modal>

        </div>
    );
}