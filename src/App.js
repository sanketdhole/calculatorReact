import './App.css';
import SimpleCalculator from './calculators/SimpleCalculator';
import Box from '@mui/material/Box'

function App() {
  return <Box sx={{ width: '16em',
  margin: "0 auto"
  }}>
  <SimpleCalculator></SimpleCalculator>
  </Box>;
}

export default App;
