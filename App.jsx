
import Home from "./CRUD/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Users from "./CRUD/Users"
import CreateUser from "./CRUD/CreateUser"
import Edituser from "./CRUD/Edituser"



const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Home />
                <Routes>
                    <Route element={<CreateUser />} path="/" />
                    <Route element={<Users />} path="/users" />
                    <Route element={<Edituser />} path="/edit/:abc" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App




































































// import Explore from "./Components/Explore"
// import Findcoder from "./Components/Findcoder"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Hire from "./Components/Hire"
// import Dev from "./Components/Dev"
// import Challenge from "./Components/Challenge"


// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Findcoder />

//               <Routes>
//                         <Route element={<Explore />} path="/explore" />
//                         <Route element={<Hire />} path="/hire" />
//                         <Route element={<Dev />} path="/dev" />
//                         <Route element={<Challenge />} path="/challenge" />
//                 </Routes>

//             </BrowserRouter>
//         </div>
//     )
// }
// export default App


