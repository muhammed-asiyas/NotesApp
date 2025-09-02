import {ListItem, TitleItem, NotesItem, TitleAndDeleteContainer, DeleteIcon} from './styledComponents'
import { AiFillDelete } from "react-icons/ai";

const NoteItem = props => {
  const {noteList, deleteNote} = props
  const {id, title, note} = noteList
  const onDeleteItem = () => {
    deleteNote(id)
  }
  return (
    <ListItem>
      <TitleAndDeleteContainer>
        <TitleItem>{title}</TitleItem>
        <DeleteIcon type="button" onClick={onDeleteItem}>
          <AiFillDelete />
        </DeleteIcon>
      </TitleAndDeleteContainer>
      <NotesItem>{note}</NotesItem>
    </ListItem>
  )
}

export default NoteItem
