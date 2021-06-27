import { forwardRef } from "react"
import { TextField } from '@material-ui/core'

const Input = forwardRef((props, ref) => {
  return (
    <TextField variant="outlined" margin="normal" inputRed={ref} fullWidth { ...props } >
      
    </TextField>
  )
})

export default Input
