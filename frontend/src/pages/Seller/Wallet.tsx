import React, { useState } from "react";
import { SideNav, SideBar, SellerHeader, List } from "../../components/Seller";
import { phio } from "../../assets/photos";
import { back } from "../../assets/icons";
import { seller } from "../../data/SellerDummyData";

const Wallet = () => {
  // State to manage the withdrawal amount
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  // Header for the transaction list
  const ListHeader: string[] = ["Trans.", "Amount", "Date", "Status"];
  // Function to handle withdrawal amount submission
  const handleWithdrawal = () => {
    // TODO: Logic to handle withdrawal amount submission
  };

  // Render:
  return (
    <div className="seller-page h-screen flex">
      {/* ----------Side Navigation------------ */}
      <SideNav SellerType={seller.profile.sellerType} />
      {/* ---------- Main Container------------ */}
      <section className="  w-[60%] h-full p-10 flex flex-col justify-between">
        <SellerHeader
          heading="Wallet"
          image={phio} // TODO: Set default Image to the Image Url in the seller data instead of phio
          sellerType={seller.profile.sellerType}
        />
        <div className=" h-128 flex gap-8">
          <div className=" w-[60%] flex flex-col justify-between">
            <div className=" flex flex-col gap-6">
              <p className="font-light text-2xl">Total Balance (naira)</p>
              <p className="font-[Lexend] font-bold text-4xl">
                {seller.wallet.totalBalance}
              </p>
            </div>
            <div className=" bg-[var(--tertiary-color)] h-52 rounded-2xl flex flex-col p-6 gap-10">
              <p className="font-light">Your Balances</p>
              <div className=" flex justify-between">
                <div className=" flex flex-col gap-4 items-center justify-center">
                  <p className="text-[1rem] text-nowrap font-extralight">
                    Withdrawable balance (naira)
                  </p>
                  <p className="font-[Lexend] font-bold text-2xl">
                    {seller.wallet.withdrawableBalance}
                  </p>
                </div>
                <div className=" flex flex-col gap-4 items-center justify-center">
                  <p className="text-[1rem] text-nowrap font-extralight">
                    Pending balance (naira)
                  </p>
                  <p className="font-[Lexend] font-bold text-2xl">
                    {seller.wallet.pendingBalance}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex  flex-col gap-8 text-[0.7rem]">
              <p>
                Withdrawable Balance: The total amount available from all
                successfully completed orders.
              </p>
              <p>
                Pending Balance: The amount currently awaiting completion of
                orders.
              </p>
              <p>
                Total Balance: Total expected amount, includes completed and
                pending orders.
              </p>
            </div>
          </div>

          {/* ------------- Column 2 ------------- */}
          <div className=" w-[40%] flex flex-col gap-8 justify-end">
            <div className="bg-[var(--tertiary-color)] rounded-2xl flex flex-col p-6 gap-4 font-light text-xs">
              <p>Account Number: {seller.profile.bankDetails.accountNumber}</p>
              <p>Bank name: {seller.profile.bankDetails.bankName}</p>
              <p>Account name: {seller.profile.bankDetails.accountName}</p>
            </div>
            <div className="bg-[var(--tertiary-color)] rounded-2xl flex flex-col p-6 gap-6">
              <p className="font-bold">Withdraw</p>
              <p>
                You will be redirected to a third party payment provider to
                complete your transaction
              </p>
              <form
                className="bg-white h-12 flex rounded-full"
                onSubmit={handleWithdrawal}
              >
                <input
                  className="w-[80%] rounded-l-full pl-6"
                  placeholder="Amount to withdraw"
                  type="number"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
                <button
                  className=" w-[20%] rounded-r-full flex justify-center items-center"
                  type="submit"
                >
                  <img className="scale-x-[-1] size-5" src={back} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className=" w-full h-56 bg-[var(--tertiary-color)] rounded-2xl flex flex-col justify-center items-center">
          <p className="text-center w-[75%] leading-relaxed">
            All payment transactions are handled by a trusted third party
            payment provider. However, If for any reason you encounter an issues
            with your withdrawal, please click here.{" "}
          </p>
        </div>
      </section>
      {/* ----------- Side Container----------- */}
      <div className=" w-[25%] flex flex-col justify-center">
        <SideBar heading="Transactions">
          <div className="max-h-180 overflow-y-auto">
            <List
              headers={ListHeader}
              data={seller.wallet.transactions.map((transaction) => ({
                id: transaction.type,
                amount: transaction.amount.toString(),
                date: transaction.date,
                status: transaction.status,
              }))}
              itemType="transaction"
            />
          </div>
        </SideBar>
      </div>
    </div>
  );
};

export default Wallet;
