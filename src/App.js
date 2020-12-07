import React, { useEffect, useState } from 'react'
import List from './Store/Items'
import withListLoading from './Store/listLoading'
import NavBar from './Components/NavBar'
import Jumbotron from './Components/Jumbotron'
import Featured from './Components/Featured'
import SignUp from './Components/SignUp'

function App() {
  const ListLoading = withListLoading(List)
  const [appState, setAppState] = useState({
    loading: false,
    items: null
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = `http://18.191.164.245:8080/Amazon/items`
    fetch(apiUrl)
      .then(res => res.json())
      .then(items => {
        setAppState({ loading: false, items: items })
      })
  }, [setAppState])

  return (
    <div>

      <div className='px-5 pb-5 pt-4 mb-3' style={{ backgroundColor: '#37474F' }}>
        <NavBar />

        <div className='container'>
          <div className='mt-5 row'>
            <div className='col'><Jumbotron /></div>
            <div className='col'><SignUp /></div>
          </div>
        </div>
      </div>

      <div className='container'>
        <Featured />
        <ListLoading isLoading={appState.loading} items={appState.items} />
      </div>
    </div>
  )
}

export default App
