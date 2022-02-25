import { useEffect, useState } from "react";

const INITIAL_COUNTDOWN = 25 * 60;

function App() {
  const [secondsAmount, setSecondsAmount] = useState(8);
  const [isFinished, setIsfinished] = useState(false);
  const [isPaused, setIspaused] = useState(false);
  var timer: number;

  useEffect(() => {
    if (secondsAmount > 0 && !isPaused) {
      timer = setTimeout(() => {
        setSecondsAmount((state) => state - 1);
      }, 1000);
    }
    if (secondsAmount <= 0) {
      setIsfinished(true);
    }
  }, [secondsAmount, isPaused]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  function handleRestart() {
    setSecondsAmount(INITIAL_COUNTDOWN);
    setIspaused(false);
    setIsfinished(false);
    clearTimeout(timer);
  }
  function handlePause() {
    setIspaused(!isPaused);
    clearTimeout(timer);
  }

  return (
    <div>
      <strong>{String(minutes).padStart(2, "0")}</strong>
      <strong>:</strong>
      <strong>{String(seconds).padStart(2, "0")}</strong>
      {!isFinished && (
        <p>
          <button onClick={handlePause}>
            {isPaused ? "Continuar" : "Pausar"}
          </button>
        </p>
      )}
      <div>
        <button onClick={handleRestart}>Reiniciar</button>
      </div>

      {isFinished && (
        <>
          <p>
            <strong>Uuau!!</strong> Você terminou!
          </p>
        </>
      )}
    </div>
  );
}

export default App;
