import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { CouponModel } from "../../../../Models/CouponModel";
import "./PurchasedCoupon.css";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

interface PurchasedCouponProps {
  coupon: CouponModel;
}
function PurchasedCoupon(props: PurchasedCouponProps): JSX.Element {
  return (
    // <Grid item xs={3}>
    //   <Paper elevation={2}>
    //     <img src={props.coupon.image} alt="" className="img" />
    //     <Typography variant="h4" component="h2">
    //       {props.coupon.title}
    //     </Typography>
    //     <Typography variant="h6" component="h2">
    //       {props.coupon.description}
    //     </Typography>
    //     <Typography variant="h6" component="p">
    //       <EventAvailableIcon
    //         sx={{
    //           width: "2rem",
    //           marginRight: 0.5,
    //         }}
    //       />
    //       {props.coupon.startDate}
    //     </Typography>
    //     <Typography variant="h6" component="p">
    //       <EventBusyIcon
    //         sx={{
    //           width: "2rem",
    //           marginRight: 0.5,
    //         }}
    //       />
    //       {props.coupon.endDate}
    //     </Typography>
    //   </Paper>
    // </Grid>
    <Grid item key={props.coupon.id} xs={12} sm={12} md={4} xl={2.4} lg={3}>
      <Card sx={{ height: "50vh", display: "flow", flexDirection: "column" }}>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            height: "40%",
            paddingTop: "0%",
            paddingBottom: "12%",
          }}
          image={props.coupon.image}
          alt="coupon img"
        />
        {/* <CardContent sx={{ flexGrow: 20, height: 115 }}> */}

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.coupon.title}
          </Typography>
          <Typography>{props.coupon.description}</Typography>
          {/* <Typography gutterBottom variant="h6" component="h2">
            {props.coupon.price}{" "}
            <AttachMoneyIcon
              sx={{
                width: "2rem",
                marginRight: 0.5,
              }}
            />
          </Typography> */}
          <Typography variant="h6" component="p">
            <EventBusyIcon
              sx={{
                width: "2rem",
                marginRight: 0.5,
              }}
            />
            {props.coupon.endDate}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PurchasedCoupon;
