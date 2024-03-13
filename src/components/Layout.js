import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Box, Stack } from "@mui/material";


const Layout = () => {
    return (
        <Box sx={{ 
            height: '100vh'}}>
            <Box sx={{
                minHeight: '100vh',
                display: "flex"
            }}>
                <Navbar />
                <Box sx={{ width: "100%"}}>
                    <Stack direction= "column" height= "100%">
                        <Box 
                        sx={{
                            width: "100%",
                            background: "purple",
                            height: "100%",
                            borderLeft: "3px solid black"
                        }}>
                            <Stack sx={{
                                justifyContent: "center",
                                 alignItems: "center",
                                 height: "100%" }}>
                                 <Outlet />  
                            </Stack>
             
                        </Box>
                    </Stack>
                </Box>
            </Box>         
        </Box>
        
    );
}

export default Layout;