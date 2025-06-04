import styled from 'styled-components'
import { floatUp } from '../Animations'

export default function Project() {
    return (
        <Container>
            <Title>项目经验</Title>
            <Content>
                <ProjectItem>
                    <ProjectImage src="https://via.placeholder.com/300x200" alt="项目一预览图" />
                    <ProjectInfo>
                        <ProjectTitle>项目一</ProjectTitle>
                        <ProjectDescription>
                            这是项目一的详细描述，包含项目背景、技术栈、个人职责等信息。
                        </ProjectDescription>
                        <ProjectTech>
                            <TechTag>React</TechTag>
                            <TechTag>TypeScript</TechTag>
                            <TechTag>Node.js</TechTag>
                        </ProjectTech>
                    </ProjectInfo>
                </ProjectItem>
                <ProjectItem>
                    <ProjectImage src="https://via.placeholder.com/300x200" alt="项目二预览图" />
                    <ProjectInfo>
                        <ProjectTitle>项目二</ProjectTitle>
                        <ProjectDescription>
                            这是项目二的详细描述，包含项目背景、技术栈、个人职责等信息。
                        </ProjectDescription>
                        <ProjectTech>
                            <TechTag>Vue</TechTag>
                            <TechTag>Python</TechTag>
                            <TechTag>Docker</TechTag>
                        </ProjectTech>
                    </ProjectInfo>
                </ProjectItem>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    animation: ${floatUp} 0.8s ease-out;
    animation-fill-mode: both;
    animation-delay: 0.2s;

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

const ProjectItem = styled.div`
    display: flex;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #f8f9fa;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }

    &:hover {
        background-color: #f0f2f5;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
`

const ProjectImage = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
    }

    ${ProjectItem}:hover & {
        transform: scale(1.02);
    }
`

const ProjectInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const ProjectTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
`

const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
`

const ProjectTech = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

const TechTag = styled.span`
    padding: 0.25rem 0.75rem;
    background-color: #e6f0ff;
    color: #0e62f4;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 500;
` 