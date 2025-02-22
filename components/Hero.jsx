'use client';

import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';

// React Awesome Reveal Animation
import { Fade } from 'react-awesome-reveal';

// React Icons
import { RiBodyScanFill, RiBookmark3Fill, RiMenFill, RiServiceFill } from 'react-icons/ri';

// Import Components
import Socials from './Socials';
import HeroImg from './HeroImg';
import Badge from './Badge';

// Intersection Observer
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const { ref: badgeSectionRef, inView: badgeSectionInView } = useInView({
    triggerOnce: true, // Carrega apenas uma vez quando entra na tela
    threshold: 0.5,    // Carrega quando 50% da seção estiver visível
    });

    return (
    <section className="pt-12 h-[auto] bg-bottom">
        <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
            {/* Left side */}
            <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Photography
                </div>
            </Fade>

            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                <h1 className="h1 uppercase">Lat's make Magic!</h1>
            </Fade>

            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
                We are fine art, nature & portrait film photographers from San Francisco, with
                a special love for natural light, medium format film cameras & redheads with freckles.
                </p>
            </Fade>

            <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                {/* Subscribe Button */}
                <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <div className="flex w-full gap-x-4">
                    <label htmlFor="email-address" className="sr-only">Email Address</label>
                    <Input type="email" id="email" placeholder="Email" />
                    <Link href="/contact">
                    <Button className="gap-x-2 bg-black">
                        Subscribe <RiMenFill size={18} />
                    </Button>
                    </Link>
                </div>
                </div>
            </Fade>

            <Fade direction="up" delay={1200} cascade damping={1e-1} triggerOnce={true}>
                {/* Social Icons */}
                <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                />
            </Fade>
            </div>

            {/* Banner Image */}
            <div className="hidden xl:flex relative">
            <HeroImg
                imgSrc="/about/photography.svg"
                containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
            />
            </div>
        </div>

        {/* Badge Section - Carrega apenas quando entrar na tela */}
        <div ref={badgeSectionRef} className="py-24 sm:py-32">
            {badgeSectionInView && (
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                
                    {/* Badge 1 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-muted-foreground">Years Of Experience</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
                        <Badge
                        icon={<RiBookmark3Fill />}
                        endCountNum={12}
                        endCountText="+"
                        badgeText=""
                        />
                    </Fade>
                    </dd>
                    </div>

                    {/* Badge 2 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-muted-foreground">Followers</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
                        <Badge
                        icon={<RiBodyScanFill />}
                        endCountNum={967}
                        endCountText="k"
                        />
                    </Fade>
                    </dd>
                    </div>

                    {/* Badge 3 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-muted-foreground">Projects</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
                        <Badge
                        icon={<RiServiceFill />}
                        endCountNum={79}
                        endCountText="+"
                        />
                    </Fade>
                    </dd>
                    </div>
                </dl>
            </div>
            )}
        </div>
        </div>
    </section>
    );
};

export default Hero;
