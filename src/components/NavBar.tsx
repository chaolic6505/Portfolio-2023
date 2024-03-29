/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
    Link,
    Box,
    Flex,
    Stack,
    Avatar,
    HStack,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { colors, navLinks } from '../constant';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const NavBar = () => {
    let menuColor = useColorModeValue(colors.lightText, colors.lightText);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navItem = (
        <>
            {navLinks.map((link) => (
                <NextLink href={link.route} key={link.name} passHref>
                    <Link
                        px={2}
                        py={1}
                        rounded={'lg'}
                        fontWeight="700"
                        href={link.route}
                        onClick={isOpen ? onClose : onOpen}
                        color={useColorModeValue(
                            colors.darkGray,
                            colors.lighterPink
                        )}
                        _hover={{
                            textDecoration: 'none',
                            bg: useColorModeValue('gray.300', 'pink.900'),
                        }}
                    >
                        {link.name}
                    </Link>
                </NextLink>
            ))}
        </>
    );

    return (
        <>
            <Box
                px={4}
                boxShadow={'lg'}
                bg={useColorModeValue('white', 'gray.900')}
            >
                <Flex
                    h={16}
                    mx="auto"
                    alignItems={'center'}
                    maxW={'container.lg'}
                    w={['95%', '95%', '95%']}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        color={menuColor}
                        aria-label={'Toggle Menu'}
                        display={['inherit', 'inherit', 'none']}
                        onClick={isOpen ? onClose : onOpen}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Avatar
                            href="/"
                            size="md"
                            as={Link}
                            src="/avatar.png"
                            _hover={{ borderColor: menuColor }}
                        />
                        <HStack
                            as="nav"
                            spacing="4"
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {navItem}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Flex>
                </Flex>

                {isOpen && (
                    <Box
                        pb={4}
                        w={['100%', '100%', '80%']}
                        maxW={'container.lg'}
                        display={['inherit', 'inherit', 'none']}
                    >
                        <Stack as={'nav'} spacing={4}>
                            {navItem}
                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default NavBar;
