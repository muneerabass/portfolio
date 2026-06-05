interface IconProps {
  size?: number;
  className?: string;
}

export function AppStoreIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function PlayStoreIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.18 23.76c.3.17.64.22.98.15l12.93-11.91-3.24-3.24L3.18 23.76zM20.54 10.23l-2.96-1.72-3.65 3.37 3.65 3.37 2.99-1.74c.85-.5.85-1.78-.03-2.28zM2.01.37C1.7.88 1.54 1.5 1.54 2.18v19.69c0 .68.16 1.3.47 1.81l.09.09 11.03-11.03v-.26L2.1.28l-.09.09zM13.41 12.5l3.35-3.35-11.03-6.37 7.68 9.72z" />
    </svg>
  );
}
