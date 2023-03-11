import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginForm = () => {
  return (
    <div>
      <form className="form">
        
        <header className="form-centre roboto-font">Event Name</header>

        <Box className="form-centre"
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >

          {/* Team Name and Number of members */}
          <TextField
            required
            id="outlined-required"
            label="Team Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Number of members"
            type="number"
          />

          {/* Team leader info */}
          <div className="roboto-font">Team leader details</div>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            type="number"
          />
          <TextField
            required
            id="outlined-required"
            label="Enrollment"
          />

          {/* Minimum required team members = 3 */}
          <div className="roboto-font">Team member 1 details</div>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            type="number"
          />
          <TextField
            required
            id="outlined-required"
            label="Enrollment"
          />

          <div className='roboto-font'>Team member 2 details</div>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone number"
            type="number"
          />
          <TextField
            required
            id="outlined-required"
            label="Enrollment"
          />

          {/* Other team members */}
          <div className='roboto-font'>Team member 3 details</div>
          <TextField
            id="outlined-required"
            label="Name"
          />
          <TextField
            id="outlined-required"
            label="Email"
          />
          <TextField
            id="outlined-required"
            label="Phone number"
            type="number"
          />
          <TextField
            id="outlined-required"
            label="Enrollment"
          />
          <div className='roboto-font'>Team member 4 details</div>
          <TextField
            id="outlined-required"
            label="Name"
          />
          <TextField
            id="outlined-required"
            label="Email"
          />
          <TextField
            id="outlined-required"
            label="Phone number"
            type="number"
          />
          <TextField
            id="outlined-required"
            label="Enrollment"
          />

        </Box>

        {/* Submit button */}
        <Stack spacing={2} direction="row" className="form-centre">
          <Button variant="contained" color="secondary">SUBMIT</Button>
        </Stack>
        
      </form>
    </div>
  )
}

export default LoginForm

