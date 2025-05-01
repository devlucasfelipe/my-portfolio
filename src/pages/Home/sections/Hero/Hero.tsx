import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import Avatar from "../../../../assets/images/eubonitao.jfif";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/cv/CV-LucasFelipe.pdf";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItens: "center",
      paddingTop: "100px",
      height: "100vh",
    },
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    position: "relative",
  }));

  const handleDownload = () => {
    console.log("download");
    // Create a link element
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CV-LucasFelipe.pdf"; // Set the download attribute to specify the file name
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = "lukaofelps@gmail.com";
    const subject = "Subject";
    const body = "Ola, gostaria de entrar em contato com você.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position={"relative"} pb={3}>
                <Box position={"absolute"} width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign={"center"}>
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign={"center"}
                pb={2}
              >
                Lucas Felipe
              </Typography>
              <Typewriter
                text="Desenvolvedor Front End"
                delay={120}
                variant="h2"
                color="primary.contrastText"
              />
              <Box mt={3}>
                <Grid
                  container
                  display={"flex"}
                  justifyContent={"center"}
                  spacing={3}
                >
                  <Grid size={{ xs: 10, md: 4 }}>
                    <StyledButton onClick={() => handleDownload()}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid size={{ xs: 10, md: 4 }}>
                    <StyledButton onClick={() => handleEmail()}>
                      <EmailIcon />
                      <Typography>Contato</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
