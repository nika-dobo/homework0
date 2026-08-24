function App() {
  return (
    <div className="w-180 bg-white flex rounded-xl">
      <img
        className="w-90 rounded-bl-xl rounded-tl-xl"
        src="https://media.parfumo.com/user_imagery/4d/4d_90952_bff3e7e17575038c2e066aaba841b935_1200.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-10">
        <h2 className="text-[#9b9ca2] tracking-[7px] font-medium">PERFUME</h2>
        <h1 className="text-4xl w-[200px] font-bold">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-[#b8b8c2] w-[250px]">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="flex items-center gap-5">
          <h3 className="text-4xl text-[#3d8067]">$149.99</h3>
          <p className="text-[#848790] line-through">$169.99</p>
        </div>

        <button className="w-full bg-[#3d8168] text-white p-3 rounded-lg flex items-center justify-center font-medium">
          <img
            src="../public/shopping_cart_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png"
            alt=""
          />{" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
