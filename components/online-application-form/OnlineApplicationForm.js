import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import SecondarySectionHeader from "../SecondarySectionHeader";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useSnackbar } from "notistack";
import Slide from '@material-ui/core/Slide';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function OnlineApplicationForm() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [formFields, setFormFields] = React.useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    reference: "",
  });

  const [processing, setIsProcessing] = React.useState(false);

  const handlSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const formElements = e.target.elements;

    axios
      .post("/api/OnlineApplicationSubmit", {
        name: formElements["name"].value,
        surname: formElements["surname"].value,
        email: formElements["email"].value,
        number: formElements["number"].value,
        reference: formElements["reference"].value,
      })
      .then((res) => {
        if (res.data.message == "MAIL_SENT") {
          enqueueSnackbar("Email successfully sent", {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            TransitionComponent: Slide,
          });

          formElements["name"].value = "";
          formElements["surname"].value = "";
          formElements["email"].value = "";
          formElements["number"].value = "";
          formElements["reference"].value = "";

          setIsProcessing(false);
          setFormFields({
            name: "",
            surname: "",
            email: "",
            number: "",
            reference: "",
          });
        } else {
          enqueueSnackbar(`Failed to send email : ${res.data.err.message}`, {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            TransitionComponent: Slide,
          });

          setIsProcessing(false);
        }
      })
      .catch((err) => {
        enqueueSnackbar(`Failed to send email : ${err.message}`, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          TransitionComponent: Slide,
        });

        setIsProcessing(false);
      });

  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
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
        Online Application
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  height: "90vh",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={12} lg={3}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='350' height='560' preserveAspectRatio='none' viewBox='0 0 350 560'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1000%26quot%3b)' fill='none'%3e%3crect width='350' height='560' x='0' y='0' fill='rgba(207%2c 45%2c 49%2c 1)'%3e%3c/rect%3e%3ccircle r='58.335' cx='-6.91' cy='41.04' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='58.335' cx='219.23' cy='214.68' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='45.79' cx='341.36' cy='132.19' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='99.795' cx='191.13' cy='136.99' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='33.735' cx='306.63' cy='234.75' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='99.705' cx='52.43' cy='79.57' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='29.805' cx='277.05' cy='174.59' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='110.78' cx='252.8' cy='25.96' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='105.025' cx='6.57' cy='24.86' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='61.895' cx='112.84' cy='393.24' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='57.14' cx='176.39' cy='400.32' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='29.955' cx='308.35' cy='520.22' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='112.2' cx='11.36' cy='448.05' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='90.925' cx='163.94' cy='464.46' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='33.22' cx='268.68' cy='269.5' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='77.53' cx='235.83' cy='551.31' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='83.86' cx='344.98' cy='252.3' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='61.245' cx='339.58' cy='271.87' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='94.795' cx='288.87' cy='279.89' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='37.17' cx='340.74' cy='85.12' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='91.12' cx='101.1' cy='109.77' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='85.395' cx='314.83' cy='77.41' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='30.435' cx='255.24' cy='470.73' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='87.625' cx='42.16' cy='253.1' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='99.62' cx='218.43' cy='395.99' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='45.83' cx='342.62' cy='31.24' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='87.315' cx='282.49' cy='448.63' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='64.765' cx='313.97' cy='256.63' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='110.14' cx='266.04' cy='234.06' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='49.58' cx='265.78' cy='398.49' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='29.345' cx='163.82' cy='120.88' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='39.25' cx='238.81' cy='472.55' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='102.405' cx='125.2' cy='113.04' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='95.975' cx='24.31' cy='398.43' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='91.685' cx='165.78' cy='239.05' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='94.235' cx='85.62' cy='242.86' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='71.735' cx='157.78' cy='389.05' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='107.155' cx='242.76' cy='89.91' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='115.845' cx='6.42' cy='547.84' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3ccircle r='73.02' cx='238.86' cy='548.4' stroke='white' stroke-opacity='1' stroke-width='2'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1000'%3e%3crect width='350' height='560' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`,
                      }}
                    ></Box>
                  </Grid>

                  <Grid item xs={12} md={12} lg={9}>
                    <Box
                      sx={{
                        height: "90vh",
                        backgroundColor: "#FFFFFF",
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1541%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1542)'%3e%3c/rect%3e%3cpath d='M1440 0L818.19 0L1440 147.34z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M818.19 0L1440 147.34L1440 272.17L370.99000000000007 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M370.99 0L1440 272.17L1440 378.11L362.87 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M362.8700000000001 0L1440 378.11L1440 489.29L146.0700000000001 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L252.52 560L0 342.32z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 342.32L252.52 560L404.58000000000004 560L0 265.61z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 265.61L404.58000000000004 560L925.63 560L0 144.75z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 144.75L925.63 560L1265.26 560L0 130.83z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1541'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1542'%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          padding: 6,
                          display: "flex",
                          justifyContent: "space-around",
                          flexDirection: "column",
                        }}
                      >
                        <Box>
                          <SecondarySectionHeader txt={"Online Application"} />
                        </Box>
                        <form
                          target="_blank"
                          method="POST"
                          onSubmit={handlSubmit}
                          style={{
                            display: "flex",
                          justifyContent: "space-around",
                          height:'100%',
                          flexDirection: "column",
                          padding:2,
                          }}
                        >
                          
                          <FormControl>
                            <TextField
                              onChange={handleChange}
                              id="standard-basic"
                              label="Name"
                              variant="outlined"
                              name="name"
                            />
                          </FormControl>

                          <FormControl>
                            <TextField
                              onChange={handleChange}
                              id="standard-basic"
                              label="Surname"
                              variant="outlined"
                              name="surname"
                            />
                          </FormControl>

                          <FormControl>
                            <TextField
                              onChange={handleChange}
                              id="standard-basic"
                              label="Email"
                              variant="outlined"
                              type="email"
                              name="email"
                            />
                          </FormControl>

                          <FormControl>
                            <TextField
                              onChange={handleChange}
                              id="standard-basic"
                              label="Phone Number"
                              variant="outlined"
                              type="tel"
                              name="number"
                            />
                          </FormControl>

                          <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-standard-label">
                              Reference
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              name="reference"
                              onChange={handleChange}
                              label="Reference"
                              value={formFields.reference}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={"sow-hope"}>Sow Hope</MenuItem>
                              <MenuItem value={"study-centre"}>
                                Study Centre
                              </MenuItem>
                              <MenuItem value={"leadership-academy"}>
                                Leadership Academy
                              </MenuItem>
                              <MenuItem value={"tons-of-love"}>
                                Tons of Love
                              </MenuItem>
                            </Select>
                          </FormControl>


                          <Link href="/terms" target="_blank" >
                            <a target="_blank" className="tncs" >
                              Terms and Conditions
                            </a>
                          </Link>

                          <Box sx={{ display: "flex", alignItems: "center" , justifyContent:'flex-start' }}>
                            <Checkbox
                              required
                              name="termsAndConditions"
                            />
                            <Typography>
                              {" "}
                              I have read and accept the{" "}
                              <Link href="/terms">
                                <a target="_blank" className="tncs" >
                                  Terms and Conditions
                                </a>
                              </Link>
                              {"."}
                            </Typography>
                          </Box>

                          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                          {processing ? "Processing..." : "Submit"}
                          </Button>
                        </form>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
