import DigitButton from "../common/DigitButton";
import CalculateButton from "../common/CalculateButton";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

function SimpleCalculator() {
  const [currentValue, setCurrentValue] = useState("");
  const handleButtonOnClick = (value) => {
    if (value === '=') {
      try {
        setCurrentValue(eval(currentValue).toString());
      } catch (error) {
        setCurrentValue("Error");
      }
    } else if (value === 'AC') {
      setCurrentValue('');
    } else {
      setCurrentValue(currentValue + value);
    }
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          id="resultTab"
          fullWidth
          sx={{
            width: "100%",
            textAlign: "right",
            "& input": {
              textAlign: "right",
            },
          }}
          value={currentValue}
        />
      </Grid>
      <Grid item xs={12}>
        <CalculateButton
          buttonText="("
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
        <CalculateButton
          buttonText=")"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
        <CalculateButton
          buttonText="%"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
        <CalculateButton
          buttonText="AC"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
      </Grid>
      <Grid item xs={12}>
        <DigitButton
          buttonText="7"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="8"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="9"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <CalculateButton
          buttonText="÷"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
      </Grid>
      <Grid item xs={12}>
        <DigitButton
          buttonText="4"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="5"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="6"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <CalculateButton
          buttonText="*"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
      </Grid>
      <Grid item xs={12}>
        <DigitButton
          buttonText="1"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="2"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="3"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <CalculateButton
          buttonText="+"
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
      </Grid>
      <Grid item xs={12}>
        <DigitButton
          buttonText="00"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <DigitButton
          buttonText="0"
          handleOnClick={handleButtonOnClick}
        ></DigitButton>
        <CalculateButton
          buttonText="."
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
        <CalculateButton
          buttonText="="
          handleOnClick={handleButtonOnClick}
        ></CalculateButton>
      </Grid>
    </Grid>
  );
}

export default SimpleCalculator;
