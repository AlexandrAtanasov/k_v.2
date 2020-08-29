import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useRouter } from 'next/router'
// import { server } from '../../config'
import useSWR from 'swr'

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
    return {
        paths: [
          { params: { pid: 'Et-nostrud-ullamco-nulla' } },
          { params: { pid: 'Mollit-voluptate-voluptate' } },
          { params: { pid: 'Nostrud-duis-veniam-non-ipsum' } }
        ],
        fallback: false
    }
}


export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), '/data/additional_pages/')
    const filenames = fs.readdirSync(postsDirectory)
   
    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        // Generally you would parse/transform the contents
        // For example you can transform markdown to HTML here
        return {
            filename,
            content: fileContents,
        }
    })
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}


export default function ResolvablePage ( {posts} ) {
    const router = useRouter()
    const { pid } = router.query
    

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
  
    // then all data is loaded
    return (
        <>
            {posts.map( (post, index) => {
                if (post.filename.slice(0, -5) == pid) {
                    const data = JSON.parse(post.content)
                    return (
                        <MainLayout
                            title={data.title}
                            description={`Description for ${data.id} page`}
                            key={index}
                        >
                            <CardComponent
                                cardHeader={data.title}
                                cardText={data.text}
                            />
                        </MainLayout>
                    )
                }
            })
            }
        </>
    )
}