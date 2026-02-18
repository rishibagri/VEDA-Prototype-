import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../constants/colors';
import { Footprints, Watch, Wind, CircleCheck } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export const StageGrounding = ({ onComplete }) => {
    const handlePress = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onComplete();
    };

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handlePress}>
            <Text style={styles.heading}>Name 3 things you can feel.</Text>

            <View style={styles.iconsRow}>
                <View style={styles.iconContainer}>
                    <Footprints color={theme.colors.primary} size={48} />
                    <Text style={styles.label}>Feet</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Watch color={theme.colors.primary} size={48} />
                    <Text style={styles.label}>Watch</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Wind color={theme.colors.primary} size={48} />
                    <Text style={styles.label}>Air</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <CircleCheck color={theme.colors.secondary} size={32} />
                <Text style={styles.tapText}>Tap when done</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing.m,
    },
    heading: {
        color: theme.colors.text,
        fontSize: theme.typography.h2.fontSize,
        textAlign: 'center',
        marginBottom: theme.spacing.xxl,
    },
    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: theme.spacing.xxl,
    },
    iconContainer: {
        alignItems: 'center',
    },
    label: {
        color: theme.colors.subtext,
        marginTop: theme.spacing.s,
        fontSize: theme.typography.label.fontSize,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
        opacity: 0.8,
    },
    tapText: {
        color: theme.colors.secondary,
        marginTop: theme.spacing.s,
        fontSize: theme.typography.body.fontSize,
    },
});
