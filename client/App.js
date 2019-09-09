import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import RootNavigator from './src/navigator';

const client = new ApolloClient({
    // Adrien 9 Septembre
    uri: 'http://0eb50345.ngrok.io',
});

const App = () => (
    <ApolloProvider client={client}>
        <RootNavigator />
    </ApolloProvider>
)

export default App;
