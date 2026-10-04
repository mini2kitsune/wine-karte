import { SEAL_SRC, type TastingNote } from "@/lib/wine";
import { EditIcon } from "./icons";

function Body({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function Row({ note }: { note: TastingNote }) {
  return (
    <div className="flex items-center gap-3.5 border-t border-hair px-3.5 py-4 first:border-t-0">
      <div className="h-[62px] w-[62px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SEAL_SRC[note.seal]}
          alt=""
          className="seal-sh h-full w-full object-contain"
        />
      </div>
      <div className="w-[70px] shrink-0 text-[16px] font-semibold leading-[1.3] text-[#2c1116]">
        {note.label.map((part, i) => (
          <span key={i}>
            {part}
            {i < note.label.length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 text-[11px] tracking-[.3px] text-gold-deep">{note.hint}</div>
        <div className="text-[13.5px] leading-[1.6] text-ink">
          <Body text={note.body} />
        </div>
      </div>
      <button
        type="button"
        aria-label="編集"
        className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full border border-hair bg-white text-ink-mute"
      >
        <EditIcon className="h-[15px] w-[15px]" />
      </button>
    </div>
  );
}

export default function TastingList({ notes }: { notes: TastingNote[] }) {
  return (
    <section className="mt-3.5 px-4">
      <div className="rounded-[22px] border border-hair bg-white px-1 shadow-card">
        {notes.map((note) => (
          <Row key={note.seal} note={note} />
        ))}
      </div>
    </section>
  );
}
