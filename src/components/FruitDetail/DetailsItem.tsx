import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface DetailsItemProps {
    title: string;
    content: string;
    table?: boolean
};

const DetailsItem: React.FC<DetailsItemProps> = ({ title, content, table = false }) => {

    return (
        <>
            {!table ? <Text style={styles.nutrition}>{title} {content}</Text> :
                <View style={styles.row}>
                    <Text style={styles.cell}>{title}</Text>
                    <Text style={styles.cell}>{content}</Text>
                </View>
            }
        </>
    )
}
const styles = StyleSheet.create({
    nutrition: {
        fontSize: 16,
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        fontSize: 16,
    }
})
export default DetailsItem;