import {
  BaseStyles,
  Box,
  Container,
  IconButton,
  NavLink,
  useColorMode
} from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

export const ColorButton = ({ sx, ...props }) => {
  const [mode, setMode] = useColorMode()
  return (
    <IconButton
      {...props}
      sx={{
        color: 'primary',
        borderRadius: 'circle',
        transition: 'box-shadow .125s ease-in-out',
        ':hover,:focus': {
          boxShadow: '0 0 0 2px',
          outline: 'none'
        },
        ...sx
      }}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Reverse color scheme"
    >
      <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="currentcolor"
          strokeWidth="4"
        />
        <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
      </svg>
    </IconButton>
  )
}

export const Header = () => (
  <Container
    as="nav"
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: [3, 4],
      gap: [3, 4]
    }}
  >
    <Link href="/#work" passHref>
      <NavLink>Work</NavLink>
    </Link>
    <Link href="/about" passHref>
      <NavLink>Bio</NavLink>
    </Link>
    <Link href="/resume" passHref>
      <NavLink>CV</NavLink>
    </Link>
    <NavLink href="https://notebook.lachlanjc.com">
      Notebook
    </NavLink>
    <Box sx={{ mx: 'auto' }} />
    <ColorButton
      onClick={e => {
        const next = mode === 'dark' ? 'light' : 'dark'
        setMode(next)
      }}
    />
  </Container>
)

export const Footer = () => (
  <Container
    as="footer"
    sx={{
      display: 'flex',
      gap: 3,
      alignItems: 'center',
      py: [3, 4, 5],
      a: { color: 'yellow' }
    }}
  >
    <Avatar size={48} sx={{ height: 48 }} />
    <NavLink
      href="https://twitter.com/lachlanjc"
      title="Twitter"
      target="_blank"
    >
      <Icon glyph="twitter" size={36} />
    </NavLink>
    <NavLink href="https://github.com/lachlanjc" title="GitHub" target="_blank">
      <Icon glyph="github" size={36} />
    </NavLink>
    <NavLink
      href="https://instagram.com/lachlan.jc"
      title="Instagram"
      target="_blank"
    >
      <Icon glyph="instagram" size={36} />
    </NavLink>
    <NavLink href="mailto:lachlanjc@hey.com" title="Email">
      <Icon glyph="email" size={36} />
    </NavLink>
  </Container>
)

const colors = {
  red: '#d21718',
  orange: '#f67f3f',
  yellow: '#fac701',
  green: '#55d39d',
  blue: '#1870c3',
  purple: '#4d1866'
}

export const Rainbow = () => (
  <Box
    sx={{
      width: '100%',
      height: '4rem',
      display: 'block',
      backgroundImage: `linear-gradient(${colors.red} 0%, ${colors.red} 16.6666%, ${colors.orange} 16.6666%, ${colors.orange} 33.333%, ${colors.yellow} 33.333%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 66.6666%, ${colors.blue} 66.6666%, ${colors.blue} 83.3333%, ${colors.purple} 83.3333%, ${colors.purple} 100%)`
    }}
  />
)

const Layout = props => (
  <>
    <Header />
    <Container as={BaseStyles} variant="copy">
      {props.children}
    </Container>
    <Footer />
    <Rainbow />
  </>
)

export default Layout
