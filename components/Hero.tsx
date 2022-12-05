import React from 'react';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name's ${pageInfo?.name}`,
            "Guy-who-loves-Food.tsx",
            "<LovesCodingToo />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <div className="z-20">
                <h3 className="mb-3 text-sm uppercase text-gray-600 pb-2 tracking-[10px] md:tracking-[15px]">
                    {pageInfo?.role}
                </h3>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#68B2A0" />
                </h1>

                <div className="pt-5 mt-3">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
