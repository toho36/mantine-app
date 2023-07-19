import './App.css';
import { Button, MantineProvider, Paper, Text } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans',
          colorScheme: 'dark',
          fontSizes: { md: 80 },
          radius: { sm: 60 },
          loaders: ' bars',
          colors: {
            blue: [
              '#4263eb',
              '#228be6',
              '#1971c2',
              '#3bc9db',
              '#15aabf',
              '#63e6be',
              '#ffe066',
              '#f783ac',
              '#e03131',
              '#212529',
            ],
          },
        }}
        styles={{
          Button: (theme) => ({
            root: {
              backgroundColor: theme.colors.blue[2],
            },
          }),
        }}
      >
        <Paper>
          <Text>
            Cupidatat commodo excepteur ea dolor id amet laboris consectetur
            quis minim ipsum veniam officia ut.
          </Text>
          <Text>
            Lorem culpa consectetur cupidatat dolor eiusmod velit sint commodo
            esse.Cupidatat commodo excepteur ea dolor id amet laboris
            consectetur quis minim ipsum veniam officia ut.
          </Text>
        </Paper>
        <Button>Hello world</Button>
        <Button>Hello world</Button>

        <MantineProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
          <Button>Greycliff CF button</Button>
        </MantineProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
