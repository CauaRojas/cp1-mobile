import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
    const [data, setData] = useState<
        {
            nome: string;
            id: number;
        }[]
    >([]);

    useEffect(() => {
        fetch('http://192.168.15.10:8080/')
            .then((response) => response.json())
            .then((json) => setData(json));
    });

    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 24,
                }}>
                Projeto básico
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Text>
                        {item.id}: {item.nome}
                    </Text>
                )}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
});
