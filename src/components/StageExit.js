import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../constants/colors';
import { Check, Repeat } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';

export const StageExit = ({ onFinish, onRepeat }) => {
    const handleExit = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        onFinish();
    };

    const handleRepeat = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onRepeat();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>How are you feeling?</Text>

            <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={handleExit}>
                <Check color="#fff" size={32} />
                <Text style={styles.buttonText}>I feel better</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={handleRepeat}>
                <Repeat color="#fff" size={32} />
                <Text style={styles.buttonText}>Continue calming</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing.l,
        gap: theme.spacing.xl,
    },
    title: {
        color: theme.colors.text,
        fontSize: theme.typography.h2.fontSize,
        fontWeight: theme.typography.h2.fontWeight,
        marginBottom: theme.spacing.l,
    },
    button: {
        width: '100%',
        height: 80,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.m,
    },
    buttonPrimary: {
        backgroundColor: theme.colors.success,
    },
    buttonSecondary: {
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    buttonText: {
        color: '#fff',
        fontSize: theme.typography.body.fontSize,
        fontWeight: '600',
    },
});
