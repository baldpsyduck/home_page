import { keyframes } from "styled-components";

// 呼吸效果
export const breathe = keyframes`
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(14, 98, 244, 0.4);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 0 20px 10px rgba(14, 98, 244, 0.2);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(14, 98, 244, 0.4);
    }
`;

// 淡入效果
export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

// 上浮效果
export const floatUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

// 旋转效果
export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

// 脉冲效果
export const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

// 摇晃效果
export const shake = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-5px);
    }
    75% {
        transform: translateX(5px);
    }
`;

// 弹跳效果
export const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

// 闪光效果
export const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

// 渐变效果
export const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;
