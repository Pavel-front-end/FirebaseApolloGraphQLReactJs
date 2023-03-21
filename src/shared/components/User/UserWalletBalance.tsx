import { CardContent, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme/theme";
import { sliceAddress } from "../../../utilities";
import {
  getUserFollowers,
  getUserFollowing,
} from "../../../utilities/mockupData/getUserByAuthId";
import { EthereumIcon } from "../ui/icons/Ethereum";
import useBalanceMetamask from "../WalletEther/hooks/useBalanceMetamask";

interface Props {
  accountAddress: string | undefined;
  followers: string | undefined;
  following: string | undefined;
}

const UserWalletBalance = ({ accountAddress, followers, following }: Props) => {
  const { balance } = useBalanceMetamask(accountAddress);
  return (
    <CardContent
      sx={{
        maxWidth: "361px",
        width: "100%",
        border: `1.4px solid ${colors.lightWhite}`,
        borderRadius: "0.625rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: {xs: "1rem", md: '0'}
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={"0.5rem"}
      >
        <Typography variant="body2" color={colors.lightGrey}>
          Followers
        </Typography>
        <Typography variant="body1">{getUserFollowers(followers)}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={"0.5rem"}
      >
        <Typography variant="body2" color={colors.lightGrey}>
          Following
        </Typography>
        <Typography variant="body1">{getUserFollowing(following)}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={"0.5rem"}
      >
        <Typography variant="body2" color={colors.lightGrey}>
          Balance
        </Typography>
        <Typography variant="body1" display={"flex"} fontWeight={"600"}>
          <EthereumIcon />
          {balance}
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="body2" color={colors.lightGrey}>
          Address
        </Typography>
        <Typography variant="body1">
          {accountAddress && sliceAddress(accountAddress)}
        </Typography>
      </Stack>
    </CardContent>
  );
};

export default UserWalletBalance;
