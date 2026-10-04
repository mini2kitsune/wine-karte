import type { ReactNode } from "react";
import { ClipboardIcon, InstagramIcon, ShareIcon } from "./icons";

function ActionButton({
  icon,
  title,
  sub,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      className="flex flex-col gap-[7px] rounded-[16px] border border-hair bg-white px-2.5 py-[13px] text-left shadow-act"
    >
      <span className="flex h-[26px] w-[26px] items-center">{icon}</span>
      <span className="text-[11.5px] font-semibold leading-[1.3] text-[#2c1116]">{title}</span>
      <span className="text-[10px] leading-[1.3] text-ink-mute">{sub}</span>
    </button>
  );
}

export default function ActionButtons() {
  return (
    <section className="mt-3.5 px-4">
      <div className="grid grid-cols-3 gap-2.5">
        <ActionButton
          icon={<ClipboardIcon className="h-[26px] w-[26px]" />}
          title="テイスティングコメントをコピー"
          sub="カルテの内容をコピー"
        />
        <ActionButton
          icon={<InstagramIcon className="h-[26px] w-[26px]" />}
          title="Instagram投稿用に整形"
          sub="見やすく・映える文章に変換"
        />
        <ActionButton
          icon={<ShareIcon className="h-[26px] w-[26px]" />}
          title="シェアする"
          sub="画像として共有"
        />
      </div>
    </section>
  );
}
