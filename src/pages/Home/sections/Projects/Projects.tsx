import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, {
  ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Catalogo de EspaçoNaves",
      subtitle: "Abr 2025 - Abr 2025",
      srcImg: "../../public/images/catalogo-de-espaconaves.png",
      description:
        "Projeto prático desenvolvido como uma SPA e apresenta uma coleção de naves do universo de Star Wars. A página inicial oferece opções para visualizar todas as espaçonaves ou filtrá-las por categorias específicas",
      technologies: "Tecnologias: NextJS, TypeScript",
      websiteURL: "https://catalogo-de-espaconaves.vercel.app",
      codeURL: "https://github.com/devlucasfelipe/catalogo-de-espaconaves",
    },
    {
      title: "Gestor de Estoque",
      subtitle: "Mar 2025 - Mar 2025",
      srcImg: "../../public/images/gestor-de-estoque.png",
      description: `Dashboard interativo com visualização de métricas de estoque 
Cadastro e atualização de itens com persistência local 
Navegação dinâmica sem recarregar a página 
Uso de hooks personalizados para otimização e modularização .`,
      technologies: "Tecnologias: React, JavaScript, React Router DOM",
      websiteURL: "https://gestor-de-estoquedevlf.netlify.app",
      codeURL: "https://github.com/devlucasfelipe/gestor-de-estoque",
    },
    {
      title: "Biblioteca de Jogos",
      subtitle: "Mar 2025 - Mar 2025",
      srcImg: "../../public/images/biblioteca de jogos.png",
      description:
        "Desenvolvi uma página para gerencia uma coleção de jogos que persiste os dados no localStorage. Principais funcionalidades: useState controlando inputs e função de submit para armazenar jogos e componentização",
      technologies: "Tecnologias: React, JavaScript, CSS",
      websiteURL: "https://bibliotecadejogosdevlf.netlify.app/",
      codeURL: "https://github.com/devlucasfelipe/biblioteca-de-jogos",
    },
    {
      title: "OneBixtX",
      subtitle: "Fev 2025 - Fev 2025",
      srcImg: "../../public/images/onebitx.png",
      description:
        "O objetivo principal é replicar algumas das páginas do renomado site da SpaceX, proporcionando experiência prática em desenvolvimento web",
      technologies:
        "Tecnologias: JavaScript, HTML, CSS, Bootstrap AOS Animation",
      websiteURL: "https://onebitxdevlf.netlify.app",
      codeURL: "https://github.com/devlucasfelipe/OneBitX-",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projetos
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid size={{ md: 6 }} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
