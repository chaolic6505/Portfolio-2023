import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container, Divider } from '@chakra-ui/react';

import { tools, frameworks, languages } from '../constant';
import styles from '../../styles/Home.module.css';
import ProfileSection from '../section/ProfileSection';
import TechSkillsection from '../section/TechSkillsection';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className={styles.container}>
            <Head>
                <title>Chao Li</title>
                <meta property="og:title" content="Full Stack Developer"></meta>
                <meta name="description" content="Full Stack Developer" />
                <link rel="icon" href="/profile_picture.png" />
            </Head>

            <main>
                <Container
                    mt={['5', '10']}
                    mb={['5', '10']}
                    maxW="container.lg"
                >
                    <ProfileSection />
                    <Divider my={5} />
                    <TechSkillsection skills={languages} title={'Languages '} />
                    <Divider my={5} />
                    <TechSkillsection
                        skills={frameworks}
                        title={'Libraries and Frameworks'}
                    />
                    <Divider my={5} />
                    <TechSkillsection
                        skills={tools}
                        title={'Utils and Tools'}
                    />
                </Container>
            </main>
        </div>
    );
}
