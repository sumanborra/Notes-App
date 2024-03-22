// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  FormContainer,
  InputElement,
  TextArea,
  BreakLine,
  CustomButton,
  UnOrderedList,
  NotesContainer,
  NOListView,
  Image,
  HeadingNoText,
  ParaNoNotes
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const changeTitle = event => {
    setTitle(event.target.value)
  }
  const [textNote, setTextNote] = useState('')
  const changeNoteText = event => {
    setTextNote(event.target.value)
  }
  const [notesList, setNotesList] = useState([])
  const sumittedNotes = event => {
    event.preventDefault()
    const newObject = {
      id: uuidv4(),
      title,
      textNote,
    }
    setNotesList(prevList => [...prevList, newObject])
    setTitle('')
    setTextNote('')
  }
  
  const resultPage = notesList.length>0?(<UnOrderedList>
          {notesList.map(each => (
            <NoteItem list={each} key={each.id} />
          ))}
        </UnOrderedList>):(<NOListView>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <HeadingNoText>No Notes Yet</HeadingNoText>
          <ParaNoNotes>Notes you add will appear here</ParaNoNotes>
        </NOListView>);
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={sumittedNotes}>
        <InputElement
          type="text"
          placeholder="Title"
          value={title}
          onChange={changeTitle}
        />
        <BreakLine />
        <TextArea
          placeholder="Take a Note..."
          rows="20"
          cols="60"
          value={textNote}
          onChange={changeNoteText}
        />
        <CustomButton type="submit">Add</CustomButton>
      </FormContainer>
      <NotesContainer>
        {resultPage}
      </NotesContainer>
    </MainContainer>
  )
}
export default Notes
