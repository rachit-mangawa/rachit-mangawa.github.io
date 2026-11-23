import React from 'react';

export function ArrowUpRight({ className = "w-2.5 h-2.5", ...props }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M3 9L9 3M4 3h5v5" />
    </svg>
  );
}

export function ArrowDown({ className = "w-2.5 h-2.5", ...props }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M6 2.5v7M2.5 6.5L6 10l3.5-3.5" />
    </svg>
  );
}

export function ArrowUp({ className = "w-2.5 h-2.5", ...props }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M6 9.5v-7M2.5 5.5L6 2l3.5 3.5" />
    </svg>
  );
}
