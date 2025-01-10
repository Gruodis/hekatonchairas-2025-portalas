import { useState, useEffect } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function CountdownTimer() {
  const targetDate = new Date("Jan 24, 2025 09:30:00").getTime();

  // Calculate initial time difference
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft()); // Initialize with calculated values

  const formatTimeUnit = (value: string, unitIndex: number) => (
    <div className="flex items-center space-x-1">
      {value.split("").map((digit, idx) => (
        <div
          key={idx}
          data-aos="flip-left"
          data-aos-delay={100 * (unitIndex * 1.5 + idx + 1)}
          data-aos-duration="600"
          data-aos-once="true"
          className="px-1.5 bg-white text-primary-dark rounded-lg text-2xl leading-[1.5] md:text-[42px]"
        >
          {digit}
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-6 md:space-x-12">
      {formatTimeUnit(timeLeft.days, 0)}
      {formatTimeUnit(timeLeft.hours, 1)}
      {formatTimeUnit(timeLeft.minutes, 2)}
      {formatTimeUnit(timeLeft.seconds, 3)}
    </div>
  );
}
