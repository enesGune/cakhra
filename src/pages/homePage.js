
import React, { Component } from "react";
import { theme, property } from "../ch/ch";
import { Text, Heading, Button, Stack, HStack, VStack, Menu, MenuButton, MenuList, MenuItem, Box, Badge, Image, Tag, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverCloseButton, PopoverArrow, FormControl, FormLabel, Input, FormHelperText, RadioGroup, Radio } from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon } from '@chakra-ui/icons'

class HomePageComponent extends Component {

    render() {
        return (
            <div style={theme}>
                <FormControl as="fieldset">
                    <FormLabel as="legend">Favorite Naruto Character</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                        <HStack spacing="24px">
                            <Radio value="Sasuke">Sasuke</Radio>
                            <Radio value="Nagato">Nagato</Radio>
                            <Radio value="Itachi">Itachi</Radio>
                            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormHelperText>Select only if you're a fan.</FormHelperText>
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <br />
                <Popover>
                    <PopoverTrigger>
                        <Button>Trigger</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                    </PopoverContent>
                </Popover>
                <br />
                <br />
                <br />
                <br />
                <br />
                <HStack spacing={4}>
                    {["sm", "md", "lg"].map((size) => (
                        <Tag size={size} key={size} variant="solid" colorScheme="teal">
                            Teal
                        </Tag>
                    ))}
                </HStack>

                <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p="6">
                        <Box display="flex" alignItems="baseline">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                New
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as="span" color="gray.600" fontSize="sm">
                                / wk
                            </Box>
                        </Box>

                        <Box display="flex" mt="2" alignItems="center">
                            {Array(5)
                                .fill("")
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < property.rating ? "teal.500" : "gray.300"}
                                    />
                                ))}
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <Heading size="lg" fontSize="50px">
                    I'm overriding this heading
                </Heading>

                <Text fontSize="100px" color="tomato">
                    I'm using a custom font-size value for this text
                </Text>

                <Text fontSize="50px" color="gray" isTruncated>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and
                    publishing industries for previewing layouts and visual mockups.
                </Text>
            </div>
        );
    }
}

export default HomePageComponent;