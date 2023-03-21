import {
  Avatar,
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { colors } from "../../../../../theme/theme";
import { User } from "../../../../../types/IGetUsers";
import { sliceAddress } from "../../../../../utilities";

interface Props {
  userData: User;
  index: number;
}

const ShortUserCard = ({ userData, index }: Props) => {
  function createData(
    rating: number | undefined,
    lvl: number | undefined,
    scores: number | undefined
  ) {
    return { rating, lvl, scores };
  }

  const rows = [createData(userData.rating, userData.lvl, userData.scores)];
  return (
    <Stack sx={{backgroundColor: colors.lightDark, borderRadius: '0.625rem', padding: '1rem', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
      <Stack sx={{flexDirection: 'row', alignItems:'center', paddingRight: '1rem'}}>
      <Typography variant="h3" component={"span"}>
        {index}
      </Typography>
        <Avatar
          src={userData?.avatar}
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            color: colors.lightWhite2,
            margin: '0 1rem 0 1.5rem'
          }}
        >
          User
        </Avatar>
        <Box>
          <Typography variant="body1">{userData?.username}</Typography>
          <Typography variant="body2" color={colors.lightWhite2}>
            w/a: {sliceAddress(userData?.walletAddress)}
          </Typography>
        </Box>
      </Stack>
      <TableContainer sx={{ maxWidth: 250 }}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell sx={{padding: '0 0.5rem  0.5rem'}}>rating</TableCell>
              <TableCell align="right" sx={{padding: '0 0.5rem  0.5rem'}}>lvl</TableCell>
              <TableCell align="right" sx={{padding: '0 0.5rem  0.5rem'}}>scores</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rating}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{padding: '0.5rem 0.5rem 0'}}>
                  {row.rating}
                </TableCell>
                <TableCell align="right" sx={{padding: '0.5rem 0.5rem 0'}}>{row.lvl}</TableCell>
                <TableCell align="right" sx={{padding: '0.5rem 0.5rem 0'}}>{row.scores}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ShortUserCard;
