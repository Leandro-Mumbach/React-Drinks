import axios from "axios";

const apiUserUrl = import.meta.env.VITE_USER_API_URL;

export const userRegister = async (body) => {
    try {                   
    const url = `${apiUserUrl}/register`;
    const {data} = await axios.post(url, body)
    return data
  }
  catch (error){
    console.log(error)
    throw new Error("Hubo un error al registrar el usuario")
  }
}


export const userLogin = async (body) => {
    try {                   
    const url = `${apiUserUrl}/login`;
    const {data} = await axios.post(url, body)
    return data
  }
  catch (error){
    console.log(error)
    throw new Error("Hubo un error al loguear el usuario")
  }
}
