import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
