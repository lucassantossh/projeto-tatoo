import { NextRequest, NextResponse } from 'next/server'

export interface IData {
  url: string
}
const data: Array<IData> = [
  { url: '/portfolio/tattoo-1-instagram.jpg' },
  { url: '/portfolio/tattoo-2-instagram.jpg' },
  { url: '/portfolio/tattoo-3-instagram.jpg' },
  { url: '/portfolio/tattoo-4-instagram.jpg' },
  { url: '/portfolio/tattoo-6-instagram.jpg' },
]

export async function GET(req: NextRequest) {
  return NextResponse.json({ data })
}
