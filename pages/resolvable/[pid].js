import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponents/CardComponent'
// import { useRouter } from 'next/router'
// import { server } from '../../config'
// import useSWR from 'swr'

import fs from 'fs'
import path from 'path'


// fetch for swr
// const fetcher = async (url) => {
//     const res = await fetch(url)
//     const data = await res.json()
//     if (res.status !== 200) {
//         throw new Error(data.message)
//     }
//     return data
// }


export async function getStaticPaths() {
    const pagesDirectory = path.join(process.cwd(), '/data/resolvable_pages/')
    const filenames = fs.readdirSync(pagesDirectory)
    const paths = filenames.map((filename) => {
        return (
            { params: { pid: filename.slice(0, -5) } }
        )
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const pagesDirectory = path.join(process.cwd(), '/data/resolvable_pages/')
    const filenames = fs.readdirSync(pagesDirectory)
    const pageFileName = filenames.filter(filename => filename.slice(0, -5) == context.params.pid);
    const pageFilePath = path.join(pagesDirectory, pageFileName[0])
    const page = fs.readFileSync(pageFilePath, 'utf8')
   
    return {
        props: {
            page,
        },
    }
}


export default function ResolvablePage ( {page} ) {
    const data = JSON.parse(page)

    // SWR
    // 
    // some logic for swr
    // const initialData = props.data
    // const { data, error } = useSWR(
    //     () => query.resolvable && `/api/resolvable/${query.resolvable}`,
    //         fetcher, 
    //         { initialData }
    // )
    // 
    // some html for swr
    // then something go wrong
    // if (error) return (
    //     <MainLayout
    //         title='Oops!'
    //         description={`Something go wrong`}
    //     >
    //         <p>{error.message}</p>
    //     </MainLayout>
    // )
    // 
    // then data is loading
    // if (!data) return (
    //     <MainLayout
    //         title='Loading data'
    //         description={`Loading data for this page`}
    //     >
    //         <p>Loading...</p>
    //     </MainLayout>
    // )
  
    // static layout
    return (
        <MainLayout
            title={data.title}
            description={`Description for ${data.id} page`}
        >
            <CardComponent
                cardHeader={data.header}
                cardTitle={data.title}
                cardText={data.text}
            />
        </MainLayout>
    )
}