import { useState } from "react";
import Show from "../../assets/show.svg";
import check from "../../assets/check.png";
import useAddExpense from "../../hooks/useAddExpense";

export default function QuickAdd() {
  const [add, setAdd] = useState(false);
  const [openQuickAdd, setOpenQuickAdd] = useState(false);
  const [transactionType, setTransactionType] = useState("Income");
  const {
    AmountSpend,
    setAmountSpend,
    SelectCatagory,
    SetSelectCatagory,
    PaymentMethod,
    setPaymentMethod,
    handleClear,
  } = useAddExpense();

  function handleQuickAdd() {
    setOpenQuickAdd(!openQuickAdd);
  }

  function handleConfirm() {
    setAdd(!add);
  }
  return (
    <>
      <button
        onClick={handleQuickAdd}
        className="absolute bottom-[3dvh] right-0"
      >
        <img src={Show} alt="img" />
      </button>
      {openQuickAdd && (
        <>
          <div className="absolute top-1 backdrop-blur-sm left-4 bg-white/30 h-[94dvh] w-full" />
          <div className="w-[40%] bg-[#EDF0F6] flex flex-col items-center rounded-xl p-4 absolute bottom-[2dvh] right-[-12px]">
            {add ? (
              <div className="h-full w-full flex flex-col items-center gap-y-5 py-10">
                <img src={check} className="h-[10dvh]" />
                <h3 className="font-bold text-2xl w-[65%] text-center">
                  Added Successfully
                </h3>
                <button
                  onClick={() => setAdd(!add)}
                  className="outline-none font-semibold opacity-50 hover:opacity-90 transition delay-100 duration-250 ease-in-out"
                >
                  click to add more
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-[clamp(1.4rem,8dvw,1.7rem)] mb-2">
                  Quick Add
                </h3>
                <div className="flex text-center w-full text-lg rounded-xl font-semibold bg-[rgb(0,0,0)] mb-3">
                  <button
                    className={`flex-1 py-1 relative z-10 ${
                      transactionType === "Expense"
                        ? "text-[rgba(255,255,255,0.4)]"
                        : "text-white"
                    }`}
                    onClick={() => setTransactionType("Income")}
                  >
                    Income
                  </button>

                  <button
                    className={`flex-1 py-1 relative z-10 ${
                      transactionType === "Expense"
                        ? "text-white"
                        : "text-[rgba(255,255,255,0.4)]"
                    }`}
                    onClick={() => setTransactionType("Expense")}
                  >
                    Expense
                  </button>
                </div>
                <div className="flex flex-col w-full mb-7">
                  <input
                    type="text"
                    required
                    value={AmountSpend}
                    onChange={(e) => setAmountSpend(e.target.value)}
                    className="py-[10px] px-[5px] outline-none bg-transparent border-y-[0.5px] placeholder:text-black border-[#393939] placeholder:text-md placeholder:opacity-[51%]"
                    placeholder="Amount"
                  />
                  <select
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    value={PaymentMethod}
                    className="select px-0 border-y-[0.9px] border-t-0 bg-transparent placeholder:text-black border-[#393939]"
                  >
                    <option value="Payment Method" disabled>
                      Payment Method
                    </option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                    <option value="Cash">Cash</option>
                  </select>
                  <select
                    onChange={(e) => SetSelectCatagory(e.target.value)}
                    value={SelectCatagory}
                    className="select px-0 border-y-[0.9px] border-t-0 bg-transparent placeholder:text-black border-[#393939]"
                  >
                    <option value="Select Category" disabled>
                      Select Category
                    </option>
                    <option value="Grocery">Grocery</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Housing">Housing</option>
                    <option value="Food and Drink">Food and Drink</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </div>
                <button
                  onClick={handleConfirm}
                  className="text-[#FFFFFF] mb-5 bg-black font-semibold tracking-wide px-5 py-1 rounded-xl"
                >
                  Confirm
                </button>
              </>
            )}

            <button
              className="absolute bottom-2 right-3"
              onClick={handleQuickAdd}
            >
              <img src={Show} alt="img" className="rotate-45" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
