## Levantar ambiente de desarrollo

```bash
git clone https://github.com/franelfers/inmuebles
cd inmuebles
npm install
```
Crear el archivo `.env` en la ruta **root** y colocar el siguiente contenido completando los campos:
```properties
VITE_API_KEY=
VITE_PROJECT_ID=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```
Hostear proyecto con el comando:
```bash
npm run dev
```