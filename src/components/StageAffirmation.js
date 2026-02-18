import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { theme } from '../constants/colors';

const MESSAGES = [
    "This will pass.",
    "Your body is reacting, not failing.",
    "You are in control."
];

export const StageAffirmation = ({ onComplete }) => {
    const [index, setIndex] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    // Function to animate text in and out
    const animateText = (onFinish) => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.delay(3000), // Show for 3s
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(() => {
            if (onFinish) onFinish();
        });
    };

    useEffect(() => {
        if (index < MESSAGES.length) {
            animateText(() => {
                if (index < MESSAGES.length - 1) {
                    setIndex(index + 1);
                } else {
                    onComplete(); // All done
                }
            });
        }
    }, [index]);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
                {MESSAGES[index]}
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.xl,
        width: '100%',
    },
    text: {
        color: theme.colors.text,
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.h1.fontWeight,
        textAlign: 'center',
        lineHeight: theme.typography.h1.lineHeight,
    },
});
