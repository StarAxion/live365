import React from 'react';
import Header from './Header';
import SearchPart from './SearchPart';
import GroovePart from './GroovePart';
import DevicesPart from './DevicesPart';
import RadioStationPart from './RadioStationPart';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SearchPart />
        <GroovePart />
        <DevicesPart />
        <RadioStationPart />
      </main>
      <Footer />
    </>
  )
}

export default Home;
