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
      gap: [3, 4],
      a: { variant: 'links.nav' }
    }}
  >
    <Link href="/about">Bio</Link>
    <Link href="/resume">CV</Link>
    <NavLink href="https://notebook.lachlanjc.com">Notebook</NavLink>
    <NavLink href="https://edu.lachlanjc.com">Coursework</NavLink>
    <Box sx={{ mx: 'auto' }} />
    <ColorButton />
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
      rel="me"
    >
      <Icon glyph="twitter-fill" size={36} />
    </NavLink>
    <NavLink
      href="https://github.com/lachlanjc"
      title="GitHub"
      target="_blank"
      rel="me"
    >
      <Icon glyph="github-fill" size={36} />
    </NavLink>
    <NavLink
      href="https://mastodon.social/@lachlanjc"
      title="Mastodon"
      target="_blank"
      rel="me"
      style={{ lineHeight: 0 }}
    >
      {/* <Icon glyph="mastodon-fill" size={36} /> */}
      <svg
        width={36}
        height={36}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.986 15.968C27.986 26.968 26.986 27.968 15.986 27.968C4.98601 27.968 3.98601 26.968 3.98601 15.968C3.98601 4.96799 4.98601 3.96799 15.986 3.96799C26.986 3.96799 27.986 4.96799 27.986 15.968ZM19.9273 8.35987C21.7016 8.61799 23.1984 9.95007 23.4295 11.6404C23.5302 12.6459 23.4803 14.1568 23.4561 14.8909C23.4501 15.0735 23.4456 15.208 23.4455 15.2748C23.4455 15.3735 23.4309 16.2744 23.4251 16.3695C23.2696 18.7848 21.7394 19.7387 20.1315 20.0425C20.1097 20.049 20.0843 20.0533 20.0588 20.0583C19.0394 20.2542 17.9473 20.3064 16.9112 20.335C16.6634 20.3414 16.4164 20.3414 16.1686 20.3414C15.1384 20.3417 14.1119 20.2217 13.1104 19.9839C13.1051 19.9825 13.0995 19.9824 13.0942 19.9836C13.0888 19.9848 13.0838 19.9871 13.0796 19.9905C13.0753 19.994 13.072 19.9983 13.0697 20.0032C13.0675 20.0082 13.0665 20.0136 13.0668 20.0189C13.0951 20.3398 13.166 20.6557 13.2775 20.9585C13.4163 21.3088 13.9009 22.1504 15.7029 22.1504C16.75 22.1523 17.7936 22.0323 18.812 21.7929C18.8172 21.7917 18.8225 21.7917 18.8277 21.7928C18.8329 21.794 18.8378 21.7962 18.8419 21.7995C18.8461 21.8027 18.8495 21.8068 18.8519 21.8115C18.8542 21.8161 18.8555 21.8213 18.8556 21.8265V23.012C18.8554 23.0176 18.8539 23.0231 18.8513 23.028C18.8486 23.033 18.8449 23.0373 18.8403 23.0406C18.5225 23.2673 18.0953 23.4008 17.7215 23.5176C17.7039 23.5231 17.6864 23.5285 17.669 23.534C17.4981 23.5869 17.3251 23.6333 17.1503 23.6734C15.5607 24.0297 13.9017 23.9435 12.3591 23.4246C10.9183 22.9269 9.44765 21.7071 9.08435 20.2413C8.89034 19.4477 8.75364 18.6415 8.67528 17.8289C8.59295 16.9402 8.56543 16.05 8.53789 15.1586C8.52751 14.8228 8.51713 14.4869 8.50381 14.1508C8.46966 13.2942 8.48927 12.3604 8.6731 11.5181C9.05529 9.80778 10.6305 8.61084 12.3555 8.35987C12.3909 8.35471 12.4301 8.34793 12.4759 8.33999C12.8173 8.28089 13.5299 8.15752 15.8468 8.15752H15.8664C18.4937 8.15752 19.6279 8.31626 19.9273 8.35987ZM19.2639 17.6673H20.9547L20.9562 13.4679C20.9562 12.6095 20.7336 11.9278 20.2884 11.423C19.8278 10.9189 19.2254 10.6601 18.4785 10.6601C17.6146 10.6601 16.9606 10.9876 16.5247 11.6418L16.1033 12.3368L15.6825 11.6418C15.2466 10.9876 14.5926 10.6601 13.7273 10.6601C12.9796 10.6601 12.3773 10.9189 11.9181 11.423C11.4729 11.9283 11.2503 12.6099 11.2503 13.4679V17.6673H12.9396V13.5917C12.9404 12.7336 13.3073 12.296 14.0419 12.296C14.8542 12.296 15.2619 12.8137 15.2619 13.8362V16.067H16.9425V13.8362C16.9425 12.8137 17.3493 12.296 18.1617 12.296C18.9006 12.296 19.2639 12.7336 19.2639 13.5917V17.6673Z"
        />
      </svg>
    </NavLink>
    <NavLink
      href="https://instagram.com/lachlan.jc"
      title="Instagram"
      target="_blank"
      rel="me"
    >
      <Icon glyph="instagram-fill" size={36} />
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

const Layout = (props) => (
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
