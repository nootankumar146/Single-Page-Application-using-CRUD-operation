import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreateUser = () => {
    let [name, setName] = useState("")
    let [salary, SetSalary] = useState("")
    let [company, setCompany] = useState("")

    let navigate = useNavigate()

    let getName = (e) => {
        setName(e.target.value)
    }
    let getSalary = (e) => {
        SetSalary(e.target.value)
    }
    let getCompany = (e) => {
        setCompany(e.target.value)
    }

    let formHandle = (e) => {
        e.preventDefault()
        // console.log(name, salary, company);
        let payload = {
            empName: name,
            empSalary: salary,
            empCompany: company
        }
        // axios.post("http://localhost:5000/employees", payload)
        axios.post("http://localhost:7000/employee", payload)
            .then(() => { console.log("DATA HAS BEEN STORED"); })
            .catch(() => { console.log("error"); })

        navigate("/users")

    }



    return (
        <div id={style.myForm}>
            <form>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={getName} />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={getSalary} />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={getCompany} />
                <button onClick={formHandle}>Submit</button>
            </form>


        </div>
    )

}
export default CreateUser

