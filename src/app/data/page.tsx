import FetchData from "@/components/FetchData";
import { Card, CardBody, CardHeader, Heading, Stack, Text, StackDivider } from "@chakra-ui/react";

async function Data() {

    return (
        <Card size={'lg'} marginTop={10}>
        <CardHeader>
          <Heading size='md'>https://github.com/wh-iterabb-it/meowfacts</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <FetchData />
          </Stack>
        </CardBody>
      </Card>
    )
};

export default Data;