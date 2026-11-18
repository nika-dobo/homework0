import { useRef } from "react";

export default function App() {
  const nameInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const cardNameRef = useRef(null);
  const cardNumberRef = useRef(null);
  const cardExpiryRef = useRef(null);
  const cardCvcRef = useRef(null);

  const nameErrorRef = useRef(null);
  const numberErrorRef = useRef(null);
  const expiryErrorRef = useRef(null);
  const cvcErrorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value.trim();
    const number = numberInputRef.current.value.trim();
    const month = monthInputRef.current.value.trim();
    const year = yearInputRef.current.value.trim();
    const cvc = cvcInputRef.current.value.trim();

    let isValid = true;

    if (!name || name.split(" ").join("").length <= 2) {
      nameErrorRef.current.textContent = "Can't be blank";
      isValid = false;
    } else {
      nameErrorRef.current.textContent = "";
    }

    const rawNumber = number.split(" ").join("");

    if (!number) {
      numberErrorRef.current.textContent = "Can't be blank";
      isValid = false;
    } else if (rawNumber.length !== 16 || isNaN(rawNumber)) {
      numberErrorRef.current.textContent = "Must be 16 digits";
      isValid = false;
    } else {
      numberErrorRef.current.textContent = "";
    }

    if (!month || !year) {
      expiryErrorRef.current.textContent = "Can't be blank";
      isValid = false;
    } else if (month.length !== 2 || isNaN(month) || Number(month) < 1 || Number(month) > 12) {
      expiryErrorRef.current.textContent = "Invalid month";
      isValid = false;
    } else if (year.length !== 2 || isNaN(year) || Number(year) < 0) {
      expiryErrorRef.current.textContent = "Invalid year";
      isValid = false;
    } else {
      expiryErrorRef.current.textContent = "";
    }

    if (!cvc) {
      cvcErrorRef.current.textContent = "Can't be blank";
      isValid = false;
    } else if (cvc.length !== 3) {
      cvcErrorRef.current.textContent = "Must be 3 digits";
      isValid = false;
    } else {
      cvcErrorRef.current.textContent = "";
    }

    if (!isValid) return;

    cardNameRef.current.textContent =
      name.length > 20 ? `${name.slice(0, 20)}...` : name;
    cardNumberRef.current.textContent = `${rawNumber.slice(0, 4)} ${rawNumber.slice(4, 8)} ${rawNumber.slice(8, 12)} ${rawNumber.slice(12, 16)}`;
    cardExpiryRef.current.textContent = `${month}/${year}`;
    cardCvcRef.current.textContent = cvc;
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col lg:flex-row">
      <section className="relative w-full h-[240px] lg:h-auto lg:min-h-screen lg:w-[483px] shrink-0 bg-[url('/images/bg-main-mobile.png')] lg:bg-[url('/images/bg-main-desktop.png')] bg-cover bg-no-repeat">
        <div className="relative mx-auto w-full max-w-[375px] h-full lg:max-w-none">
          <div className="absolute top-[32px] right-[16px] lg:top-[52%] lg:left-[258px] lg:right-auto w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] rounded-[10px] shadow-[0_39px_60px_rgba(0,0,0,0.14)] bg-[url('/images/bg-card-back.png')] bg-cover bg-no-repeat">
            <span
              ref={cardCvcRef}
              className="absolute top-[44.5%] right-[12.5%] text-white text-[9px] lg:text-[14px] tracking-[1.29px] lg:tracking-[2px]"
            >
              000
            </span>
          </div>

          <div className="absolute top-[126px] left-[16px] lg:top-auto lg:bottom-[52%] lg:left-[164px] z-10 w-[286px] h-[157px] lg:w-[447px] lg:h-[245px] rounded-[10px] shadow-[0_39px_60px_rgba(0,0,0,0.14)] bg-[url('/images/bg-card-front.png')] bg-cover bg-no-repeat p-[18px_20px] lg:p-[28px_32px] flex flex-col justify-between text-white">
            <img
              src="/images/card-logo.svg"
              alt="Card logo"
              className="w-[54px] lg:w-[84px] h-auto"
            />

            <div className="flex flex-col gap-[17px] lg:gap-[25px]">
              <p
                ref={cardNumberRef}
                className="text-[18px] lg:text-[28px] tracking-[2.2px] lg:tracking-[3.42px] leading-none"
              >
                0000 0000 0000 0000
              </p>

              <div className="flex items-center justify-between text-[9px] lg:text-[14px] tracking-[1.29px] lg:tracking-[2px] uppercase">
                <span ref={cardNameRef}>Jane Appleseed</span>
                <span ref={cardExpiryRef}>00/00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center px-6 pt-[91px] pb-[45px] lg:pt-0 lg:pb-0 lg:pl-[180px] xl:pl-[220px]">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[381px] flex flex-col gap-[20px] lg:gap-[26px]"
        >
          <div className="flex flex-col gap-[9px]">
            <label
              htmlFor="cardholder-name"
              className="text-[12px] tracking-[2px] uppercase text-[#21092F]"
            >
              Cardholder Name
            </label>
            <input
              ref={nameInputRef}
              id="cardholder-name"
              type="text"
              placeholder="e.g. Jane Appleseed"
              className="h-[45px] w-full rounded-[8px] border border-[#DEDDDF] px-4 text-[18px] text-[#21092F] placeholder:text-[#21092F]/25 focus:outline-none focus:border-[#610595] transition-colors"
            />
            <p ref={nameErrorRef} className="text-[12px] text-[#FF5050]" />
          </div>

          <div className="flex flex-col gap-[9px]">
            <label
              htmlFor="card-number"
              className="text-[12px] tracking-[2px] uppercase text-[#21092F]"
            >
              Card Number
            </label>
            <input
              ref={numberInputRef}
              id="card-number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className="h-[45px] w-full rounded-[8px] border border-[#DEDDDF] px-4 text-[18px] text-[#21092F] placeholder:text-[#21092F]/25 focus:outline-none focus:border-[#610595] transition-colors"
            />
            <p ref={numberErrorRef} className="text-[12px] text-[#FF5050]" />
          </div>

          <div className="flex gap-[11px] lg:gap-[20px]">
            <div className="flex flex-col gap-[9px] w-1/2">
              <label
                htmlFor="exp-month"
                className="text-[12px] tracking-[2px] uppercase text-[#21092F] whitespace-nowrap"
              >
                Exp. Date (MM/YY)
              </label>
              <div className="flex gap-[8px] lg:gap-[10px]">
                <input
                  ref={monthInputRef}
                  id="exp-month"
                  type="text"
                  placeholder="MM"
                  className="h-[45px] w-1/2 rounded-[8px] border border-[#DEDDDF] px-4 text-[18px] text-[#21092F] placeholder:text-[#21092F]/25 focus:outline-none focus:border-[#610595] transition-colors"
                />
                <input
                  ref={yearInputRef}
                  id="exp-year"
                  type="text"
                  placeholder="YY"
                  className="h-[45px] w-1/2 rounded-[8px] border border-[#DEDDDF] px-4 text-[18px] text-[#21092F] placeholder:text-[#21092F]/25 focus:outline-none focus:border-[#610595] transition-colors"
                />
              </div>
              <p ref={expiryErrorRef} className="text-[12px] text-[#FF5050]" />
            </div>

            <div className="flex flex-col gap-[9px] w-1/2">
              <label
                htmlFor="cvc"
                className="text-[12px] tracking-[2px] uppercase text-[#21092F]"
              >
                CVC
              </label>
              <input
                ref={cvcInputRef}
                id="cvc"
                type="text"
                placeholder="e.g. 123"
                className="h-[45px] w-full rounded-[8px] border border-[#DEDDDF] px-4 text-[18px] text-[#21092F] placeholder:text-[#21092F]/25 focus:outline-none focus:border-[#610595] transition-colors"
              />
              <p ref={cvcErrorRef} className="text-[12px] text-[#FF5050]" />
            </div>
          </div>

          <button
            type="submit"
            className="mt-[8px] lg:mt-[14px] h-[53px] w-full rounded-[8px] bg-[#21092F] text-white text-[18px] hover:bg-[#21092F]/90 transition-colors cursor-pointer"
          >
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}
