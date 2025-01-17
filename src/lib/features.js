const fileFormat=url=>{
    const fileExt=url.split(".").pop();

    if(fileExt==="mp4"|| fileExt==="webm" || fileExt==="ogg")return "video";

    if(fileExt==="mp3"|| fileExt==="wav")return "audio";

    if(fileExt==="png"|| fileExt==="jpg" || fileExt==="gif")return "image";

    return "file";
};


const transformImage=(url="")=>url;


import moment from "moment";

const getLast7Days=()=>{
    const currentDate=moment();
    const last7Days=[];

    for(let i=0;i<7;i++){
        const dayDate=currentDate.clone().subtract(i, "days");
        const dayName=dayDate.format("ddd");

        last7Days.unshift(dayName)

    }

    return last7Days;
};

export {fileFormat  , transformImage, getLast7Days}