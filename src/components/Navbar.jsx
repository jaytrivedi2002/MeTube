import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignIterms: "center" }}>
      <img src={logo} alt="logo" height={50} />
      <Typography variant="h4" color = "white" pl={"5px"} pt = {"5px"} sx={{ opacity: 1.0, right: 100}}>
        {"MeTube"}
      </Typography>
    </Link>
    <SearchBar />
    <button>S</button>
  </Stack>
);

export default Navbar;
