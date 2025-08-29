# Rick & Morty Microfrontends

Proyecto frontend basado en **React + Webpack Module Federation** que consume la [Rick & Morty API](https://rickandmortyapi.com/).  
La aplicación está dividida en **microfrontends**:

- **mf-shell**: Aplicación host, layout principal y ruteo (sobre ésta se montan los remotes).
- **mf-characters**: Remote que lista personajes con filtros y paginación.
- **mf-character-detail**: Remote que muestra el detalle de un personaje y los episodios en los que aparece.


# ¿Cómo correr la aplicación?
## Requisitos generales:
- Git Bash
- Node
- Docker Desktop
- Tener disponibles los puertos 3000, 3001 y 3002
  
### Correr en local (sin Docker)
1. Abrir tres terminales en la carpeta principal (rick-and-morty-microfrontend).
2. Ejecutar:

Terminal 1:
```bash
cd mf-characters && npm install && npm run dev   # corre en http://localhost:3001
```
Terminal 2:
```bash
cd mf-character-detail && npm install && npm run dev   # corre en http://localhost:3002
```
Terminal 3:
```bash
cd mf-shell && npm install && npm run dev       # corre en http://localhost:3000
```

3. Una vez que estén activos, abrir [http://localhost:3000](http://localhost:3000) en el navegador.
4. Para detener la aplicación, utilizar el comando Ctrl + C en cada terminal.

### Correr en Docker
1. Si se están corriendo los microfrontends en local (3000/3001/3002), hay que cerrar la aplicación para tener los puertos libres y que no haya conflicto al correrla con Docker.
2. Abrir Docker Desktop y esperar “Docker Desktop is running”.
3. Abrir Bash o CMD en la carpeta principal (rick-and-morty-microfrontend) en una terminal y ejecutar:
```bash
docker compose build
```
4. Esperar a que termine el build.
5. Ejecutar:
```bash
docker compose up
```
6. Una vez que estén activos los contenedores, abrir [http://localhost:3000](http://localhost:3000) en el navegador.
7. Para detener la aplicación:
```bash
docker compose down
```

# ¿Cómo correr los tests?
1. Abrir Bash en la carpeta principal (rick-and-morty-microfrontend) en tres terminales distintas. En éstas, ejecutar:

Terminal 1:
```bash
cd mf-characters && npm test
```
Terminal 2:
```bash
cd mf-character-detail && npm test
```
Terminal 3:
```bash
cd mf-shell && npm test
```

**Nota**: también se pueden ejecutar las pruebas en una sola terminal ejecutando estos comandos uno tras otro:
```bash
cd mf-shell && npm test
cd ../mf-characters && npm test
cd ../mf-character-detail && npm test
```
