import { Box } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import { useState } from 'react';

export default function DefaultLayout({ children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="bg-background-color">
      <Header onSearchClose={handleSearchClose} isSearchOpen={isSearchOpen} />
      <SideBar onSearchOpen={handleSearchOpen} />
      <Box>{children}</Box>
      <Footer />
    </div>
  );
}
