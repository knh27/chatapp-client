import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import RenderAttachment from "./RenderAttachment";
import { fileFormat } from "../../lib/features";

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;

  // console.log(attachments)
  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url)
          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "black",
                }}
              >
                {RenderAttachment(file, url) }
              </a>
            </Box>
          );
        })}



      <Typography variant="caption" color={"Text.secondary"}>
        {timeAgo}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);

// import React, { memo } from "react";

// const MessageComponent = ({ message, user }) => {
//   const { sender, content, attachments = [], createdAt } = message;

//   const sameSender = sender?._id === user?._id; // Corrected comparison

//   return (
//     <div
//       style={{
//         alignSelf: sameSender ? "flex-end" : "flex-start", // Fixed `alignSelf`
//         color: "red",
//         maxWidth: "60%", // Ensures the message box looks good
//         padding: "10px",
//         marginBottom: "10px",
//         backgroundColor: sameSender ? "#DCF8C6" : "#FFF", // Light green for user messages
//         borderRadius: "8px",
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <p>{content}</p>
//       {attachments.length > 0 &&
//         attachments.map((file, index) => (
//           <img
//             key={index}
//             src={file.url}
//             alt="attachment"
//             style={{
//               maxWidth: "100%",
//               borderRadius: "8px",
//               marginTop: "5px",
//             }}
//           />
//         ))}
//     </div>
//   );
// };

// export default memo(MessageComponent);
