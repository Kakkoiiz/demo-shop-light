import PropTypes from 'prop-types';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

const policies = [
  {
    id: 1,
    title: 'WELCOME',
    content:
      'Your ceramic art will be lovingly packed and boxed to ensure safe delivery, whether it’s traveling to Illinois or Italy. We have many years of experience with packing and shipping ceramics and do everything we can to make sure our products arrive safely to their destination.\n\nFeel free to email us at orders@lightandladder.com to inquire about making your deadline whether it be a gift for a special occasion or photoshoot and we will do our very best to accommodate.',
  },
  {
    id: 2,
    title: 'SHIPPING',
    content:
      'Your ceramic art will be lovingly packed and boxed to ensure safe delivery, whether it’s traveling to Illinois or Italy. We have many years of experience with packing and shipping ceramics and do everything we can to make sure our products arrive safely to their destination.\n\nFeel free to email us at orders@lightandladder.com to inquire about making your deadline whether it be a gift for a special occasion or photoshoot and we will do our very best to accommodate.\n\n<span style="font-size: larger;">Tracking</span>\n\nYou should receive an email confirmation after you’ve placed an order. Please note in the product description whether an item requires a longer delivery time. You will receive an additional email containing the tracking information for your package. A tracking number is generated when an order is processed, that does not mean an order has shipped, it will ship within a few days of that. \n\n<span style="font-size: larger;">Domestic</span>\n\nWe ship Mon-Fri via FEDEX, UPS, DHL and USPS. Orders of items that are in-stock items received before 11EST, will ship within 2-3 days from Pennsylvania. \n\n<span style="font-size: larger;">International</span>\n\nYes we ship internationally! We use DHL for most international orders. It is imperative that you provide your phone number and answer the call from DHL. Your country may impose import duties. These fees are the responsibility of the buyer. Payment for any customs fees collected by your country is required before they can deliver your product. In the event that DHL cannot reach you and duties for a package are not paid, the package will be returned to Light + Ladder and you will need to pay additional shipping for us to resend. Light + Ladder is not responsible for any costs to re-ship the items to you.',
  },
  {
    id: 3,
    title: 'GIFTS',
    content:
      'Sending a Light + Ladder piece as a gift? How lovely! Upon checking out, you may add your note in the Note section. Since we send receipts via email only, there will not be one included in the box.',
  },
  {
    id: 4,
    title: 'RETURN & REFUNDS',
    content:
      'We stand behind the products we make 100%. If you are not satisfied with any of our products, please let us know. It is worth noting that all of our products are handcrafted; slight variations in color, texture, and finish are inherent to the materials and the design. When ordering planters, please remember to double-check the dimensions to ensure that you get the right size for the intended space.\n\n<span style="font-size: larger;">Damaged Upon Arrival</span> \n\nEvery order is packed carefully to ensure that all items arrive at your door safely. Should an item arrive in damaged condition, please email us at orders@lightandladder.com within 48 hours of receiving the package with a photo of the damage. We also ask that you hold on to all parts of the item until we’ve provided further instructions.\n\n<span style="font-size: larger;">Refunds and Exchanges</span>\n\nShould you decide that your Light + Ladder item is not right for you, please contact us within 7 days of receipt to initiate a return. Please note that shipping charges are non-refundable and the buyer is responsible for the return of the merchandise in a resalable condition.  Refunds will not be issued for goods that arrive to us damaged so please take care in repackaging our goods so that it does not break in transit. The refund will be issued when we receive the item.\n\n*We kindly ask that Wabi-Sabi items are final sale.\n\nPlease note that all sales are final on custom work. No refunds or returns will be issued.',
  },
  {
    id: 5,
    title: 'CUSTOM & COLLABORATIONS',
    content:
      '<span style="font-size: larger;">Custom Made</span>\n\nWe are open to creating custom pieces for clients. Please message us at info@lightandladder.com and we can discuss the possibility of creating a unique item for you. Please remember that all sales are final on custom orders.\n\n <span style="font-size: larger;">Design Collaborations</span>\n\nIn the past, we’ve had the good fortune to design for brands such as Tortuga, Greenery NYC, and House of Good to name a few, to create unique collections that represent a combined mastery of material and expertise in our fields. We invite you to keep an eye out for future collaborations.',
  },
  {
    id: 6,
    title: 'TERMS & CONDITIONS',
    content:
      "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://lightandladder.com (the 'Site').\n\n**Personal Information We Collect**\nWhen you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as 'Device Information.'\n\nWe collect Device Information using the following technologies:\n\n'Cookies' are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.\n'Log files' track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.\n'Web beacons,' 'tags,' and 'pixels' are electronic files used to record information about how you browse the Site.\n\nAdditionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as 'Order Information.'\n\nWhen we talk about 'Personal Information' in this Privacy Policy, we are talking both about Device Information and Order Information.\n\n**How Do We Use Your Personal Information?**\nWe use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:\n\n- Communicate with you;\n- Screen our orders for potential risk or fraud; and\n- When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.\n\nWe use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).\n\n**Sharing Your Personal Information**\nWe share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information [here](https://www.shopify.com/legal/privacy). We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information [here](https://www.google.com/intl/en/policies/privacy/). You can also opt-out of Google Analytics [here](https://tools.google.com/dlpage/gaoptout).\n\nFinally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.\n\n**Behavioral Advertising**\nAs described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s ('NAI') educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.\n\nYou can opt out of targeted advertising by:\n\n- **FACEBOOK** - [https://www.facebook.com/settings/?tab=ads](https://www.facebook.com/settings/?tab=ads)\n- **GOOGLE** - [https://www.google.com/settings/ads/anonymous](https://www.google.com/settings/ads/anonymous)\n- **BING** - [https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads](https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads)\n\nAdditionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: [http://optout.aboutads.info/](http://optout.aboutads.info/).\n\n**Do Not Track**\nPlease note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.\n\n**Your Rights**\nIf you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.\n\nAdditionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.\n\n**Data Retention**\nWhen you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.\n\n**Minors**\nThe Site is not intended for individuals under the age of 13.\n\n**Changes**\nWe may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.\n\n**Contact Us**\nFor more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@lightandladder.com or by mail using the details provided below:\n\n181 N11 St Suite #205, Brooklyn, NY, 11211, United States",
  },
];

function CustomTabPanel(props) {
  const { value, index, policy, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="min-h-[50vh] lg:w-[600px]"
    >
      {value === index && (
        <Box sx={{ height: '100%' }}>
          <Typography className="text-3xl font-extralight my-5">{policy.title}</Typography>
          <Typography sx={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: policy.content }} />
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Terms() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSelect = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container className="flex justify-center" sx={{ py: 10 }}>
      <Box sx={{ width: '90%' }} className=" lg:flex lg:justify-between">
        <Box className="hidden lg:block">
          <Typography className="text-3xl font-extralight my-5">Our Policies</Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            orientation="vertical"
            TabIndicatorProps={{
              style: { display: 'none' },
            }}
          >
            {policies.map((policy, index) => (
              <Tab
                key={index}
                label={policy.title}
                value={index}
                sx={{
                  width: '300px',
                  alignItems: 'flex-start',
                  fontWeight: 300,
                  p: 0,
                  borderBottom: '1px solid #D2CFCD',
                  '&.Mui-selected': {
                    color: '#000',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
        
        <FormControl sx={{ width: '100%' }} className="block lg:hidden">
          <InputLabel id="demo-simple-select-label">Select Policy</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Select Policy"
            onChange={handleChangeSelect}
            sx={{
              '& .MuiInputBase-root': {
                width: '100%', 
              },
            }}
          >
            {policies.map((policy, index) => (
              <MenuItem key={index} value={index}>
                {policy.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Render các TabPanel tương ứng với mỗi policy */}
        {policies.map((policy, index) => (
          <CustomTabPanel key={index} value={value} index={index} policy={policy} />
        ))}
      </Box>
    </Container>
  );
}
