import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Import App Pages
import Home from './pages/Home';
import TherapySearch from './pages/TherapySearch';
import UserDashboard from './pages/UserDashboard';

// Import Header & Footer components, they are part of the UI while on any app page
import Header from './components/Header/index';
import Footer from './components/Footer/index';


// Establish GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Middleware will attach the JWT token to every request as an `authorization` header. setContext method retrieves any existing token from local storage and attaches the JWT token to every request sent from the client. 
const authLink = setContext((_, { headers }) => {
  // Retrieve authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // Return headers to the context for use by httpLink
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Use authLink middleware prior to making the request to GraphQL API
const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// ApolloProvider component wrapper allows anything in the component tree to acess the ApolloClient instance
// Router wrapper tracks location state to navigate between pages
// Switch returns the first matching route, so persistent Header and Footer Components are excluded from the component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Switch>
            {/* Default app page */}
            <Route exact path='/' component = { Home } />
            <Route exact path='/therapy' component = { TherapySearch } />
            <Route exact path='/userdashboard' component = { UserDashboard } />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;