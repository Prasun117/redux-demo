import React from "react";

import {
  Card,
  Grid,
  CardHeader,
  Divider,
  Button,
  CardContent,
  Typography,
  CardActions,
  createStyles
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyle = createStyles(() => {});

export const AddToCart = (props) => {
  return (
    <>
      <Button color="primary" variant="contained">
        <span>value</span>
        <NotificationsIcon></NotificationsIcon>
      </Button>

      <Card>
        <CardHeader title="Item Quantity"></CardHeader>
        <Divider />
        <CardContent>
          <Typography>Quantity</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </CardActions>
      </Card>

      <Card>
        <CardHeader title="Item"></CardHeader>
        <Divider />
        <CardContent>
          <Typography>Item 1</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            <span>Add To Cart</span>
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
