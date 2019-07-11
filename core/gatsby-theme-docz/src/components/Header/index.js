/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { Link, useConfig, useCurrentDoc } from 'docz'
import styled from '@emotion/styled'

import { themeProp } from '~utils/theme'

import { Edit, Sun, Github } from '../Icons'
import * as styles from './styles'

const Wrapper = styled(Box)`
  border-bottom: 1px solid ${themeProp('colors.header.border')};
`

export const Header = () => {
  const config = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <Wrapper sx={styles.wrapper}>
      <div sx={styles.innerContainer}>
        <Flex aligmItems="center">
          <Link to="/" sx={styles.link}>
            {config.title}
          </Link>
        </Flex>
        <Flex>
          {config.repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={config.repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          <button sx={styles.headerButton} onClick={toggleColorMode}>
            <Sun size={15} />
          </button>
        </Flex>
        {edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </Wrapper>
  )
}