import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InformationForm from "./InformationForm";
import MedForm from "./MedForm";
import Review from "./Review";
import Grid from "@mui/material/Grid";
import EducationForm from "./EducationForm";
import axios from "axios";
import { useSnackbar } from "notistack";
import Slide from '@material-ui/core/Slide';

const steps = [
  "PERSONAL INFORMATION OF APPLICANT",
  "MEDICAL DETAILS",
  "CONTACT IN CASE OF EMERGENCY",
  "DETAILS REGARDING SCHOOL EDUCATION",
];

function getStepContent(step, form, handleChange) {
  switch (step) {
    case 0:
      return <InformationForm form={form} handleChange={handleChange} />;
    case 1:
      return <MedForm form={form} handleChange={handleChange} />;
    case 2:
      return <Review form={form} handleChange={handleChange} />;
    case 3:
      return <EducationForm form={form} handleChange={handleChange} />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [processing, setIsProcessing] = useState(false);


    const handleSubmit = (e) => {
      console.log(form)
    e.preventDefault();
    setIsProcessing(true);

    const formElements = e.target.elements;

    axios
      .post("/api/OnlineApplicationSubmit", form)
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

          // formElements["name"].value = "";
          // formElements["surname"].value = "";
          // formElements["email"].value = "";
          // formElements["number"].value = "";
          // formElements["reference"].value = "";

          setIsProcessing(false);
          // setFormFields({
          //   name: "",
          //   surname: "",
          //   email: "",
          //   number: "",
          //   reference: "",
          // });
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



  const [form, setForm] = useState({
    // Information form
    title: "",
    surname: "",
    firstName: "",
    prefferedName: "",
    email: "",
    dob: "",
    id: "",
    address: "",
    city: "",
    code: "",
    phoneNumber: "",
    telephoneNumber: "",
    gender: "",
    activity: "",
    member: "",
    graphicDesign: false,
    filmArts: false,
    soundEngineering: false,
    administration: false,
    finance: false,
    informationTechnology: false,
    // MedForm
    disability: "",
    allegy: "",
    aid: "",
    medicalAidName: "",
    medicalAidNumber: "",
    // emergency form
    EmergencyTitle: "",
    EmergencySurname: "",
    EmergencyFirstName: "",
    emergencyResidence: "",
    emergencyCity: "",
    emergencyPostalCode: "",
    emergencyCell: "",
    emergencyHomeNumber: "",
    emergencyOfficeContact: "",
    emergencyRelationship: "",
    // EducationForm
    school: "",
    town: "",
    finalschooolyear: "",
    completedGrade: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newBool = false;

    if (type === "checkbox") {
      if (value == "false") newBool = true;
      else newBool = false;
    }

    // console.log(newBool)

    setForm({
      ...form,
      [e.target.name]: type === "checkbox" ? newBool : value,
    });
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <h6 id="mobile-stepper">{label}</h6>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your time.
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
                    submit
                  </Button>
                </div>
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep, form, handleChange)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
    </Container>
  );
}
