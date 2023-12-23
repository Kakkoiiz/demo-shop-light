import { AddCard, HelpOutline, LocalMall, LockOutlined } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  List,
  MenuItem,
  Popover,
  Radio,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import Image from '../../components/Image';

import { useState } from 'react';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 100;
const NAV_WIDTH = 290;

const cart = [
  {
    id: 1,
    name: 'Rhea Hematite',
    price: '70.00',
    image:
      'https://cdn.shopify.com/s/files/1/0530/4428/1522/products/Light_Ladder-Rhea-Hematite_small.jpg?v=1669537193',
    description: 'No Drainage Hole',
    color: 'Terracotta',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Vayu',
    price: '70.00',
    image:
      'https://cdn.shopify.com/s/files/1/0530/4428/1522/products/Light_2BLadder-Vayu-Ceramic-Planter-Snow-Plant_64x64.jpg?v=1659643048',
    description: 'No Drainage Hole',
    color: 'Snow',
    quantity: 2,
  },
];

const country = [
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'Vie',
    label: 'Vietnam',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'GB',
    label: 'United Kingdom',
  },
  {
    value: 'DE',
    label: 'Germany',
  },
  {
    value: 'FR',
    label: 'France',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
  {
    value: 'AU',
    label: 'Australia',
  },
  {
    value: 'IN',
    label: 'India',
  },
  {
    value: 'CN',
    label: 'China',
  },
  {
    value: 'BR',
    label: 'Brazil',
  },
  {
    value: 'RU',
    label: 'Russia',
  },
  {
    value: 'IT',
    label: 'Italy',
  },
  {
    value: 'ES',
    label: 'Spain',
  },
  {
    value: 'MX',
    label: 'Mexico',
  },
  {
    value: 'ZA',
    label: 'South Africa',
  },
  {
    value: 'AR',
    label: 'Argentina',
  },
  {
    value: 'CH',
    label: 'Switzerland',
  },
  {
    value: 'KR',
    label: 'South Korea',
  },
  {
    value: 'SE',
    label: 'Sweden',
  },
];

const cards = [
  {
    name: 'VISA',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg',
  },
  {
    name: 'MASTERCARD',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg',
  },
  {
    name: 'AMEX',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/f11b90c2972f3811f2d5.svg',
  },
  {
    name: 'DISCOVER',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/4cde67b4ecfa33d21851.svg',
  },
  {
    name: 'DINERS CLUB',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/36498a0c78083a7d71e9.svg',
  },
  {
    name: 'ELO',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/5b2914897a8286c988cc.svg',
  },
  {
    name: 'JCB',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/aa9f2b5de4dc7ce12bc7.svg',
  },
  {
    name: 'UNIONPAY',
    image: 'https://cdn.shopify.com/shopifycloud/checkout-web/assets/bddb21e40274706727fb.svg',
  },
];

export default function Checkouts() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState('');

  const [expandedBilling, setExpandedBilling] = useState(false);
  const [selectedPanelBilling, setSelectedPanelBilling] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setSelectedPanel(panel);
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeBilling = (panelBilling) => (event, isExpandedBilling) => {
    setSelectedPanelBilling(panelBilling);
    setExpandedBilling(isExpandedBilling ? panelBilling : false);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="bg-[#F8F7F6]">
      <Box className="border-b-[1px] border-border-color">
        <Stack direction="row" sx={{ height: 120 }} px={{ md: 30, xs: 5 }} className="justify-between items-center">
          <Link href="/">
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/0530/4428/1522/files/logo_x320.png?v=1615992582"
              width={100}
            />
          </Link>

          <Link href='/cart'>
            <IconButton>
              <LocalMall />
            </IconButton>
          </Link>
        </Stack>
      </Box>

      <Stack className="grid grid-cols-12">
        <Grid className="flex justify-center md:justify-end p-5 col-span-12 md:col-span-7 ">
          <Stack sx={{ p: 3 }} className="md:w-4/5">
            <Box>
              <Typography className="text-center text-primary-color text-sm">Express checkout</Typography>
              <Grid container spacing={2} pt={2}>
                <Grid item xs={12} md={4} lg={4}>
                  <Button className="bg-[#592FF4] text-white w-full py-3 hover:bg-[#390ced]">Shop Pay</Button>
                </Grid>
                <Grid item xs={6} md={4} lg={4}>
                  <Button className="bg-[#fad676] text-black w-full py-3 hover:bg-[#f7bd23]">Amazon Pay</Button>
                </Grid>
                <Grid item xs={6} md={4} lg={4}>
                  <Button className="bg-black text-white w-full py-3 hover:bg-[#4d4d4d]">Google Pay</Button>
                </Grid>
              </Grid>
              <Stack direction="row" pt={2} className="justify-center items-center">
                <div className="w-full bg-border-color h-[0.5px]"></div>
                <Typography className=" text-primary-color px-3">OR</Typography>
                <div className="w-full bg-border-color h-[0.5px]"></div>
              </Stack>
            </Box>

            <Box component="form">
              <Box direction="" className="md:flex justify-between">
                <Typography className="font-body text-3xl font-semibold">Contact</Typography>

                <Stack direction="row" className="items-center">
                  <Typography className="text-primary-color text-sm">Have an account?</Typography>
                  <Typography
                    component={Link}
                    href="/account/login"
                    className="pl-2 text-primary-color text-sm decoration-primary-color hover:text-border-color"
                  >
                    Log in
                  </Typography>
                </Stack>
              </Box>

              <TextField
                name="name"
                label="Email or mobile phone number"
                required
                fullWidth
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
              />

              <Stack>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: '#718073',
                        '&.Mui-checked': {
                          color: '#718073',
                        },
                      }}
                    />
                  }
                  label="Email me with news and offers"
                />
              </Stack>

              <Typography className="font-body text-3xl font-semibold mt-5">Delivery</Typography>

              <TextField
                name="country"
                label="Country/Region"
                defaultValue="Vie"
                select
                fullWidth
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
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Stack spacing={2} direction={{ md: 'row' }}>
                <TextField
                  name="firstName"
                  label="First Name"
                  required
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
                  className="w-full md:w-1/2"
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  required
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
                  className=" w-full md:w-1/2"
                />
              </Stack>

              <TextField
                name="address"
                label="Address"
                required
                fullWidth
                sx={{
                  mt: 2,
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
              />

              <TextField
                name="apartment"
                label="Apartment, suite, etc. (optional)"
                required
                fullWidth
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
              />

              <Stack direction="row" spacing={2}>
                <TextField
                  name="city"
                  label="City"
                  required
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
                  className="w-full md:w-1/2"
                />
                <TextField
                  name="postalCode"
                  label="Postal Code"
                  required
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
                  className=" w-full md:w-1/2"
                />
              </Stack>

              <Typography className="font-body text-3xl font-semibold mt-5">Shipping method</Typography>

              <TextField
                name="payment"
                label="Enter your shipping address to view available shipping methods."
                disabled
                fullWidth
                variant="filled"
                sx={{
                  my: 2,
                }}
              />

              <Typography className="font-body text-3xl font-semibold mt-5">Shipping method</Typography>
              <Typography className="text-sm text-primary-color py-2">
                All transactions are secure and encrypted.
              </Typography>

              <List className="border-[1px] border-border-color rounded-md p-0">
                <Accordion expanded={expanded === 'panel1'} sx={{ m: '0 !important' }}>
                  <AccordionSummary>
                    <Stack direction="row" className="w-full justify-between">
                      <Box className="flex items-center ">
                        <Radio
                          sx={{
                            color: '#839284',
                            '&.Mui-checked': {
                              color: '#839284',
                            },
                          }}
                          onChange={handleChange('panel1')}
                          checked={selectedPanel === 'panel1'}
                        />
                        <Typography>Credit card</Typography>
                      </Box>

                      <Stack direction="row" spacing={0.5} className=" items-center" pr={2}>
                        {cards.slice(0, 4).map((card, index) => (
                          <Image key={index} alt={card.name} src={card.image} />
                        ))}
                        <Button
                          sx={{ height: '24px', minWidth: '38px', border: '1px solid #DAD7D4' }}
                          className="text-primary-color "
                          onMouseEnter={handlePopoverOpen}
                          onMouseLeave={handlePopoverClose}
                        >
                          +{cards.length - 4}
                        </Button>
                        <Popover
                          id="mouse-over-popover"
                          sx={{
                            pointerEvents: 'none',
                          }}
                          open={open}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          <Stack className="grid grid-cols-3 gap-2 p-3 bg-black">
                            {cards.slice(0, 4).map((card, index) => (
                              <Image key={index} alt={card.name} src={card.image} />
                            ))}
                          </Stack>
                        </Popover>
                      </Stack>
                    </Stack>
                  </AccordionSummary>

                  <AccordionDetails className="border-[1px] bg-[#EDECEB]">
                    <TextField
                      name="cardNumber"
                      label="Card Number"
                      type="number"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton aria-label="toggle password visibility" edge="end">
                              <LockOutlined />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        my: 2,
                        '& label.Mui-focused': {
                          color: 'black',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#DAD7D4',
                          },
                          '&:hover fieldset': {
                            borderColor: 'black',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'black',
                          },
                        },
                      }}
                    />

                    <Stack direction={{ md: 'row' }} spacing={2}>
                      <TextField
                        name="expirationDate"
                        label="expiration Date (MM/YY)"
                        required
                        sx={{
                          my: 2,
                          '& label.Mui-focused': {
                            color: 'black',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#DAD7D4',
                            },
                            '&:hover fieldset': {
                              borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'black',
                            },
                          },
                        }}
                        className="w-full md:w-1/2"
                      />
                      <TextField
                        name="securitycode"
                        label="Security Code"
                        required
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton aria-label="toggle password visibility" edge="end">
                                <HelpOutline />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          my: 2,
                          '& label.Mui-focused': {
                            color: 'black',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: '#DAD7D4',
                            },
                            '&:hover fieldset': {
                              borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'black',
                            },
                          },
                        }}
                        className=" w-full md:w-1/2"
                      />
                    </Stack>

                    <TextField
                      name="nameCard"
                      label="Name on Card"
                      required
                      fullWidth
                      sx={{
                        my: 2,
                        '& label.Mui-focused': {
                          color: 'black',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#DAD7D4',
                          },
                          '&:hover fieldset': {
                            borderColor: 'black',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'black',
                          },
                        },
                      }}
                    />
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} sx={{ m: '0 !important', border: '0.5px solid #DAD7D4' }}>
                  <AccordionSummary
                    sx={{
                      minHeight: '66px !important',
                      '.MuiAccordionSummary-content': {
                        m: '0 !important',
                      },
                    }}
                  >
                    <Stack direction="row" className="w-full justify-between">
                      <Box className="flex items-center ">
                        <Radio
                          sx={{
                            color: '#839284',
                            '&.Mui-checked': {
                              color: '#839284',
                            },
                          }}
                          onChange={handleChange('panel2')}
                          checked={selectedPanel === 'panel2'}
                        />
                        <Image
                          alt=""
                          width={80}
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/1449117d8a827ed17a8c.svg"
                        />
                        <Typography className="ml-2 text-sm">| Pay in full or in installments</Typography>
                      </Box>
                    </Stack>
                  </AccordionSummary>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} sx={{ m: '0 !important' }}>
                  <AccordionSummary>
                    <Stack direction="row" className="w-full justify-between">
                      <Box className="flex items-center ">
                        <Radio
                          sx={{
                            color: '#839284',
                            '&.Mui-checked': {
                              color: '#839284',
                            },
                          }}
                          onChange={handleChange('panel3')}
                          checked={selectedPanel === 'panel3'}
                        />
                        <Typography>Amazon Pay</Typography>
                      </Box>
                    </Stack>
                  </AccordionSummary>

                  <AccordionDetails className="border-[1px] text-center bg-[#EDECEB] text-primary-color">
                    <AddCard sx={{ width: '300px', height: '160px' }} />
                    <Typography className="text-primary-color mt-2">You will be asked to login with Amazon.</Typography>
                  </AccordionDetails>
                </Accordion>
              </List>

              {selectedPanel === 'panel2' && (
                <>
                  <Typography className="font-body text-2xl font-semibold mt-5 py-2">Billing address</Typography>

                  <List className="border-[1px] border-border-color rounded-md p-0">
                    <Accordion
                      expanded={expandedBilling === 'panelBilling1'}
                      sx={{ m: '0 !important', border: '0.5px solid #DAD7D4' }}
                    >
                      <AccordionSummary
                        sx={{
                          minHeight: '66px !important',
                          '.MuiAccordionSummary-content': {
                            m: '0 !important',
                          },
                        }}
                      >
                        <Stack direction="row" className="w-full justify-between">
                          <Box className="flex items-center ">
                            <Radio
                              sx={{
                                color: '#839284',
                                '&.Mui-checked': {
                                  color: '#839284',
                                },
                              }}
                              onChange={handleChangeBilling('panelBilling1')}
                              checked={selectedPanelBilling === 'panelBilling1'}
                            />
                            <Typography>Same as shipping addressd</Typography>
                          </Box>
                        </Stack>
                      </AccordionSummary>
                    </Accordion>
                    <Accordion expanded={expandedBilling === 'panelBilling2'} sx={{ m: '0 !important' }}>
                      <AccordionSummary>
                        <Stack direction="row" className="w-full justify-between">
                          <Box className="flex items-center ">
                            <Radio
                              sx={{
                                color: '#839284',
                                '&.Mui-checked': {
                                  color: '#839284',
                                },
                              }}
                              onChange={handleChangeBilling('panelBilling2')}
                              checked={selectedPanelBilling === 'panelBilling2'}
                            />
                            <Typography>Credit card</Typography>
                          </Box>
                        </Stack>
                      </AccordionSummary>

                      <AccordionDetails className="border-[1px] bg-[#EDECEB]">
                        <TextField
                          name="country"
                          label="Country/Region"
                          defaultValue="Vie"
                          select
                          fullWidth
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
                        >
                          {country.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                        <Stack spacing={2} direction={{ md: 'row' }}>
                          <TextField
                            name="firstName"
                            label="First Name"
                            required
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
                            className="w-full md:w-1/2"
                          />
                          <TextField
                            name="lastName"
                            label="Last Name"
                            required
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
                            className=" w-full md:w-1/2"
                          />
                        </Stack>

                        <TextField
                          name="address"
                          label="Address"
                          required
                          fullWidth
                          sx={{
                            mt: 2,
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
                        />

                        <TextField
                          name="apartment"
                          label="Apartment, suite, etc. (optional)"
                          required
                          fullWidth
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
                        />

                        <Stack direction="row" spacing={2}>
                          <TextField
                            name="city"
                            label="City"
                            required
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
                            className="w-full md:w-1/2"
                          />
                          <TextField
                            name="postalCode"
                            label="Postal Code"
                            required
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
                            className=" w-full md:w-1/2"
                          />
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </List>
                </>
              )}

              <Stack className="md:hidden">
                <Typography className="font-body text-2xl font-semibold mt-5">Order summary</Typography>
                <Box>
                  {cart.map((item) => (
                    <Stack key={item.id} direction="row" className="flex items-center justify-between" mt={3}>
                      <Badge
                        badgeContent={item.quantity}
                        sx={{
                          '& .MuiBadge-badge': {
                            color: 'white',
                            backgroundColor: '#656561',
                          },
                        }}
                      >
                        <Image alt="" width={75} className="object-cover" src={item.image} />
                      </Badge>

                      <Stack spacing={0.5} className="text-primary-color">
                        <Typography className="font-body text-lg">{item.name}</Typography>
                        <Typography className="font-body text-lg">
                          {item.description} / {item.color}
                        </Typography>
                      </Stack>

                      <Typography className="font-body text-lg">${item.price * item.quantity}</Typography>
                    </Stack>
                  ))}
                </Box>
                <Box className=" flex justify-between mt-5">
                  <TextField
                    multiline
                    fullWidth
                    label="Discount code or gift card"
                    sx={{
                      '& label.Mui-focused': {
                        color: 'black',
                      },
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'black',
                        },
                      },
                    }}
                    className="rounded-none border-primary-color mr-5"
                  />
                  <Button
                    variant="outlined"
                    disabled
                    className="h-14 border-primary-color bg-[#F0EEEC] text-primary-color"
                  >
                    Apply
                  </Button>
                </Box>
                <Box className="mt-3">
                  <Stack direction="row" className="justify-between">
                    <Typography className="text-sm">Subtotal</Typography>
                    <Typography className="text-sm font-semibold">496,400.00</Typography>
                  </Stack>
                  <Stack direction="row" className="justify-between mt-1 text-sm">
                    <Typography className="text-sm">Shipping</Typography>
                    <Typography className="text-sm">496,400.00</Typography>
                  </Stack>
                  <Stack direction="row" className="justify-between mt-1">
                    <Typography className=" font-semibold">Total</Typography>
                    <Typography className="font-semibold">521,900.00</Typography>
                  </Stack>
                </Box>
              </Stack>

              <Button
                type="submit"
                fullWidth
                sx={{
                  height: '50px',
                  mt: 3,
                  mb: 3,
                  '&:hover': { backgroundColor: '#718272', color: 'white' },
                }}
                className="text-white text-xl bg-[#839284]"
              >
                Pay now
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid className="bg-[#E6E5DC] hidden md:block md:col-span-5 sm:hidden">
          <Stack spacing={3} className="px-10 w-4/5 sticky top-0">
            <Box>
              {cart.map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  spacing={5}
                  sx={{ mt: 5 }}
                  className="flex items-center justify-between"
                >
                  <Badge
                    badgeContent={item.quantity}
                    sx={{
                      '& .MuiBadge-badge': {
                        color: 'white',
                        backgroundColor: '#656561',
                      },
                    }}
                  >
                    <Image alt="" width={75} className="object-cover " src={item.image} />
                  </Badge>

                  <Stack spacing={0.5} className="text-primary-color">
                    <Typography className="font-body text-lg">{item.name}</Typography>
                    <Typography className="font-body text-lg">
                      {item.description} / {item.color}
                    </Typography>
                  </Stack>

                  <Typography className="font-body text-lg">${item.price * item.quantity}</Typography>
                </Stack>
              ))}
            </Box>
            <Box className=" flex justify-between">
              <TextField
                multiline
                fullWidth
                label="Discount code or gift card"
                sx={{
                  '& label.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
                className="rounded-none border-primary-color mr-5"
              />
              <Button
                variant="outlined"
                disabled
                className="h-14 border-primary-color bg-border-color text-primary-color"
              >
                Apply
              </Button>
            </Box>
            <Box className="mt-3">
              <Stack direction="row" className="justify-between">
                <Typography className="text-sm">Subtotal</Typography>
                <Typography className="text-sm font-semibold">496,400.00</Typography>
              </Stack>
              <Stack direction="row" className="justify-between mt-1 text-sm">
                <Typography className="text-sm">Shipping</Typography>
                <Typography className="text-sm">496,400.00</Typography>
              </Stack>
              <Stack direction="row" className="justify-between mt-1">
                <Typography className=" font-semibold">Total</Typography>
                <Typography className="font-semibold">521,900.00</Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Stack>
    </Box>
  );
}
