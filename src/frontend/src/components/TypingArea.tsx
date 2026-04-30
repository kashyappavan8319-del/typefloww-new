import { ChatBubble } from "@/components/ChatBubble";
import type { ChatMessage } from "@/data/content";
import { cn } from "@/lib/utils";
import type { TypingMode, WordState } from "@/types";
import { useEffect, useRef } from "react";

interface TypingAreaProps {
  mode: TypingMode;
  words: WordState[];
  chatMessages?: ChatMessage[];
  currentMessageIndex?: number;
  /** Callback so clicks on text area focus the input */
  onFocusRequest?: () => void;
  className?: string;
}

/** Per-character progress for coding and paragraph modes */
interface CharState {
  char: string;
  status: "pending" | "cursor" | "correct" | "incorrect";
  key: string;
}

/**
 * Build per-character states for a completed or current word.
 * For "current" words, typedWord holds what has been typed so far.
 */
function buildWordCharStates(
  word: WordState,
  wordIndex: number,
  isCurrent: boolean,
): CharState[] {
  return word.word.split("").map((char, ci) => {
    let status: CharState["status"] = "pending";
    if (word.status === "correct") {
      status = "correct";
    } else if (word.status === "incorrect") {
      const typedChar = word.typedWord?.[ci];
      status =
        typedChar !== undefined
          ? typedChar === char
            ? "correct"
            : "incorrect"
          : "incorrect";
    } else if (isCurrent) {
      const typed = word.typedWord ?? "";
      if (ci < typed.length) {
        status = typed[ci] === char ? "correct" : "incorrect";
      } else if (ci === typed.length) {
        status = "cursor";
      } else {
        status = "pending";
      }
    }
    return { char, status, key: `w${wordIndex}c${ci}` };
  });
}

/** Build char states for the full coding text (all words flattened) */
function buildCodingCharStates(words: WordState[]): CharState[] {
  const chars: CharState[] = [];
  let globalIdx = 0;
  words.forEach((w, wi) => {
    const isCurrent = w.status === "current";
    const wordChars = buildWordCharStates(w, wi, isCurrent);
    chars.push(...wordChars);
    globalIdx += wordChars.length;
    if (wi < words.length - 1) {
      const spaceStatus: CharState["status"] =
        w.status === "correct" || w.status === "incorrect"
          ? "correct"
          : "pending";
      chars.push({ char: " ", status: spaceStatus, key: `sp${globalIdx++}` });
    }
  });
  return chars;
}

export function TypingArea({
  mode,
  words,
  chatMessages,
  currentMessageIndex = 0,
  onFocusRequest,
  className,
}: TypingAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current word/message — runs after every commit that changes active item
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const active = el.querySelector("[data-active='true']");
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });

  const handleContainerClick = () => onFocusRequest?.();

  // ── Chat mode ──────────────────────────────────────────────────────────────
  if (mode === "chat" && chatMessages) {
    return (
      <div
        ref={scrollRef}
        className={cn(
          "card-surface overflow-y-auto no-scrollbar",
          "flex flex-col gap-3 p-4 sm:p-5",
          "min-h-[220px] max-h-[360px]",
          className,
        )}
        onClick={handleContainerClick}
        onKeyDown={handleContainerClick}
        role="presentation"
        data-ocid="practice.text_display"
      >
        {chatMessages.map((msg, i) => {
          let typingStatus: "pending" | "current" | "correct" | "incorrect" =
            "pending";
          if (i < currentMessageIndex) {
            const msgWordCount = msg.text.split(" ").length;
            const offset = chatMessages
              .slice(0, i)
              .reduce((sum, m) => sum + m.text.split(" ").length, 0);
            const slice = words.slice(offset, offset + msgWordCount);
            const anyIncorrect = slice.some((w) => w.status === "incorrect");
            const allCorrect = slice.every((w) => w.status === "correct");
            typingStatus = anyIncorrect
              ? "incorrect"
              : allCorrect
                ? "correct"
                : "pending";
          } else if (i === currentMessageIndex) {
            typingStatus = "current";
          }

          // Build per-character states for the current message
          let currentMsgCharStates: CharState[] | null = null;
          if (i === currentMessageIndex) {
            const offset = chatMessages
              .slice(0, i)
              .reduce((sum, m) => sum + m.text.split(" ").length, 0);
            const msgWordCount = msg.text.split(" ").length;
            const msgWords = words.slice(offset, offset + msgWordCount);
            const chars: CharState[] = [];
            let gIdx = 0;
            msgWords.forEach((w, wi) => {
              const isCurrent = w.status === "current";
              const wc = buildWordCharStates(w, offset + wi, isCurrent);
              chars.push(...wc);
              gIdx += wc.length;
              if (wi < msgWords.length - 1) {
                const spSt: CharState["status"] =
                  w.status === "correct" || w.status === "incorrect"
                    ? "correct"
                    : "pending";
                chars.push({
                  char: " ",
                  status: spSt,
                  key: `chatsp${offset + wi}-${gIdx++}`,
                });
              }
            });
            currentMsgCharStates = chars;
          }

          return (
            <div
              key={msg.text.slice(0, 24)}
              data-active={i === currentMessageIndex ? "true" : undefined}
            >
              <ChatBubble
                message={msg}
                index={i}
                typingStatus={typingStatus}
                charStates={currentMsgCharStates}
              />
            </div>
          );
        })}
      </div>
    );
  }

  // ── Coding mode ────────────────────────────────────────────────────────────
  if (mode === "coding") {
    const charStates = buildCodingCharStates(words);
    return (
      <div
        ref={scrollRef}
        className={cn(
          "card-surface p-4 sm:p-5 overflow-x-auto overflow-y-hidden no-scrollbar",
          "min-h-[120px]",
          className,
        )}
        onClick={handleContainerClick}
        onKeyDown={handleContainerClick}
        role="presentation"
        data-ocid="practice.text_display"
      >
        <pre className="font-mono text-sm sm:text-base leading-8 whitespace-pre-wrap break-words select-none">
          {charStates.map((cs) => {
            const isSpecial = "{}[]()<>/\\;:,.'\"=+!@#$%^&*|`~?-_".includes(
              cs.char,
            );
            return (
              <span
                key={cs.key}
                className={cn(
                  "transition-colors-smooth",
                  cs.status === "correct" && "text-foreground/55",
                  cs.status === "incorrect" &&
                    "bg-destructive/20 text-destructive",
                  cs.status === "cursor" &&
                    "bg-primary/20 text-foreground rounded",
                  cs.status === "pending" &&
                    isSpecial &&
                    "text-primary font-semibold",
                  cs.status === "pending" &&
                    !isSpecial &&
                    "text-muted-foreground",
                )}
              >
                {cs.char}
              </span>
            );
          })}
          <span className="typing-cursor" />
        </pre>
      </div>
    );
  }

  // ── Paragraph mode (default) ───────────────────────────────────────────────
  return (
    <div
      ref={scrollRef}
      className={cn(
        "card-surface p-5 sm:p-6",
        "min-h-[140px] max-h-[280px] overflow-y-auto no-scrollbar",
        className,
      )}
      onClick={handleContainerClick}
      onKeyDown={handleContainerClick}
      role="presentation"
      data-ocid="practice.text_display"
    >
      <p className="font-body leading-9 text-base sm:text-lg select-none">
        {words.map((w, i) => {
          const isCurrent = w.status === "current";

          if (isCurrent || w.status === "incorrect") {
            // Per-character rendering for the active word and incorrectly typed words
            const charStates = buildWordCharStates(w, i, isCurrent);
            return (
              <span
                key={`${i}-${w.word}`}
                data-active={isCurrent ? "true" : undefined}
                className={cn(
                  isCurrent && "word-current",
                  w.status === "incorrect" && !isCurrent && "word-incorrect",
                )}
              >
                {charStates.map((cs) => (
                  <span
                    key={cs.key}
                    className={cn(
                      "transition-colors-smooth",
                      cs.status === "correct" && "char-correct",
                      cs.status === "incorrect" && "char-incorrect",
                      cs.status === "cursor" && "char-cursor",
                      cs.status === "pending" && "char-pending",
                    )}
                  >
                    {cs.char}
                  </span>
                ))}
                {isCurrent && <span className="typing-cursor" />}
                {i < words.length - 1 && " "}
              </span>
            );
          }

          // Completed correct words and pending words — whole-word coloring
          return (
            <span
              key={`${i}-${w.word}`}
              className={cn(
                "transition-colors-smooth",
                w.status === "correct" && "word-correct",
                w.status === "pending" && "word-pending",
              )}
            >
              {w.word}
              {i < words.length - 1 && " "}
            </span>
          );
        })}
      </p>
    </div>
  );
}
