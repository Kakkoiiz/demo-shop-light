import { CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

const items = [
  {
    id: 1,
    image: 'https://lightandladder.com/cdn/shop/files/img_594x.jpg?v=1638447671',
    title: 'Farrah Sit',
    content:
      'Farrah Sit’s “own less, own well” ethos is a breath of fresh air in a time of disposable consumerism, and she has made it her mission to make artistic, ethical design widely accessible. Drawing inspiration from the natural world, her exacting attention to detail allows her to channel a peaceful, organic beauty in her work.\n\nFarrah has long had a deep fascination with how things function. She was on a science-focused path in high school, but at the last minute, leaped at the opportunity to study Industrial Design at the Rhode Island School of Design. She spent the early part of her career at Calvin Klein Home, a rare corporate dream job that gave her the time and freedom to design along with the opportunity to travel the world, working with small family-owned manufacturers.',
  },
  {
    id: 2,
    image: 'https://lightandladder.com/cdn/shop/files/F_bio_blkwht_720x.jpg?v=1638447722',
    title: '',
    content:
      'As the marketplace shifted towards an increasing demand for cheap, high-volume goods, Farrah began to question her role as a designer in the world. Rather than let the evolving economy dictate how her creativity would be realized, she took the matter into her own hands, quite literally. She returned to the intimate process of artisanship, which allowed her to explore the material with her hands and let the designs flow organically from there. Investing this time after office hours in addition to retreats at the Haystack Mountain School of Craft in Maine, Farrah was empowered to recommit to her craft and leave the corporate design world behind.',
  },
  {
    id: 3,
    image: 'https://lightandladder.com/cdn/shop/files/process_copy_720x.jpg?v=1638541637',
    title: '',
    content:
      'In 2011, out of necessity created by an overflowing collection of plants in her small Brooklyn apartment, Farrah created the Spora planter. This piece would mark the birth of the Light + Ladder collection, spurring her mission to create artistic yet attainable and useful décor for the conscious consumer.  She continues to explore her creativity through her parallel, high-end lighting and furniture venture, Farrah Sit, while a longing for the peace and stillness of nature in an all-consuming urban environment informs all of her designs. ',
  },
];

export default function Founder() {
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

      <Box className="text-center" sx={{my: 10}}>
        <Typography className="text-4xl md:text-6xl text-primary-color font-body font-normal break-keep">
          "Own less, own well."
        </Typography>
      </Box>
    </Container>
  );
}
