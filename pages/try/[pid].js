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
    // console.log('0. process.cwd() - ', process.cwd())
    
    const postsDirectory = path.join(process.cwd(), '/data/pages/')
    // console.log('1. postsDirectory - ', postsDirectory)
    
    const filenames = fs.readdirSync(postsDirectory)
    // console.log('2. filenames - ', filenames)
    
    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      // console.log('3. filePath - ', filePath)
        
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(fileContents)
      // console.log('4.[eq] fileContents - ', data.id )

//
        // fileContents.map( (data) => {
        //   console.log('5. data - ', data)
        // })
//

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

export default function TryPage ( { posts }) {
    const router = useRouter()
    const { pid } = router.query

    return (
      <>
        <div>Some data for page "{pid}". Has been parsed</div>
        <div>
          {
            posts.map( (post, index) => {
              if (post.filename.slice(0, -5) == pid) {
                const data = JSON.parse(post.content)
                return (
                  <div key={index}>
                    <p>{data.title}</p>
                    <p>{data.text}</p>
                  </div>
                )
              }
            })
          }

        </div>
     </> 
    )
}