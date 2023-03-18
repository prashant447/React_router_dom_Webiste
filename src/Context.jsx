import { createContext, useContext} from "react";
import { useEffect, useReducer } from 'react'
import reducer from "./Reducer";


const AppContext = createContext();
const API = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c0868aee2834fc695929c2c23bd77d5"

const initialState = {
    name: "",
    image: "",
    services:[],
  };

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
          type: "HOME_UPDATE",
          payload: {
            name: "Techgeeks360",
            image: "./Images/logo2.png",
          },
        });
      };
    
      const updateAboutPage = () => {
        return dispatch({
          type: "ABOUT_UPDATE",
          payload: {
            name: "We Make Coders",
            image: "./Images/home.png",
          },
        });
      };

  //  to get the api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data.articles });
     
      
    } 
    catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

     return(
    <AppContext.Provider  value={{ ...state, updateHomePage, updateAboutPage }} >{children}</AppContext.Provider>
    )
}

// gloabal custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
  };

export  {AppContext, AppProvider, useGlobalContext}