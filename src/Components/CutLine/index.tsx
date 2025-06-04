import { useEffect, useMemo } from "react"
import styled from "styled-components"

export enum CUT_LINE_DIRECTION {
    ROW,
    COLUMN
}

interface StyleType {
    "direction"?: CUT_LINE_DIRECTION,
    "color"?: String,
    "scale"?: Number
}

interface PropsType extends StyleType { }

const defaultPropsValue = {
    "direction": CUT_LINE_DIRECTION.COLUMN,
    "color": "#c3c3c3"
}

export default function CutLine(props: PropsType) {
    const mProps: PropsType = useMemo(() => ({
        ...defaultPropsValue,
        ...props
    }), [])
    return (
        <CutLineStyle {...mProps} />
    )
}

const CutLineStyle = styled.div`
    ${(props: StyleType) => props.direction}
    background-color: #c3c3c3
`
