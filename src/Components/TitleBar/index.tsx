import styled from "styled-components"
import { fadeIn, floatUp } from "../Animations"

interface TitleBarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function TitleBar({ isOpen, onToggle }: TitleBarProps) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onToggle} />
      <Container>
        <TitleBarContent isOpen={isOpen}>
          <Title>Duckbal's Home</Title>
          <Nav>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact</NavItem>
          </Nav>
          <InfoList>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoText>中国，北京</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <InfoText>example@email.com</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoIcon>🎓</InfoIcon>
              <InfoLink href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                Google Scholar
              </InfoLink>
            </InfoItem>
          </InfoList>
        </TitleBarContent>
      </Container>
    </>
  )
}

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${(props: { isOpen: boolean }) => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    height: calc(100vh - 56px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transition: opacity 0.3s ease;
  }
`

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  background-color: #fff;
`

const TitleBarContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${floatUp} 0.8s ease-out;
  width: 100%;

  @media (max-width: 768px) {
    position: fixed;
    top: 56px;
    right: ${(props: { isOpen: boolean }) => props.isOpen ? '0' : '-100%'};
    width: 80%;
    height: calc(100vh - 56px);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background-color: #fff;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 1000;
  }
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  animation: ${fadeIn} 0.8s ease-out;
`

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }
`

const NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0e62f4;
  }
`

const InfoList = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #f8f9fa;
  }
`

const InfoIcon = styled.span`
  font-size: 1rem;
  color: #0e62f4;
`

const InfoText = styled.span`
  font-size: 0.9rem;
  color: #666;
`

const InfoLink = styled.a`
  font-size: 0.9rem;
  color: #0e62f4;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #0d4edb;
    text-decoration: underline;
  }
`
