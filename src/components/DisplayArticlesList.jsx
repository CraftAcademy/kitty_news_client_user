import React, { useEffect } from 'react'
import { getArticles } from '../modules/getArticles'
import ArticleCard from './ArticleCard'
import { Item, Container, Grid, Image, Header } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import catAd1 from '../assets/catAd1.png'
import catAd2 from '../assets/catAd2.png'
import catAd3 from '../assets/catAd3.png'
import catAd4 from '../assets/catAd4.png'
import catAd5 from '../assets/catAd5.png'
import craftAdFixed from '../assets/craftAdFixed.png'

const DisplayArticlesList = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { newsFeed } = useSelector((state) => state)

  useEffect(() => {
    getArticles.index(dispatch)
  }, [dispatch])

  let articleIndex
  articleIndex = (
    <Item.Group vertical>
      {newsFeed.map((article) => {
        return <ArticleCard article={{ ...article }} />
      })}
    </Item.Group>
  )

  return (
    <Grid>
      <Grid.Column width={12}>
        {newsFeed.length ? (
          <ul data-cy='article-index'>{articleIndex}</ul>
        ) : (
          <Container data-cy='empty-index'>
            <h1>{t('empty_index_message')}</h1>
          </Container>
        )}
      </Grid.Column>
      <Grid.Column width={3}>
        <Header size='small'>Advertising</Header>
        <Image src={catAd1} size='medium' />
        <br />
        <Image src={catAd2} size='medium' />
        <br />
        <Image src={craftAdFixed} size='medium' />
        <br />
        <Image src={catAd3} size='medium' />
        <br />
        <Image src={catAd4} size='medium' />
        <br />
        <Image src={catAd5} size='medium' />
      </Grid.Column>
    </Grid>
  )
}

export default DisplayArticlesList
