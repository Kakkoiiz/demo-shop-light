import { Button, Box, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import Image from '../../components/Image';
import { Add, Delete, Remove } from '@mui/icons-material';

const cart = [
  {
    id: 1,
    name: 'Rhea Hematite',
    price: '70.00',
    image:
      'https://lightandladder.com/cdn/shop/products/Light_Ladder-RHEA-Snow_540x.jpg?v=1669537193',
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

export default function Cart() {
  return (
    <Box px={20} className="bg-menu-color">
      <Stack sx={{ p: 15 }}>
        <Typography className="font-body text-primary-color text-5xl mb-10">Cart</Typography>

        <Box className="border-y-2 border-primary-color pb-10">
          {cart.map((item) => (
            <Stack direction="row" spacing={5} className="mt-10 justify-between">
              <Image alt="" className="object-cover" width={120} src={item.image} />
              <Stack spacing={0.5} className="text-primary-color">
                <Typography className="font-body text-lg">{item.name}</Typography>
                <Typography className="font-body text-lg">
                  {item.description} / {item.color}
                </Typography>
                <Typography className="font-body text-lg">${item.price * item.quantity}</Typography>
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
              <Box>
                <IconButton>
                  <Delete />
                </IconButton>
              </Box>
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
            href="/checkouts"
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
    </Box>
  );
}
