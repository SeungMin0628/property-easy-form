import { FC } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Index: FC = () => (
  <Container maxWidth="sm">
    <Box my={1}>
      <Typography variant="h4" component="h1" gutterBottom>
        Install matreial ui
      </Typography>
    </Box>
  </Container>
)

export default Index
