import styled from 'styled-components'
import { fadeIn, floatUp } from '../Animations'
import Project from './Project'
import Skill from './Skill'
import Education from './Education'

export default function Detail() {
    return (
        <Container>
            <Title>Detail</Title>
            <Content>
                <Project />
                <Skill />
                <Education />
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 2rem;
    animation: ${fadeIn} 0.8s ease-out;
`

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    animation: ${floatUp} 0.8s ease-out;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`