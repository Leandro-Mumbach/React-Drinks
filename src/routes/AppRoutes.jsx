import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/User/Login/Login";
import Register from "../pages/User/Register/Register";
import { ProtectedRoute } from "./ProtectedRoute";


export const AppRoutes = () => {
  return ( 
      <Routes>
        <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<ProtectedRoute/> }>
              <Route path="/" element={<Home/>}/>
            </Route>

          <Route path="*" element={<NotFound/>}/>
        </Routes>
  )
}
