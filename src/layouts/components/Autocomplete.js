// ** React Imports
import { useEffect, useCallback, useRef, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getUserData } from 'src/utility/Utils'

const AutocompleteComponent = ({ hidden, settings }) => {
  const user = getUserData()

  // ** Hooks & Vars
  const { layout } = settings
  const wrapper = useRef(null)

  return (
    <Box ref={wrapper}>
      {!hidden && layout === 'vertical' ? (
        <Typography sx={{ userSelect: 'none', color: 'text.secondary' }}>
          {user?.account?.corporate_name} - {user?.account?.cnpj}
        </Typography>
      ) : null}
    </Box>
  )
}

export default AutocompleteComponent
