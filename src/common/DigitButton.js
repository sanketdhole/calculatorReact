import Button from '@mui/material/Button'

export default function DigitButton({buttonText, handleOnClick}) {
        function OnClick() {
          handleOnClick(buttonText);
        }
        return <Button variant="outlined" color="primary" onClick={OnClick}>
          {buttonText}
        </Button>
    }