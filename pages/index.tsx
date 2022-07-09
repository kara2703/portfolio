import Header from '@components/Header';
import Img from 'next/image';
import Page from '@components/Page';
import React from 'react';
import SocialLinks from '@components/SocialLinks';
import SvgWave from '@components/SvgWave';
import backgroundImage from '../public/assets/background.jpg';
import meImage from '../public/assets/final1.jpg';


export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Page noContainer title="Home" description="Learn more about me.">
      <div className="relative flex h-screen" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ zIndex: -1 }} id="top">
          <Img
            src={backgroundImage}
            placeholder="blur"
            alt="Crested Butte Mountains"
            layout="fill"
            quality={60}
            objectPosition="50% 50%"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ zIndex: -1, backgroundColor: '#000000aa' }}
        />
        <div className="z-10 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="overflow-hidden rounded-full" style={{ height: 200, width: 200 }}>
              <Img
                src={meImage}
                placeholder="blur"
                alt="Anoushka Rakesh Kabra"
                layout="fixed"
                width={200}
                height={200}
              />
            </div>

            <h1 className="text-6xl font-bold text-rose-600">Hi!</h1>

            <h2 className="text-5xl font-bold text-white">I'm Anoushka Rakesh Kabra</h2>

            <h3 className="text-2xl text-white">
              and I'm a <span className="text-2xl font-bold">Software Engineer</span>
            </h3>

            <SocialLinks color="text-white" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <SvgWave />
          <Header bottomNav />
        </div>
      </div>
    </Page>
  );
};

export default Home;
