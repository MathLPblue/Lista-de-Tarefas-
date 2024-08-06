import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';

export default TodoList = ({list}) => {
    return (
        <View style = {[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listTitle} numberOfLines={2}> 
                {list.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.white,
        marginBottom: 18,
        flexWrap: 'wrap',
        flex: 1
    }
})
