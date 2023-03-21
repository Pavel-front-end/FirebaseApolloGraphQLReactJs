import { useMutation } from "@apollo/client";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "../../../../../connectors/metaMask";
import { useAuth } from "../../../../../context/AuthContext";
import {
  GENERATE_USER_WALLET_ADDRESS,
  UPDATE_USER_WALLET,
} from "../../../../../GraphQLOperation/private/mutation";
import { USER_BY_ID_FULL } from "../../../../../GraphQLOperation/private/queries";
import PopupChangedWallet from "../../../Popup/PopupChangedWallet";

interface Props {
  wallet: string | undefined;
  toggleEdit: () => void
}

const UpdateWalletAddress = ({ wallet, toggleEdit }: Props) => {
  const { user } = useAuth();
  const uid = user.uid;
  const { active, account, activate, deactivate, library } = useWeb3React();
  const [open, setOpen] = useState(false);

  const [isSignature, setSignature] = useState(false);
  const [currentWallet, setCurrentWallet] = useState<string | undefined | null>(
    wallet
  );

  const [generateMessage, { data }] = useMutation(GENERATE_USER_WALLET_ADDRESS);

  const [updateWallet, { loading, data: dataUpdate, error }] = useMutation(
    UPDATE_USER_WALLET,
    {
      refetchQueries: [{ query: USER_BY_ID_FULL, variables: { id: uid } }],
    }
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const connectMetaMask = async () => {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
      setSignature(true);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnectMetaMask = async () => {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  };
  const validateSigned = (message: string, signature: string) => {
    updateWallet({
      variables: { message, signature },
    });
  };

  const signature = async () => {
    generateMessage({
      variables: { walletAddress: account },
    });
  };

  const signMessage = async (message: string) => {
    try {
      const signature = await library?.eth.personal.sign(message, account);
      validateSigned(message, signature);
    } catch (error) {
      disconnectMetaMask();
    }
  };

  const handleUpdateWallet = () => {
    if (active) {
      if (!currentWallet) {
        signature();
      } else {
        handleOpen();
      }
    } else {
      connectMetaMask();
    }
  };

  useEffect(() => {
    if (active && isSignature) {
      setSignature(false);
      if (!currentWallet) {
        signature();
      } else if (currentWallet !== account) {
        handleOpen();
      }
    }
  }, [active]);

  useEffect(() => {
    if (data) {
      signMessage(data.generateUserWalletAddressMessage.message);
    }
  }, [data]);

  useEffect(() => {
    if (dataUpdate?.updateUserWalletAddress.walletAddress) {
      console.log("signature is valid");
      toggleEdit()
    } else if (error) {
      setCurrentWallet(wallet);
      disconnectMetaMask();
    }
  }, [dataUpdate, error]);

  return (
    <>
      <Stack
        direction={{ md: "row" }}
        spacing={2}
        alignItems={{ md: "center" }}
      >
        <Stack sx={{ width: "100%", maxWidth: "350px", marginY: "1rem" }}>
          <TextField
            error={!!error}
            type="text"
            variant="outlined"
            inputProps={{ "data-testid": "wallet" }}
            label="wallet"
            InputProps={{
              readOnly: true,
            }}
            value={currentWallet || ""}
            helperText={error ? "Invalid Sign Message." : ""}
          />
        </Stack>
        <Stack sx={{ width: "100%", maxWidth: "170px", marginY: "1rem" }}>
          <Button
            variant="contained"
            disabled={active && account === currentWallet}
            onClick={handleUpdateWallet}
          >
            {loading ? (
              <CircularProgress color="inherit" size={24} />
            ) : !!currentWallet && wallet === currentWallet ? (
              "Update"
            ) : (
              "Get & Save"
            )}
          </Button>
        </Stack>
      </Stack>
      <PopupChangedWallet
        open={open}
        handleClose={handleClose}
        signature={signature}
      />
    </>
  );
};

export default UpdateWalletAddress;
