import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../constants/colors';
import { StageBreathing } from './StageBreathing';
import { StageGrounding } from './StageGrounding';
import { StageAffirmation } from './StageAffirmation';
import { StageExit } from './StageExit';
import { StatusBar } from 'expo-status-bar';

const STAGES = {
    BREATHING: 0,
    GROUNDING: 1,
    AFFIRMATION: 2,
    EXIT: 3,
};

export const PanicFlow = ({ onExit }) => {
    const [stage, setStage] = useState(STAGES.BREATHING);

    const nextStage = () => {
        if (stage < STAGES.EXIT) {
            setStage(stage + 1);
        } else {
            onExit();
        }
    };

    const repeatStage = () => {
        // If exit, user can choose to continue calming (loop back to breathing or grounding?)
        // PRD says "Continue calming" -> maybe repeat breathing?
        setStage(STAGES.BREATHING);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" hidden={true} />
            {stage === STAGES.BREATHING && <StageBreathing onComplete={nextStage} />}
            {stage === STAGES.GROUNDING && <StageGrounding onComplete={nextStage} />}
            {stage === STAGES.AFFIRMATION && <StageAffirmation onComplete={nextStage} />}
            {stage === STAGES.EXIT && (
                <StageExit onFinish={onExit} onRepeat={repeatStage} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
