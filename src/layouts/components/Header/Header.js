import { Close, LocalMall, Menu, Search } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Link, Stack, TextField, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 100;
const NAV_WIDTH = 290;

const StyledRoot = styled(AppBar)(({ theme, open }) => ({
  zIndex: 1,
  boxShadow: 'none',
  width: '100%',
  position: 'fixed',
  backgroundColor: 'rgba(255,255,255,0)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: HEADER_MOBILE,
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    maxHeight: HEADER_DESKTOP,
    padding: theme.spacing(5, 5),
  },
}));

const cart = [
  {
    id: 1,
    name: 'Rhea Hematite',
    price: '70.00',
    image: 'https://lightandladder.com/cdn/shop/products/Light_Ladder-RHEA-Snow_540x.jpg?v=1669537193',
    description: 'No Drainage Hole',
    color: 'Terracotta',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Vaso',
    price: '70.00',
    image:
      'https://lightandladder.com/cdn/shop/products/Light_2BLadder_Sand_Vaso_Flower_vase-1_grande.jpg?v=1611108798',
    description: 'No Drainage Hole',
    color: 'Terracotta',
    quantity: 2,
  },
];

export default function Header({ onSearchClose, isSearchOpen }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState(null);

  const handleOpenCart = (cart) => {
    setIsDrawerOpen(true);
    setCartItems(cart);
  };

  const handleClose = () => {
    setCartItems(null);
    setIsDrawerOpen(false);
  };

  return (
    <StyledRoot>
      <StyledToolbar sx={{ display: isSearchOpen ? 'none' : 'flex' }}>
        <Box className="order-2 xl:order-first">
          <Link href="/">
            <img alt="" src="https://lightandladder.com/cdn/shop/files/logo_80x.png?v=1615992582" />
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }} className="hidden xl:block" />

        <IconButton onClick={() => handleOpenCart(cart)} className="order-3">
          <Badge
            badgeContent={cart.length}
            sx={{
              '& .MuiBadge-badge': {
                color: 'white',
                backgroundColor: '#656561',
              },
            }}
          >
            <LocalMall />
          </Badge>
        </IconButton>
        <IconButton onClick={() => setIsDrawerOpen(true)} className="order-first lg:order-last">
          <Menu />
        </IconButton>
        {isDrawerOpen && (
          <DrawerMenu  cartItems={cartItems} open={isDrawerOpen} onClose={handleClose} />
        )}
      </StyledToolbar>

      <StyledToolbar sx={{ display: isSearchOpen ? 'flex' : 'none' }} className="justify-center bg-menu-color">
        <TextField
          label="Search"
          variant="standard"
          className="w-2/5 py-2 text-2xl"
          InputLabelProps={{ className: 'text-2xl' }}
        />
        <IconButton type="button">
          <Search className="text-3xl" />
        </IconButton>

        <IconButton
          type="button"
          sx={{
            position: 'absolute',
            right: 10,
          }}
          onClick={onSearchClose}
        >
          <Close className="text-3xl" />
        </IconButton>
      </StyledToolbar>
    </StyledRoot>
  );
}
