import React from "react";  
import {Card,CardContent} from "@mui/material"
import { Home } from "./components/Home";

function App() {
  return (
<Card sx={{height:750,bgcolor:"pink"}}>
  <CardContent>
    <Home />
  </CardContent>
</Card>
  );
}

export default App;
