import { Box, CardMedia, Container, Grid, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material';
import Image from '../../components/Image';
import CollectionContent from './CollectionContent/CollectionContent';

const featured = [
  {
    title: 'Vares',
    to: '/vares',
    image: 'https://lightandladder.com/cdn/shop/files/Light_Ladder-KALA-COAL-flowers_360x.jpg?v=1700856514',
    imageHover:
      'https://lightandladder.com/cdn/shop/files/Light_Ladder-COAL_5f32707c-1e8d-4e04-b7f6-467489f8e422_360x.jpg?v=1700856514',
  },
  {
    title: 'Planters',
    to: '/planters',
    image: 'https://lightandladder.com/cdn/shop/files/Light_Ladder_Vayu_Coal_Hand_3-SM_360x.jpg?v=1700857775',
    imageHover: 'https://lightandladder.com/cdn/shop/products/Light_Ladder-PLANT-STAND-Vayu-COAL_360x.jpg?v=1635020124',
  },
  {
    title: 'Accessories',
    to: '/accessories',
    image: 'https://lightandladder.com/cdn/shop/files/brass_360x.jpg?v=1635080494',
    imageHover: 'https://lightandladder.com/cdn/shop/files/Screenshot_2022-01-27_at_19.15.38_360x.png?v=1643310999',
  },
];

export default function Home() {
  return (
    <Box>
      {/* cascading-content */}
      <Container>
        <Grid container spacing={5} mb={20}>
          <Grid item xs={12} md={12} lg={6} className="flex justify-center items-center">
            <Box
              sx={{
                width: '620px',
                height: '350px',
              }}
            >
              <CardMedia
                component="iframe"
                src={'https://player.vimeo.com/video/647945448?autoplay=1&loop=1&background=1&mute=0'}
                alt="Paella dish"
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className="flex justify-center items-center">
              <Box
                sx={{
                  width: '100%',
                  height: '660px',
                }}
              >
                <CardMedia
                  component="img"
                  image="https://lightandladder.com/cdn/shop/files/jlz9r0r6gfxvkrtjoyj7gk86ko1cqn_500x.jpg?v=1620058528"
                  alt="Paella dish"
                  style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </div>
            <Stack spacing={1}>
              <Typography
                component={Link}
                to={'/#'}
                sx={{
                  py: 2,
                  letterSpacing: '3px',
                  textDecoration: 'none',
                  '&:hover': { cursor: 'pointer' },
                }}
                className="font-body text-4xl text-primary-color "
              >
                Light+Ladder
              </Typography>
              <Typography
                variant="body2"
                component={Link}
                to={'/#'}
                sx={{
                  textDecoration: 'none',
                  '&:hover': { cursor: 'pointer' },
                }}
                className="font-body text-lg text-primary-color "
              >
                Light + Ladder designs timeless vessels to bring Nature into the home and inspire a focus on the present
                moment.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Collections */}
      <CollectionContent />

      {/* cascading-content */}

      <Container sx={{ my: 20 }}>
        <Box className="grid md:grid-cols-2 gap-x-40 gap-y-10">
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '133.33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 15,
            }}
            className="group/item"
            component={Link}
            href="/"
          >
            <CardMedia
              component="iframe"
              src={'https://player.vimeo.com/video/630344047?autoplay=1&loop=1&background=1&mute=0'}
              alt="Paella dish"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            />

            <Image
              className="group/edit hidden group-hover/item:block animate-fadeIn"
              alt=""
              src={'https://lightandladder.com/cdn/shop/files/Light_Ladder-SATURN-VAYU-COAL_900x.jpg?v=1700856812'}
              style={{
                position: 'absolute',
                top: 0,
                // width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <Typography
              sx={{
                position: 'absolute',
                writingMode: 'vertical-lr',
                letterSpacing: '3px',
                transform: 'rotate(180deg) translateX(150%)',
                bottom: 0,
                left: 0,
              }}
              className="text-primary-color font-body text-5xl"
            >
              Collections
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              height: 0,
              paddingBottom: '133.33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="group/item"
            component={Link}
            href="/"
          >
            <CardMedia
              component="iframe"
              src={'https://player.vimeo.com/video/630344766?autoplay=1&loop=1&background=1&mute=0'}
              alt="Paella dish"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            />

            <Image
              className="group/edit hidden group-hover/item:block animate-fadeIn"
              alt=""
              src={
                'https://lightandladder.com/cdn/shop/products/Light_Ladder-Vaso_Sand_Flower_vase_900x.jpg?v=1669537417'
              }
              style={{
                position: 'absolute',
                top: 0,
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <Typography
              sx={{
                position: 'absolute',
                writingMode: 'vertical-lr',
                letterSpacing: '3px',
                transform: 'rotate(180deg) translateX(150%)',
                bottom: 0,
                left: 0,
              }}
              className="text-primary-color font-body text-5xl"
            >
              VASO
            </Typography>
          </Box>

          <Box className="text-primary-color" sx={{ p: 10 }}>
            <Typography variant="h3" sx={{ fontWeight: 'regular', my: 2 }}>
              Be with Nature
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>
              Created with a sensitivity that reaches thro ugh time, with forms reminiscent of futures past. These
              vessels are an invitation to connect to the natural world and bring nature inside.
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'relative',
              height: 0,
              paddingBottom: '133.33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="group/item"
            component={Link}
            href="/"
          >
            <CardMedia
              component="iframe"
              src={'https://player.vimeo.com/video/630345290?autoplay=1&loop=1&background=1&mute=0'}
              alt="Paella dish"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                border: 'none',
                width: '100%',
                height: '100%',
              }}
            />

            <Image
              className="group/edit hidden group-hover/item:block animate-fadeIn"
              alt=""
              src={
                'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048'
              }
              style={{
                position: 'absolute',
                top: 0,
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <Typography
              sx={{
                position: 'absolute',
                writingMode: 'vertical-lr',
                letterSpacing: '3px',
                transform: 'rotate(180deg) translateX(150%)',
                bottom: 0,
                left: 0,
              }}
              className="text-primary-color font-body text-5xl"
            >
              VAYNU
            </Typography>
          </Box>
        </Box>

        <Box className="flex justify-end" sx={{ mt: 20 }}>
          <Box className="md:w-2/3">
            <Box
              sx={{
                position: 'relative',
                height: 0,
                paddingBottom: '56.25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className="group/item"
              component={Link}
              href="/"
            >
              <CardMedia
                component="iframe"
                src={'https://player.vimeo.com/video/716834082?autoplay=1&loop=1&background=1&mute=0'}
                alt="Paella dish"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Box>
            <Stack spacing={2} className="w-4/5 mt-5">
              <Typography className="text-primary-color font-body text-4xl">Crafted with Care</Typography>
              <Box>
                <Typography className="text-primary-color text-base">
                  Ceramics are the heart of our work, both in their grounding spirit and earthen material. Lovingly made
                  in Vermont, where the energy supply is 100% carbon-free and more than 68% Renewable, while the studio
                  building also buys extra solar power.
                </Typography>
                <Box sx={{ my: 2 }} />
                <Typography className="text-primary-color text-base">
                  Light + Ladder is built upon a reciprocal relationship with our community who loves to create. We
                  value our personal connection to our partners who share our commitment to sustainability, an honorable
                  wage and healthy working conditions.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* shopify */}
      <Grid container spacing={10} className="flex justify-center  mb-10 ">
        <Grid item>
          <Box
            sx={{
              width: '300px',
              height: '300px',
            }}
            className="flex flex-col justify-center"
          >
            <Typography variant="h2" className="text-primary-color font-light">
              Join Our Community
            </Typography>
            <TextField
              label="Enter Your Email"
              variant="standard"
              fullWidth
              sx={{ mt: 5, pt: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ pb: 4 }}>
                    <Link component="button" underline="none" edge="end" className="text-primary-color">
                      Subcribe
                    </Link>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item className="flex ">
          <Grid container className="d-flex justify-center items-center">
            {featured.map((item, index) => (
              <Grid item sm={12} md={12 / featured.length} key={index} className="flex justify-center py-5">
                <Box
                  sx={{
                    width: '300px',
                    height: '300px',
                    position: 'relative',
                  }}
                  className="group/item"
                >
                  <Image
                    alt=""
                    src={item.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
