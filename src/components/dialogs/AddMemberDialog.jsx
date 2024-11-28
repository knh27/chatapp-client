import { Dialog, DialogTitle, Stack, Typography, Button } from '@mui/material'
import React,{useState} from 'react'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from "../shared/UserItem"

const AddMemberDialog = ({addMember, isLoadingAddMember, chatId}) => {

  const[]=useState(false)

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);


  const selectMemberHandler = (id) => {

    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  const addFriendHandler=(id)=>{
    console.log(id, chatId)
  }


  const closeHandler=()=>{
    setSelectedMembers([]);
    setMembers([]);
  }
  
  const addMemberSubmitHandler=()=>{}
  return (
    <Dialog open onClose={closeHandler} >
      <Stack p={"2rem"}  widht={"20rem"} spacing={"2rem"} >
        <DialogTitle>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {
          members.length>0
          ? (members.map(i=>(
            <UserItem isAdded={selectedMembers.includes(i._id)} key={i.id} user={i} handler={selectMemberHandler}/>
          )))
          :(
          <Typography textAlign={"center"}>NO FRIENDS</Typography>
          )
        }
        </Stack>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"} >
          <Button onClick={closeHandler} color="error">Cancel</Button>
          <Button onClick={addMemberSubmitHandler} variant="contained" disabled={isLoadingAddMember} >Submit Changes</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default AddMemberDialog
