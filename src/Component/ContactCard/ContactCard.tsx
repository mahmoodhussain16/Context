import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface ContactProps {
  contact: {
    name: string
    email: string
  }
}

export default function ContactCard({ contact }: ContactProps) {
  return (
    <Box sx={{ minWidth: 275, mb: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            Contact Information
          </Typography>
          <Typography variant="h5" component="div">
            {contact.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {contact.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
