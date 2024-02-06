import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Edituser = () => {
    let userId = useParams();
    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:7000/employee/${userId.abc}`)
            .then((response) => {
                setName(response.data.empName)
                setSalary(response.data.empSalary)
                setCompany(response.data.empCompany)
            })
            .catch(() => {
                console.log("error");
            });
    }, []);

    let getName = (e) => {
        setName(e.target.value);
    }
    let getSalary = (e) => {
        setSalary(e.target.value);
    }
    let getCompany = (e) => {
        setCompany(e.target.value);
    }
    let formHandle = (e) => {
        e.preventDefault()
        let payload = {
            empName: name,
            empSalary: salary,
            empCompany: company
        }
        console.log(payload);
        axios.put(`http://localhost:7000/employee/${userId.abc}`,payload)
            .then((res) => { 
                console.log(res);
                console.log("updated"); 
            })
            .catch(() => { console.log("error"); })
        // window.location.assign("/users")
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
                <button onClick={formHandle}>Update</button>
            </form>


        </div>
    )
}
export default Edituser