import { useEffect, useState } from "react";
import '../../components/todo/todo.css'
import Logo2 from '../../assets/img/logo2.svg'
import Cofee from '../../assets/img/Component 5.svg'
export const Todo = () => {
    let [value, setValue] = useState(0)

    function deletePost() {
        setValue(value + 1)
        console.log(value)
    }


    return(
        <section className="todo" id="todo">
            <div className="center">
                <img className='logo2' src={Logo2} alt="alt" />
                <div className="block">
                    <input className="label" placeholder="Name post" type="text" />
                    <input className="label2" placeholder="Add post" type="text" />
                    <input className="label3" placeholder="Description post" type="text" />
                </div>
            </div>
            <div className="todoska">
                
                <button className="delete" type="button" onClick={deletePost}>Delete</button>
                <img className="cofee" src={Cofee} alt="alt" />
            </div>
        </section>
    )
}