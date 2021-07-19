import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Grid, Header, Image, Menu, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [fixed, setFixed] = useState(false)
  return (
    <Visibility
      once={false}
      onBottomPassed={() => setFixed(true)}
      onBottomPassedReversed={() => setFixed(false)}
    >
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 50, padding: '1em 2em' }}
      >
        <Menu
          fixed={fixed ? 'top' : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size={'large'}
        >
          <Container>
            <Menu.Item active>
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/about">About Us</Link>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
