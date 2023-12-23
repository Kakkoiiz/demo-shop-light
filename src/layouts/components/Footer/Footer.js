import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Stack,
  Typography,
} from '@mui/material';

const footer = {
  collections: [
    {
      title: 'Shop',
      to: '/collections/all',
    },
    {
      title: 'Planters',
      to: '/collections/planters',
    },
    {
      title: 'Vanes',
      to: '/collections/vanes',
    },
    {
      title: 'Accessories',
      to: '/collections/accessories',
    },
  ],
  pages: [
    { title: 'Journal', to: '/blogs/journal' },
    { title: 'Process', to: '/pages/process' },
    { title: 'Studio', to: '/pages/studio' },
    { title: 'Founder', to: '/pages/founder' },
    { title: 'Press', to: '/pages/press' },
    { title: 'Collaborations', to: '/pages/collaborations' },
    { title: 'Resources', to: '/pages/resources' },
  ],
  connect: [
    { title: 'Resources', to: '/pages/resources' },
    { title: 'Contact', to: '/pages/contact' },
    { title: 'Stockists', to: '/pages/stockists' },
    { title: 'Shipping & Policies', to: '/pages/terms' },
    { title: 'Terms & Conditions', to: '/pages/terms' },
    { title: 'Returns & Refunds', to: '/pages/terms' },
  ],
  socialMedia: [
    { title: 'Pinterest', to: 'https://pinterest.com', icon: <Pinterest /> },
    { title: 'Instagram', to: 'https://instagram.com', icon: <Instagram /> },
    { title: 'Facebook', to: 'https://facebook.com', icon: <Facebook /> },
],
};

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        borderTop: '1px solid black',
        p: 2,
      }}
    >
      <Grid container pb={5}>
        <Grid item xs={12} sm={12} md={4} className="flex justify-center">
          <Box>
            <FormControl variant="standard" width={{ sm: '100%', md: '80%' }} sx={{ py: 1, mt: 2 }}>
              <InputLabel>Sign up for our newsletter</InputLabel>
              <Input
                endAdornment={
                  <InputAdornment position="end">
                    <Button className="text-normal text-primary-color font-normal tracking-widest mb-4">
                      Subcribe
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Stack mt={10}>
              <Typography
                component={Link}
                href=""
                className="text-primary-color text-xs decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                © 2023 Light + Ladder
              </Typography>
              <Typography
                component={Link}
                href=""
                className="text-primary-color text-xs decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                Site Design & Development: Concept & Cadence
              </Typography>
              <Typography
                component={Link}
                href=""
                className="text-primary-color text-xs decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                Do not sell my personal information
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid xs={6} item sm={3} md={2} textAlign={{ xs: 'center', md: 'start' }} marginTop={{ xs: 5 }}>
          <Stack spacing={1}>
            {footer.collections.map((collection, index) => (
              <Typography
                key={index}
                component={Link}
                href={collection.to}
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                {collection.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid xs={6} item sm={3} md={2} textAlign={{ xs: 'center', md: 'start' }} marginTop={{ xs: 5 }}>
          <Stack spacing={1}>
            {footer.pages.map((collection, index) => (
              <Typography
                key={index}
                component={Link}
                href={collection.to}
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                {collection.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid xs={6} item sm={3} md={2} textAlign={{ xs: 'center', md: 'start' }} marginTop={{ xs: 5 }}>
          <Stack spacing={1}>
            {footer.connect.map((collection, index) => (
              <Typography
                key={index}
                component={Link}
                href={collection.to}
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                {collection.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
        <Grid xs={6} item sm={3} md={2} textAlign={{ xs: 'center', md: 'start' }} marginTop={{ xs: 5 }}>
          <Stack spacing={1}>
            {footer.socialMedia.map((collection, index) => (
              <Typography
                key={index}
                component={Link}
                href={collection.to}
                className="text-primary-color text-sm decoration-primary-color no-underline hover:underline underline-offset-4"
              >
                {collection.icon}
                {collection.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
