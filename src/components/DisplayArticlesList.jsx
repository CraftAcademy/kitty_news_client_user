import React, { useState, useEffect } from 'react'

const DisplayArticlesList = () => {
  const [articles, setArticles] = useState([])
  const getArticles = async () => {
    let result = await getArticlesData()
    setArticles(result.data.articles)
  }

useEffect(() => {
  getArticles() 
}, [])
let articleIndex = articles.map(article => {
  return (
    <>
      <li>
        {article.title}{article.lead}
      </li>
    </>
       
  )
})
  return (
    <>
      <ul key={item.id} data-cy="article-index">
        {articleIndex}
      </ul>
    </>
  )
}

export default DisplayArticlesList

