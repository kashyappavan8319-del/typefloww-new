import type { ChatMessage } from "@/data/content";
import { cn } from "@/lib/utils";

interface CharState {
  char: string;
  status: "pending" | "cursor" | "correct" | "incorrect";
  key: string;
}

interface ChatBubbleProps {
  message: ChatMessage;
  index: number;
  typingStatus?: "pending" | "current" | "correct" | "incorrect";
  /** Per-character states for the active (current) message */
  charStates?: CharState[] | null;
  /** When message is "current", show partial typed text highlight */
  isActive?: boolean;
}

export function ChatBubble({
  message,
  index,
  typingStatus,
  charStates,
  isActive,
}: ChatBubbleProps) {
  const isMe = message.sender === "me";

  const bubbleColor = (() => {
    if (!typingStatus || typingStatus === "pending") {
      return isMe
        ? "bg-primary/20 text-foreground border border-primary/20"
        : "bg-card text-foreground border border-border";
    }
    if (typingStatus === "current" || isActive) {
      return isMe
        ? "bg-primary/30 text-foreground border border-primary/40 ring-1 ring-primary/30"
        : "bg-secondary text-foreground border border-primary/30 ring-1 ring-primary/30";
    }
    if (typingStatus === "correct") {
      return isMe
        ? "bg-primary/15 text-foreground/60 border border-primary/10"
        : "bg-muted/60 text-foreground/60 border border-border/50";
    }
    if (typingStatus === "incorrect") {
      return isMe
        ? "bg-destructive/15 text-destructive border border-destructive/30"
        : "bg-destructive/10 text-destructive border border-destructive/20";
    }
    return isMe
      ? "bg-primary/20 text-foreground border border-primary/20"
      : "bg-card text-foreground border border-border";
  })();

  return (
    <div
      className={cn(
        "flex gap-2 items-end transition-smooth",
        isMe ? "flex-row-reverse" : "flex-row",
      )}
      data-ocid={`practice.chat_message.${index + 1}`}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-display font-bold mb-0.5",
          isMe
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground border border-border",
        )}
      >
        {isMe ? "Me" : "T"}
      </div>

      {/* Bubble */}
      <div
        className={cn(
          "relative max-w-[75%] rounded-2xl px-4 py-2.5 font-body text-sm leading-relaxed transition-smooth",
          isMe ? "rounded-br-sm" : "rounded-bl-sm",
          bubbleColor,
          typingStatus === "current" && "scale-[1.01]",
        )}
      >
        {typingStatus === "incorrect" && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[9px] font-bold">
            ✗
          </span>
        )}
        {typingStatus === "correct" && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-success text-success-foreground text-[9px] font-bold">
            ✓
          </span>
        )}
        <p
          className={cn(
            typingStatus === "incorrect" &&
              "line-through decoration-destructive/60",
          )}
        >
          {typingStatus === "current" && charStates ? (
            <>
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
            </>
          ) : (
            message.text
          )}
        </p>
        {typingStatus === "current" && (
          <div className="mt-1 flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
            <div className="h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
            <div className="h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
          </div>
        )}
      </div>
    </div>
  );
}
