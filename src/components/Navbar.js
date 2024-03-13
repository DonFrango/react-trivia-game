import { Stack, Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Navbar = () => {
    return (
        <Button sx={{ minwidth:"180px", width: "200px", background: "yellow"}}
        justifyContent={"center"}
        gap={4}>
                <Stack ml={2} direction={"row"} alignItems={"center"} gap={1}>
                    <PlayArrowIcon sx= {{ color: "black" }} />
                    <Link style={{ textDecoration: "none" }} to="/form">
                    <Typography sx= {{ color: "black" }} fontFamily={"monospace"} variant="h5">New Game</Typography>
                    </Link>
                </Stack>   
            </Button>
    );
};

export default Navbar;
