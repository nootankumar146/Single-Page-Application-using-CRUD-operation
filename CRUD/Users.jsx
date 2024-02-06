import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const Users = () => {
    let [users, setUsers] = useState([])
    let[reload, setReload]=useState(false)

    useEffect(() => {
        // axios.get("http://localhost:5000/employees")
        axios.get("http://localhost:7000/employee")
            .then((response) => { setUsers(response.data); })
            .catch(() => { console.log("errrrrrr"); })
            setReload(false)

    }, [reload])

    let deleteUser=(id)=>{
        axios.delete(`http://localhost:7000/employee/${id}`)
        setReload(true)
        //window.location.reload("/users")
    }



    return (
        <div id={style.usersPage}>
            {users.map((user) => {
                return (
                    <div>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>:{user.empName}</td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td>:{user.empSalary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>:{user.empCompany}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${user.id}`} id={style.edit}>EDIT</Link></button></td>
                                <td><button onClick={()=>{deleteUser(user.id)}}>DELET</button></td>
                            </tr>
                        </table>

                    </div>
                )

            })}

        </div>
    )
}
export default Users