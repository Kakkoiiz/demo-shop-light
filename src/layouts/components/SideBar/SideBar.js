import { Search } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Link, Stack, Typography } from '@mui/material';

export default function SideBar({onSearchOpen }) {
  return (
    <Box
      sx={{
        pl: 3,
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 50,
      }}
      className="hidden xl:block"
    >
      <Stack>
        <div>
          <Accordion sx={{ bgcolor: 'unset' }}>
            <AccordionSummary
              sx={{
                p: 0,
                minHeight: '30px !important',
                '.MuiAccordionSummary-content': {
                  m: '0 !important',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                }}
                className="font-body font-normal text-2xl text-primary-color "
              >
                Shop
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ p: '0 0 0 20px' }}>
              <Stack>
                <Typography className="font-body text-xs text-primary-color tracking-widest py-2">
                  COLLECTIONS
                </Typography>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/all'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    All
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/organic'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Organic
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/geometric'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Geometric
                  </Typography>
                </div>
              </Stack>
              <Stack sx={{ py: 3 }}>
                <Typography className="font-body text-xs text-primary-color tracking-widest py-2">FUNCTION</Typography>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/planters'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Planters
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/vanes'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Vanes
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/collections/accessories'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Accessories
                  </Typography>
                </div>
              </Stack>

              <Button
                className="font-body text-xs text-primary-color font-normal tracking-widest py-2"
                endIcon={<Search sx={{
                  transform: 'translateY(-10%)'
                }}/>}
                sx={{ p: 0 }}
                onClick={onSearchOpen}
              >
                SEARCH
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion sx={{ bgcolor: 'unset' }}>
            <AccordionSummary
              sx={{
                p: 0,
                minHeight: '30px !important',
                '.MuiAccordionSummary-content': {
                  m: '0 !important',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                }}
                className="font-body font-normal text-2xl text-primary-color"
              >
                Erthos
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: '0 0 0 20px' }}>
              <Stack>
                <div>
                  <Typography
                    component={Link}
                    href={'/pages/studio'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Studio
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/pages/process'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Process
                  </Typography>
                </div>
                <div>
                  <Typography
                    component={Link}
                    href={'/pages/founder'}
                    sx={{
                      textDecoration: 'none',
                      borderBottom: '1px solid transparent',
                      '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
                    }}
                    className="font-body font-normal text-xl text-primary-color"
                  >
                    Founder
                  </Typography>
                </div>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Typography
            variant="h6"
            component={Link}
            href="/pages/contact"
            sx={{
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              '&:hover': { borderBottom: '1px solid #989492', cursor: 'pointer' },
            }}
            className="font-body font-normal text-2xl text-primary-color"
          >
            Contact
          </Typography>
        </div>
      </Stack>
    </Box>
  );
}
