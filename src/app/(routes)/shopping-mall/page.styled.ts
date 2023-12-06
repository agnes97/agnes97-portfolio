import { GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`

export const Gallery = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 200px;
    ${GlassEffect}
    border: 1px solid ${({ theme }) => theme.color.line_light};

    & > header, & > footer {
        padding: 0.5rem;         
    }

    & > header {
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
`

export const Title = styled.span`
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FilterBar = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Filters = styled.section`
    display: flex;
`

export const RelativeContainer = styled.div`
    position: relative;
`

export const AbsoluteContainer = styled.div`
    position: absolute;
    bottom: 0.75rem;
    right: 0.35rem;
`

export const Total = styled.div`
    color: ${({ theme }) => theme.color.line_light};
`

export const Span = styled.span`
    color: ${({ theme }) => theme.color.text_primary};
`

type FilterButtonProps = {
    isActive: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
    all: unset;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    &::before {
        content: "{";
        color: ${({ isActive, theme }) => isActive ? theme.color.text_primary : 'transparent'};
        font-size: 1.25rem;
        padding: 0.25rem;
    }

    &::after {
        content: "}";
        color: ${({ isActive, theme }) => isActive ? theme.color.text_primary : 'transparent'};
        font-size: 1.25rem;
        padding: 0.25rem;
    }
`