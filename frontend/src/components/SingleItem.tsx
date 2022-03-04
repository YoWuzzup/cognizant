import { Link } from "react-router-dom";
import { SingleItemProps } from "../interfaces";
import {
  Typography,
  Button,
  CardActions,
  Card,
  CardContent,
} from "@mui/material/";

export const SingleItem: React.FC<SingleItemProps> = ({ car, hide }) => {
  const date = new Date(car.date_added);
  const [hours, day, month, year] = [
    date.getHours(),
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];

  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ display: hide && car.licensed ? "none" : "block" }}
      data-testid={`listitem-${car._id}`}
    >
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {car.make} {car.model}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {day}/{month}/{year} {hours}:00
        </Typography>
      </CardContent>
      <CardActions>
        <span style={{ cursor: "not-allowed" }}>
          <Button
            size="small"
            focusRipple
            onClick={(e: any) => e.preventDefault()}
          >
            <Link
              to={`cars/${car._id}`}
              style={{
                textDecoration: "none",
              }}
            >
              Learn More
            </Link>
          </Button>
        </span>
      </CardActions>
    </Card>
  );
};
