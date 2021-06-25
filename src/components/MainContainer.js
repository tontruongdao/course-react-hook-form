import React from 'react'
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core/styles'
import { flexbox } from '@material-ui/system'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}))

const MainContainer = ({ children, ...props }) => {
  const styles 

  return (
    <Container component="main" maxWidth="xs" {...props}>
      {
        children
      }
    </Container>
  )

}

export default MainContainer