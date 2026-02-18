import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { theme } from '../constants/colors';

export const StageBreathing = ({ onComplete }) => {
    const scale = new Animated.Value(1);

    useEffect(() => {
        startBreathing();
        const timer = setTimeout(onComplete, 30000);
        return () => clearTimeout(timer);
    }, []);

    const startBreathing = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 2.5,
                duration: 4000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 6000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start(() => startBreathing());
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>You're safe.</Text>
            <Text style={styles.subHeading}>Breathe with me.</Text>

            <Animated.View
                style={[
                    styles.circleWrapper,
                    { transform: [{ scale }] }
                ]}
            >
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.secondary]}
                    style={styles.circle}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    heading: {
        color: theme.colors.text,
        fontSize: theme.typography.h2.fontSize,
        fontWeight: theme.typography.h2.fontWeight,
        marginBottom: 10,
        marginTop: -40,
    },
    subHeading: {
        color: theme.colors.subtext,
        fontSize: theme.typography.body.fontSize,
        marginBottom: 60,
    },
    circleWrapper: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        opacity: 0.6,
    },
});
