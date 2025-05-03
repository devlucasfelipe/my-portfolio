import { Box, Card, Container, Grid, styled, Typography } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const About = () => {
  const skillsSet = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Material UI",
    "Bootstrap",
    "Sass",
    "Figma",
    "Git",
  ];

  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign={"center"}>
            Sobre mim
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display={"flex"}
          justifyContent="center"
          pb={3}
        >
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="right">
              <StyledCard variant="outlined">
                <WorkspacePremiumIcon />
                <Typography textAlign={"center"} fontWeight={600}>
                  Experiência
                </Typography>
                <Typography textAlign={"center"}>+1 ano</Typography>
                <Typography textAlign={"center"}>
                  Desenvolvimento Front End
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
          <Grid size={{ xs: 9, md: 2.5 }}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign={"center"} fontWeight={600}>
                  Educação
                </Typography>
                <Typography textAlign={"center"}>Bacharel</Typography>
                <Typography textAlign={"center"}>Administração</Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>

        <Box pb={1}>
          <Typography>
            Sou apaixonado por tecnologia e desenvolvimento web, estudando e
            programando há 3 anos. Durante esse tempo, desenvolvi diversos
            projetos práticos, sempre buscando aprimorar minhas habilidades e me
            manter atualizado com as novas ferramentas do mercado. Atualmente,
            busco desafios que me permitam crescer profissionalmente e
            contribuir com inovação no desenvolvimento web.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Grid container spacing={2} justifyContent={"center"}>
            {skillsSet.map((skill, index) => (
              <Grid size={{ xs: 5, sm: 4, md: 2, lg: 2 }} key={index}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
