import React from 'react';
import { ConnectWallet } from '../connectWallet';
import { StyledHeader } from './styles';
import { UniswapLogo } from '../uniswapLogo';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <UniswapLogo />
      <ConnectWallet />
    </StyledHeader>
  );
};

export { Header };
