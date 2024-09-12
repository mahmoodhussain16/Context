import { Container, Typography } from '@mui/material'
import ContactForm from '../Component/ContactForm/ContactForm'

const NewContact = () => {
  return (
    <Container>
      <Typography variant="h6" gutterBottom marginTop={2}>
        Add New Contact
      </Typography>
      <ContactForm />
    </Container>
  )
}

export default NewContact