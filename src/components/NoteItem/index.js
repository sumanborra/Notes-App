// Write your code here
import {ListItem, Heading,Para} from './styledComponents'

const NoteItem = props => {
  const {list} = props
  const {title, textNote} = list
  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Para>{textNote}</Para>
    </ListItem>
  )
}
export default NoteItem
