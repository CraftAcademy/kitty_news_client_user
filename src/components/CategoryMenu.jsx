import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Segment, Button } from 'semantic-ui-react'
import { getArticles } from '../modules/getArticles'
import { useTranslation } from 'react-i18next'
import RegistrationForm from './RegistrationForm'
import SubscriptionForm from './SubscriptionForm'
import LogInForm from './LogInForm'
import { logOut } from '../modules/Authentication'

const CategoryMenu = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('home')
  const { currentUser } = useSelector((state) => state)

  return (
    <Segment attached='bottom' inverted style={{ marginTop: '-0.05em' }}>
      <Menu inverted borderless>
        <Menu.Item
          name='home'
          data-cy='header-news'
          active={activeItem === 'home'}
          as={Link}
          to='/'
          onClick={() => {
            getArticles.index(dispatch)
            setActiveItem('home')
          }}
        >
          {t('home_link')}
        </Menu.Item>
        <Menu.Item
          name='global_politics'
          data-cy='category-global-politics'
          active={activeItem === 'global_politics'}
          onClick={() => {
            getArticles.index_by_category(1, dispatch)
            setActiveItem('global_politics')
          }}
          as={Link}
          to='/'
        >
          {t('global_politics')}
        </Menu.Item>
        <Menu.Item
          name='sports'
          data-cy='category-sports'
          active={activeItem === 'sports'}
          onClick={() => {
            getArticles.index_by_category(2, dispatch)
            setActiveItem('sports')
          }}
          as={Link}
          to='/'
        >
          {t('sports')}
        </Menu.Item>
        <Menu.Item
          name='self_care'
          data-cy='category-self-care'
          active={activeItem === 'self_care'}
          onClick={() => {
            getArticles.index_by_category(3, dispatch)
            setActiveItem('self_care')
          }}
          as={Link}
          to='/'
        >
          {t('self_care')}
        </Menu.Item>
        <Menu.Item
          name='news'
          data-cy='category-news'
          active={activeItem === 'news'}
          onClick={() => {
            getArticles.index_by_category(4, dispatch)
            setActiveItem('news')
          }}
          as={Link}
          to='/'
        >
          {t('news')}
        </Menu.Item>
        <Menu.Item
          name='culture'
          data-cy='category-culture'
          active={activeItem === 'culture'}
          onClick={() => {
            getArticles.index_by_category(5, dispatch)
            setActiveItem('culture')
          }}
          as={Link}
          to='/'
        >
          {t('culture')}
        </Menu.Item>
        <Menu.Item position='right'>
          {!currentUser && <RegistrationForm />}
          {currentUser && currentUser.data.role === 'registered_user' && (
            <SubscriptionForm />
          )}
        </Menu.Item>
        <Menu.Item>
          {currentUser ?
            <Button data-cy='log-out-button' onClick={logOut} inverted>Sign out</Button>
            :
            <LogInForm />
          }
        </Menu.Item>
      </Menu>
    </Segment>
  )
}

export default CategoryMenu
