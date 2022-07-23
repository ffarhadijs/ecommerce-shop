import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = () => {
  const [state, setState] = useState(true);

  return (
    <div className="w-5/6 mx-auto py-28">
      <div className="pb-24 mx-auto text-center">
        <span className="text-slate-800 font-semibold text-3xl pb-4 border-b-4 border-yellow-300">
          Few Facts About BoShop
        </span>
      </div>

      <div className=" flex flex-row justify-between items-center">
        <div className="text-slate-800 font-bold text-8xl flex flex-col justify-center items-center">
          <CountUp
            end={457}
            duration={5}
            onEnd={() => {
              setState(false);
            }}
          >
            {({ countUpRef, start }) => (
              <VisibilitySensor active={state} onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="text-xl pt-8">Sales</p>
        </div>
        <div className=" text-slate-800 font-bold text-8xl flex flex-col justify-center items-center">
          <CountUp
            end={571}
            duration={5}
            onEnd={() => {
              setState(false);
            }}
          >
            {({ countUpRef, start }) => (
              <VisibilitySensor active={state} onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="text-xl pt-8">Items</p>
        </div>
        <div className=" text-slate-800 font-bold text-8xl flex flex-col justify-center items-center">
          <CountUp
            end={289}
            duration={5}
            onEnd={() => {
              setState(false);
            }}
          >
            {({ countUpRef, start }) => (
              <VisibilitySensor active={state} onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="text-xl pt-8">Clients Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Countup;
