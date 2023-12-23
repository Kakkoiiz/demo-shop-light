import { Facebook, NavigateBefore, Pinterest, Twitter } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Image from '../../components/Image';

const item = {
  id: 1,
  title: 'Featuring: Magma Chroma by Brooke Holm',
  desciprion:
    'This project by Sabine Fremiot & Leo Berastegui named "The Living Machine" began by planning a roadtrip through 15 countries in Europe, visiting buildings by Le Corbusier.\n\n With the intention of creating an "atlas of knowledge", the pair documented beautiful buildings, wherever they found them, in a trip that lasted 5 years.',
  images: [
    {
      image: 'https://lightandladder.com/cdn/shop/articles/2_1080x.jpg?v=1648755454',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0530/4428/1522/files/IMG_5407_1024x1024.jpg?v=1649347308',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0530/4428/1522/files/3_1024x1024.jpg?v=1648755025',
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0530/4428/1522/files/1_1024x1024.jpg?v=1648755569',
    },
  ],
};

export default function JournalDetails() {
  const { journalId } = useParams();

  const navigate = useNavigate();

  return (
    <Container sx={{ py: 15 }}>
      <Grid container px={{md:20}}>
        <Grid item md={5} lg={5}>
          <Box className="flex flex-col justify-between sticky top-[20%]" >
            <Typography className="font-body text-primary-color text-5xl pr-20" pb={{ md: 15 }}>
              {item.title}
            </Typography>
            <Stack>
              <Box>
                <Button
                  startIcon={<NavigateBefore />}
                  onClick={() => navigate(-1)}
                  className="text-primary-color text-xs p-0 font-thin"
                >
                  <Typography className="translate-y-0.5 py-5 tracking-widest">STORIES</Typography>
                </Button>
              </Box>
              <Typography className="text-primary-color tracking-widest text-xs pb-5">APRIL 07, 2022</Typography>
              <Stack direction="row" className="-translate-x-3 mb-10">
                <IconButton href="https://www.facebook.com/sharer.php?u=https://www.facebook.com/sylphdeptrai/">
                  <Facebook className="text-emerald-800" />
                </IconButton>
                <IconButton href="https://www.facebook.com/sharer.php?u=https://www.facebook.com/sylphdeptrai/">
                  <Twitter className="text-emerald-800" />
                </IconButton>
                <IconButton href="https://www.facebook.com/sharer.php?u=https://www.facebook.com/sylphdeptrai/">
                  <Pinterest className="text-emerald-800" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={7} lg={7}>
          <Stack spacing={3}>
            <Image alt="" src={item.images[0].image} />
            <Typography sx={{ whiteSpace: 'pre-line' }}>{item.desciprion}</Typography>
            {item.images.slice(1).map((item, index) => (
              <Image key={index} alt="" src={item.image} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
