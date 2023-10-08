import DigitButton from '../common/DigitButton';
import CalculateButton from '../common/CalculateButton';
import { Grid, TextField } from '@mui/material';


function SimpleCalculator() {
    return (
        <Grid container spacing={1}>
        <Grid item xs={12}>
            <TextField
              id="resultTab"
              fullWidth
              sx={{
                width : '100%'
              }}
            />
        </Grid>
        <Grid item xs={12}>
        <CalculateButton buttonText='('></CalculateButton>
        <CalculateButton buttonText=')'></CalculateButton>
        <CalculateButton buttonText='%'></CalculateButton>
        <CalculateButton buttonText='AC'></CalculateButton>
        </Grid>
        <Grid item xs={12}>
            <DigitButton buttonText = "7"></DigitButton>
            <DigitButton buttonText = "8"></DigitButton>
            <DigitButton buttonText = "9"></DigitButton>
            <CalculateButton buttonText='÷'></CalculateButton>
            </Grid>
            <Grid item xs={12}>
            <DigitButton buttonText = "4"></DigitButton>
            <DigitButton buttonText = "5"></DigitButton>
            <DigitButton buttonText = "6"></DigitButton>
            <CalculateButton buttonText='*'></CalculateButton>
            </Grid>
            <Grid item xs={12}>
            <DigitButton buttonText = "1"></DigitButton>
            <DigitButton buttonText = "2"></DigitButton>
            <DigitButton buttonText = "3"></DigitButton>
            <CalculateButton buttonText='+'></CalculateButton>
            </Grid>
            <Grid item xs={12}>
            <DigitButton buttonText = "00"></DigitButton>
            <DigitButton buttonText = "0"></DigitButton>
            <CalculateButton buttonText = "."></CalculateButton>
            <CalculateButton buttonText='='></CalculateButton>
            </Grid>
            </Grid>
    )
};

export default SimpleCalculator;