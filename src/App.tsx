import { Box, LinearProgress } from "@mui/material";
import { useState } from "react";
import RoutesPath from "./Routes";
import Layout from "./shared/components/Layout";

function App() {
  const [loader, setLoader] = useState(false);
  return (
    <>
      {loader ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <Layout>
          <RoutesPath />
        </Layout>
      )}
    </>
  );
}

export default App;
