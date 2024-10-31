"use client"
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { useRouter } from 'next/navigation';
import Script from 'next/dist/client/script';
import { useState, useEffect } from 'react';

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>({});

  const navigatePage = (page: string) => {
    router.push(`/${page}`);
  };

  useEffect(() => {
    // Check if the Telegram Web App API is available
    if (window.Telegram && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      // Get user information
      const user = tg.initDataUnsafe.user;

      // Check if the user has a username
      if (user?.username) {
        setUser(user);
      } else {
        setUser({username: "no user name"});
      }

      // Optionally, you can also get other user information
      // console.log('User ID:', user?.id);
      // console.log('First Name:', user?.first_name);
      // console.log('Last Name:', user?.last_name);
    }
  }, []);

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
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
        {/* <TonConnectButton className='my-2' /> */}
        <div className='text-white'>
          {/* {`${user.username}`}
          {`${user.id}`}
          {`${user.first_name}`}
          {`${user.last_name}`} */}
        </div>
      </div>
    </TonConnectUIProvider>
  );
};


export default Home;
