import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticles } from '../modules/getArticles'
import { Container, Grid, Image, Header } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import catAd1 from '../assets/catAd1.png'
import catAd2 from '../assets/catAd2.png'
import catAd3 from '../assets/catAd3.png'
import catAd4 from '../assets/catAd4.png'
import catAd5 from '../assets/catAd5.png'
import craftAdFixed from '../assets/craftAdFixed.png'

const DisplayArticle = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { specificArticle, errorMessage, currentUser } = useSelector(
    (state) => state
  )
  const { id } = useParams()

  useEffect(() => {
    getArticles.show(id, dispatch, currentUser)
  }, [id, dispatch, currentUser])

  return (
    <>
      <Grid data-cy='article-display'>
        <Grid.Column width={12} style={{ padding: 70 }}>
          <h2 data-cy='title'>{specificArticle.title}</h2>
          <Image src={specificArticle.image} size='medium' />
          <h3 data-cy='lead'>{specificArticle.lead}</h3>
          <p data-cy='author'>{specificArticle.author}</p>
          <p data-cy='body'>{specificArticle.body}</p>
          <p data-cy='created'>{specificArticle.created}</p>
        </Grid.Column>

        <Grid.Column width={3}>
          <Header size='small'>{t('advertise_header')}</Header>
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

      {errorMessage && (
        <Container data-cy='error-article'>
          <h1>{errorMessage}</h1>
        </Container>
      )}
    </>
  )
}

export default DisplayArticle
