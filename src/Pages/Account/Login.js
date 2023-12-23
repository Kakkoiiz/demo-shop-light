import { RemoveRedEye, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, Link, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <Container className="flex justify-center" sx={{ py: 12 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ px: 5, pb: 10 }}>
          <Box >
            <Typography className="font-body text-primary-color text-4xl pb-5">Login</Typography>
            <Typography component={Link} href="/" className=" text-primary-color no-underline text-sm">
              Return to Store
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} px={{ xs: 5, md: 5 }}>
          {isForgotPassword ? (
            <Box component="form" className="flex flex-col w-4/5">
              <Typography className="font-body text-primary-color text-2xl mb-2">Reset your password</Typography>
              <Typography className="text-primary-color text-sm mb-10">
                We will send you an email to reset your password.
              </Typography>

              <Typography className="text-primary-color ">Email</Typography>
              <TextField
                name="email"
                label="Email"
                required
                sx={{
                  my: 2,
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
                className="rounded-none border-primary-color"
              />
              <Button
                type="submit"
                sx={{
                  height: '50px',
                  mt: 3,
                  mb: 3,
                  color: '#edece4',
                  '&:hover': { backgroundColor: '#abb0ad', color: 'black' },
                }}
                className="bg-[#5F5855] w-2/3 text-sm"
              >
                Submit
              </Button>
              <Grid container spacing={5}>
                <Grid item>
                  <Typography
                    component="button"
                    onClick={() => setIsForgotPassword(false)}
                    className="text-primary-color no-underline text-sm pl-2"
                  >
                    Cancel
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box component="form" className="flex flex-col w-full">
              <Typography className="text-primary-color ">Email</Typography>
              <TextField
                name="email"
                label="Email"
                required
                sx={{
                  my: 2,
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
                className="rounded-none border-primary-color"
              />

              <Typography className="text-primary-color ">Password</Typography>
              <TextField
                required
                name="password"
                label="Mật khẩu"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                sx={{
                  my: 2,
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                sx={{
                  height: '50px',
                  mt: 3,
                  mb: 3,
                  color: '#edece4',
                  '&:hover': { backgroundColor: '#abb0ad', color: 'black' },
                }}
                className="bg-[#5F5855] w-2/3 text-sm"
              >
                Sign In
              </Button>

              <Grid container spacing={5}>
                <Grid item>
                  <Typography
                    component={Link}
                    href="/account/register"
                    className="text-primary-color no-underline text-sm"
                  >
                    Create account
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="button"
                    onClick={() => setIsForgotPassword(true)}
                    className="text-primary-color no-underline text-sm"
                  >
                    Forgot your password?
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
