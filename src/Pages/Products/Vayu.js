import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { Box, Container, Stack, flexbox, width } from '@mui/system';
import { useState } from 'react';
import { Add, ExpandMore, Remove } from '@mui/icons-material';
import Image from '../../components/Image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const item = {
  name: 'VAYU',
  subtitle: 'Ceramic Tabletop Planter',
  description:
    'A tabletop version of our iconic VAYU floor planter. Designed through the process of peeling away layers to reveal hidden inner volumes and voids. Realized in an array of matte finishes.\n\nMatte ceramic tabletop planter, clear glazed interior on all finishes except for Terracotta. Fits a 6 inch pot and comes with an optional drainage tray.\n\nOne of the material qualities unique to terracotta is its ability to breathe. Over time your terracotta pot will develop a cloudy white patina through absorbing minerals in the soil. Development of color over time is expected and can be cleaned off.',
  price: '110.00',
  supplemental: [
    {
      name: 'Dimensions',
      descripion: 'Vessel Measures: 7.75” × 7.75” × 5” Opening Diameter: 6”',
    },
    {
      name: 'Perfect For',
      descripion: '6” plants',
    },
    {
      name: 'Designed in our Brooklyn Studio. Proudly made in Vermont.',
      descripion:
        'Lovingly made in a family-run facility powered by renewable energy in Vermont, chosen for their commitment to “create art, not objects”',
    },
  ],

  drainage: [
    {
      name: 'No Drainage Hole',
    },
    {
      name: 'With Drainage Tray',
    },
  ],
  colors: [
    {
      name: 'Snow',
      code: '#F7F5F5',
    },
    {
      name: 'Sand',
      code: '#DED6C8',
    },
    {
      name: 'Terracotta',
      code: '#B8613A',
    },
    {
      name: 'Blush',
      code: '#DCC9C9',
    },
  ],

  images: [
    {
      name: 'Snow',
      image:
        'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Ceramic-Planter-Blush-Hand-Plant_900x.jpg?v=1659643048',
    },
    {
      name: 'Sand',
      image:
        'https://lightandladder.com/cdn/shop/products/Light_Ladder-Vayu-Ceramic-Planter-Sand-0_900x.jpg?v=1659643048',
    },
    {
      name: 'Terracotta',
      image: 'https://lightandladder.com/cdn/shop/products/Light_Ladder-Vayu-Terracotta_900x.jpg?v=1659643048',
    },
    {
      name: 'Blush',
      image:
        'https://lightandladder.com/cdn/shop/products/Light_Ladder-Vayu-Sand-Snow-Terracotta_900x.jpg?v=1659634561',
    },
    {
      image: 'https://lightandladder.com/cdn/shop/products/Light_2BLadder-Vayu-Sand-Floor_900x.jpg?v=1683665682',
    },
    {
      image: 'https://lightandladder.com/cdn/shop/products/vayudrainage_webcopy_540x.jpg?v=1683665682',
    },
  ],

  manufacture: {
    made: {
      image: 'https://lightandladder.com/cdn/shop/files/ezgif.com-crop_720x.gif?v=1681166165',
      descripion:
        'Light + Ladder is built upon a reciprocal relationship with our community who loves to create. We value our personal connection to our partners who share our commitment to sustainability, an honorable wage and healthy working conditions. ',
    },
    recommendations: [
      {
        title: 'VAYU',
        subtitle: 'Ceramic Floor Planter',
        image:
          'https://lightandladder.com/cdn/shop/products/Light_Ladder-Vayu-Floor-Coal_Nicole_Franzen_540x.jpg?v=1669077494',
        imageHover: 'https://lightandladder.com/cdn/shop/products/Light_2BLadder_Vayu-Coal-Plant_360x.jpg?v=1669077494',
      },
      {
        title: 'VAYU XL',
        subtitle: 'Bonded Marble Planter',
        image: 'https://lightandladder.com/cdn/shop/products/Light_2BLadder_XL_Vayu_360x.jpg?v=1611108775',
      },
    ],
  },
};

function CustomTabPanel(props) {
  const { value, index, item, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="min-w-[5rem]"
    >
      {value === index && <Typography className="text-primary-color text-sm">{item.name}</Typography>}
    </div>
  );
}

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
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function CustomTabPanelImage(props) {
  const { value, index, item, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ display: 'flex', justifyContent: 'end' }}
    >
      {value === index && <Image alt="" src={item.image} style={{ width: '690px', height: '920px' }} />}
    </div>
  );
}

export default function Vayu() {
  const [quantity, setQuantity] = useState(1);
  const [selectColor, setSelectColor] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (event, newValue) => {
    setSelectColor(newValue);
  };

  const handleColorTabChange = (event, newValue) => {
    setSelectColor(newValue);
  };

  return (
    <Box>
      <Grid container spacing={10} sx={{ mb: 15 }}>
        <Grid item xs={12} md={6} lg={6} order={{ xs: 2, md: 1 }} className="flex md:justify-center">
          <Box className="w-full md:w-3/5 pl-10 md:mt-[10rem]">
            <Typography className="font-body text-primary-color text-6xl font-normal -translate-x-2">
              {item.name}
            </Typography>

            <Typography className="text-sm text-primary-color pt-3">{item.subtitle}</Typography>
            <Typography className="text-2xl text-primary-color py-4">${item.price}</Typography>

            <Stack direction="row">
              <Typography className="text-primary-color text-sm">Drainage</Typography>

              <select
                name="drainage"
                className="ml-5 text-sm bg-transparent border-none text-primary-color outline-none"
              >
                {item.drainage.map((item, index) => (
                  <option value="item.name" key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Stack>

            <Stack direction="row" className="py-4 flex items-center">
              {item?.colors.map((color, index) => (
                <CustomTabPanel
                  key={index}
                  value={selectColor > item.colors.length - 1 ? item.colors.length - 1 : selectColor}
                  index={index}
                  item={color}
                />
              ))}

              <Tabs
                value={selectColor > item.colors.length - 1 ? item.colors.length - 1 : selectColor}
                onChange={handleColorTabChange}
                TabIndicatorProps={{
                  style: {
                    transform: 'translate(12%, -10%)',
                    height: '40px',
                    width: '40px',
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    border: '1px solid black',
                  },
                }}
              >
                {item.colors.map((colorItem, index) => (
                  <Tab
                    key={index}
                    label={
                      <div
                        className="w-8 h-8 rounded-full border-solid border-2 border-stone-300"
                        style={{ backgroundColor: colorItem.code }}
                      />
                    }
                    value={index}
                    sx={{
                      p: 0,
                      m: 0,
                      minWidth: '50px',
                    }}
                  />
                ))}
              </Tabs>
            </Stack>

            <Stack direction="row" className="grid grid-cols-2 py-4">
              <Button variant="outlined" className="text-primary-color border-primary-color">
                ADD TO CART
              </Button>

              <Stack direction="row" className="justify-center">
                <IconButton size="small" onClick={handleDecrease}>
                  <Remove fontSize="inherit" />
                </IconButton>

                <input
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                    width: '30%',
                    textAlign: 'center',
                  }}
                />

                <IconButton size="small" onClick={handleIncrease}>
                  <Add fontSize="inherit" />
                </IconButton>
              </Stack>
            </Stack>

            <Typography className="text-sm text-primary-color" sx={{ whiteSpace: 'pre-line', mt: 5 }}>
              {item.description}
            </Typography>

            <Box className="border-t-2 border-[#E0E2E4] mt-10">
              {item.supplemental.map((item, index) => (
                <Accordion sx={{ bgcolor: 'unset' }} key={index}>
                  <AccordionSummary expandIcon={<ExpandMore />} sx={{ p: 0 }}>
                    <Typography className="text-primary-color text-sm">{item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <Typography className="text-primary-color text-sm">{item.descripion}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6} order={{ xs: 1, md: 2 }}>
          <Stack sx={{ position: 'relative' }} display={{ xs: 'none', md: 'block' }}>
            <Tabs
              orientation="vertical"
              value={selectColor}
              onChange={handleChange}
              sx={{
                position: 'absolute',
                top: '20%',
                transform: 'translateX(-80%)',
              }}
              TabIndicatorProps={{
                style: {
                  transform: 'translate(-26%, -3%)',
                  height: '50px',
                  width: '50px',
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  border: '1px solid black',
                },
              }}
            >
              {item.images.map((image, index) => (
                <Tab
                  key={index}
                  label={
                    <Image
                      className="w-10 h-10 rounded-full border-solid border-2 border-stone-300"
                      alt=""
                      src={image.image}
                    />
                  }
                  value={index}
                  sx={{
                    p: 0,
                    m: 1,
                    minWidth: '60px',
                    opacity: selectColor === index ? 1 : 0.5,
                  }}
                />
              ))}
            </Tabs>

            {item.images.map((item, index) => (
              <CustomTabPanelImage key={index} value={selectColor} index={index} item={item} />
            ))}
          </Stack>

          <Stack display={{ xs: 'block', md: 'none' }}>
            <Carousel responsive={responsive} infinite={true}>
              {item.images.map((item, index) => (
                <Image key={index} alt="" src={item.image} className="p-5" />
              ))}
            </Carousel>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2} pl={{ md: 15 }} pb={15}>
        <Grid item xs={12} md={6} lg={6}>
          <Box px={6}>
            <Typography className="pb-10 font-body text-primary-color text-5xl ">How it's Made</Typography>
            <Box className="flex justify-center items-center">
              <Image
                src={item.manufacture.made.image}
                alt="Paella dish"
                style={{
                  border: 'none',
                  width: '620px',
                  height: '350px',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography className="pt-5 font-body text-primary-color text-sm ">
              {item.manufacture.made.descripion}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography className="pl-10 pb-10 font-body text-primary-color text-5xl " sx={{ pt: 20 }}>
            You may also like
          </Typography>
          <Box className="flex justify-center items-center gap-10">
            {item.manufacture.recommendations.slice(-2).map((item, index) => (
              <Box component={Link} href={''} underline="none" key={index}>
                <Box
                  sx={{
                    height: '364px',
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
                  {item.imageHover && (
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
                  )}
                </Box>
                <Box className="flex justify-between">
                  <Typography className="text-primary-color text-xs mt-2">{item.title}</Typography>
                  <Typography className="text-primary-color text-xs mt-2">{item.subtitle}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
