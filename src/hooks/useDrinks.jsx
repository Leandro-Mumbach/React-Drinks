import { useContext } from "react";
import { DrinksContext } from "../context/DrinksProvider";

export const useDrinks = () => {
  return (
    useContext(DrinksContext)
  )
}
