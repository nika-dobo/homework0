function App() {
  return (
    <div className="w-75 p-3.5 bg-[#15273f] flex flex-col gap-4 rounded-xl">
      <img
        className="rounded-md"
        src="https://play-lh.googleusercontent.com/vHKrnRQ8aEcSjLWRVNxhlaLXZw962YP3nclpEdRzN8-NcMPI5Siufgn4GD5AhySJzqE9"
        alt=""
      />

      <h2 className="text-white font-medium text-xl">Equilibrium #3429</h2>
      <p className="text-[#5b708f] font-medium">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="flex justify-between">
        <p className="flex text-[#0cdede] text-sm gap-1">
          <img
            className="w-4"
            src="../public/hd-ethereum-eth-purple-logo-sign-png-701751694771769kxirapfr36-removebg-preview.png"
            alt=""
          />
          0.041 ETH
        </p>
        <p className="text-[#89a1c3] flex items-center text-sm gap-1">
          <img
            className="w-4 h-4"
            src="../public/nest_clock_farsight_analog_24dp_89A1C3_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
          />
          3 days left
        </p>
      </div>

      <div className="w-full h-[1.5px] bg-[#263850]"></div>

      <div className="flex items-center gap-2.5 mb-2.5">
        <img
          className="rounded-full w-8 border-amber-50 border-1"
          src="https://snellc1.github.io/NFT-Card/images/image-avatar.png"
          alt=""
        />
        <p className="text-[#627994] text-sm">
          Creation of <span className="text-[#b0c0d0]">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default App;
