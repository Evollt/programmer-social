import express from 'express'
import dotenv from 'dotenv'
import type { Request, Response } from 'express'
dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'successfull'
  })
})

app.listen(PORT, () => {
  console.log('Сервер был запущен на порту ' + PORT);
})