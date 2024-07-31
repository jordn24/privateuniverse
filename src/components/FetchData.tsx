'use client';
import { Text } from '@chakra-ui/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const FetchData = () => {
    // Used a next route to avoid cors issue
    const { data, error, isLoading } = useSWR('/api/fetchFacts', fetcher);

    if (error) {
        console.error('Error fetching data:', error);
        return <Text>Failed to load....</Text>;
    }
    if (isLoading) return <Text>Loading....</Text>;

    return (<Text>{data.data}</Text>);
};

export default FetchData;
