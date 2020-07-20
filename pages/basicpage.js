import Link from 'next/link'
import { MainLayout } from '../layouts/MainLayout'
import { CardComponent } from '../components/CardComponent'
import { Card, Button } from 'react-bootstrap' 

export default function BasicPage() {
  return (
    <MainLayout
      title={'Card page title'}
      description='Description for Basic page'
    >
      <CardComponent
        cardHeader='Card Header'
        cardTitle='Card Title'
        cardText='Card Text'
      />
    </MainLayout>
  )
}