import { Container } from '@mui/material'
import ContactCard from '../Component/ContactCard/ContactCard'
import Grid from '@mui/material/Grid'
import { useContext } from 'react'
import { ContactContext } from '../Context/Contact/contactContext'


const Home = () => {
    const {contactList}=useContext(ContactContext)
  return (
    <Container>
      <Grid container spacing={3} marginTop={2}>
        {contactList.map((contact:any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
            <ContactCard contact={contact} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home