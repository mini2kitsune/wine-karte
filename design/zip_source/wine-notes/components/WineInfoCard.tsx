import type { Wine } from "@/lib/wine";
import {
  CalendarIcon,
  CameraIcon,
  CartIcon,
  FlagFR,
  GrapeChipIcon,
  PriceTagIcon,
  RedWineIcon,
} from "./icons";

function TypeChip({
  label,
  icon,
}: {
  label: string;
  icon: "red" | "flag-fr" | "grape";
}) {
  return (
    <span className="inline-flex items-center gap-[3px] whitespace-nowrap rounded-full border border-hair bg-white px-[5px] py-[3px] text-[10px] text-ink-soft">
      {icon === "red" && <RedWineIcon className="h-[11px] w-[11px] shrink-0" />}
      {icon === "flag-fr" && (
        <span className="inline-flex h-[11px] w-[11px] shrink-0 overflow-hidden rounded-[2px]">
          <FlagFR className="h-full w-full" />
        </span>
      )}
      {icon === "grape" && (
        <GrapeChipIcon className="h-[11px] w-[11px] shrink-0" />
      )}
      {label}
    </span>
  );
}

function MetaIcon({ icon }: { icon?: "calendar" | "price" | "cart" }) {
  if (!icon) return null;
  const cls = "h-[14px] w-[14px] text-gold-deep";
  if (icon === "calendar") return <CalendarIcon className={cls} />;
  if (icon === "price") return <PriceTagIcon className={cls} />;
  return <CartIcon className={cls} />;
}

export default function WineInfoCard({ wine }: { wine: Wine }) {
  return (
    <section className="mt-3.5 px-4">
      <div className="flex gap-3 rounded-[22px] border border-hair bg-white p-3 shadow-card">
        {/* Photo */}
        <div className="relative w-[116px] shrink-0 self-start overflow-hidden rounded-[16px] shadow-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={wine.photo}
            alt={`${wine.name} ${wine.vintage}`}
            className="block h-full w-full object-cover"
          />
          <button
            type="button"
            aria-label="写真を変更"
            className="absolute bottom-2 right-2 flex h-[36px] w-[36px] items-center justify-center rounded-full border-[1.5px] border-gold bg-[#1e0c0a]/80 text-gold backdrop-blur-[2px]"
          >
            <CameraIcon className="h-[18px] w-[18px]" />
          </button>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1 pt-0.5">
          <h1 className="mb-2.5 font-pf text-[19px] font-semibold leading-[1.18] tracking-[.2px] text-[#241015]">
            {wine.name} <span className="text-[15px] font-medium">{wine.vintage}</span>
          </h1>

          <div className="mb-3 flex flex-nowrap gap-[3px]">
            {wine.types.map((t) => (
              <TypeChip key={t.label} label={t.label} icon={t.icon} />
            ))}
          </div>

          <dl className="flex flex-col gap-[7px]">
            {wine.meta.map((row) => (
              <div key={row.label} className="flex items-center gap-2 text-[12px]">
                <dt className="flex min-w-[62px] shrink-0 items-center gap-1.5 text-ink-mute">
                  <MetaIcon icon={row.icon} />
                  {row.label}
                </dt>
                <dd className="whitespace-nowrap font-medium text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
