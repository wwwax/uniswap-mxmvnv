import React from 'react';
import { StyledConnectWallet } from './styles';
import { hooks, metaMask } from '@/connectors/metaMask';

const ConnectWallet: React.FC = () => {
  const { useAccount } = hooks;
  const account = useAccount();

  const handleClick = async () => {
    await metaMask.activate();
  };

  return (
    <StyledConnectWallet onClick={handleClick}>
      {account ? account.slice(0, 8) : 'Connect'}
    </StyledConnectWallet>
  );
};

export { ConnectWallet };
