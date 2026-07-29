export type HapticFeedbackPattern = 'NSHapticFeedbackPatternLevelChange'|'NSHapticFeedbackPatternAlignment'|'NSHapticFeedbackPatternGeneric';
export type HapticFeedbackPerformanceTime = 'NSHapticFeedbackPerformanceTimeDefault'|'NSHapticFeedbackPerformanceTimeDrawCompleted'|'NSHapticFeedbackPerformanceTimeNow';

/**
 * Whether haptic feedback is supported on the current platform (macOS only).
 * On unsupported platforms `performFeedback` is a no-op.
 */
export const isSupported: boolean;

export function performFeedback(pattern?: HapticFeedbackPattern, performanceTime?: HapticFeedbackPerformanceTime): void;