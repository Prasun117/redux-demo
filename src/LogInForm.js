import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
  Divider,
  TextField,
  CardMedia,
  Button,
  CardActions
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import PersonIcon from "@material-ui/icons/Person";
import image from "./assets/contemplative-reptile.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[900]
  }
}));

export const LoginForm = (props) => {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="login-form">
      <Grid container>
        {false && (
          <Grid item md={6} sm={12} lg={6}>
            <Paper>
              <form onSubmit={handleSubmit}>
                UserName:
                <input type="text" />
                Password:
                <input type="text" />
                <button type="submit">submit</button>
              </form>
            </Paper>
          </Grid>
        )}
        <Grid item xs={0} md={6} lg={6} sm={0}></Grid>

        <Grid item md={6} sm={12} lg={6} xs={12}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              }
              title="User Login"
            ></CardHeader>
            <Divider />
            <CardContent>
              <Typography>UserName:</Typography>
              <TextField
                id="username"
                label="User name"
                variant="outlined"
                fullWidth={true}
              />
              <Typography>Password:</Typography>
              <TextField
                id="username"
                label="Password"
                variant="outlined"
                fullWidth={true}
              />
            </CardContent>
            <CardActions disableSpacing>
              <Button color="primary" size="medium" variant="contained">
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
