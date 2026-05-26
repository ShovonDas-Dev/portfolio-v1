const BrowserMockup = ({ preview }) => (
  <div
    className="rounded-xl overflow-hidden border border-[rgba(167,139,250,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(167,139,250,0.1)]"
    style={{ background: "#1a1630" }}
  >
    {/* Top bar */}
    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-white/5" style={{ background: "#120f24" }}>
      <div className="flex gap-[5px]">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 ml-2 h-[18px] rounded bg-white/[0.04] border border-white/5" />
    </div>

    {/* Preview content */}
    <div
      className="aspect-[16/10] flex items-center justify-center overflow-hidden"
      style={{ background: preview.bg }}
    >
      <div className="text-center px-4 w-full">
        <p className="text-2xl mb-2">{preview.text}</p>
        <div className="grid grid-cols-3 gap-2 px-4 mt-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="h-10 rounded-md border border-white/[0.08]"
              style={{ background: "rgba(255,255,255,0.05)" }}
            />
          ))}
        </div>
        <div
          className="mt-2 mx-4 h-14 rounded-md border border-white/[0.06]"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
      </div>
    </div>
  </div>
);

export default BrowserMockup;
