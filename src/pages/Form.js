import { useRef, useContext, useState, useEffect } from "react";
import { Stack, TextField, Button, Select, MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import { AuthContext } from "../context/Auth";
import axios from "axios";

const Form = () => {
    const questions = useRef();
    const [value, setValue] = useState('');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');

    let { startGame } = useContext(AuthContext);

    let handleData = () => {
        startGame(questions.current.value, selectedCategory, selectedDifficulty);
    }

    const handleChangeCategory = (event) => {
        setValue(event.target.value);
        setSelectedCategory(event.target.value); // Set the selected category
    };
    
    const handleChangeDifficulty = (event) => {
        setSelectedDifficulty(event.target.value); // Set the selected difficulty
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    
    let fetchCategories = () => {
        axios.get("https://opentdb.com/api_category.php")
            .then((response) => {
                setCategories(response.data.trivia_categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Stack gap={3}>
            <TextField
                inputRef={questions}
                label="Number of Questions"
                variant="outlined">
                Number of Questions
            </TextField>
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Choose Category"
                        onChange={handleChangeCategory}>
                        {categories.map((categoryItem) => (
                            <MenuItem key={categoryItem.id} value={categoryItem.id}>{categoryItem.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Choose Difficulty</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Choose Difficulty"
                        onChange={handleChangeDifficulty}>        
                        <MenuItem value="easy">Easy</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="hard">Hard</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
               
                    <Button variant="contained" onClick={handleData}>Start Game</Button>
               
            </Box>
        </Stack>
    );
};

export default Form;