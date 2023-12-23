import { Add, ArrowBack, Close, Delete, KeyboardArrowRight, Remove, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/Image';

const menuItems = [
  {
    title: 'Shop',
    children: {
      title: 'SHOP',
      data: [
        {
          title: 'All',
          to: '/collections/all',
        },
        {
          title: 'Organic',
          to: '/collections/organic',
        },
        {
          title: 'Geometric',
          to: '/collections/geometric',
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
    },
  },
  {
    title: 'Ethos',
    children: {
      title: 'ETHOS',
      data: [
        {
          title: 'Studio',
          to: '/pages/studio',
        },
        {
          title: 'Process',
          to: '/pages/process',
        },
        {
          title: 'Founder',
          to: '/pages/founder',
        },
      ],
    },
  },
  {
    title: 'Journal',
    to: '/blogs/journal',
  },
  {
    title: 'Collaborations',
    to: '/',
  },
  {
    title: 'Press',
    to: '/',
  },
  {
    title: 'Resources',
    to: '/',
  },
  {
    title: 'Stockists',
    to: '/',
  },
  {
    title: 'Contact',
    to: '/',
  },
  {
    title: 'Policies',
    to: '/pages/terms',
  },
];

export default function DrawerMenu({ open, onClose, cartItems }) {
  const [dataMenu, setDataMenu] = useState(menuItems);
  const [children, setChildren] = useState([]);

  const navigate = useNavigate();
  const cart = !!cartItems;

  const renderItems = () => {
    const handleOnClick = (data) => {
      setDataMenu([]);
      setChildren(data);
    };

    const handleBack = () => {
      setDataMenu(menuItems);
      setChildren([]);
    };

    const handleNavigate = (item) => {
      navigate(item.to);
      onClose();
    };

    return (
      <Box sx={{ pl: 6 }}>
        {dataMenu.map((item, index) => (
          <ListItem key={index} disablePadding className="animate-fade-drawer-left">
            <Typography
              component={Link}
              className="font-body text-primary-color text-2xl cursor-pointer hover:text-primary-color-hover no-underline p-2 "
              onClick={() => {
                if (item.children) {
                  handleOnClick(item.children);
                } else {
                  handleNavigate(item);
                }
              }}
            >
              {item.title}
              {item.children && <KeyboardArrowRight sx={{ ml: 1.5, transform: 'translateY(-10%)' }} />}
            </Typography>
          </ListItem>
        ))}

        {children.data && children.data.length > 0 && (
          <>
            <ArrowBack
              onClick={handleBack}
              className="text-primary-text cursor-pointer hover:text-primary-text-hover"
            />
            <Typography className="text-xs my-5 pl-2 text-primary-text tracking-widest">{children.title}</Typography>
            {children.data.map((item, index) => (
              <ListItem key={index} disablePadding className="animate-fade-drawer-right">
                <Typography
                  component={Link}
                  className="font-body text-primary-color text-2xl cursor-pointer hover:text-primary-color-hover no-underline p-2 "
                  onClick={() => handleNavigate(item)}
                >
                  {item.title}
                  {item.children && <KeyboardArrowRight sx={{ ml: 1.5, transform: 'translateY(-10%)' }} />}
                </Typography>
              </ListItem>
            ))}
          </>
        )}

        <Stack>
          <Typography
            component={Link}
            href="/account/login"
            sx={{
              p: 1,
              textDecoration: 'none',
              letterSpacing: '2px',
              '&:hover': { cursor: 'pointer', color: '#839289' },
            }}
            className="text-primary-color text-xs"
          >
            LOG IN
          </Typography>
          <Typography
            component={Link}
            href="/account/register"
            sx={{
              p: 1,
              textDecoration: 'none',
              letterSpacing: '2px',
              '&:hover': { cursor: 'pointer', color: '#839289' },
            }}
            className="text-primary-color text-xs"
          >
            CREATE ACCOUNT
          </Typography>
          <div>
            <TextField label="Search" multiline variant="standard" sx={{ ml: 1, width: '50%' }} />
            <IconButton type="button" sx={{ transform: 'translateY(40%)' }} aria-label="search">
              <Search />
            </IconButton>
          </div>
        </Stack>
      </Box>
    );
  };

  const renderCarts = () => {
    return (
      <Stack sx={{ width: '90%', pl: 3 }}>
        <Typography className="font-body text-primary-color text-4xl mb-10">Cart</Typography>

        <Box className="border-y-2 border-primary-color pb-10">
          {cartItems.map((item) => (
            <Stack direction="row" spacing={5} sx={{ position: 'relative', mt: 5 }}>
              <Image alt="" width={90} className="object-cover" src={item.image} />
              <Stack spacing={0.5} className="text-primary-color">
                <Typography className="font-body text-lg">{item.name}</Typography>
                <Typography className="font-body text-lg">
                  {item.description} / {item.color}
                </Typography>
                <Typography className="font-body text-lg">${item.price}</Typography>
                <Stack direction="row" sx={{ transform: 'translateX(-10px)' }}>
                  <IconButton>
                    <Remove />
                  </IconButton>
                  <input
                    value={item.quantity}
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      width: '30%',
                      textAlign: 'center',
                    }}
                  />
                  <IconButton>
                    <Add />
                  </IconButton>
                </Stack>
              </Stack>
              <IconButton sx={{ position: 'absolute', top: -10, right: 0 }}>
                <Delete />
              </IconButton>
            </Stack>
          ))}
        </Box>

        <Stack spacing={2} sx={{ mt: 5, color: '#73706e' }}>
          <Typography className="text-primary-color text-sm">Special instructions / Notes</Typography>
          <TextField
            multiline
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
            className="rounded-none border-primary-color"
          />
          <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
            <Typography className="text-primary-color text-xs tracking-[0.25rem]">SUBTOTAL</Typography>
            <Typography className="text-primary-color text-xs ">$220.00</Typography>
          </Stack>
          <Typography className="text-primary-color text-sm">Taxes and shipping calculated at checkout</Typography>
          <Button
            href='/checkouts'
            sx={{
              height: '50px',
              mt: 3,
              mb: 2,
              color: '#edece4',
              '&:hover': { backgroundColor: '#abb0ad', color: 'black' },
            }}
            className="bg-[#5F5855] text-sm"
          >
            Check Out
          </Button>
        </Stack>
      </Stack>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'w-full md:w-1/2 lg:w-1/3 xl:w-1/3 bg-menu-color',
      }}
    >
      <Box>
        <Grid role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 4 }}>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
          <List>{cart ? renderCarts() : renderItems()}</List>
        </Grid>
      </Box>
    </Drawer>
  );
}
