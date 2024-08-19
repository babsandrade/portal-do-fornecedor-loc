import { useState } from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Icon from 'src/@core/components/icon'
import SecondaryButton from 'src/components/button/secondaryButton'
import MainButton from 'src/components/button/mainButton'

// ** Next Import
import Link from 'next/link'

const MenuItemWrapper = ({ children, option }) => {
  if (option.href) {
    return (
      <Box
        component={Link}
        href={option.href}
        {...option.linkProps}
        sx={{
          px: 4,
          py: 1.5,
          width: '100%',
          display: 'flex',
          color: 'inherit',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        {children}
      </Box>
    )
  } else {
    return <>{children}</>
  }
}

const OptionsMenu = props => {
  const { icon, options, menuProps, iconProps, leftAlignMenu, iconButtonProps } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogContent, setDialogContent] = useState(null)
  const [dialogTitle, setDialogTitle] = useState('')
  const [primaryButtonText, setPrimaryButtonText] = useState('')
  const [secondaryButtonText, setSecondaryButtonText] = useState('')

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDialogOpen = (content, title, primaryButtonText, secondaryButtonText) => {
    setDialogContent(content)
    setDialogTitle(title)
    setOpenDialog(true)
    setPrimaryButtonText(primaryButtonText)
    setSecondaryButtonText(secondaryButtonText)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <IconButton aria-haspopup='true' onClick={handleClick} {...iconButtonProps}>
        {icon ? icon : <Icon icon='tabler:dots-vertical' {...iconProps} />}
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        {...(!leftAlignMenu && {
          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
          transformOrigin: { vertical: 'top', horizontal: 'right' }
        })}
        {...menuProps}
      >
        {options.map((option, index) => {
          if (typeof option === 'string') {
            return (
              <MenuItem key={index} onClick={handleClose}>
                {option}
              </MenuItem>
            )
          } else if ('divider' in option) {
            return option.divider && <MenuItem key={index} {...option.dividerProps} />
          } else {
            return (
              <MenuItem
                key={index}
                {...option.menuItemProps}
                {...(option.href && { sx: { p: 0 } })}
                onClick={() => {
                  handleClose()
                  if (option.dialogContent) {
                    handleDialogOpen(
                      option.dialogContent,
                      option.dialogTitle,
                      option.primaryButtonText,
                      option.secondaryButtonText
                    )
                  }
                  option.menuItemProps && option.menuItemProps.onClick ? option.menuItemProps.onClick() : null
                }}
              >
                <MenuItemWrapper option={option}>
                  {option.icon ? option.icon : null}
                  {option.text}
                </MenuItemWrapper>
              </MenuItem>
            )
          }
        })}
      </Menu>
      <Dialog fullWidth open={openDialog} onClose={handleDialogClose}>
        <DialogTitle
          sx={{
            color: '#625f6e',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: '#0035663d',
            textTransform: 'uppercase',
            fontSize: '16px',
            fontWeight: '500',
            paddingBottom: '15px'
          }}
        >
          {dialogTitle}
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          {secondaryButtonText ? (
            <SecondaryButton onClick={handleDialogClose} fullwidth>
              {secondaryButtonText}
            </SecondaryButton>
          ) : (
            <></>
          )}{' '}
          {primaryButtonText ? (
            <MainButton onClick={handleDialogClose} fullwidth>
              {primaryButtonText}
            </MainButton>
          ) : (
            <></>
          )}{' '}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default OptionsMenu
