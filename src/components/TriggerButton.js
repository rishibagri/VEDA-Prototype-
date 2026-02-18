import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { theme } from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

export const TriggerButton = ({ onTrigger }) => {
    const scaleAnim = React.useRef(new Animated.Value(1)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.1,
                    duration: 1500,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease),
                }),
            ])
        ).start();
    }, []);

    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        onTrigger();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CalmStep</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
                <Animated.View style={[styles.buttonWrapper, { transform: [{ scale: scaleAnim }] }]}>
                    <LinearGradient
                        colors={[theme.colors.danger, '#EF4444']}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>SOS</Text>
                    </LinearGradient>
                </Animated.View>
            </TouchableOpacity>
            <Text style={styles.hint}>Tap for immediate help</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        gap: 40,
    },
    title: {
        color: theme.colors.text,
        fontSize: theme.typography.h1.fontSize,
        fontWeight: '800',
        opacity: 0.8,
    },
    buttonWrapper: {
        shadowColor: theme.colors.danger,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 10,
    },
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    buttonText: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '900',
        letterSpacing: 2,
    },
    hint: {
        color: theme.colors.subtext,
        fontSize: theme.typography.body.fontSize,
        opacity: 0.6,
    },
});
