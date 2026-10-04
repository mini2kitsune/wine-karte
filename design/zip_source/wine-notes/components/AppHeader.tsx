import { BackIcon, DotsIcon } from "./icons";

export default function AppHeader() {
  return (
    <header className="hd-grad relative px-5 pt-[18px] pb-4 text-center">
      <button
        type="button"
        aria-label="戻る"
        className="absolute left-3.5 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center text-[#e8d2a0]/90"
      >
        <BackIcon className="h-[22px] w-[22px]" />
      </button>

      <div className="flex flex-col items-center gap-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/grape_t.png"
          alt=""
          className="-mb-1 w-[28px] drop-shadow-[0_1px_2px_rgba(0,0,0,.4)]"
        />
        <div className="tt-shadow flex items-center gap-2.5 whitespace-nowrap font-script text-[36px] leading-none text-[#E9C766]">
          <span className="font-pf text-[25px] italic text-[#C9A24A]">~</span>
          Wine Notes
          <span className="font-pf text-[25px] italic text-[#C9A24A]">~</span>
        </div>
      </div>

      <button
        type="button"
        aria-label="メニュー"
        className="absolute right-3.5 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center text-[#e8d2a0]/90"
      >
        <DotsIcon className="h-[22px] w-[22px]" />
      </button>
    </header>
  );
}
