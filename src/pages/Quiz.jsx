import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import QuestionStep from "../components/QuestionStep";
import { visibleQuestions, isFirstTimer } from "../lib/scoreQuizV2";

const AUTO_ADVANCE_MS = 250;

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const list = visibleQuestions(answers);
  const question = list[index];
  const isLast = index === list.length - 1;

  const next = (latestAnswers = answers) => {
    const latestList = visibleQuestions(latestAnswers);
    if (index >= latestList.length - 1) {
      navigate("/results", { state: { answers: latestAnswers } });
    } else {
      setIndex(index + 1);
      window.scrollTo({ top: 0 });
    }
  };

  const back = () => {
    clearTimeout(timer.current);
    setIndex((i) => Math.max(i - 1, 0));
  };

  // Single select: save and auto advance after a short pause so the selection is visible.
  const choose = (value) => {
    const updated = { ...answers, [question.id]: value };
    setAnswers(updated);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => next(updated), AUTO_ADVANCE_MS);
  };

  const setText = (value) => setAnswers((prev) => ({ ...prev, [question.id]: value }));

  return (
    <div className="quiz-container">
      <ProgressBar step={index + 1} total={list.length} label="Question" />
      <QuestionStep
        key={question.id}
        question={question}
        value={answers[question.id]}
        firstTimer={isFirstTimer(answers)}
        isFirst={index === 0}
        isLast={isLast}
        onChoose={choose}
        onText={setText}
        onNext={() => next()}
        onBack={back}
      />
    </div>
  );
}
