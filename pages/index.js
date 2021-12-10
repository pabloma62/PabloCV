import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Biosection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={20} mb={6} align='center'>
        Hola! Soy Pablo, encantado de recibirte ⚡️
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Pablo Mañas Izquierdo
          </Heading>
          <br />
          <p>Desarrollador devOps ( Empresariales / Desarrollo / Tecnología )</p>
          <br />

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
          <br />
          <p>Mi nombre es Pablo Mañas Izquierdo, tengo 27 años y soy, entre otras cosas, desarrollador web.
            Me hago llamar Fullstack ya que manejo diversas tecnologías de desarrollo, y quizás, tras este
            breve storytelling sobre mi ruta como desarrollador, entendais el por qué me hago llamar así.
          </p>
          <br />
          <p>🐍"Comencé con Python, desarrollando mis habilidades de programación básicas y la lógica de programación.
            Tras comprender el lenguaje, aprendí a realizar backend con Flask, pero me gustó mas Django.
          </p>
          <br />
          <p>📱Aprendí HTML, CSS y un poco de JavaScript para darle vida a las templates que hacía.</p>
          <br />
          <p>📊Descubrí nuevos conceptos con Python, gracias a que, en el programa AWS re/Start, tenía una
            asignatura de Python puramente. Empecé a realizar scraping web, trata de datos con las librerias
            Numpy y Matplotlib para realizar la visualización de las transformaciones. Incluso en econometría,
            asignatura que curso en el grado de Administración y Dirección de Empresas en la UGR, utilicé
            Jupyter Notebook para realizar las regresiones lineales necesarias para el Metodo de los Mínimos
            Cuadrados, que se utiliza para realizar predicciones económicas, entre otras aplicaciones.
          </p>
          <br />
          <p>💭En ese momento, descubrí las mágicas aplicaciones que tiene JavaScript en la web, y me interesé por
            el mundo del Frontend, diseñando templates con elementos en 3D con la librería Three.js.
          </p>
          <br />
          <p>⚛️Debido a que tenía problemas a la hora de implementar dichas templates, decidí aprender React,
            para manejar el estado de los componentes de dicha template, y poder implementar el elemento 3D
            como un componente.
            Entonces, realicé un curso básico de React, y otro muy avanzado de la mano de un GitHub Star y Google
            Developer Expert como es Miguel Ángel Durán, y comprendí muchos de los entresijos de esta librería.
            En el curso utiliza muchos recursos innovadores, como el uso de Graphql para el fetching de datos junto
            al cliente de React Apollo, un manejo preciso de los Hooks para ciertos patrones, y una excelente
            aplicacion de Styled-compoments (nunca hay que olvidar el diseño).
          </p>
          <br />
          <p>💡Bien, por entonces, ya entendía en profundidad React, pero pasaba horas configurando el "enviroment" de desarrollo
            y decidí aprender mejores prácticas en este ámbito.
            Ajeno a mi formación en cloud computing y mi capacidad de hacer deploy, o contratar algún servicio de
            lanzamiento y hosting, decidí aprender desde lo básico.
          </p>
          <br />
          <p>🏗Realicé un curso avanzado de Next.js, para agilizar todos esos procesos, y me leí la documentación durante
            días, para entenderlo desde 0. Mi objetivo era abrir visual studio code, y que de ahí saliera el deploy.
            Conseguí hacerlo. Configuro las dependencias a mano en formato json, iniciando desde lo más sencillo de un
            npm init -y, y continando configurando linter, prettier y la configuración de Next.js.
            Desarrollo mi proyecto, que bien puede ser esta Website, y realizo el deploy en Vercel.
          </p>
          <br />
          <p><b>🧑🏽‍💻Ahora sí, soy Fullstack."</b></p>
          <br />
          <p>Esto es solo mi ruta como desarrollador, si has comprendido mi historia, eres mi amigo.
            Con lo referente al mundo empresarial, estoy en el comienzo. Este año me graduaré de empresariales,
            y comenzaré mi andanza laboral.
            Aquí mismo dejo un enlace con mis competencias dentro del ámbito de la {' '}
          </p>
          <NextLink href='works/business'>
            <a style={{ color: '#D01016' }}><i>empresa.</i></a>
          </NextLink>
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works'>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
              Mi Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Fechas
        </Heading>
        <br />
        <Biosection>
          <BioYear>1994</BioYear>
          Nacido en Linares, Jaén, España.
        </Biosection>
        <br />
        <Biosection>
          <BioYear>2012</BioYear>
          Graduado en bachiller científico en el IES Huarte de San Júan, Linares.
        </Biosection>
        <br />
        <Biosection>
          <BioYear>2017</BioYear>
          Graduado en Ciencias de la Actividad Física y Deporte, en la Universidad Pública de Granada.
        </Biosection>
        <br />
        <Biosection>
          <BioYear>2021</BioYear>
          Graduado en Administración y Dirección de Empresas, en la Universidad Pública de Granada.
        </Biosection>
        <Biosection>
          <BioYear>Mismo Año</BioYear>
          <br />
          Graduado en el programa AWS re/Start, totalmente financiado por AWS.
        </Biosection>
        <br />
        <Heading as='h3' variant='section-title'>
          I ❤️
        </Heading>
        <br />
        <Biosection>
          Desarrollo,  Programación,  Tecnología,  Ciencia,  Economía,  Empresa,  Deporte,
          y ...Tenis🎾
        </Biosection>
      </Section>
    </Container>
  )
}

export default Page
