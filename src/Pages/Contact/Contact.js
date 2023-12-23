import { Button, Container, Grid, Link, Stack, TextField, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../../components/Image';

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 15 }}>
      <Typography className="font-body text-primary-color text-6xl text-center">We're here to listen</Typography>
      <Box component="form" sx={{ mt: 10 }} className="px-10 md:px-[10rem] ">
        <TextField
          name="name"
          label="Name"
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
          className=" md:pr-5 w-full md:w-1/2"
        />
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
          className=" w-full md:w-1/2"
        />
        <TextField
          name="phoneNumber"
          label="Phone Number"
          required
          fullWidth
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
        <TextField
          name="massage"
          label="Massage"
          required
          fullWidth
          multiline
          rows={10}
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
            border: '1px solid black',
            '&:hover': { backgroundColor: '#1f5421', color: 'white' },
          }}
          className="w-full text-primary-color text-xs font-thin"
        >
          SEND
        </Button>
      </Box>

      <Box className="py-20 mt-20 border-y-[1px] border-y-primary-color">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={4} lg={4} className="text-center text-primary-color">
            <Typography className="text-xl ">Press</Typography>
            <Typography className="text-sm py-3">
              We’d love to be included in your publication. Please email us for images at:
            </Typography>
            <Typography component="a" href="mailto:info@lightandladder.com" className="text-sm">
              info@lightandladder.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} className="text-center text-primary-color">
            <Typography className="text-xl ">Trade</Typography>
            <Typography className="text-sm py-3">
              Interior designers, we love your projects. Email us about a trade account:
            </Typography>
            <Typography component="a" href="mailto:hello@lightandladder.com" className="text-sm">
              hello@lightandladder.com
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} className="text-center text-primary-color">
            <Typography className="text-xl ">Wholesale</Typography>
            <Typography className="text-sm py-3">
              Would love to be included in your store. Please contact us at:
            </Typography>
            <Typography component="a" href="mailto:orders@lightandladder.com" className="text-sm">
              orders@lightandladder.com
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container marginTop={{ md: 20 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            paddingY={{xs: 10}}
            justifyContent={{ xs: 'center' }}
            textAlign={{ xs: 'center' }}
            className="text-primary-color flex items-center "
          >
            <Stack>
              <Typography className="font-body text-5xl">Visit Our Studio</Typography>

              <Typography
                component={Link}
                className="text-primary-color py-5 text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
                href="https://goo.gl/maps/W5ttHB3ptw8Mvj728"
              >
                V181 N11 St #205 <br /> Brooklyn, NY 11211
              </Typography>

              <Typography
                component={Link}
                href="mailto:orders@lightandladder.com"
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                by appointment
              </Typography>

              <Typography className="text-sm">We are happy to make time for you</Typography>

              <Typography
                component={Link}
                href="tel:(646) 470-2460"
                className="text-primary-color pt-5 text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                call / text: (646) 470-2460
              </Typography>

              <Typography
                component={Link}
                href="mailto:info@lightandladder.com"
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                info@lightandladder.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={8} lg={8}>
            <Stack className="grid grid-cols-2 gap-10">
              <Image
                alt=""
                src="https://lightandladder.com/cdn/shop/files/Light_Ladder_Studio___3_540x.jpg?v=1669535711"
              />

              <Image
                alt=""
                src="https://lightandladder.com/cdn/shop/files/Echo-Farrah-Sit-Light_Ladder_Studio_540x.jpg?v=1669536061"
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
