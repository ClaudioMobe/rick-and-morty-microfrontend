import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiResp } from './types/App.types';
import { Card, Filters, Grid, Img, Info, Pager, PagerButton, Pill, PillContainer, Select, TextInput } from './styles/App.styles';

const CharactersApp = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [page, setPage] = useState(1);
    const [data, setData] = useState<ApiResp | null>(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string|null>(null);
    const nav = useNavigate();

    useEffect(() => {
        const qs = new URLSearchParams({ page: String(page) });
        if (name) qs.set('name', name);
        if (status) qs.set('status', status);
        if (species) qs.set('species', species);

        setLoading(true);
        setErr(null);
        fetch(`https://rickandmortyapi.com/api/character?${qs}`)
            .then(r => { if(!r.ok) throw new Error('Personaje no encontrado'); return r.json(); })
            .then(setData)
            .catch(e => setErr(e.message))
            .finally(()=>setLoading(false));
    }, [name,status,species,page]);

    return (
        <section>
            <Filters>
                <TextInput placeholder="Busca por nombre" value={name} onChange={e=>setName(e.target.value)} />
                <TextInput placeholder="Busca por especie" value={species} onChange={e=>setSpecies(e.target.value)} />
                <Select value={status} onChange={e=>setStatus(e.target.value)}>
                    <option value="">Estado ﹀</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option value="unknown">Unknown</option>
                </Select>
                <Pager>
                    <PagerButton disabled={!data?.info?.prev} onClick={()=>setPage(p=>Math.max(1,p-1))}>Anterior</PagerButton>
                    <span>Página {page} / {data?.info?.pages ?? '—'}</span>
                    <PagerButton disabled={!data?.info?.next} onClick={()=>setPage(p=>p+1)}>Siguiente</PagerButton>
                </Pager>
                {loading && <p>Cargando…</p>}
                {err && <p role="alert">Error: {err}</p>}
            </Filters>


            <Grid>
                {data?.results?.map(c => (
                    <Card key={c.id} onClick={()=>nav(`/character/${c.id}`)}>
                        <Img src={c.image} alt={c.name}/>
                        <Info>
                            <h3>{c.name}</h3>
                            <PillContainer>
                                <Pill $variant="status" $value={c.status}>{c.status}</Pill>
                                <Pill $variant="gender" $value={c.gender}>{c.gender}</Pill>
                            </PillContainer>
                            <Pill $variant="species" $value={c.species}>{c.species}</Pill>
                        </Info>
                    </Card>
                ))}
            </Grid>
        </section>
    );
}

export default CharactersApp;