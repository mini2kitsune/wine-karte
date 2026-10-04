/** Renders a 0–5 star rating with half-star support, matching the mockup. */
const STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4 9.1 8.5z";

export default function StarRating({
  value,
  size = 22,
}: {
  value: number;
  size?: number;
}) {
  return (
    <div className="flex gap-0.5" aria-label={`総合評価 ${value} / 5.0`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(value - i, 0), 1); // 0, .5 or 1
        const gid = `star-half-${i}`;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            width={size}
            height={size}
            aria-hidden="true"
          >
            {fill > 0 && fill < 1 && (
              <defs>
                <linearGradient id={gid}>
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#E2D7BE" />
                </linearGradient>
              </defs>
            )}
            <path
              d={STAR_PATH}
              fill={
                fill === 1 ? "#D4AF37" : fill === 0 ? "#E2D7BE" : `url(#${gid})`
              }
            />
          </svg>
        );
      })}
    </div>
  );
}
