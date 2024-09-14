import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { DashboardWrapper, DesignedText } from "./DashboardStyle";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShowChartIcon from '@mui/icons-material/ShowChart';


function Dashboard() {
  return (
    <DashboardWrapper>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}  // Allow wrapping to the next row after 3 cards
          gap={2}            // Space between cards
        >
          <Card sx={{minWidth:500, boxSizing: 'border-box' }}> {/* 30% width for 3 cards per row */}
            <CardContent>
              <Typography sx={{ mb: 1.5 }}>Total Amount Invested</Typography>
              <DesignedText><CurrencyRupeeIcon fontSize="small" />370000</DesignedText>
            </CardContent>
          </Card>

          <Card sx={{ minWidth:500, boxSizing: 'border-box' }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }}>Total Amount Invested</Typography>
              <Typography variant="body2">370000</Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth:500, boxSizing: 'border-box' }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }}>Total Amount Invested</Typography>
              <Typography variant="body2">370000</Typography>
            </CardContent>
          </Card>
        </Box>
     </DashboardWrapper>
  );
}

export default Dashboard;
