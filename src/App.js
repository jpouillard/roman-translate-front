import "./App.css"
import { Container, Row, Col, Input } from "reactstrap"
import { useState } from "react"
import axios from "axios"

function App() {
  const [number, setNumber] = useState(0)
  const [roman, setRoman] = useState("")

  const handleTranslate = async (evt) => {
    const int = parseInt(evt.target.value)
    if (isNaN(int)) return
    setNumber(int)

    const roman = await translate(int)
    setRoman(roman)
  }

  const translate = async (number) => {
    const response = await axios.get(
      "http://localhost:4000/translate/roman?arabic=" + number
    )
    return response.data.roman
  }

  return (
    <div className="root">
      <Container>
        <h1 className="text-center">Arabic to Roman</h1>
        <Row className="mt-4">
          <Col md={5}>
            <Input type="text" onChange={handleTranslate} value={number} />
          </Col>
          <Col md={1} className="text-center">
            =>
          </Col>
          <Col md={5}>
            <Input type="text" value={roman} readOnly />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
