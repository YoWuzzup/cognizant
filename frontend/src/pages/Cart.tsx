import { CartProps } from "../interfaces";
import {
  Typography,
  Button,
  CardActions,
  Card,
  CardContent,
} from "@mui/material/";

export const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((a: any, b: any) => {
    if (a === "object") {
      return a.price + b.price;
    } else {
      return a + b.price;
    }
  }, 0);

  // deleting a car from the cart
  const handleClick = (e: any, id: number) => {
    e.preventDefault();

    const newCart = cart.filter((el: any) => el._id !== id);
    setCart(newCart);
  };

  return (
    <div className="wrapper">
      {cart.map((item: any, index: number) => {
        return (
          <Card
            sx={{
              width: "100%",
              minHeight: "100px",
              margin: "0 auto 2rem",
            }}
            className="flex"
            key={`${item._id}_${index}`}
          >
            <CardContent
              style={{
                flexBasis: "80%",
              }}
              className="flex"
            >
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.make} {item.model}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Year: {item.year_model}
              </Typography>

              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Price: {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                focusRipple
                onClick={(e) => handleClick(e, item._id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Total Price: {totalPrice.toFixed(2)}
      </Typography>
    </div>
  );
};
