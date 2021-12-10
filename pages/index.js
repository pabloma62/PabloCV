import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={20} mb={6} align='center'>
        Hola! Soy Pablo Mañas Izquierdo, desarrollador web ⚡️
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Pablo Mañas Izquierdo
          </Heading>
          <p>Desarrollador devOps ( Empresariales / Desarrollo / Tecnología )</p>

        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center'>
          <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid' maxWidth='100px' display='inline-block' borderRadius='full' src='/images/pablo.jpg' />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h5' variant='section-tittle'>
          Trabajos
        </Heading>
        <Paragraph>
          Mi nombre es Pablo Mañas Izquierdo y actualmente me dedico al mundo del desarrollo.
          Mi ruta como desarrollador comenzó aprendiendo un poco de Python, y posteriormente, tras unos duros
          meses, realicé un curso de Django para aprender de backend y realicé un par de proyectos.
          Después descubrí el mundo de JavaScript, e hice unas cuantas páginas con cierto dinamismo.
          Aprendí de terminales, de devOps y de cloud en AWS re/start, y comencé a trabajar muy duro.
          Actualmente manejo tecnologías como son: Next.js como framework de ayuda a la config y deploy
          de proyectos, Node.js para la preparación del backend, y para el front utilizo React.js, del que
          soy un profesional. También con librerias como React three fiber incorpor render 3D a mis proyectos.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
