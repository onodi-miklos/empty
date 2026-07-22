import express, { Request, Response } from "express";
import path from 'path'
import { fileURLToPath } from 'url'
import logger from '@onodi-miklos/logger'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(logger([
        // 'console',
        // 'file'
]))

app.use([
        express.json(),
        express.urlencoded({ extended: true }),
        express.static(path.join(__dirname, '../../public'))
])

// methods


export default app