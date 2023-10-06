import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      {/* Create a catch-all route to redirect to the main page */}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);