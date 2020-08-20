import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useRouter } from 'next/router'
import { server } from '../../config'
import useSWR from 'swr'


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log('data - ', typeof data)
    console.log('data - ', data)
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

// ResolvablePage.getInitialProps = async ( {query} ) => {
//     // console.log(query)
//     // const page = (query.resolvable == 'resolvable') ?
//     const data = await fetcher(`${server}/api/resolvable/${query.resolvable}`)
//     return { data }
// }


//
// This function gets called at build time
export async function getStaticPaths() {
    return {
        paths: [
          { params: { resolvable: 'In-laborum-tempor' } },
          { params: { resolvable: 'Culpa-consequat-culpa' } }
        ],
        fallback: false
      }
  }

// This also gets called at build time
// export async function getStaticProps ( {query} ) {
export async function getStaticProps ( {params} ) {
    // console.log(query)
    // const page = (query.additional == 'additional') ?
    // const data = await fetcher(`${server}/api/additional/${query.additional}`)
    // const data = await fetcher(`${server}/api/additional/${params.additional}`)
    // return { data }
    const props = await fetcher(`${server}/api/resolvable/${params.resolvable}`)
    // const resolvable = await props.json()
    // JSON.stringify(props)
    // console.log(resolvable)
    // console.log(typeof props)
    // console.log(typeof JSON.parse(props))
    console.log(typeof JSON.parse(JSON.stringify(props)))
    // const props = await fetcher(`/api/additional/${params.additional}`)
    return { props: {} }
}
//


export default function ResolvablePage (props) {
    console.log(props)
    const { query } = useRouter()
    const initialData = props.data
    const { data, error } = useSWR(
        () => query.resolvable && `/api/resolvable/${query.resolvable}`,
            fetcher, 
            { initialData }
    )

    // then something go wrong
    if (error) return (
        <MainLayout
            title='Oops!'
            description={`Something go wrong`}
        >
            <p>{error.message}</p>
        </MainLayout>
    )

    // then data is loading
    if (!data) return (
        <MainLayout
            title='Loading data'
            description={`Loading data for this page`}
        >
            <p>Loading...</p>
        </MainLayout>
    )
  
    // then all data is loaded
    return (
        // <MainLayout >
        //     <Card>
        //         <Card.Header>{`Header for card ${data.id}`}</Card.Header>
        //         <Card.Body>
        //             <Card.Title>{data.title}</Card.Title>
        //             {data.text}
        //         </Card.Body>
        //     </Card>
        // </MainLayout>

        <MainLayout
            title={data.title}
            description={`Description for ${data.id} page`}
        >
            <CardComponent
                cardHeader={data.title}
                cardText={data.text}
            />
        </MainLayout>
    )
}