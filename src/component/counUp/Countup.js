import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Countup = () => {
  const [state, setState] = useState(true);

  return (
    <div className="w-5/6 mx-auto py-14 sm:py-28">
      <div className=" pb-12 sm:pb-24 mx-auto text-center">
        <span className="text-slate-800 font-semibold text-2xl sm:text-3xl pb-4 border-b-4 border-yellow-300">
          Few Facts About BoShop
        </span>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between items-center">
        <div className="text-slate-800 font-bold text-7xl md:text-8xl flex flex-col justify-center items-center py-6">
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
          <p className="text-2xl pt-6">Sales</p>
        </div>
        <div className=" text-slate-800 font-bold text-7xl md:text-8xl flex flex-col justify-center items-center py-6">
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
          <p className="text-2xl pt-6">Items</p>
        </div>
        <div className=" text-slate-800 font-bold text-7xl md:text-8xl flex flex-col justify-center items-center py-6">
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
          <p className="text-2xl pt-6">Clients Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Countup;
