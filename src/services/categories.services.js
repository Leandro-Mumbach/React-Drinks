import axios from "axios"

/* En apiUrl importamos la var de entorno, acceso a la url de la api */
const apiUrl = import.meta.env.VITE_API_URL

export const GetCategoriesServices = async () => {
  try {                   /* nombre del endpoint */
    const url = `${apiUrl}list.php?c=list`;
    const {data} = await axios.get(url)
    return data.drinks || []
  }
  catch (error){
    console.log(error)
    throw new Error("Hubo un error al obtener las categorias")
  }
}
