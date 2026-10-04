import type { SVGProps } from "react";

/* Thin, consistent line/solid icons matching the Wine Notes mockup. */

type IconProps = SVGProps<SVGSVGElement>;

export function BackIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function DotsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" />
    </svg>
  );
}

export function PriceTagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12.2V4a1 1 0 0 1 1-1h8.2a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.4 12.4a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L22 7H6" />
    </svg>
  );
}

export function RedWineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7A1322" strokeWidth={1.6} {...props}>
      <path d="M8 3h8l-.5 6a3.5 3.5 0 0 1-7 0L8 3z" />
      <line x1="12" y1="12.5" x2="12" y2="20" />
      <line x1="8.5" y1="20.5" x2="15.5" y2="20.5" />
    </svg>
  );
}

export function GrapeChipIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7A1322" strokeWidth={1.5} {...props}>
      <circle cx="9" cy="14" r="2.4" />
      <circle cx="14.5" cy="14" r="2.4" />
      <circle cx="11.7" cy="18" r="2.4" />
      <path d="M12 9c0-2 1.5-3.5 3.5-3.5" />
    </svg>
  );
}

export function FlagFR(props: IconProps) {
  return (
    <svg viewBox="0 0 24 16" {...props}>
      <rect width="8" height="16" fill="#0A2A6B" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#C8102E" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 21s-7.5-4.6-9.6-9.1C.9 8.6 2.6 5.5 5.7 5.5c1.9 0 3.2 1.1 4.3 2.6 1.1-1.5 2.4-2.6 4.3-2.6 3.1 0 4.8 3.1 3.3 6.4C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function NeutralFace(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <line x1="8" y1="14.5" x2="16" y2="14.5" />
      <circle cx="8.5" cy="9.5" r="1" />
      <circle cx="15.5" cy="9.5" r="1" />
    </svg>
  );
}

export function SadFace(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 16c1-1.6 2.4-2.4 4-2.4S15 14.4 16 16" />
      <circle cx="8.5" cy="9.5" r="1" />
      <circle cx="15.5" cy="9.5" r="1" />
    </svg>
  );
}

export function EditIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A9842A" strokeWidth={1.6} {...props}>
      <rect x="8" y="2.5" width="8" height="4" rx="1.2" />
      <rect x="5" y="4.5" width="14" height="18" rx="2.4" />
      <line x1="8.5" y1="11" x2="15.5" y2="11" />
      <line x1="8.5" y1="15" x2="13.5" y2="15" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="#C13584" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4.2" stroke="#C13584" strokeWidth={1.8} />
      <circle cx="17.3" cy="6.7" r="1.2" fill="#C13584" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7A1322" strokeWidth={1.7} {...props}>
      <path d="M12 16V4" />
      <path d="M8 8l4-4 4 4" />
      <path d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
    </svg>
  );
}

export function WineGlassIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M6 3h12l-1 7a5 5 0 0 1-10 0L6 3z" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="8" y1="21.5" x2="16" y2="21.5" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
