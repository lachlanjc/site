import { Flex, Container, Heading, Badge, Text } from 'theme-ui'
import BGImg from './bg-img'
import FadeIn from './fade'
import bannerImg from '../public/rainbow.webp'
import SlideUp from './slide-up'

const Banner = ({ children }) => (
  <Flex
    as="header"
    sx={{
      flexDirection: 'column',
      justifyContent: 'end',
      color: 'white',
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
      py: [3, 4],
      mb: 0
    }}
  >
    <BGImg
      src={bannerImg}
      alt="Horizontal portrait of Lachlan in a black and white cropped turtleneck laying down looking off camera"
    />
    <Container
      variant="copyPlus"
      sx={{
        px: [3, 4, 5],
        textShadow:
          '0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)',
        ul: {
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 0,
          m: 0
        },
        a: {
          display: 'inline-block',
          color: 'white',
          transition: 'transform .125s ease-in-out',
          ':hover': {
            transform: 'scale(1.125) rotate(-4deg)'
          }
        },
        img: { display: 'none' },
        footer: { pl: '0 !important' }
      }}
    >
      <SlideUp delay={2500}>
        <Badge
          variant="pill"
          sx={{
            bg: 'fuschia',
            transform: 'rotate(-4deg)',
            fontSize: [3, 4],
            px: 3,
            transition: '.125s ease-in-out',
            transitionProperty: 'background-color, transform',
            textShadow: 'none',
            ':hover': {
              bg: 'primary',
              transform: 'scale(1.25) rotate(-356deg)'
            }
          }}
        >
          they/them
        </Badge>
      </SlideUp>
      <Heading
        as="h1"
        sx={{
          fontFamily: 'display',
          fontSize: [6, 7],
          lineHeight: 1,
          mt: 3,
          mb: 3
        }}
      >
        <FadeIn>Lachlan Campbell</FadeIn>
      </Heading>
      <Text
        as="p"
        variant="headline"
        sx={{
          mb: [3, 4],
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 'caption',
          gap: 2,
          fontSize: [3, 4],
          fontWeight: 'normal',
          letterSpacing: '-0.01em'
        }}
      >
        <FadeIn>Worldwide web design engineer, currently in NYC.</FadeIn>
        <FadeIn>This year: finishing NYU Interactive Media Arts.</FadeIn>
        <FadeIn>Next year: leading design engineering at Watershed.</FadeIn>
      </Text>
      {children}
    </Container>
  </Flex>
)

export default Banner
