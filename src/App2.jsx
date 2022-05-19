import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import Heroes from './components/Heroes'
import Home from './components/Home'
import RQHeroes from './components/RQHeroes'

const client = new QueryClient();

const App2 = () => {
    return (
        <QueryClientProvider client={client}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/super-heroes'>Traditional Super Heroes</Link>
                            </li>
                            <li>
                                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/super-heroes'>
                            <Heroes />
                        </Route>
                        <Route path='/rq-super-heroes'>
                            <RQHeroes />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    )
}

export default App2
