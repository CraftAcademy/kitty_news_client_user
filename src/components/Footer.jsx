import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer>
      <h2 id='footer' data-cy='footer'>
        {t('footer')}
      </h2>
    </footer>
  )
}

export default Footer
