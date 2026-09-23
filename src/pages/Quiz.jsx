import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import QuestionStep from "../components/QuestionStep";
import IntroScreen from "../components/IntroScreen";
import RoundEnd from "../components/RoundEnd";
import { reactions } from "../data/quizV2";
import { buildSteps, isFirstTimer, roundMessage } from "../lib/scoreQuizV2";

const ADVANCE_MS = 300;
const ADVANCE_WITH_REACTION_MS = 1300;

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const [reaction, setReaction] = useState(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const steps = buildSteps(answers);
  const step = steps[index];

  const goTo = (i) => {
    clearTimeout(timer.current);
    setReaction(null);
    setIndex(i);
    window.scrollTo({ top: 0 });
  };

  const next = (latestAnswers = answers) => {
    const latest = buildSteps(latestAnswers);
    if (index >= latest.length - 1) {
      navigate("/results", { state: { answers: latestAnswers } });
    } else {
      goTo(index + 1);
    }
  };

  // Back skips round-complete screens so it always lands on a question.
  const back = () => {
    let i = index - 1;
    while (i > 0 && steps[i].type === "roundEnd") i -= 1;
    goTo(Math.max(i, 0));
  };

  // Single select: save, show a reaction if there is one, then auto advance.
  const choose = (value) => {
    const q = step.question;
    const updated = { ...answers, [q.id]: value };
    setAnswers(updated);
    const text = reactions[q.id]?.[value] ?? null;
    setReaction(text);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => next(updated), text ? ADVANCE_WITH_REACTION_MS : ADVANCE_MS);
  };

  const setText = (value) => setAnswers((prev) => ({ ...prev, [step.question.id]: value }));

  if (step.type === "intro") {
    return (
      <div className="quiz-container">
        <IntroScreen onStart={() => goTo(1)} />
      </div>
    );
  }

  if (step.type === "roundEnd") {
    return (
      <div className="quiz-container">
        <RoundEnd
          round={step.round}
          message={roundMessage(step.round, answers)}
          nextName={step.next}
          onNext={() => next()}
          onBack={back}
        />
      </div>
    );
  }

  const isLast = index === steps.length - 1;

  return (
    <div className="quiz-container">
      <ProgressBar step={step.qNum} total={step.totalQuestions} label="Question" />
      <p className="round-chip">
        Round {step.round.number} of {step.round.total}: {step.round.name}
        <span className="round-chip-count">{step.inRound.n} / {step.inRound.of}</span>
      </p>
      <QuestionStep
        key={step.question.id}
        question={step.question}
        value={answers[step.question.id]}
        firstTimer={isFirstTimer(answers)}
        isLast={isLast}
        reaction={reaction}
        onChoose={choose}
        onText={setText}
        onNext={() => next()}
        onBack={back}
      />
    </div>
  );
}
