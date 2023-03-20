import React from 'react'
import styles from './MainLayout.module.css'
import AppHeader from './AppHeader'

function MainLayout(props) {
  return (
    <div>
        <AppHeader />
        <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default MainLayout