import styled from 'styled-components'
import { floatUp } from '../Animations'

export default function Skill() {
    return (
        <Container>
            <Title>技能特长</Title>
            <Content>
                <SkillCategory>
                    <CategoryTitle>前端开发</CategoryTitle>
                    <SkillList>
                        <SkillItem>
                            <SkillName>React</SkillName>
                            <SkillLevel level={90} />
                        </SkillItem>
                        <SkillItem>
                            <SkillName>TypeScript</SkillName>
                            <SkillLevel level={85} />
                        </SkillItem>
                        <SkillItem>
                            <SkillName>Vue</SkillName>
                            <SkillLevel level={80} />
                        </SkillItem>
                    </SkillList>
                </SkillCategory>
                <SkillCategory>
                    <CategoryTitle>后端开发</CategoryTitle>
                    <SkillList>
                        <SkillItem>
                            <SkillName>Node.js</SkillName>
                            <SkillLevel level={85} />
                        </SkillItem>
                        <SkillItem>
                            <SkillName>Python</SkillName>
                            <SkillLevel level={75} />
                        </SkillItem>
                    </SkillList>
                </SkillCategory>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    animation: ${floatUp} 0.8s ease-out;
    animation-fill-mode: both;
    animation-delay: 0.4s;

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

const SkillCategory = styled.div`
    padding: 1rem;
    border-radius: 8px;
    background-color: #f8f9fa;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f0f2f5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
`

const CategoryTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
`

const SkillList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const SkillName = styled.span`
    min-width: 100px;
    font-size: 1rem;
    color: #666;
`

const SkillLevel = styled.div<{ level: number }>`
    flex: 1;
    height: 8px;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: ${props => props.level}%;
        background-color: #0e62f4;
        border-radius: 4px;
        transition: width 0.3s ease;
    }
` 