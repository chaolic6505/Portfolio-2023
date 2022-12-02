import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../lib/sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, the name's ${pageInfo?.name}`],
        loop: true,
        delaySpeed: 3000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <div className="z-20">
                <h2 className="mb-3 text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#68B2A0" />
                </h1>
            </div>
        </div>
    );
}