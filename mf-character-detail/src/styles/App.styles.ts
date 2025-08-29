import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;

    a {
        color: #fff;
    }
`;

export const Header = styled.header`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 160px;
    height: 160px;
`;

export const CharacterData = styled.div`
    h2 {
        font-size: 40px;
    }
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 8px;
`;

export const PillContainer = styled.div`
    display: flex;
    gap: 8px;
    margin: 8px 0;
`;

export const Pill = styled.span<{ $variant: String, $value: String}>`
    display: inline-block;
    padding: 5px 9px;
    border-radius: 999px;
    color: white;
    background: ${({ $variant, $value }) => {
        if ($variant === 'gender') return '#263874';
        if ($variant === 'species') return '#1c2647';
        if ($variant === 'status') {
            if ($value === 'Alive') return '#22c55e';   // verde
            if ($value === 'Dead') return '#ef4444';    // rojo
            return '#6b7280';                           // gris
        }
    }};
`;

export const H3 = styled.h3`
    margin: 15px 0;
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    column-gap: 50px;
`;