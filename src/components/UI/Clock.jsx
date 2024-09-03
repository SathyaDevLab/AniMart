import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  useEffect(() => {
    countDown();
  });
  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  let intervel;
  const countDown = () => {
    const distination = new Date("Jan 10, 2025").getTime();
    intervel = setInterval(() => {
      const now = new Date().getTime();
      const difference = distination - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      if (distination < 0) {
        clearInterval(intervel.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  return (
    <>
      <div className="clock__wrapper d-flex align-items-center gap-2 gap-md-3 col-md-8 col-xl-6">
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{addZero(days)}</h1>
            <h5 className="text-white fs-6 ">Days</h5>
          </div>
          <span className="text-white fs-3"> :</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{addZero(hours)}</h1>
            <h5 className="text-white fs-6 ">Hours</h5>
          </div>
          <span className="text-white fs-3"> :</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{addZero(minutes)}</h1>
            <h5 className="text-white fs-6 ">Minutes</h5>
          </div>
          <span className="text-white fs-3"> :</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{addZero(seconds)}</h1>
            <h5 className="text-white fs-6 ">Seconds</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
