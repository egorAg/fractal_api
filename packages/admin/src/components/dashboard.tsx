import { Box, H2, H3, Link, Text } from '@adminjs/design-system';
import React from 'react';
import { styled } from 'styled-components';

const pageHeaderHeight = 284;
const pageHeaderPaddingY = 74;
const pageHeaderPaddingX = 250;

export const DashboardHeader: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" data-css="default-dashboard">
      <Box
        bg="grey100"
        height={pageHeaderHeight}
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>Информационная страница</H2>
          <Text opacity={0.8}>
            На данной странице размещены ресурсы нашей компании
          </Text>
        </Text>
      </Box>
    </Box>
  );
};


const Dashboard: React.FC = () => {
  return (
    <Box>
      <DashboardHeader />
      <Box
        mt={['xl', 'xl', '-100px']}
        mb="xl"
        mx={[0, 0, 0, 'auto']}
        px={['default', 'lg', 'xxl', '0']}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        <div className="text">
          <p> HELLO THERE </p>
        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;
