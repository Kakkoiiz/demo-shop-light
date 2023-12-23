import { Button, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material';

import Image from '../../components/Image';
import { Box } from '@mui/system';
import { NavigateNext } from '@mui/icons-material';

const header = {
  title: 'Explore',
  description: 'Everyday objects, elevated to honor our connection with Nature.',
};

const data = [
  {
    id: 1,
    title: 'Featuring: Magma Chroma by Brooke Holm',
    subtitle: "We're always inspired by the work of Brooke Holm! A study of volcanic eruption clouds in technicolor. ",
    image: 'https://lightandladder.com/cdn/shop/articles/IMG_5363_720x.jpg?v=1649103788',
    
  },
  {
    id: 2,
    title: 'Featuring: Magma Chroma by Brooke Holm',
    subtitle: "We're always inspired by the work of Brooke Holm! A study of volcanic eruption clouds in technicolor. ",
    image:
      'https://lightandladder.com/cdn/shop/articles/Screenshot_2021-12-01_at_18.02.20_707e6159-0c26-4ace-9366-28977ca5b071_900x.png?v=1638394369',
  
  },
  {
    id: 3,
    title: 'Featuring: Magma Chroma by Brooke Holm',
    subtitle: "We're always inspired by the work of Brooke Holm! A study of volcanic eruption clouds in technicolor. ",
    image: 'https://lightandladder.com/cdn/shop/articles/Screenshot_2021-12-01_at_20.46.08_900x.png?v=1638393172',

  },
  {
    id: 4,
    title: 'Featuring: Magma Chroma by Brooke Holm',
    subtitle: "We're always inspired by the work of Brooke Holm! A study of volcanic eruption clouds in technicolor. ",
    image: 'https://lightandladder.com/cdn/shop/articles/2_1512x.jpg?v=1648755454',

  },
];

export default function Journal() {
  return (
    <Container sx={{ pb: 20 }}>
      <Box className="grid lg:grid-cols-2 gap-x-40 gap-y-10">
        {data.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '110%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mt={{
              md: index % 2 === 0 ? 0 : 20,
              xs: 20,
            }}
            component={Link}
            href={`/blogs/journal/${item.id}`}
          >
            <Image
              className="animate-fadeIn"
              alt=""
              src={item.image}
              style={{
                position: 'absolute',
                top: 0,
                // width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            <Stack
              direction="row"
              sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                bottom: '-120px',
              }}
            >
              <Box>
                <Typography className="text-primary-color text-xl">{item.title}</Typography>
                <Typography className="text-primary-color text-sm my-2">{item.subtitle}</Typography>
                <Typography className="text-primary-color text-xs p-0 font-thin">
                  READ MORE
                  <NavigateNext />
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
