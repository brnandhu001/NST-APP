import { Box } from "@mui/material"

import Dashboard from "./App/Dashboard/Dashboard"
import Sidebar from "./App/Sidebar/Sidebar"

function App() {


  return (
    <>
    <Box display={"flex"}>
      <Box>
      <Sidebar/>
      </Box>
      <Box>
        <Dashboard/>
      </Box>
    </Box>
    </>
  )
}

export default App
