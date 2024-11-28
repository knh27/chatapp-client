import { Transform } from "@mui/icons-material";
import { Stack, Typography, Box } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";
import { lightGreen } from "@mui/material/colors";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline=false,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      to={`chat/${_id}`}
      sx={{
        padding: "0",
      }}
      style={{
        textDecoration: "none",
      }}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);










// import { Stack, Typography, Box } from "@mui/material";
// import React, { memo } from "react";
// import { Link } from "react-router-dom";
// import AvatarCard from "./AvatarCard";

// const ChatItem = ({
//   avatar = [],
//   name,
//   _id,
//   groupChat = false,
//   sameSender,
//   isOnline,
//   newMessageAlert,
//   index = 0,
//   handleDeleteChat,
// }) => {
//   return (
//     <Link
//       to={`chat/${_id}`}
//       style={{
//         textDecoration: "none",
//       }}
//       onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           gap: "1rem",
//           alignItems: "center",
//           padding: "1rem",
//           backgroundColor: sameSender ? "black" : "unset",
//           color: sameSender ? "white" : "unset",
//           position: "relative",
//           borderRadius: "8px", // Optional: Add some styling for better visuals
//           overflow: "hidden", // Ensure no overflow occurs
//         }}
//       >
//         {/* Avatar */}
//         <AvatarCard avatar={avatar} />

//         {/* Name and New Message Alert */}
//         <Stack
//           direction="column"
//           spacing={0.5} // Adjust spacing between text elements
//           sx={{
//             flex: 1, // Ensures the text occupies available space
//             minWidth: 0, // Prevents text from overflowing its container
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{
//               fontWeight: "bold",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//               textOverflow: "ellipsis", // Truncate long names
//             }}
//           >
//             {name}
//           </Typography>
//           {newMessageAlert && (
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "gray",
//               }}
//             >
//               {newMessageAlert.count} New Message{newMessageAlert.count > 1 ? "s" : ""}
//             </Typography>
//           )}
//         </Stack>

//         {/* Online Indicator */}
//         {isOnline && (
//           <Box
//             sx={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: "green",
//               position: "absolute",
//               top: "50%",
//               right: "1rem",
//               transform: "translateY(-50%)",
//             }}
//           />
//         )}
//       </Box>
//     </Link>
//   );
// };

// export default memo(ChatItem);
