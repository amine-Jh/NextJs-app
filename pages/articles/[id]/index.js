import React from 'react'
import { useRouter } from 'next/router'
import ArticleItem from '../../../components/ArticleItem'
import Link from 'next/dist/client/link'

const article = ({article}) => {

  console.log(article)
    return (
      <>  <ArticleItem  article={article} />
      <Link   href="/" >  back to home </Link>
       </>
    )
}

export const getStaticProps=async (context)=>{
const res=await fetch( `https://jsonplaceholder.typicode.com/posts/${context.params.id}`   )
const article=await res.json();
console.log(article)
return  {
    props :{
        article
    }
}
}

export default article
