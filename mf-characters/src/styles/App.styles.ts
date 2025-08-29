import styled from 'styled-components';

export const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
    input, select, button { 
        padding: 6px 8px;
        border: 1px solid #ddd;
        border-radius: 6px;
    }
`;

export const TextInput = styled.input`
    max-width: 320px;
    padding: 10px 14px;

    background: #1e293b;        
    color: #f8fafc;             
    border: 1px solid #334155;  
    border-radius: 8px;

    font-size: 14px;
    line-height: 1.5;

    transition: all 0.2s ease;

    &::placeholder {
        color: #94a3b8;           /* gris claro-azulado */
    }

    &:focus {
        outline: none;
        border-color: #38ef7d;    /* verde neón en focus */
        box-shadow: 0 0 0 3px rgba(56, 239, 125, 0.3);
    }
`;

export const Select = styled.select`
    padding: 10px 14px;
    background: #1e293b;        /* fondo oscuro */
    color: #f8fafc;             /* texto blanco suave */
    border: 1px solid #334155;  /* borde gris */
    border-radius: 8px;

    font-size: 14px;
    cursor: pointer;
    appearance: none;           /* oculta el arrow default en algunos navegadores */

    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: #38ef7d;
        box-shadow: 0 0 0 3px rgba(56, 239, 125, 0.3);
    }

    option {
        background: #0f172a;  /* fondo oscuro también en opciones */
        color: #f8fafc;
    }
`;

export const Pager = styled.div`
    margin-left: auto;
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const PagerButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;

  background: #1e293b;
  color: #f8fafc;
  border: 1px solid #334155;

  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: #334155;
    border-color: #38ef7d;
    color: #38ef7d;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    gap: 12px;
    @media (max-width: 600px){ 
        grid-template-columns: 1fr;
    }
`;

export const Card = styled.article`
    border: 1px solid #eee;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform .2s ease;
    &:hover{ 
        transform: scale(1.03);
        box-shadow: 0 2px 8px rgba(0,0,0,.15);
    }
`;

export const Img = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
`;

export const Info = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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
