import React from 'react';
import {
    Box,
    Flex,
    Stack,
    VStack,
    Heading,
    Container,
    SlideFade,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import { AiFillEye } from 'react-icons/ai';
import { SiBookstack } from 'react-icons/si';
import { MdWorkOutline } from 'react-icons/md';

import { MotionBox } from '../utils/motion';
import { colors, companies, educations } from '../constant';
import styles from '../../styles/Home.module.css';
import Paragraph from '../components/Paragraph';
import CompanyCard from '../components/CompanyCard';

function Experiences() {
    const { colorMode } = useColorMode();
    return (
        <div className={styles.container}>
            <Head>
                <title>Experience</title>
                <meta name="description" content="Full Stack Developer" />
                <link rel="icon" href="/profile_picture.png" />
            </Head>

            <main>
                <Container
                    mt={['5', '10']}
                    mb={['5', '10']}
                    maxW="container.lg"
                >
                    <SlideFade in offsetX={80}>
                        <Box>
                            <Flex alignItems={'center'}>
                                <Stack pr={3}>
                                    <AiFillEye size={'50px'} />
                                </Stack>
                                <Heading
                                    color={useColorModeValue(
                                        colors.darkGray,
                                        colors.lightPink
                                    )}
                                >
                                    Present
                                </Heading>
                            </Flex>
                            <Paragraph
                                textProps={{
                                    my: 5,
                                    fontSize: 'lg',
                                    lineHeight: 1.6,
                                }}
                            >
                                In my current role as the lead mobile developer
                                at Sitemax Systems, I am responsible for
                                monitoring performance, updating library
                                dependencies, and implementing new features for
                                the mobile app using React Native and Redux. I
                                have also created custom PDF forms for clients
                                and updated content and style for the company's
                                website.
                            </Paragraph>

                            <Flex alignItems="center" my={10}>
                                <Flex alignItems={'center'}>
                                    <Stack pr={3}>
                                        <MdWorkOutline size={'40px'} />
                                    </Stack>

                                    <Heading
                                        color={useColorModeValue(
                                            colors.darkGray,
                                            colors.lightPink
                                        )}
                                    >
                                        Work Experience
                                    </Heading>
                                </Flex>
                            </Flex>

                            <VStack
                                mt={5}
                                align="left"
                                spacing={4}
                                mx={[0, 0, 6]}
                                marginBottom={6}
                            >
                                {companies.map((company, index) => (
                                    <MotionBox
                                        key={index}
                                        whileHover={{ y: -5 }}
                                    >
                                        <CompanyCard
                                            key={index}
                                            company={company}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>

                            <Flex alignItems="center" my={10}>
                                <Flex alignItems="center">
                                    <Stack pr={3}>
                                        <SiBookstack size={'30px'} />
                                    </Stack>
                                    <Heading
                                        color={useColorModeValue(
                                            colors.darkGray,
                                            colors.lightPink
                                        )}
                                    >
                                        Education
                                    </Heading>
                                </Flex>
                            </Flex>

                            <VStack
                                spacing={4}
                                marginBottom={6}
                                align="left"
                                mx={[0, 0, 6]}
                                mt={5}
                            >
                                {educations.map((education, index) => (
                                    <MotionBox
                                        whileHover={{ y: -5 }}
                                        key={index}
                                    >
                                        <CompanyCard
                                            key={index}
                                            company={education}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>
                        </Box>
                    </SlideFade>
                </Container>
            </main>
        </div>
    );
}

export default Experiences;
