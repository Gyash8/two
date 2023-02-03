import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillYoutube,AiFillInstagram,AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minHeight={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading size='md' textTransform={'uppercase'} textAlign={'center'}>
                    Subscribes to get updates
                </Heading>
                <HStack
                borderBottom={'2px solid white'}>
                    <Input placeholder='Enter Email Here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'}/>
                    <Button p={'0'} variant={'ghost'} color={'purple'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    HORN PUB
                </Heading>
                <Text>
                    All Right Reserved
                </Text>
            </VStack>
            <VStack w={'full'}>
                <HStack>

                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'purple'}>
                    <a target={'blank'} href="http://Youtube.com">
                        <AiFillYoutube size={'40'}/>
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'purple'}>
                    <a target={'blank'} href="http://Instagram.com/yash0810">
                        <AiFillInstagram size={'40'}/>
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'purple'}>
                    <a target={'blank'} href="http://github.com/gyash8">
                        <AiFillGithub size={'40'}/>
                    </a>
                </Button>
                </HStack>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer