import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Character, Episode } from './types/App.types';
import { Avatar, CharacterData, Container, H3, Header, Pill, PillContainer, Ul } from './styles/App.styles';

const CharacterDetailApp = () => {
    const { id = '' } = useParams();
    const [char, setChar] = useState<Character | null>(null);
    const [eps, setEps] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string|null>(null);

    useEffect(() => {
        let active = true;
        const getCharacterData = async () => {
            try {
                setLoading(true); setErr(null);
                const r1 = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if(!r1.ok) throw new Error(`HTTP ${r1.status}`);
                const c: Character = await r1.json();
                if(!active) return;
                setChar(c);

                if (c.episode.length) {
                    const ids = c.episode.map(u => u.split('/').pop()).join(',');
                    const r2 = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);
                    if(!r2.ok) throw new Error(`HTTP ${r2.status}`);
                    const data = await r2.json();
                    const list = Array.isArray(data) ? data : [data];
                    if(active) setEps(list);
                } else {
                    setEps([]);
                }
            } catch(e:any){
                if(active) setErr(e.message);
            } finally { 
                if(active) setLoading(false); }
        };
        getCharacterData();
        return ()=>{ active = false; };
    }, [id]);

    if (loading) return <p>Cargando…</p>;
    if (err) return <p role="alert">Error: {err}</p>;
    if (!char) return <p>No encontrado</p>;

    return (
        <Container>
            <Link to="/">{'←'} Volver</Link>
            <Header>
                <Avatar src={char.image} alt={char.name}/>
                <CharacterData>
                    <h2>{char.name}</h2>
                    <PillContainer>
                        <Pill $variant="status" $value={char.status}>{char.status}</Pill>
                        <Pill $variant="gender" $value={char.gender}>{char.gender}</Pill>
                        <Pill $variant="species" $value={char.species}>{char.species}</Pill>
                    </PillContainer>
                    <p>Origin: {char.origin?.name ?? '?'}</p>
                    <p>Location: {char.location?.name ?? '?'}</p>
                </CharacterData>
            </Header>
            <H3>Shows up in...</H3>
            <Ul>
                {eps.map(e => <li key={e.id}>{e.episode} — {e.name}</li>)}
            </Ul>
        </Container>
    );
}

export default CharacterDetailApp;