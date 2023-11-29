import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Realistic() {
  const [showModal, setShowModal] = useState(true);
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null ) => {
    refAnimationInstance.current = instance ;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);
  useEffect(() => {
    fire();
    setTimeout(() => fire(), 1000);
    setTimeout(() => fire(), 2000);
    setTimeout(() => {
      fire();
    }, 3000);
    setTimeout(() => {
      setShowModal(false);
    }, 3500);
  }, []);

  return (
    <>
      {showModal && (
        <div className='fixed top-10 right-2 '>
          <div className='flex flex-col p-3 bg-emerald-700 rounded-xl mt-2'>
            <span className='text-[16px]'>Car is booked!</span>
          </div>
        </div>
      )}

      <ReactCanvasConfetti
        refConfetti={getInstance}
        className="pointer-events-none fixed w-[100%] h-[100%] left-0 top-0"
      />
    </>
  );
}
