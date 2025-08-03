import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
  const [page, setPage] = React.useState(1); // Track current page

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value); // Update page on change
  };

  return (
    <Stack
      spacing={2}
      className="bg-[#F7D27F] p-2 mb-8 rounded-lg text-[#2C305F] font-bold"
    >
      <Pagination
        count={10}
        page={page} 
        onChange={handleChange} 
        variant="outlined"
        shape="rounded"
        siblingCount={0} // Show 2 siblings on each side (e.g., 1, 2, 3, 4, 5 for page 3)
        boundaryCount={1} // Show 2 boundary pages (e.g., 1, 2 for start, 9, 10 for end)
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#2C305F", 
            borderColor: "#F7D27F", 
            borderRadius: "8px", 
            margin: "0 8px", 
            "&:hover": {
              backgroundColor: "#FFEFCA", 
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#2C305F", //  active background
            color: "white", // White text for active page
            boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)", // Optional shadow for active page
            "&:hover": {
              backgroundColor: "#2C305F", // active color on hover
            },
            
          },
          "& .MuiPaginationItem-ellipsis": {
            margin: "0 8px", 
          },
        }}
      />
    </Stack>
  );
}