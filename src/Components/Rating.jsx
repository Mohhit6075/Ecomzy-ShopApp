import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function HalfRating(props) {
  const value = props.value;
  const count = props.count;
  return (
    <div className="flex scale-75 text-slate-500 items-start gap-2 justify-start -translate-x-10">
      <Rating
        name="half-rating-read"
        defaultValue={value}
        precision={0.5}
        readOnly
      />
      <Typography component="legend">{count} Ratings</Typography>
    </div>
  );
}
