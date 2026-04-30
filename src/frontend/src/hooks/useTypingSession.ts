import type {
  DifficultyLevel,
  Language,
  SessionResult,
  TypingMode,
  WordState,
} from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

interface TypingSessionState {
  words: WordState[];
  currentWordIndex: number;
  typedText: string;
  startTime: number | null;
  endTime: number | null;
  isStarted: boolean;
  isFinished: boolean;
  wpm: number;
  accuracy: number;
  mistakesCount: number;
}

interface UseTypingSessionOptions {
  text: string;
  mode: TypingMode;
  language: Language;
  difficulty: DifficultyLevel;
  onComplete?: (result: SessionResult) => void;
}

function buildWordStates(text: string): WordState[] {
  const words = text.split(" ").filter(Boolean);
  return words.map((word, index) => ({
    word,
    status: index === 0 ? ("current" as const) : ("pending" as const),
  }));
}

function calcWPM(correctWords: number, startTime: number, now: number): number {
  const minutes = (now - startTime) / 60000;
  if (minutes <= 0) return 0;
  return Math.round(correctWords / minutes);
}

function calcAccuracy(words: WordState[]): number {
  const typed = words.filter(
    (w) => w.status !== "pending" && w.status !== "current",
  );
  if (typed.length === 0) return 100;
  const correct = typed.filter((w) => w.status === "correct").length;
  return Math.round((correct / typed.length) * 100);
}

export function useTypingSession({
  text,
  mode,
  language,
  difficulty,
  onComplete,
}: UseTypingSessionOptions) {
  const [state, setState] = useState<TypingSessionState>({
    words: buildWordStates(text),
    currentWordIndex: 0,
    typedText: "",
    startTime: null,
    endTime: null,
    isStarted: false,
    isFinished: false,
    wpm: 0,
    accuracy: 100,
    mistakesCount: 0,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset when text changes
  useEffect(() => {
    setState({
      words: buildWordStates(text),
      currentWordIndex: 0,
      typedText: "",
      startTime: null,
      endTime: null,
      isStarted: false,
      isFinished: false,
      wpm: 0,
      accuracy: 100,
      mistakesCount: 0,
    });
  }, [text]);

  // Live WPM ticker
  useEffect(() => {
    if (state.isStarted && !state.isFinished && state.startTime) {
      intervalRef.current = setInterval(() => {
        setState((prev) => {
          if (!prev.startTime) return prev;
          const correctWords = prev.words.filter(
            (w) => w.status === "correct",
          ).length;
          return {
            ...prev,
            wpm: calcWPM(correctWords, prev.startTime!, Date.now()),
          };
        });
      }, 500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.isStarted, state.isFinished, state.startTime]);

  const handleInput = useCallback(
    (value: string) => {
      setState((prev) => {
        if (prev.isFinished) return prev;

        const now = Date.now();
        const startTime = prev.startTime ?? now;
        const isStarted = true;

        // Detect space = word committed
        const spacePressed = value.endsWith(" ");
        const currentWords = [...prev.words];
        let { currentWordIndex, mistakesCount } = prev;

        if (spacePressed && value.trim().length > 0) {
          const typedWord = value.trim();
          const expected = currentWords[currentWordIndex]?.word ?? "";
          const isCorrect = typedWord === expected;

          currentWords[currentWordIndex] = {
            ...currentWords[currentWordIndex],
            status: isCorrect ? "correct" : "incorrect",
            typedWord,
          };
          if (!isCorrect) mistakesCount += 1;

          const nextIndex = currentWordIndex + 1;

          // Mark next word as current
          if (nextIndex < currentWords.length) {
            currentWords[nextIndex] = {
              ...currentWords[nextIndex],
              status: "current",
            };
          }

          const isFinished = nextIndex >= currentWords.length;
          const endTime = isFinished ? now : null;
          const correctWords = currentWords.filter(
            (w) => w.status === "correct",
          ).length;
          const accuracy = calcAccuracy(currentWords);
          const wpm = calcWPM(correctWords, startTime, now);

          if (isFinished && onComplete) {
            const duration = Math.round((now - startTime) / 1000);
            onComplete({
              wpm,
              accuracy,
              mistakesCount,
              totalWords: currentWords.length,
              correctWords,
              duration,
              mode,
              language,
              difficulty,
              timestamp: now,
            });
          }

          return {
            ...prev,
            words: currentWords,
            currentWordIndex: nextIndex,
            typedText: "",
            startTime,
            endTime,
            isStarted,
            isFinished,
            wpm,
            accuracy,
            mistakesCount,
          };
        }

        // Still typing current word — mark as current and store in-progress typedWord
        if (currentWords[currentWordIndex]) {
          currentWords[currentWordIndex] = {
            ...currentWords[currentWordIndex],
            status: "current",
            typedWord: value, // live partial value for per-character highlighting
          };
        }

        const accuracy = calcAccuracy(currentWords);
        return {
          ...prev,
          words: currentWords,
          typedText: value,
          startTime,
          isStarted,
          accuracy,
          mistakesCount,
        };
      });
    },
    [mode, language, difficulty, onComplete],
  );

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState({
      words: buildWordStates(text),
      currentWordIndex: 0,
      typedText: "",
      startTime: null,
      endTime: null,
      isStarted: false,
      isFinished: false,
      wpm: 0,
      accuracy: 100,
      mistakesCount: 0,
    });
  }, [text]);

  return {
    ...state,
    handleInput,
    reset,
  };
}
