import styled from "styled-components"
import LeftBar from "../../Components/LeftBar"
import TitleBar from "../../Components/TitleBar"
import Detail from "../../Components/Detail"
import { useState } from "react"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <LeftBar isOpen={isOpen} onToggle={handleToggle} />
      <MainContent>
        <TitleBar isOpen={isOpen} onToggle={handleToggle} />
        <Detail />
      </MainContent>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #f8f9fa;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const MainContent = styled.div`
    flex: 1;
    margin-left: 300px;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`
