import {useState, useEffect, createContext} from "react"
import PropTypes from "prop-types"
import { GetCategoriesServices } from "../services/categories.services" 

 const CategoriesContext = createContext()

 const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);

  
  const getCategories = async () => {
      try {
          const categoriesDate = await GetCategoriesServices()
          setCategories(categoriesDate)
        }
        catch (error){
            console.error(error)
        }
    }
    
    useEffect(() => {getCategories()},[])

  return(
    <CategoriesContext.Provider value={{categories}}>
        {children}
    </CategoriesContext.Provider>
  )
}

CategoryProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export { CategoryProvider, CategoriesContext };

