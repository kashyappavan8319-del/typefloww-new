import { LiveStats } from "@/components/LiveStats";
import { TypingArea } from "@/components/TypingArea";
import { Button } from "@/components/ui/button";
import {
  getChatMessages,
  getCodingContent,
  getParagraphContent,
} from "@/data/content";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useStreak } from "@/hooks/useStreak";
import { useTypingSession } from "@/hooks/useTypingSession";
import { cn } from "@/lib/utils";
import type {
  DifficultyLevel,
  Language,
  SessionResult,
  TypingMode,
} from "@/types";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Keyboard,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ── Mode / lang options ────────────────────────────────────────────────────────
type ModeOption = { id: TypingMode; icon: typeof Keyboard; label: string };
const MODE_OPTIONS: ModeOption[] = [
  { id: "paragraph", icon: Keyboard, label: "Paragraph" },
  { id: "chat", icon: MessageCircle, label: "Chat" },
  { id: "coding", icon: Code2, label: "Code" },
];

type LangOption = { id: Language; label: string };
const LANG_OPTIONS: LangOption[] = [
  { id: "english", label: "English" },
  { id: "hinglish", label: "Hinglish 🇮🇳" },
];

// ── Content helpers ────────────────────────────────────────────────────────────
function resolveContent(
  mode: TypingMode,
  lang: Language,
  diff: DifficultyLevel,
): string {
  switch (mode) {
    case "paragraph":
      return getParagraphContent(lang, diff);
    case "chat":
      return getChatMessages(lang, diff)
        .map((m) => m.text)
        .join(" ");
    case "coding":
      return getCodingContent(lang, diff);
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function PracticePage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { mode?: string };

  const initialMode: TypingMode = (
    ["paragraph", "chat", "coding"] as TypingMode[]
  ).includes(search?.mode as TypingMode)
    ? (search.mode as TypingMode)
    : "paragraph";

  const [mode, setMode] = useState<TypingMode>(initialMode);
  const [language, setLanguage] = useState<Language>("english");
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(1);
  const [contentText, setContentText] = useState(() =>
    resolveContent(mode, language, difficulty),
  );
  const [chatMessages, setChatMessages] = useState(() =>
    getChatMessages(language, difficulty),
  );

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { recordSession } = useStreak();
  const [, setSessions] = useLocalStorage<SessionResult[]>(
    "typeflow-sessions",
    [],
  );

  const handleComplete = useCallback(
    (result: SessionResult) => {
      recordSession();
      // Save session BEFORE navigating so Results.tsx can read it on mount
      setSessions((prev) => [...prev, result]);
      toast.success(
        `Done! ${result.wpm} WPM · ${result.accuracy}% accuracy 🎉`,
      );
      navigate({ to: "/results" });
    },
    [recordSession, setSessions, navigate],
  );

  const {
    words,
    typedText,
    wpm,
    accuracy,
    mistakesCount,
    isFinished,
    isStarted,
    startTime,
    handleInput,
    reset,
  } = useTypingSession({
    text: contentText,
    mode,
    language,
    difficulty,
    onComplete: handleComplete,
  });

  // Derive current message index for chat mode
  const currentMessageIndex = (() => {
    if (mode !== "chat") return 0;
    let wordOffset = 0;
    for (let i = 0; i < chatMessages.length; i++) {
      const msgWordCount = chatMessages[i].text.split(" ").length;
      const msgWords = words.slice(wordOffset, wordOffset + msgWordCount);
      const allDone = msgWords.every(
        (w) => w.status === "correct" || w.status === "incorrect",
      );
      if (!allDone) return i;
      wordOffset += msgWordCount;
    }
    return chatMessages.length - 1;
  })();

  const refreshContent = useCallback(() => {
    const text = resolveContent(mode, language, difficulty);
    setContentText(text);
    if (mode === "chat") {
      setChatMessages(getChatMessages(language, difficulty));
    }
    reset();
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [mode, language, difficulty, reset]);

  // Regenerate on settings change
  useEffect(() => {
    const text = resolveContent(mode, language, difficulty);
    setContentText(text);
    if (mode === "chat") {
      setChatMessages(getChatMessages(language, difficulty));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, language, difficulty]);

  const correctWords = words.filter((w) => w.status === "correct").length;
  const totalTyped = words.filter(
    (w) => w.status !== "pending" && w.status !== "current",
  ).length;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="min-h-[calc(100dvh-3.5rem)] flex flex-col bg-background"
      data-ocid="practice.page"
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-5 flex flex-col gap-4">
        {/* ── Controls bar ──────────────────────────────────────────────────── */}
        <div
          className="flex flex-wrap items-center gap-2"
          data-ocid="practice.controls_section"
        >
          {/* Mode tabs */}
          <div
            className="flex rounded-xl border border-border bg-muted/40 p-1 gap-0.5"
            data-ocid="practice.mode_tabs"
          >
            {MODE_OPTIONS.map((m) => (
              <button
                type="button"
                key={m.id}
                onClick={() => setMode(m.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-smooth min-h-[36px]",
                  mode === m.id
                    ? "bg-card text-foreground shadow-subtle border border-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
                data-ocid={`practice.mode_tab.${m.id}`}
              >
                <m.icon className="h-3.5 w-3.5" />
                {m.label}
              </button>
            ))}
          </div>

          {/* Language tabs */}
          <div
            className="flex rounded-xl border border-border bg-muted/40 p-1 gap-0.5"
            data-ocid="practice.lang_tabs"
          >
            {LANG_OPTIONS.map((l) => (
              <button
                type="button"
                key={l.id}
                onClick={() => setLanguage(l.id)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-smooth min-h-[36px]",
                  language === l.id
                    ? "bg-card text-foreground shadow-subtle border border-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
                data-ocid={`practice.lang_tab.${l.id}`}
              >
                <Globe className="h-3.5 w-3.5" />
                {l.label}
              </button>
            ))}
          </div>

          {/* Difficulty — paragraph only */}
          {mode === "paragraph" && (
            <div
              className="flex items-center gap-1.5 ml-auto"
              data-ocid="practice.difficulty_controls"
            >
              <button
                type="button"
                onClick={() =>
                  setDifficulty((d) => Math.max(1, d - 1) as DifficultyLevel)
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth disabled:opacity-40"
                disabled={difficulty <= 1}
                aria-label="Decrease difficulty"
                data-ocid="practice.difficulty_decrease"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-body text-sm font-medium text-foreground min-w-[4.5rem] text-center tabular-nums">
                Level {difficulty}/10
              </span>
              <button
                type="button"
                onClick={() =>
                  setDifficulty((d) => Math.min(10, d + 1) as DifficultyLevel)
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth disabled:opacity-40"
                disabled={difficulty >= 10}
                aria-label="Increase difficulty"
                data-ocid="practice.difficulty_increase"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* ── Text / Chat / Code display ─────────────────────────────────────── */}
        <TypingArea
          mode={mode}
          words={words}
          chatMessages={mode === "chat" ? chatMessages : undefined}
          currentMessageIndex={currentMessageIndex}
          onFocusRequest={focusInput}
        />

        {/* ── Typing input ───────────────────────────────────────────────────── */}
        <div className="relative" data-ocid="practice.input_area">
          <textarea
            ref={inputRef}
            value={typedText}
            onChange={(e) => handleInput(e.target.value)}
            placeholder={
              mode === "coding"
                ? "Type the code above..."
                : mode === "chat"
                  ? "Type the current message..."
                  : "Start typing the paragraph above..."
            }
            disabled={isFinished}
            className={cn(
              "w-full min-h-[72px] max-h-[120px] resize-none rounded-xl px-4 py-3",
              "bg-card border border-border font-body text-base leading-relaxed text-foreground",
              "placeholder:text-muted-foreground/50 outline-none",
              "focus:ring-2 focus:ring-ring focus:border-ring transition-smooth",
              mode === "coding" && "font-mono text-sm",
              isFinished && "opacity-50 cursor-not-allowed",
            )}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            data-ocid="practice.typing_input"
          />
          {isFinished && (
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-card/85 backdrop-blur-sm">
              <span className="font-display font-semibold text-primary">
                Session complete! 🎉
              </span>
            </div>
          )}
        </div>

        {/* ── Live Stats ────────────────────────────────────────────────────── */}
        <LiveStats
          wpm={wpm}
          accuracy={accuracy}
          mistakesCount={mistakesCount}
          isStarted={isStarted}
          isFinished={isFinished}
          startTime={startTime}
          correctWords={correctWords}
          totalTyped={totalTyped}
        />

        {/* ── Action buttons ────────────────────────────────────────────────── */}
        <div className="flex gap-2 pb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={refreshContent}
            className="flex-1 h-10 gap-2 font-body rounded-xl border-border transition-smooth"
            data-ocid="practice.reset_button"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            New text
          </Button>
          {isFinished && (
            <Button
              size="sm"
              onClick={() => navigate({ to: "/results" })}
              className="flex-1 h-10 gap-2 font-body rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
              data-ocid="practice.view_results_button"
            >
              View Results
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
