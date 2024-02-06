import { Link } from "react-router-dom"
import style from "./home.module.css"
const Home=()=>{
    return(
       
        <div id={style.nav}>
            
                <Link to="/">CREATE-USER</Link>
                <Link to="/users">USER</Link>
            
        </div>
  
    )
}
export default Home