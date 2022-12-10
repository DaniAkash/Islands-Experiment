import Head from "next/head"
import { useState } from "react"
import { Container, Form, FormGroup, Label, Input } from "reactstrap"

const calculate = (val: string) => {
  try {
    return eval(val)
  } catch {
    return ""
  }
}

export default function Calculator() {
  const [val, setVal] = useState("")

  return (
    <div>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="The Amazing Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="jumbotron">
        <main>
          <h3>Calculator</h3>

          <Form>
            <FormGroup>
              <Label for="exampleEmail">Add your expression here...</Label>
              <Input
                id="calc"
                name="calculator"
                placeholder="2+2"
                type="text"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </FormGroup>
          </Form>

          <h2>
            <pre>= {calculate(val)}</pre>
          </h2>
        </main>
      </Container>
    </div>
  )
}
