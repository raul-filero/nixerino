type Props = {
  size?: number;
  color?: string;
  strokeWidth?: number;
};

export default function CapybaraIcon({ size = 18, color = "currentColor", strokeWidth = 1.6 }: Props) {
  // Silueta capibara minimalista: hocico, cuerpo bajo, patas cortas, oreja diminuta.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M3 19c0-3.4 2.8-6 6.5-6h11c4.5 0 8.5 2.4 9.5 6.5.3 1.3-.6 2.5-2 2.5h-1.2l-.8 2c-.2.6-.8 1-1.4 1h-1.6c-.6 0-1.2-.4-1.4-1l-.6-1.5h-9l-.6 1.5c-.2.6-.8 1-1.4 1H8.4c-.6 0-1.2-.4-1.4-1l-.8-2H5c-1.1 0-2-.9-2-2v-1Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <circle cx="25" cy="17.5" r="0.9" fill={color} />
      <path d="M22 13.5c0-.8.4-1.5 1-1.8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
