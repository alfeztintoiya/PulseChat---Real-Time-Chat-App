import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  styled,
  alpha,
  InputBase,
  Button,
  Divider,
  Avatar
} from "@mui/material";
import {
  ArchiveBox,
  Circle,
  CircleDashed,
  MagnifyingGlass,
} from "phosphor-react";
import { Faker } from "@faker-js/faker";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));


const ChatElement = () => {
  return (
    <Box sx={{
      width:"100%",
      height: 60,
      borderRadius: 1,
      backgroundColor: '#fff',
    }} p={2}>
      <Avatar src={Faker}/>
    </Box>
  )
};
const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>

        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archived</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack direction={"column"}>
          <ChatElement />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
