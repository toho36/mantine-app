import './App.css';
import { Button, MantineProvider, Paper, Text } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans',
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
      </MantineProvider>
    </div>
  );
}

export default App;
