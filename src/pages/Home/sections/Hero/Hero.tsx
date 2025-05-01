import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/eubonitao.jfif";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/cv/CV-LucasFelipe.pdf";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItens: "center",
      paddingTop: "0px",
      height: "100vh",
    },
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
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
              <Box position={"relative"}>
                <Box position={"absolute"} width={"100%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position={"relative"} textAlign={"center"}>
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
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign={"center"}
              >
                Desenvolvedor Front End
              </Typography>
              <Grid
                container
                display={"flex"}
                justifyContent={"center"}
                spacing={3}
                pt={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent="center"
                >
                  <StyledButton onClick={() => handleDownload()}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display={"flex"}
                  justifyContent="center"
                >
                  <StyledButton onClick={() => handleEmail()}>
                    <EmailIcon />
                    <Typography>Contato</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
