function App() {
  return (
    <div className="bg-white w-200 rounded-3xl flex h-135">
      <div className="w-100 flex flex-col items-center gap-10 bg-linear-to-b from-[#6848ff] to-[#332bed] p-10 rounded-3xl">
        <h2 className="text-[#cdc6ff] text-2xl font-semibold">Your Result</h2>
        <div className="w-50 h-50 rounded-[100%] bg-linear-to-b from-[#4e23c9] to-[#4a39f5] flex flex-col items-center justify-center text-6xl text-[#fffeff] font-bold font-sans">
          76 <span className="text-sm text-[#8678ff]">of 100</span>
        </div>
        <h2 className="text-3xl text-white font-semibold">Great</h2>
        <p className="text-[#c6c4ff] text-center w-60 text-[16px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="flex flex-col p-10 justify-between w-[50%]">
        <h2 className="text-2xl font-semibold mb-2.5">Summary</h2>

        <div className="flex justify-between bg-[#fff6f7] w-full p-4.5 rounded-md">
          <div className="flex gap-1.5">
            <img
              src="../public/flash_on_24dp_DE8E90_FILL0_wght400_GRAD0_opsz24.png"
              alt=""
            />
            <p className="text-[#ce7275] font-semibold text-md">Reaction</p>
          </div>
          <p className="text-[#383d53] font-semibold">
            80 <span className="text-[#a4a1a6]">/100</span>
          </p>
        </div>

        <div className="flex justify-between bg-[#fffaf4] w-full p-4.5 rounded-md">
          <div className="flex gap-1.5">
            <img
              src="../public/neurology_24dp_EECF92_FILL0_wght400_GRAD0_opsz24.png"
              alt=""
            />
            <p className="text-[#e9c06d] font-semibold text-md">Memory</p>
          </div>
          <p className="text-[#383d53] font-semibold">
            92 <span className="text-[#a4a1a6]">/100</span>
          </p>
        </div>

        <div className="flex justify-between bg-[#f2fdf9] w-full p-4.5 rounded-md">
          <div className="flex gap-1.5">
            <img
              src="../public/chat_bubble_24dp_76CAB4_FILL0_wght400_GRAD0_opsz24.png"
              alt=""
            />
            <p className="text-[#28a282] font-semibold text-md">Verbal</p>
          </div>
          <p className="text-[#383d53] font-semibold">
            61 <span className="text-[#a4a1a6]">/100</span>
          </p>
        </div>

        <div className="flex justify-between bg-[#f4f4fe] w-full p-4.5 rounded-md">
          <div className="flex gap-1.5">
            <img
              src="../public/visibility_24dp_6166C3_FILL0_wght400_GRAD0_opsz24.png"
              alt=""
            />
            <p className="text-[#3843be] font-semibold text-md">Visual</p>
          </div>
          <p className="text-[#383d53] font-semibold">
            73 <span className="text-[#a4a1a6]">/100</span>
          </p>
        </div>

        <button className="bg-[#303b59] w-full p-3.5 rounded-full text-white font-semibold text-md mt-5">Continue</button>
      </div>
    </div>
  );
}

export default App;
