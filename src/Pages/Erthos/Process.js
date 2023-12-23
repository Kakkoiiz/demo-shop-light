import { CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';


const items = [
  {
    id: 1,
    image: 'https://lightandladder.com/cdn/shop/files/Scorpio_720x.jpg?v=1638538986',
    title: 'Our Process',
    content:
      'Light + Ladder is built upon a reciprocal relationship with both our community and our environment. We believe that artistic and spiritual harmony go hand in hand, and every life deserves joy, meaning and dignity.\n\nWorking with people who love to create makes us happy, and fills our pieces with a loving vibration that carries to our customers and beyond. We have a personal connection to each of our fabricators, and they share our deep commitment to sustainability, an honorable wage and healthy working conditions. ',
  },
  {
    id: 2,
    image: 'https://lightandladder.com/cdn/shop/files/sandvideo_720x.gif?v=1650475601',
    title: '',
    content:
      'Ceramics are the heart of our work, both in their grounding spirit and earthen material. Our team is led by one of Farrah’s fellow RISD graduates in Vermont, where the energy supply is 100% carbon-free and more than 68% Renewable, while the studio building also buys extra solar power. They mix a custom formula of clays in-house to reduce shipping, and any excess is recycled in the studio, minimizing waste. ',
  },
  {
    id: 3,
    image: 'https://lightandladder.com/cdn/shop/files/Light_Ladder_Vayu_Coal_Hand_crop_720x.jpg?v=1638555118',
    title: '',
    content:
      'Because our ceramics are handmade, we don’t expect all of them to meet our high standards.\n\nThese are never thrown away, but are lovingly collected by customers who embrace the concept of wabi-sabi, where imperfections are seen as unique, beautiful happenings that create character.',
  },
  {
    id: 4,
    image: 'https://lightandladder.com/cdn/shop/files/4a_720x.jpg?v=1652635592',
    title: '',
    content:
      'When it came time to find a larger fabricator for Light + Ladder, Farrah remembered the long tradition of pottery and the high quality of life she had discovered during her travels in Portugal. She was lucky enough to find a female-owned factory in western Portugal, where there is a sense of family and care, and a sincere commitment to sustainability.\n\nThe open, skylit space has a jovial vibe while trimming ceramic wares and proudly pouring gigantic molds. The company makes an effort to integrate people with disabilities into their workforce, and everyone is treated with respect. \n\n',
  },
  {
    id: 5,
    image: 'https://lightandladder.com/cdn/shop/files/PARALLAXhooks_hanger_720x.jpg?v=1638552486',
    title: '',
    content:
      'A small, dedicated metal plant in Minnesota produces our brass hooks. The company is proud of their exacting attention to detail using state-of-the-art machinery and the jobs they bring to their small town. We’re happy to know that their machinists enjoy full benefits and room to grow in a positive environment.\n\nFor our wood pieces, we’re proud to work with a small company in Maine that has been in business for over 100 years. They are motivated by long standing, loyal relationships, and specialize in custom woodwork for consumers as well as industrial designers like us. We love how they responsibly source North American tree species. ',
  },
  {
    id: 6,
    image: 'https://lightandladder.com/cdn/shop/files/vorta_720x.jpg?v=1638553074',
    title: '',
    content:
      'Our cast stone and concrete products are handmade here in New York City, allowing us to have a particularly close friendship with these craftspeople and keep shipping to a minimum. They are true, traditional artisans keeping a beautiful craft alive in the digital age. They model, mold and cast entirely by hand, lending these pieces an organic warmth.',
  },
];

export default function Process() {
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
