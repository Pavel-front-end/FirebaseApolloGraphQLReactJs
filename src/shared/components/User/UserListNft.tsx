import React, { useState } from "react";
import ListOwnNft from "../../features/ListNft/ListOwnNft";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Grid, Typography } from "@mui/material";
import { colors } from "../../../theme/theme";
import ContainerFilterSortSearch from "../../features/ContainerFilterSortSearch";
import ListWishNft from "../../features/ListNft/ListWishNft";
import { useLocation } from "react-router-dom";
import ListOwnListingNft from "../../features/ListNft/ListOwnListingNft";

interface Props {
  walletAddress: string | undefined;
}

export default function UserListNft({ walletAddress }: Props) {
  const location = useLocation();
  const [value, setValue] = useState(location?.state?.tab || "1");
  const [placement, setPlacement] = useState("column");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <Typography variant="h2">Products</Typography>
          </Grid>
          <Grid item sm={6} container sx={{ justifyContent: { sm: "center" } }}>
            <TabList
              onChange={handleChange}
              aria-label="tabs"
              sx={{
                backgroundColor: colors.lightDark,
                borderRadius: "0.625rem",
                padding: "0.25rem",
              }}
            >
              <Tab
                label="Owned"
                value="1"
                sx={{ padding: "0.5rem 0.625rem" }}
              />
              <Tab
                label="Listing"
                value="2"
                sx={{ padding: "0.5rem 0.625rem" }}
              />
              <Tab
                label="Wish list"
                value="3"
                sx={{ padding: "0.5rem 0.625rem" }}
              />
            </TabList>
          </Grid>
        </Grid>
        <ContainerFilterSortSearch setPlacement={setPlacement} />
        {walletAddress ? (
          <>
            <TabPanel value="1" sx={{ padding: "2.5rem 0" }}>
                <ListOwnNft placement={placement} walletAddress={walletAddress} listType='owned' />
            </TabPanel>
            <TabPanel value="2" sx={{ padding: "2.5rem 0" }}>
                <ListOwnListingNft placement={placement} walletAddress={walletAddress} listType='listing'/>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: "2.5rem 0" }}>
              <ListWishNft placement={placement} walletAddress={walletAddress} listType='wishList' />
            </TabPanel>
          </>
        ) : (
          <Typography variant="h4" sx={{my: {xs: '2rem', md: "4rem"}}}>
            We couldn't find your wallet address, please check your details in
            your profile.
          </Typography>
        )}
      </TabContext>
    </Box>
  );
}
