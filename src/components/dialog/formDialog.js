// React Imports
import { useState } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// Component Imports
import SecondaryButton from '../button/secondaryButton'
import MainButton from '../button/mainButton'

const FormDialog = ({ dialogButtonText, dialogTitle, dialogContent, textMainButton, textSecondaryButton }) => {
  // States
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      <span onClick={handleClickOpen}>{dialogButtonText}</span>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            color: '#003566',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: '#0035663d',
            textTransform: 'uppercase',
            fontSize: '16px',
            fontWeight: '900',
            paddingBottom: '15px'
          }}
        >
          {dialogTitle}
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          {' '}
          {textSecondaryButton ? <SecondaryButton onClick={handleClose}>{textSecondaryButton}</SecondaryButton> : <></>}
          {textMainButton ? <MainButton onClick={handleClose}>{textMainButton}</MainButton> : <></>}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FormDialog

//how to implement:
{
  /* <FormDialog
              dialogButtonText='Abrir'
              dialogTitle='Detalhes'
              dialogContent={
                <>
                 
                 
                </>
              }
              textSecondaryButton='Fechar'
              textMainButton='Salvar'
            /> */
}
