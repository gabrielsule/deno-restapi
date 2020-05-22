# Deno RestAPI

### Instalación
- Linux
```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

- macOS
```bash
brew install deno
```

- Windows
```bash
choco install deno

o

iwr https://deno.land/x/install/install.ps1 -useb | iex
```

### Estructura
```bash
├── api.ts
├── controllers
│   └── roles.ts
├── db
│   └── data.ts
├── models
│   └── roles.ts
└── README.md
```

### Creación del modelo
```javascript
export interface IRoles {
    name: string;
}
```

### Creación de la data fake
```javascript
import {
    IRoles
} from '../models/roles.ts';

export let roles: Array < IRoles > = [{
        name: 'diseñador'
    },
    {
        name: 'developer'
    },
    {
        name: 'tester'
    },
];
```

### Creación del controller
```javascript
import {
    v4
} from 'https://deno.land/std/uuid/mod.ts';
import {
    roles
} from '../db/data.ts';

export const getRoles = ({
    response
}: {
    response: any
}) => {
    response.body = roles;
};
```

### Armado de la API
```javascript
import {
    Application,
    Router
} from 'https://deno.land/x/oak/mod.ts';
import {
    getRoles
} from './controllers/roles.ts';

const app = new Application();
const router = new Router();
const HOST = '127.0.0.1';
const PORT = 3000;


router
    .get('/roles', getRoles);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`ejecutandose en port ${PORT}`);

await app.listen(`${HOST}:${PORT}`);
```

### Ejecución
```bash
deno run api.ts

o

deno run --allow-net --allow-env api.ts
```
