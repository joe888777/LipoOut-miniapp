"use client"
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const navigatePage = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <TonConnectUIProvider
      manifestUrl="https://325e-114-35-55-85.ngrok-free.app/tonconnect-manifest.json"
      walletsListConfiguration={{
        includeWallets: [
            {
                appName: "telegram-wallet",
                name: "Wallet",
                imageUrl: "https://wallet.tg/images/logo-288.png",
                aboutUrl: "https://wallet.tg/",
                universalLink: "https://t.me/wallet/start",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
            }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/https://t.me/beshinebot/myapp'
    }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        <TonConnectButton className='my-2' />
      </div>
    </TonConnectUIProvider>
  );
};


export default Home;
