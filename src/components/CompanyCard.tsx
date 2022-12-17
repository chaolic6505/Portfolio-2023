import React from 'react';
import {
    Tag,
    Flex,
    Text,
    Stack,
    Image,
    LinkBox,
    Heading,
    LinkOverlay,
    useColorModeValue,
    Wrap,
    WrapItem,
    Container,
} from '@chakra-ui/react';
import { Company } from '../../typings';
import { colors } from '../constant';

interface ICompanyCard {
    company: Company;
    colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
    let bgColor = useColorModeValue('white', 'gray.800');
    let borderColor = useColorModeValue('gray.100', 'gray.700');
    let tagColor = useColorModeValue(colors.lightBlue, colors.lightBlue);
    let tagBgColor = useColorModeValue(colors.lighterPink, colors.lightPink);

    return (
        <LinkBox
            px={4}
            py={5}
            rounded="xl"
            position="relative"
            borderWidth="1px"
            bg={bgColor}
            borderColor={borderColor}
            _hover={{
                borderColor: colors.lightPink,
            }}
        >
            <LinkOverlay href={company.url} rel="noopener" isExternal>
                <Flex justifyContent="space-between">
                    <Flex>
                        <Image
                            h={16}
                            w={16}
                            rounded="full"
                            objectFit="cover"
                            alt={company.alt}
                            src={company.logo}
                        />
                        <Container pl={3}>
                            <Heading
                                fontSize="xl"
                                color={`mode.${colorMode}.career.text`}
                            >
                                {company.title}
                            </Heading>
                            <Heading
                                fontSize="lg"
                                color={`mode.${colorMode}.career.subtext`}
                            >
                                {company.role}
                            </Heading>
                            <Wrap mt={5} spacing={1} alignItems="center">
                                {company.jobs.map((job) => (
                                    <WrapItem key={job}>
                                        <Tag
                                            size="md"
                                            key={job}
                                            color={tagColor}
                                            padding="0 10px"
                                        >
                                            {job}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                            <Wrap
                                mt={5}
                                spacing={1}
                                alignItems="center"
                                display={['wrap', 'wrap', 'wrap', 'wrap']}
                                direction={['row', 'row', 'row', 'row']}
                            >
                                {company.skills.map((skill) => (
                                    <WrapItem key={skill}>
                                        <Tag
                                            size="md"
                                            key={skill}
                                            color={tagBgColor}
                                            padding="0 10px"
                                        >
                                            {skill}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </Container>
                    </Flex>
                    <Stack>
                        <Text fontSize={14} color={colors.lightPink}>
                            {company.period}
                        </Text>
                    </Stack>
                </Flex>
                {/* <Stack
                    mt={5}
                    spacing={1}
                    alignItems="center"
                    display={['wrap', 'wrap', 'none', 'none']}
                    direction={['row', 'row', 'column', 'column']}
                    justifyContent="flex-start"
                    alignContent={['flex-start', 'flex-start', 'center', 'center']}
                    alignSelf={['flex-start', 'flex-start', 'center', 'center']}
                >
                    {company.skills.map((skill) => (
                        <Tag
                            size="sm"
                            key={skill}
                            padding="0 px"
                            color={tagBgColor}
                        >
                            {skill}
                        </Tag>
                    ))}
                </Stack> */}
            </LinkOverlay>
        </LinkBox>
    );
};

export default CompanyCard;
