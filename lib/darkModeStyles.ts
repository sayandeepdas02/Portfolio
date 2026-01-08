// Utility function to create dark-mode compatible style objects
export const darkModeStyles = {
    text: {
        primary: { color: 'var(--text-primary)' },
        secondary: { color: 'var(--text-secondary)' },
        tertiary: { color: 'var(--text-tertiary)' },
    },
    border: {
        default: { borderColor: 'var(--border-color)' },
    },
    background: {
        default: { backgroundColor: 'var(--background)' },
        card: { backgroundColor: 'var(--card-bg)' },
        hover: { backgroundColor: 'var(--hover-bg)' },
    },
};
