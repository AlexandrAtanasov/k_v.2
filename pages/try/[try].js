// import { MainLayout } from '../../layouts/MainLayout'
// import { CardComponent } from '../../components/CardComponent'
// import { useRouter } from 'next/router'
// import { server } from '../../config'
// import useSWR from 'swr'


// const fetcher = async (url) => {
//     const res = await fetch(url)
//     const data = await res.json()
//     if (res.status !== 200) {
//         throw new Error(data.message)
//     }
//     return data
// }

// // ResolvablePage.getInitialProps = async ( {query} ) => {
// //     // console.log(query)
// //     // const page = (query.resolvable == 'resolvable') ?
// //     const data = await fetcher(`${server}/api/resolvable/${query.resolvable}`)
// //     return { data }
// // }


// //
// // This function gets called at build time
// export async function getStaticPaths() {
//     return {
//         paths: [
//           { params: { resolvable: "In-laborum-tempor" } },
//           { params: { resolvable: 'Culpa-consequat-culpa' } }
//         ],
//         fallback: false
//       }
//   }

// // This also gets called at build time
// // export async function getStaticProps ( {query} ) {
// export async function getStaticProps ( {params} ) {
//     // const page = (query.additional == 'additional') ?
//     // const data = await fetcher(`${server}/api/additional/${query.additional}`)
//     console.log("getStaticProps params - ", params.resolvable)
//     // const props = await fetch(`${server}/api/resolvable/${params.resolvable}`)
//     const res = await fetch(`${__dirname}/../api/resolvable/${params.resolvable}`)
//     // console.log('getStaticProps - ', typeof JSON.parse(JSON.stringify(res)))
//     console.log('getStaticProps res - ', res)
//     const resolvablePage = await res.json()
//     return { props: {resolvablePage} }
// }
// //


// // export default function ResolvablePage (props) {
// export default function ResolvablePage (resolvablePage) {
//     // console.log(props)
//     console.log(resolvablePage)
//     const { query } = useRouter()
//     // const initialData = props.data
//     const initialData = resolvablePage.data
//     const { data, error } = useSWR(
//         () => query.resolvable && `/api/resolvable/${query.resolvable}`,
//             fetcher, 
//             { initialData }
//     )

//     // then something go wrong
//     if (error) return (
//         <MainLayout
//             title='Oops!'
//             description={`Something go wrong`}
//         >
//             <p>{error.message}</p>
//         </MainLayout>
//     )

//     // then data is loading
//     if (!data) return (
//         <MainLayout
//             title='Loading data'
//             description={`Loading data for this page`}
//         >
//             <p>Loading...</p>
//         </MainLayout>
//     )
  
//     // then all data is loaded
//     return (
//         // <MainLayout >
//         //     <Card>
//         //         <Card.Header>{`Header for card ${data.id}`}</Card.Header>
//         //         <Card.Body>
//         //             <Card.Title>{data.title}</Card.Title>
//         //             {data.text}
//         //         </Card.Body>
//         //     </Card>
//         // </MainLayout>

//         <MainLayout
//             title={data.title}
//             description={`Description for ${data.id} page`}
//         >
//             <CardComponent
//                 cardHeader={data.title}
//                 cardText={data.text}
//             />
//         </MainLayout>
//     )
// }

///

// get server side props

import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useRouter } from 'next/router'
// import { server } from '../../config'
import { try_pages } from '../../data/try_pages'
import useSWR from 'swr'
const serialize = require('serialize-javascript');

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export async function getStaticPaths() {
    const paths = try_pages.map((page) => ({
        params: { try: page.link }
    }))
    console.log(paths)
    return { paths, fasllback: false }
}

export async function getStaticProps ( {params} ) {
    console.log('getStaticProps paths - ', params.try)
    const q = params.try
    console.log('getStaticProps try_pages - ', try_pages)
    console.log('getStaticProps q - ', q)
    const post = try_pages.map( (p) => (p.link == q) ? p : null )
    console.log('getStaticProps post - ', post)
//   const post = await res.json()


    return { props: { post } }
}
//
  
export default function TryPage ( { post }) {
    const {query} = useRouter()
    // const try = query.try
    // const { id } = router.query
    const p = query.try
    console.log('TryPage query.try = p - ', p)
    console.log('TryPage post - ', post.link==p)
    // const initialData = props.data
    // const { data, error } = useSWR(
    //     () => query.resolvable && `/api/resolvable/${query.resolvable}`,
    //         fetcher, 
    //         { initialData }
    // )

    // // then something go wrong
    // if (error) return (
    //     <MainLayout
    //         title='Oops!'
    //         description={`Something go wrong`}
    //     >
    //         <p>{error.message}</p>
    //     </MainLayout>
    // )

    // // then data is loading
    // if (!data) return (
    //     <MainLayout
    //         title='Loading data'
    //         description={`Loading data for this page`}
    //     >
    //         <p>Loading...</p>
    //     </MainLayout>
    // )
  
    // then all data is loaded

//     return (
//         // <MainLayout >
//         //     <Card>
//         //         <Card.Header>{`Header for card ${data.id}`}</Card.Header>
//         //         <Card.Body>
//         //             <Card.Title>{data.title}</Card.Title>
//         //             {data.text}
//         //         </Card.Body>
//         //     </Card>
//         // </MainLayout>

//         <MainLayout
//             title={post.title}
//             description={`Description for ${post.id} page`}
//         >
//             <CardComponent
//                 cardHeader={post.title}
//                 cardText={post.text}
//             />
//         </MainLayout>
//     )
return (
    <p>{post.text}</p>
    
)
}