import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
import utilities from './tailwind.json';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const client = new ApolloClient({
  uri: 'https://lakeelmo.stepzen.net/api/bald-woodpecker/__graphql',
  headers: {
    Authorization: "APIKey lakeelmo::stepzen.net+1000::a5323b3aa4f3b1220872c80f9a747707491bd2c7ed29548e9bd0b94065209c1b"
  },
  cache: new InMemoryCache(),
});


export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition

    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ApolloProvider>
      </SafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
