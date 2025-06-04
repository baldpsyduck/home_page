import styled from 'styled-components'
import { floatUp } from '../Animations'

export default function Education() {
    return (
        <Container>
            <Title>教育背景</Title>
            <Content>
                <EducationItem>
                    <EducationHeader>
                        <School>某大学</School>
                        <Time>2018 - 2022</Time>
                    </EducationHeader>
                    <Major>计算机科学与技术</Major>
                    <Description>
                        主修课程：数据结构、算法分析、操作系统、计算机网络、数据库系统等。
                    </Description>
                </EducationItem>
                <EducationItem>
                    <EducationHeader>
                        <School>某高中</School>
                        <Time>2015 - 2018</Time>
                    </EducationHeader>
                    <Major>理科</Major>
                    <Description>
                        主修课程：数学、物理、化学等。
                    </Description>
                </EducationItem>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    animation: ${floatUp} 0.8s ease-out;
    animation-fill-mode: both;
    animation-delay: 0.6s;

    &:hover {
        transform: translateX(10px);
        transition: transform 0.3s ease;
    }
`

const Title = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #0e62f4;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const EducationItem = styled.div`
    padding: 1rem;
    border-radius: 8px;
    background-color: #f8f9fa;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0f2f5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
`

const EducationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const School = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
`

const Time = styled.span`
    font-size: 0.9rem;
    color: #666;
`

const Major = styled.div`
    font-size: 1rem;
    color: #0e62f4;
    margin-bottom: 0.5rem;
`

const Description = styled.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: #666;
` 