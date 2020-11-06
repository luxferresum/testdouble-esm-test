import { replaceEsm, reset, when } from 'testdouble';

async function run() {
    await replaceEsm('fs');
    await import('path');
}

run();