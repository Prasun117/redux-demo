import React from "react";
import { Grid, Paper, Card, CardHeader, CardContent } from "@material-ui/core";
export const LoginForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="login-form">
      <Grid container>
        <Grid item xs={6}>
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

        <Grid item xs={6}>
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <form onSubmit={handleSubmit}>
        UserName:
        <input type="text" />
        Password:
        <input type="text" />
        <button type="submit">submit</button>
      </form> */}
    </div>
  );
};
