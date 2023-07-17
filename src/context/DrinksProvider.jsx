import {useState, useEffect, createContext} from "react"
import PropTypes from "prop-types"
import {FilterDrinksService, GetRecipeService} from "../services/drink.service"

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const [drinkId, setDrinksId] = useState(null);
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(false);

const handleModalClick = () => {
    setModal(!modal)
}    
const handleDrinkIdClick = (id) => {
    setDrinksId(id)
};
const getRecipe = async () => {
    if(!drinkId)
        return;
    try {
        setLoading(true)
        const recipeData = await GetRecipeService(drinkId);
        setRecipe(recipeData)
    }
    catch(error){
        console.error(error)
    } finally {
        setLoading(false)
    }
    
}
const getDrink = async (data) => {
    try{
        setLoading(true)
        const drinksData = await FilterDrinksService(data.name, data.category);
        const drinksWithPrice = drinksData.map((drink) => {
            return {
                ...drink,
                price: Math.floor(Math.random()*101),
            }
        })
        setDrinks(drinksWithPrice)
    }
    catch(error){
        console.error(error);
    } finally{
        setLoading(false);
    }
}
useEffect(() => {
    getRecipe();
},[drinkId])

const contextValue = {
    drinks,
    modal,
    recipe,
    loading,
    handleModalClick,
    handleDrinkIdClick,
    getDrink,
}   

return (
    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>
)
}

DrinksProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export { DrinksContext, DrinksProvider };


