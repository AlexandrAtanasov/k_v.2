import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useRouter } from 'next/router'
// import { server } from '../../config'
import  {try_pages}  from '../../data/try_pages'
import useSWR from 'swr'
const serialize = require('serialize-javascript');

import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
    return {
        paths: [
          { params: { pid: 'In-laborum-tempor' } },
          { params: { pid: 'Culpa-consequat-culpa' } }
        ],
        fallback: false
      }
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    console.log('0. process.cwd() - ', process.cwd())
    
    const postsDirectory = path.join(process.cwd(), '/data/pages/')
    console.log('1. postsDirectory - ', postsDirectory)
    
    const filenames = fs.readdirSync(postsDirectory)
    console.log('2. filenames - ', filenames)
    
    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        console.log('3. filePath - ', filePath)
        
        const fileContents = fs.readFileSync(filePath, 'utf8')
        console.log('4. fileContents - ', fileContents)
  
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

// export async function getStaticProps( { params } ) {
//     console.log('try.pages page - ', params)
//     const post = try_pages.map( (page) => {
//         console.log("page - ", page)
//         console.log("params.try - ", params.pid)
//         if (page.link == params.pid) {
//             console.log("JSON.parse(JSON.stringify(props)) page - ", JSON.parse(JSON.stringify(page)))
//             console.log("serialize page - ", serialize(page))
//             return (serialize(page))
//         }
//     } )
  
//     // Pass post data to the page via props
//     return { props: { post } }
// }
  
export default function TryPage ( { posts }) {
    const router = useRouter()
    const { pid } = router.query

    console.log('TryPage pid - ', pid)
    console.log('TryPage posts - ', posts)
    
    // const data = JSON.parse(post.link)
    return (
      <div>some data at console</div>
    )
  }