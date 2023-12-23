import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import Image from '../../../components/Image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useEffect, useState } from 'react';

const featured = [
  {
    title: 'Vases',
    to: '/vases',
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CollectionContent() {
  const [itemToShow, setItemToShow] = useState(window.innerWidth <= 1024 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => setItemToShow(window.innerWidth <= 1024 ? 1 : 2);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Grid container spacing={6} className="justify-center hidden xl:flex">
        <Grid item>
          <Box
            sx={{
              height: '340px',
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                position: 'absolute',
                writingMode: 'vertical-lr',
                letterSpacing: '3px',
                transform: 'rotate(180deg)',
                bottom: 0,
                right: 0,
              }}
              className="text-primary-color font-body text-5xl"
            >
              Collections
            </Typography>
          </Box>
        </Grid>
        {featured.map((item, index) => (
          <Grid item key={index}>
            <Box component={Link} href={item.to} underline="none">
              <Box
                sx={{
                  height: '340px',
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
                <Image
                  className="group/edit hidden group-hover/item:block animate-fadeIn"
                  alt=""
                  src={item.imageHover}
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
              <Typography variant="body2" className="text-primary-color mt-2">
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Stack className="xl:hidden">
        <Typography
          variant="h3"
          sx={{
            letterSpacing: '3px',
            pb: 3,
          }}
          className="text-primary-color text-center"
        >
          Collections
        </Typography>
        <Carousel responsive={responsive} infinite={true}>
          {featured.map((item, index) => (
            <Grid key={index} className="flex justify-center items-center ">
              <Box component={Link} href={item.to} sx={{ p: 2 }} underline="none">
                <Box
                  sx={{
                    height: '580px',
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
                  <Image
                    className="group/edit hidden group-hover/item:block animate-fadeIn"
                    alt=""
                    src={item.imageHover}
                    style={{
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>
                <Typography className="text-primary-color mt-2">{item.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Carousel>
      </Stack>
    </>
  );
}
