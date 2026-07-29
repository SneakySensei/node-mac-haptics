const isSupported = process.platform === 'darwin';

const haptics = isSupported ? require('bindings')('haptics.node') : null;

const performFeedback = (pattern = 'NSHapticFeedbackPatternGeneric', performanceTime = 'NSHapticFeedbackPerformanceTimeNow') => {
    if (!['NSHapticFeedbackPatternLevelChange', 'NSHapticFeedbackPatternAlignment', 'NSHapticFeedbackPatternGeneric'].includes(pattern)) {
        throw new TypeError('Invalid pattern provided');
    }

    if (!['NSHapticFeedbackPerformanceTimeDefault', 'NSHapticFeedbackPerformanceTimeDrawCompleted', 'NSHapticFeedbackPerformanceTimeNow'].includes(performanceTime)) {
        throw new TypeError('Invalid performance time provided');
    }

    if (!isSupported) {
        return;
    }

    return haptics.performFeedback(pattern, performanceTime);
};

module.exports = {
    isSupported,
    performFeedback,
};
