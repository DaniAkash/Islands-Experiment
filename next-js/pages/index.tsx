import Head from "next/head"
import { Container, List } from "reactstrap"
import Link from "next/link"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="jumbotron">
        <main>
          <h3>Tools</h3>
          <List>
            <li>
              <Link href="/calculator">Calculator</Link>
            </li>
            <li>
              <Link href="/location">Location</Link>
            </li>
          </List>
        </main>
      </Container>
    </Container>
  )
}
