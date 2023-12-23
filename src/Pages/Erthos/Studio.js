import { CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

const items = [
  {
    id: 1,
    image: 'https://lightandladder.com/cdn/shop/files/BlushVayu_1296x.jpg?v=1638550590',
    title: '',
    content:
      'Inspired by the stillness experienced in the natural world, Light + Ladder evokes a quiet minimalism and sensitivity to design. We seek to elevate everyday life through beautiful, functional objects that lift our moods and movements. Dynamic, modern forms in timeless objects, at once artful and useful. Nature is at the core of the collections designed by Farrah Sit, allowing us to bring the outdoors in.\n\nLight + Ladder represents our dream to create from a place of community and sustainability. We believe in supporting true craftspeople, small-batch manufacturing facilities, and women-owned companies to produce our designs. We embrace a cycle of care, passing from designer to producer, to customer, to the earth and back again.\n\nWe hope the passion with which we make these objects shines through and ensures their place in your home for years to come.',
  },
  {
    id: 2,
    image:
      'https://lightandladder.com/cdn/shop/files/2a1ca0_9d580cd12b294ffd80250d116e089461_mv2-2_759x.jpg?v=1638538376',
    title: 'Collaborate with us',
    content:
      'We love to work with brands who share our passion for design that is both sustainable and collectible.\n\n See some of our favorite collaborations here, or contact us about a new project here.',
    phoneNumber: '(646) 470-2460',
    info: 'info@lightandladder.com',
  },
];

export default function Studio() {
  return (
    <Container sx={{ py: 15 }}>
      {/* Title */}
      <Box className="flex justify-center items-center">
        <Box className="text-center lg:w-2/3">
          <Typography className=" text-6xl text-primary-color font-body font-normal py-10 break-keep">
            “Be a lamp, or a lifeboat, or a ladder.” —Rumi
          </Typography>
          <Box sx={{ py: 5 }}>
            <Typography
              variant="h6"
              component={Link}
              href="/pages/studio"
              sx={{
                textDecoration: 'none',
                '&:hover': { cursor: 'pointer' },
                px: 4,
              }}
              className="text-primary-color text-xl font-body py-2 font-normal"
            >
              Studio
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/pages/process"
              sx={{
                textDecoration: 'none',
                '&:hover': { cursor: 'pointer' },
                px: 4,
              }}
              className="text-primary-color text-xl font-body font-normal border-x-2  border-[#D2CFCD] py-2 "
            >
              Process
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              href="/pages/founder"
              sx={{
                textDecoration: 'none',
                '&:hover': { cursor: 'pointer' },
                px: 4,
              }}
              className="text-primary-color text-xl font-body py-2 font-normal"
            >
              Founder
            </Typography>
          </Box>
        </Box>
      </Box>

      {items.map((item, index) => (
        <Grid container spacing={5} key={index} mt={5}>
          <Grid
            item
            xs={12}
            md={12}
            lg={6.5}
            sx={{
              order: {
                md: index % 2 === 0 ? 0 : 1,
              },
            }}
          >
            <Box className="flex justify-center items-center">
              <Box
                sx={{
                  width: '100%',
                  height: '660px',
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="Paella dish"
                  style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={5.5} className="flex justify-center items-center">
            <Box className="w-full md:w-2/3 text-primary-color ">
              {item.title && (
                <Typography className="text-5xl text-primary-color font-body font-normal my-5">{item.title}</Typography>
              )}
              <Typography className="text-base text-primary-color mb-3" sx={{ whiteSpace: 'pre-line' }}>
                {item.content}
              </Typography>

              {item.phoneNumber && (
                <Typography
                  component={Link}
                  href={`tel:${item.phoneNumber.replace(/\D/g, '')}`}
                  sx={{
                    textDecoration: 'none',
                  }}
                  className="block text-sm text-primary-color-hover my-1"
                >
                  Call Us: {item.phoneNumber}
                </Typography>
              )}

              {item.info && (
                <Typography
                  component={Link}
                  href={`mailto:${item.info}`}
                  sx={{
                    textDecoration: 'none',
                  }}
                  className="block text-primary-color-hover font-body font-normal"
                >
                  Email Us: {item.info}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
