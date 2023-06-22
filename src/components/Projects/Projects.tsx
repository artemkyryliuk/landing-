import { Box } from '@mantine/core'

import SectionTitle from '../common/SectionTitle'
import Title from '../common/Title'
import projectsBg1 from '../../assets/images/projects-bg1.jpg'
import ProjectsGrid from './ProjectsGrid/ProjectsGrid'
import projectsBg2 from '../../assets/images/projects-bg2.jpg'
import projectsBg3 from '../../assets/images/projects-bg3.jpg'
import projectsBg4 from '../../assets/images/projects-bg4.jpg'
import { projectsData } from './projectsData'

export default function Projects() {
  return (
    <>
      <Box
        component="section"
        id="projects"
        px={30}
        py={80}
        bg={`url(${projectsBg1}) fixed center`}
        sx={(theme) => ({
          [theme.fn.smallerThan('lg')]: {
            backgroundAttachment: 'imherit',
          },
        })}
      >
        <Box mx="auto" maw={1280}>
          <SectionTitle> Projects </SectionTitle>

          <Title mt={50} isCentered>
            Projects we have done. Get inspired
          </Title>
        </Box>
      </Box>

      <ProjectsGrid bg={projectsBg2} items={projectsData[0]} />
      <ProjectsGrid bg={projectsBg3} items={projectsData[1]} />
      <ProjectsGrid bg={projectsBg4} items={projectsData[2]} />
    </>
  )
}
