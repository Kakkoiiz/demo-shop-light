import { CardMedia, Container, Link, Stack, Typography } from '@mui/material';

import Image from '../../components/Image';
import { Box } from '@mui/system';

const header = {
  title: 'Planters',
  description: '',
};

const data = [
  {
    id: 1,
    title: 'VAYU',
    subtitle: ' Ceramic Tabletop Planter ',
    price: 110,
    to: '/collections/all/products/vayu',
    color: [
      {
        title: 'Snow',
        code: '#f7f5f5',
      },
      {
        title: 'Sand',
        code: '#ded6c8',
      },
      {
        title: 'terracotta',
        code: '#ba6d37',
        bgImg: 'https://lightandladder.com/cdn/shop/files/terracotta_60x.png?v=1624366764',
      },
      {
        title: 'blush',
        code: '#dcc9c9',
      },
    ],
    video: 'https://player.vimeo.com/video/630345290?autoplay=1&loop=1&background=1&mute=0',
    imageHover:
      'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048',
  },
  {
    id: 2,
    title: 'RHEA',
    subtitle: ' Ceramic VaseVase ',
    price: 110,
    to: '/collections/all/products/rhea',
    color: [
      {
        title: 'Snow',
        code: '#f7f5f5',
      },
      {
        title: 'Sand',
        code: '#ded6c8',
      },
      {
        title: 'hematite',
        code: '#3F3F3F',
        bgImg: 'https://lightandladder.com/cdn/shop/files/Screen_Shot_2021-06-22_at_12.06.58_PM_60x.png?v=1624378083',
      },
    ],
    image: 'https://lightandladder.com/cdn/shop/products/Light_Ladder-Rhea-Snow-Hematite_540x.jpg?v=1659986998',
    imageHover: 'https://lightandladder.com/cdn/shop/products/Light_Ladder-RHEA-Snow_540x.jpg?v=1669537193',
  },
  {
    id: 3,
    title: 'VAYU',
    subtitle: ' Ceramic Tabletop Planter ',
    price: 110,
    to: '/collections/all/products/vayu',
    color: [
      {
        title: 'Snow',
        code: '#f7f5f5',
      },
      {
        title: 'Sand',
        code: '#ded6c8',
      },
      {
        title: 'terracotta',
        code: '#ba6d37',
        bgImg: 'https://lightandladder.com/cdn/shop/files/terracotta_60x.png?v=1624366764',
      },
      {
        title: 'blush',
        code: '#dcc9c9',
      },
    ],
    video: 'https://player.vimeo.com/video/630345290?autoplay=1&loop=1&background=1&mute=0',
    imageHover:
      'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048',
  },
  {
    id: 4,
    title: 'VAYU',
    subtitle: ' Ceramic Tabletop Planter ',
    price: 110,
    to: '/collections/all/products/vayu',
    color: [
      {
        title: 'Snow',
        code: '#f7f5f5',
      },
      {
        title: 'Sand',
        code: '#ded6c8',
      },
      {
        title: 'terracotta',
        code: '#ba6d37',
        bgImg: 'https://lightandladder.com/cdn/shop/files/terracotta_60x.png?v=1624366764',
      },
      {
        title: 'blush',
        code: '#dcc9c9',
      },
    ],
    video: 'https://player.vimeo.com/video/630345290?autoplay=1&loop=1&background=1&mute=0',
    imageHover:
      'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048',
  },
  {
    id: 5,
    title: 'VAYU',
    subtitle: ' Ceramic Tabletop Planter ',
    price: 110,
    to: '/collections/all/products/vayu',
    color: [
      {
        title: 'Snow',
        code: '#f7f5f5',
      },
      {
        title: 'Sand',
        code: '#ded6c8',
      },
      {
        title: 'terracotta',
        code: '#ba6d37',
        bgImg: 'https://lightandladder.com/cdn/shop/files/terracotta_60x.png?v=1624366764',
      },
      {
        title: 'blush',
        code: '#dcc9c9',
      },
    ],
    video: 'https://player.vimeo.com/video/630345290?autoplay=1&loop=1&background=1&mute=0',
    imageHover:
      'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048',
  },
];

export default function Planters() {
  return (
    <Container sx={{ py: 20 }}>
      <Box className="grid lg:grid-cols-2 gap-x-40 gap-y-10 px-20">
        <Box className="lg:col-end-3 lg:translate-y-[100%]">
          <Typography className="text-primary-color font-body text-4xl">{header.title}</Typography>
          <Typography className="mt-3 text-primary-color text-base ">{header.description}</Typography>
        </Box>
      </Box>

      <Box className="grid lg:grid-cols-2 gap-x-40 gap-y-10 px-20">
        {data.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '133.33%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            mt={{
              md: index % 2 === 0 ? 0 : 20,
              xs: 10
            }}
            
            className="group/item"
            component={Link}
            href={item.to}
          >
            <CardMedia
              component={item.video ? 'iframe' : 'img'}
              src={item.video ? item.video : item.image}
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
              src={item.imageHover}
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
              {item.title}
            </Typography>
            <Stack
              direction="row"
              sx={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'space-between',
                bottom: '-7%',
                width: '100%',
              }}
            >
              <Box>
                <Typography className="text-primary-color text-sm">{item.subtitle}</Typography>
                <Stack direction="row">
                  {item.color.map((col, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border-solid border-2 border-stone-300 mr-2"
                      style={{
                        backgroundColor: col.code,
                        backgroundImage: col.bgImg ? `url(${col.bgImg})` : 'none',
                        backgroundSize: col.bgImg ? 'cover' : 'auto',
                      }}
                    />
                  ))}
                </Stack>
              </Box>
              <Typography className="text-primary-color text-sm">From ${item.price}</Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
