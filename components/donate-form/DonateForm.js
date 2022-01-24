import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Iframe from "react-iframe";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "60vw",
  minHeight: "90vh",
  overflow: "hidden",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
};

export default function DonateForm() {
  const [formFields, setFormFields] = React.useState({
    amount: "",
    email: "",
    reference: "",
  });

  const [checkbox, setCheckBox] = React.useState(false);

  const handleCheckbox = () => {
    if (checkbox === false) setCheckBox(true);
    else setCheckBox(false);

    console.log(checkbox);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
    console.log(formFields);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Donate
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Box
                id="form-image"
                sx={{
                  flex: 1,
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='280' height='610' preserveAspectRatio='none' viewBox='0 0 257 563'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1065%26quot%3b)' fill='none'%3e%3crect width='257' height='563' x='0' y='0' fill='rgba(207%2c 45%2c 49%2c 1)'%3e%3c/rect%3e%3cpath d='M79.78936658278681 4.3556708426038035L95.04800927384025 40.30278032558125 130.9951187568177 25.044137634527818 115.73647606576426-10.902971848449635z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M168.027%2c66.722C185.151%2c67.26%2c198.011%2c52.045%2c205.282%2c36.532C211.482%2c23.305%2c208.188%2c8.696%2c201.248%2c-4.158C193.839%2c-17.881%2c183.604%2c-31.73%2c168.027%2c-32.475C151.457%2c-33.268%2c136.225%2c-22.459%2c128.804%2c-7.623C122.037%2c5.904%2c127.561%2c20.933%2c134.619%2c34.31C142.379%2c49.019%2c151.405%2c66.199%2c168.027%2c66.722' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M160.41 325.13 a45.61 45.61 0 1 0 91.22 0 a45.61 45.61 0 1 0 -91.22 0z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M86.22 456.78 a64 64 0 1 0 128 0 a64 64 0 1 0 -128 0z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M146.718%2c151.806C165.264%2c151.36%2c180.636%2c139.049%2c189.906%2c122.98C199.17%2c106.922%2c202.424%2c87.29%2c193.223%2c71.196C183.963%2c54.999%2c165.368%2c47.965%2c146.718%2c47.439C126.928%2c46.881%2c105.673%2c51.492%2c95.436%2c68.438C84.929%2c85.831%2c89.126%2c107.842%2c99.772%2c125.15C109.877%2c141.578%2c127.437%2c152.27%2c146.718%2c151.806' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M87.03032757017547 236.04619646392632L57.690817335934604 232.96248967768693 67.73501227369599 278.513608422168z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M4.918151322246832-4.2787375856157155L51.555494633485836 55.41433973332042 111.24857195242197 8.77699642208141 64.61122864118296-50.91608089685472z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M24.38 539.09 a66.63 66.63 0 1 0 133.26 0 a66.63 66.63 0 1 0 -133.26 0z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M77.93950998753212 430.9273973335909L32.97328734716068 408.99590516717365 22.55916041772059 487.41098521093943z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M47.666437361437474 178.36938726251537L62.27828376270145 142.20379833060872 0.7239771642094723 138.3688231946661z' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M47.203%2c361.149C71.844%2c361.286%2c97.691%2c351.23%2c108.192%2c328.939C117.761%2c308.627%2c103.731%2c286.915%2c90.832%2c268.537C80.356%2c253.611%2c65.396%2c243.296%2c47.203%2c242.043C26.234%2c240.599%2c3.74%2c244.446%2c-8.242%2c261.715C-21.825%2c281.292%2c-24.227%2c307.456%2c-12.622%2c328.267C-0.744%2c349.568%2c22.814%2c361.013%2c47.203%2c361.149' fill='rgba(255%2c 255%2c 255%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1065'%3e%3crect width='257' height='563' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  flex: 2,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress sx={{ fontSize: 50 }} />
                </div>
                <Iframe
                  url="http://54.243.128.129/2021_Dev/new-portal/index.php"
                  style={{
                    border: "none",
                  }}
                  width="100%"
                  height="600px"
                  id="form-iframe"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
