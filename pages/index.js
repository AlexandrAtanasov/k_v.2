import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout
      title='Main page'
      description='Description for Main page'
    >
      <h1>Main page</h1>
    </MainLayout>
  )
}