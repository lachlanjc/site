import Image from 'next/image'
import { Box, Container, Heading, Text, Grid, Card } from 'theme-ui'
import portrait from '../public/portrait-arms.png'

const Page = () => {
  return (
    <>
      <Box
        as="header"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
	  pt:[4,5,6]
        }}
      >
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Image src={portrait} placeholder="blur" />
        </Box>
	<Container>
        <Card variant='translucentDark' sx={{ variant:'layout.copy', p: [3, 4],mx:0, bg:'dark',borderRadius:'extra', position:'relative',zIndex:0 }}>
        <Heading
          as="h1"
          variant="ultratitle"
          sx={{
		  color:'red',mb:[3,4]
          }}
        >
          Making websites is my thingggg.
        </Heading>
	<Text variant="subtitle" sx={{mt:[3,4,5],a:{color:'blue'}}}>
	I’m a web designer-developer & hacktivist
          <br />
          working on climate at{' '}
          <a
            href="https://watershedclimate.com"
            target="_blank"
            rel="norefferer"
          >
            Watershed
          </a>
          .
          <br />
          On leave from NYU Interactive Media&nbsp;Arts.
	</Text>
        </Card>
	</Container>
      </Box>
    </>
  )
}

export default Page
