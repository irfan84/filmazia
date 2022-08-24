import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Movies, MovieInformation, Actors, Profile, NavBar } from './index'
import useStyles from './styles'

const App = () => {
 const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar}>
      <Router>
      <Routes>
        <Route exact path="/movie/:id" element={<MovieInformation />} />
        <Route exact path="/actors" element={<Actors />} />
        <Route exact path="/" element={<Movies />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
      </Router>
</div>
      </main>
    </div>
  )
}

export default App
