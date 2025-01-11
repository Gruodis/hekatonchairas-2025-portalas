import React from "react";

interface RadialGradientProps {
  centerColor: string;
  outerColor: string;
  size?: number;
  className?: string;
  // Additional customization options
  centerOpacity?: number; // Default: 1
  outerOpacity?: number; // Default: 0
  centerPosition?: {
    // Default: { x: 50, y: 50 }
    x: number; // Percentage (0-100)
    y: number; // Percentage (0-100)
  };
  radius?: number; // Percentage (0-100), Default: 50
}

export default function RadialGradient({
  centerColor,
  outerColor,
  size = 500,
  className,
  centerOpacity = 1,
  outerOpacity = 0,
  centerPosition = { x: 50, y: 50 },
  radius = 50,
}: RadialGradientProps): React.JSX.Element {
  const gradientId = `radialGradient-${centerColor.replace(
    "#",
    ""
  )}-${outerColor.replace("#", "")}-${centerOpacity.toString()}-${outerOpacity.toString()}`;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${size.toString()} ${size.toString()}`}
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-full max-w-[${size.toString()}px] max-h-[${size.toString()}px] ${className ?? ''}`}
    >
      <defs>
        <radialGradient
          id={gradientId}
          cx={`${centerPosition.x.toString()}%`}
          cy={`${centerPosition.y.toString()}%`}
          r={`${radius.toString()}%`}
          fx={`${centerPosition.x.toString()}%`}
          fy={`${centerPosition.y.toString()}%`}
        >
          <stop
            offset="0%"
            style={{
              stopColor: centerColor,
              stopOpacity: centerOpacity,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: outerColor,
              stopOpacity: outerOpacity,
            }}
          />
        </radialGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}
