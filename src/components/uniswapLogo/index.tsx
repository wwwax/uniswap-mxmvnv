import Image from 'next/image';

export const UniswapLogo: React.FC = () => {
  return (
    <Image
      src="./uniswap-logo.svg"
      alt="uniswap-logo"
      width={64}
      height={64}
      priority
    />
  );
};
