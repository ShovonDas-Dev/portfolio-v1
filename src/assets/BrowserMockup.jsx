const BrowserMockup = ({ preview }) => {
  return (
    <div
      className="
        relative
        rounded-2xl
        overflow-hidden
        border
        border-mint/20
        bg-gradient-to-br
        from-bg1
        to-bg2
        shadow-[0_20px_60px_rgba(0,0,0,0.55)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_45px_rgba(18,247,214,0.15)]
      ">
      {/* Mint Glow */}
      <div
        className="
          absolute
          -top-20
          -right-20
          w-52
          h-52
          bg-mint/10
          blur-3xl rounded-full pointer-events-none
        "
      />

      {/* ─────────── TOP BAR ─────────── */}
      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3
          border-b
          border-mint/10
          bg-bg2/90
          backdrop-blur-md
        ">
        {/* Browser dots */}
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Fake URL bar */}
        <div
          className="
            flex-1
            h-8
            rounded-md
            border
            border-mint/10
            bg-white/[0.03]
            flex
            items-center
            px-4
          ">
          <div className="w-full h-[2px] bg-mint/20 rounded-full" />
        </div>
      </div>

      {/* ─────────── PREVIEW ─────────── */}
      <div
        className="
          aspect-[16/10]
          flex
          items-center
          justify-center
          overflow-hidden
          relative
          p-6
        "
        style={{
          background: preview?.bg || "linear-gradient(145deg,#292F36,#1A1E23)",
        }}>
        {/* Background Glow */}
        <div
          className="
            absolute
            inset-0
            bg-mint/5
            blur-[120px]
          "
        />

        {/* Main Content */}
        <div className="relative z-10 text-center w-full">
          {/* Title */}
          <p
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-aqua
              tracking-wide
              drop-shadow-[0_0_10px_rgba(18,247,214,0.15)]
            ">
            {preview.text}
          </p>

          {/* Small cards */}
          {/* <div className="grid grid-cols-3 gap-3 px-2 mt-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="
                  h-12
                  rounded-xl
                  border
                  border-mint/10
                  bg-white/[0.03]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-mint/30
                  hover:bg-mint/5
                  hover:shadow-[0_0_20px_rgba(18,247,214,0.08)]
                "
              />
            ))}
          </div> */}

          {/* Bottom Large Card */}
          {/* <div
            className="
              mt-4
              h-16
              rounded-xl
              border
              border-mint/10
              bg-white/[0.02]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-mint/30
              hover:bg-mint/5
              hover:shadow-[0_0_20px_rgba(18,247,214,0.08)]
            "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
