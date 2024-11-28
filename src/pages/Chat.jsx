import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user={
  _id:"aaa",
  name:"maya danthkhishori"
}

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"rgba(247, 247, 247,1)"}
        height={"90%"}
        flex={1}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
      sampleMessage.map((i)=>(
        <MessageComponent  message={i} user={user}  key={i._id}/>
      ))
      }
      </Stack>

      

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          position={"relative"}
          alignItems={"center"}
        >
          <IconButton sx={{
            position:"absolute",
            left:"1.5rem",
            rotate:"30deg"
          }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="write a message..." />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: "red",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu/>

    </>
  );
};

export default AppLayout()(Chat);




// import {
//   AttachFile as AttachFileIcon,
//   Send as SendIcon,
// } from "@mui/icons-material";
// import { IconButton, Stack } from "@mui/material";
// import React, { useRef } from "react";
// import AppLayout from "../components/layout/AppLayout";
// import { InputBox } from "../components/styles/StyledComponents";
// import FileMenu from "../components/dialogs/FileMenu";
// import { sampleMessage } from "../constants/sampleData";
// import MessageComponent from "../components/shared/MessageComponent";

// const user = {
//   _id: "aaaaa",
//   name: "maya danthkhishori",
// };

// const Chat = () => {
//   const containerRef = useRef(null);

//   return (
//     <>
//       <Stack
//         ref={containerRef}
//         boxSizing={"border-box"}
//         padding={"1rem"}
//         spacing={"1rem"}
//         bgcolor={"rgba(247, 247, 247,1)"}
//         height={"90%"}
//         sx={{
//           overflowY: "auto", // Fixed duplicated overflowY
//         }}
//       >
//         {sampleMessage.map((i) => (
//           <MessageComponent message={i} user={user} key={i._id} />
//         ))}
//       </Stack>

//       <form
//         style={{
//           height: "10%",
//         }}
//       >
//         <Stack
//           direction={"row"}
//           height={"100%"}
//           padding={"1rem"}
//           position={"relative"}
//           alignItems={"center"}
//         >
//           <IconButton
//             sx={{
//               position: "absolute",
//               left: "1.5rem",
//               rotate: "30deg",
//             }}
//           >
//             <AttachFileIcon />
//           </IconButton>

//           <InputBox placeholder="Write a message..." />

//           <IconButton
//             type="submit"
//             sx={{
//               rotate: "-30deg",
//               backgroundColor: "red",
//               color: "white",
//               marginLeft: "1rem",
//               padding: "0.5rem",
//               "&:hover": {
//                 bgcolor: "error.dark",
//               },
//             }}
//           >
//             <SendIcon />
//           </IconButton>
//         </Stack>
//       </form>

//       <FileMenu />
//     </>
//   );
// };

// export default AppLayout()(Chat);
