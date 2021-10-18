import React from 'react'
import styles from '../styles/Article.module.css'
import Link  from 'next/dist/client/link'

const ArticleItem = ({article}) => {
    return (
        <Link href="/articles/[id]" as={`/articles/${article.id}`}   >
        
        <div  className={styles.container} >
            <h1 className={styles.heading} >
                {article.title}
            </h1>
            <p  className={styles.parg} >  {article.body} </p>
        </div>
        </Link>
    )
}

export default ArticleItem
