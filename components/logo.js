import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import logotipo from '../public/images/logotipo.png'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`
const Logo = () => {
  const PabloMaImg = `/public/images/logotipo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Image src={logotipo} width={80} height={80} alt='logo' />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c'
            fontWeight='bold'
            ml={3}
          >
            Pablo Mañas Izquierdo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
