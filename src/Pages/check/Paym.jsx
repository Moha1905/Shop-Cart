import React from "react";
import "./Paym.css";
import { Wallet, CreditCard, Bank } from "phosphor-react";

export const Paym = () => {
  return (
    <div className="paym">
      <h1>Payment Method</h1>
      <div className="method">
        <h3>Please Select Your Payment Method</h3>
        {/* <input className="choose" type="submit" value={"CASH"} />
        <input
          className="choose"
          type="submit"
          value={"CREDIT OR DEBIT CARD"}
        />
        <input className="choose" type="submit" value={"ONLINE CREDIT"} /> */}

        <button className="choose"><Wallet weight="fill"/>CASH</button>
        <button className="choose"><CreditCard weight="fill"/>CREDIT OR DEBIT CARD</button>
        <button className="choose"><Bank weight="fill"/>ONLINE CREDIT</button>
      </div>
    </div>
  );
};
