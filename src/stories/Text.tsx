interface TextProps {
  /**
   * Is this the primary style for the text?
   */
  primary?: boolean;
  /**
   * The text color if different of primary/not
   */
  color?: string;
  /**
   * The size of the text
   */
  size?: 'H1' | 'H2' | 'H3' | 'H4' | 'P';
  /**
   * The text content
   */
  label: string;
}

/**
 * Primary UI component for displaying text
 */
export const Text = ({
  primary,
  size = 'P',
  color,
  label,
  ...props
}: TextProps) => {
  const mode = primary ? 'storybook-text--primary' : 'storybook-text--secondary';
  return (
    <span
      className={['storybook-text', `storybook-text--${size}`, mode].join(' ')}
      style={{ color }}
      {...props}
    >
      {label}
    </span>
  );
};
