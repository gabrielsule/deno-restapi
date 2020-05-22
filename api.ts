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