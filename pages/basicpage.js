import { MainLayout } from '../layouts/MainLayout'
import { CardComponent } from '../components/CardComponent'
import data1 from "../data/page1.json"

export default function BasicPage() {
  return (
    <MainLayout
      title={data1.title}
      description='Description for Basic page'
    >
      <CardComponent
        cardHeader={data1.header}
        cardTitle={data1.title}
        cardText={data1.text}
      />
    </MainLayout>
  )
}