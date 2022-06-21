import React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

export default function Footer () {
  const [value, setValue] = React.useState(0)
  const handleChange = (evt, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: 375 }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={8}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(evt, newValue) => {
            handleChange(evt, newValue)
          }}
        >
          <BottomNavigationAction
            label='Home'
            icon={
              <Link to={'/'}>
                  < HomeIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label='Barbers'
            icon={
              <Link to={'/barbers'}>
                  < PersonIcon />
              </Link>
            }
          />
          <BottomNavigationAction
            label='New'
            icon={
              <Link to={'/new'}>
                  < AddBoxIcon />
              </Link>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
