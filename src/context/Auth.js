import { createContext, useState } from "react";
import axios from "axios";
import App from "../App";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const Auth = ( {children}) => {

    let navigate = useNavigate();

    let [data, setData] = useState([]);

    let startGame = (questions, category, difficulty) => {
        var raw = {
            questions: questions,
            category: category,
            difficulty: difficulty,
        }

        console.log(raw);
        
        axios
        .get("https://opentdb.com/api.php?amount="+ questions +"&category="+ category +"&difficulty="+ difficulty +"&type=multiple")
        .then((response) => {
            console.log(response.data);
            setData(response.data.results);
            
            navigate("/game");
        })
        .catch((error) => {
            console.log(error);
        });

    } 


    let contextData ={
            startGame,
            data
        };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}