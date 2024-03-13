import { useContext, useState } from "react";
import { Box, Button, Stack, Radio, RadioGroup, FormLabel, FormControlLabel } from "@mui/material";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router";

const Game = () => {
    const { data } = useContext(AuthContext);
    console.log(data);
    let [questions, setQuestions] = useState(0);
    let [score, setScore] = useState(0);
    const navigate = useNavigate();

    let Answers = [...data[questions].incorrect_answers, data[questions].correct_answer];
    for (let i = Answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [Answers[i], Answers[j]] = [Answers[j], Answers[i]];
      };

    console.log(Answers); 
let handleQuestion = () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const correctAnswer = data[questions].correct_answer;
    if (selectedAnswer === null) {
        alert("Please select an answer");
        return;
    }

    if (selectedAnswer.value === correctAnswer) {
        setScore(score + 1);
    }

    if (questions === data.length - 1) {
        alert(`Your score is ${score}`);
        setQuestions(0);
        setScore(0);
        navigate("/form");
    }

    setQuestions(questions + 1);
   
}
   
    return (
        <Box sx={{color: "white"}}>
            <Stack direction={"row"} justifyContent={"right"}>
            <Button sx={{color: "black", background: "yellow", outline: "solid 1px black"}} >Score: {score}</Button>
            </Stack>

            <Stack >
                <Box>
                    <p>Question: {data[questions].question}</p>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{color: "white"}}>Answer</FormLabel>
                    <RadioGroup>
                        {Answers.map((answer, index) => (
                            <FormControlLabel key={index} value={answer} control={<Radio />} label={answer} name="answer"/>
                        ))}
                    </RadioGroup>
                </Box>   
            </Stack>
            <Button onClick={handleQuestion}>Next Question</Button>
        </Box>
    );
}

export default Game;