import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingSIze({ rating, rate, setRate }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="size-small"
        size="small"
        value={rating}
        onChange={(e) => setRate(e.target.value)}
      />
    </Stack>
  );
}
