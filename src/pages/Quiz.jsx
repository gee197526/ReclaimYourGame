import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import SportSelectStep from "../components/steps/SportSelectStep";
import LastPlayedStep from "../components/steps/LastPlayedStep";
import HoldingBackStep from "../components/steps/HoldingBackStep";
import LocationStep from "../components/steps/LocationStep";
import GoalStep from "../components/steps/GoalStep";

const TOTAL_STEPS = 5;

export default function Quiz() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    sports: [],
    lastPlayed: "",
    holdingBack: [],
    postcode: "",
    goal: []
  });

  const toggleInArray = (key, id) => {
    setAnswers((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]
      };
    });
  };

  const setField = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const submit = () => {
    navigate("/results", { state: { answers } });
  };

  return (
    <div className="quiz-container">
      <ProgressBar step={step} total={TOTAL_STEPS} />

      {step === 1 && (
        <SportSelectStep
          selected={answers.sports}
          onToggle={(id) => toggleInArray("sports", id)}
          onNext={next}
        />
      )}
      {step === 2 && (
        <LastPlayedStep
          selected={answers.lastPlayed}
          onSelect={(id) => setField("lastPlayed", id)}
          onNext={next}
          onBack={back}
        />
      )}
      {step === 3 && (
        <HoldingBackStep
          selected={answers.holdingBack}
          onToggle={(id) => toggleInArray("holdingBack", id)}
          onNext={next}
          onBack={back}
        />
      )}
      {step === 4 && (
        <LocationStep
          value={answers.postcode}
          onChange={(v) => setField("postcode", v)}
          onNext={next}
          onBack={back}
        />
      )}
      {step === 5 && (
        <GoalStep
          selected={answers.goal}
          onToggle={(id) => toggleInArray("goal", id)}
          onSubmit={submit}
          onBack={back}
        />
      )}
    </div>
  );
}
