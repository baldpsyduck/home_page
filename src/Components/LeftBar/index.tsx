import styled from "styled-components"
import info from "../../assets/info"
import menuIcon from "../../assets/svgs/menu.svg"
import { breathe, floatUp, pulse } from "../Animations"

interface LeftBarProps {
    isOpen: boolean
    onToggle: () => void
}

export default function LeftBar({ isOpen, onToggle }: LeftBarProps) {
    return (
        <Container>
            <MobileMenuButton onClick={onToggle}>
                <img src={menuIcon} alt="menu" />
            </MobileMenuButton>
            <MainContent>
                <AvatarWrapper>
                    {info.avatar ? (
                        <Avatar src={info.avatar} />
                    ) : (
                        <AvatarFallback>
                            {info.lastName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    )}
                </AvatarWrapper>
                <Name>
                    {info.firstName} {info.lastName} {info.extraName && `(${info.extraName})`}
                </Name>
            </MainContent>
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
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    animation: ${floatUp} 0.8s ease-out;
    min-width: 300px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
        min-width: 100%;
        height: auto;
    }
`

const MobileMenuButton = styled.button`
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    padding: 0.5rem;
    z-index: 1001;
    
    img {
        width: 24px;
        height: 24px;
    }
    
    @media (max-width: 768px) {
        display: block;
    }
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`

const AvatarWrapper = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    animation: ${breathe} 3s ease-in-out infinite;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        width: 3rem;
        height: 3rem;
        margin-bottom: 0;
    }

    &:hover {
        animation: ${pulse} 1s ease-in-out infinite;
        box-shadow: 0 0 30px 15px rgba(14, 98, 244, 0.3);
    }
`

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${AvatarWrapper}:hover & {
        transform: scale(1.1);
    }
`

const AvatarFallback = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0e62f4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 600;
    color: #ffffff;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    ${AvatarWrapper}:hover & {
        transform: scale(1.1);
    }
`

const Name = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    animation: ${floatUp} 0.8s ease-out 0.2s both;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-bottom: 0;
    }
`

const InfoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin-bottom: 1.5rem;
    animation: ${floatUp} 0.8s ease-out 0.4s both;

    @media (max-width: 768px) {
        display: none;
    }
`

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f8f9fa;
    }
`

const InfoIcon = styled.span`
    font-size: 1.2rem;
    color: #0e62f4;
`

const InfoText = styled.span`
    font-size: 1rem;
    color: #666;
`

const InfoLink = styled.a`
    font-size: 1rem;
    color: #0e62f4;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        color: #0d4edb;
        text-decoration: underline;
    }
`