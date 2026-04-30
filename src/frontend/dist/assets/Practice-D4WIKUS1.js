import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, d as cn, u as useNavigate, f as useSearch, a as useStreak, b as useLocalStorage, g as ue, K as Keyboard, B as Button } from "./index-B1Z6BCCy.js";
import { T as Target } from "./target-FRSZEhuL.js";
import { T as TriangleAlert } from "./triangle-alert-BY0MxWO9.js";
import { C as CodeXml } from "./code-xml-DJeYxXvd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode);
function LiveStats({
  wpm,
  accuracy,
  mistakesCount,
  isStarted,
  isFinished,
  startTime,
  correctWords = 0,
  totalTyped = 0,
  className
}) {
  const [elapsed, setElapsed] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!isStarted || isFinished || !startTime) return;
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1e3));
    }, 1e3);
    return () => clearInterval(id);
  }, [isStarted, isFinished, startTime]);
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return m > 0 ? `${m}:${s.toString().padStart(2, "0")}` : `${s}s`;
  };
  const accuracyColor = accuracy >= 90 ? "text-success" : accuracy < 70 ? "text-destructive" : "text-foreground";
  const mistakesColor = mistakesCount > 0 ? "text-destructive" : "text-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn("card-surface p-4 sm:p-5 space-y-3", className),
      "data-ocid": "practice.stats_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-around gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-0.5 min-w-[52px]",
              "data-ocid": "practice.stats_wpm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-4 w-4 text-primary mb-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl leading-none text-foreground", children: wpm }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground uppercase tracking-wider", children: "WPM" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-0.5 min-w-[60px]",
              "data-ocid": "practice.stats_accuracy",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-4 w-4 text-primary mb-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: cn(
                      "font-display font-bold text-2xl leading-none",
                      accuracyColor
                    ),
                    children: [
                      accuracy,
                      "%"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground uppercase tracking-wider", children: "Accuracy" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-0.5 min-w-[52px]",
              "data-ocid": "practice.stats_mistakes",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TriangleAlert,
                  {
                    className: cn(
                      "h-4 w-4 mb-0.5",
                      mistakesCount > 0 ? "text-destructive" : "text-primary"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "font-display font-bold text-2xl leading-none",
                      mistakesColor
                    ),
                    children: mistakesCount
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground uppercase tracking-wider", children: "Mistakes" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center gap-0.5 min-w-[52px]",
              "data-ocid": "practice.stats_timer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-4 w-4 text-primary mb-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl leading-none text-foreground", children: isStarted ? formatTime(elapsed) : "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-[10px] text-muted-foreground uppercase tracking-wider", children: "Time" })
              ]
            }
          )
        ] }),
        totalTyped > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 pt-0.5",
            "data-ocid": "practice.stats_progress",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-muted-foreground shrink-0", children: [
                "Incorrect:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive font-semibold", children: totalTyped - correctWords })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-primary rounded-full transition-smooth",
                  style: {
                    width: `${totalTyped > 0 ? correctWords / totalTyped * 100 : 0}%`
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs text-primary font-semibold shrink-0", children: [
                "Correct: ",
                correctWords
              ] })
            ]
          }
        )
      ]
    }
  );
}
function ChatBubble({
  message,
  index,
  typingStatus,
  charStates,
  isActive
}) {
  const isMe = message.sender === "me";
  const bubbleColor = (() => {
    if (!typingStatus || typingStatus === "pending") {
      return isMe ? "bg-primary/20 text-foreground border border-primary/20" : "bg-card text-foreground border border-border";
    }
    if (typingStatus === "current" || isActive) {
      return isMe ? "bg-primary/30 text-foreground border border-primary/40 ring-1 ring-primary/30" : "bg-secondary text-foreground border border-primary/30 ring-1 ring-primary/30";
    }
    if (typingStatus === "correct") {
      return isMe ? "bg-primary/15 text-foreground/60 border border-primary/10" : "bg-muted/60 text-foreground/60 border border-border/50";
    }
    if (typingStatus === "incorrect") {
      return isMe ? "bg-destructive/15 text-destructive border border-destructive/30" : "bg-destructive/10 text-destructive border border-destructive/20";
    }
    return isMe ? "bg-primary/20 text-foreground border border-primary/20" : "bg-card text-foreground border border-border";
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex gap-2 items-end transition-smooth",
        isMe ? "flex-row-reverse" : "flex-row"
      ),
      "data-ocid": `practice.chat_message.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-display font-bold mb-0.5",
              isMe ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"
            ),
            children: isMe ? "Me" : "T"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "relative max-w-[75%] rounded-2xl px-4 py-2.5 font-body text-sm leading-relaxed transition-smooth",
              isMe ? "rounded-br-sm" : "rounded-bl-sm",
              bubbleColor,
              typingStatus === "current" && "scale-[1.01]"
            ),
            children: [
              typingStatus === "incorrect" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[9px] font-bold", children: "✗" }),
              typingStatus === "correct" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-success text-success-foreground text-[9px] font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: cn(
                    typingStatus === "incorrect" && "line-through decoration-destructive/60"
                  ),
                  children: typingStatus === "current" && charStates ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: charStates.map((cs) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "transition-colors-smooth",
                        cs.status === "correct" && "char-correct",
                        cs.status === "incorrect" && "char-incorrect",
                        cs.status === "cursor" && "char-cursor",
                        cs.status === "pending" && "char-pending"
                      ),
                      children: cs.char
                    },
                    cs.key
                  )) }) : message.text
                }
              ),
              typingStatus === "current" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:0ms]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:150ms]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-primary animate-bounce [animation-delay:300ms]" })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function buildWordCharStates(word, wordIndex, isCurrent) {
  return word.word.split("").map((char, ci) => {
    var _a;
    let status = "pending";
    if (word.status === "correct") {
      status = "correct";
    } else if (word.status === "incorrect") {
      const typedChar = (_a = word.typedWord) == null ? void 0 : _a[ci];
      status = typedChar !== void 0 ? typedChar === char ? "correct" : "incorrect" : "incorrect";
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
function buildCodingCharStates(words) {
  const chars = [];
  let globalIdx = 0;
  words.forEach((w, wi) => {
    const isCurrent = w.status === "current";
    const wordChars = buildWordCharStates(w, wi, isCurrent);
    chars.push(...wordChars);
    globalIdx += wordChars.length;
    if (wi < words.length - 1) {
      const spaceStatus = w.status === "correct" || w.status === "incorrect" ? "correct" : "pending";
      chars.push({ char: " ", status: spaceStatus, key: `sp${globalIdx++}` });
    }
  });
  return chars;
}
function TypingArea({
  mode,
  words,
  chatMessages,
  currentMessageIndex = 0,
  onFocusRequest,
  className
}) {
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const active = el.querySelector("[data-active='true']");
    if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
  const handleContainerClick = () => onFocusRequest == null ? void 0 : onFocusRequest();
  if (mode === "chat" && chatMessages) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        className: cn(
          "card-surface overflow-y-auto no-scrollbar",
          "flex flex-col gap-3 p-4 sm:p-5",
          "min-h-[220px] max-h-[360px]",
          className
        ),
        onClick: handleContainerClick,
        onKeyDown: handleContainerClick,
        role: "presentation",
        "data-ocid": "practice.text_display",
        children: chatMessages.map((msg, i) => {
          let typingStatus = "pending";
          if (i < currentMessageIndex) {
            const msgWordCount = msg.text.split(" ").length;
            const offset = chatMessages.slice(0, i).reduce((sum, m) => sum + m.text.split(" ").length, 0);
            const slice = words.slice(offset, offset + msgWordCount);
            const anyIncorrect = slice.some((w) => w.status === "incorrect");
            const allCorrect = slice.every((w) => w.status === "correct");
            typingStatus = anyIncorrect ? "incorrect" : allCorrect ? "correct" : "pending";
          } else if (i === currentMessageIndex) {
            typingStatus = "current";
          }
          let currentMsgCharStates = null;
          if (i === currentMessageIndex) {
            const offset = chatMessages.slice(0, i).reduce((sum, m) => sum + m.text.split(" ").length, 0);
            const msgWordCount = msg.text.split(" ").length;
            const msgWords = words.slice(offset, offset + msgWordCount);
            const chars = [];
            let gIdx = 0;
            msgWords.forEach((w, wi) => {
              const isCurrent = w.status === "current";
              const wc = buildWordCharStates(w, offset + wi, isCurrent);
              chars.push(...wc);
              gIdx += wc.length;
              if (wi < msgWords.length - 1) {
                const spSt = w.status === "correct" || w.status === "incorrect" ? "correct" : "pending";
                chars.push({
                  char: " ",
                  status: spSt,
                  key: `chatsp${offset + wi}-${gIdx++}`
                });
              }
            });
            currentMsgCharStates = chars;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-active": i === currentMessageIndex ? "true" : void 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChatBubble,
                {
                  message: msg,
                  index: i,
                  typingStatus,
                  charStates: currentMsgCharStates
                }
              )
            },
            msg.text.slice(0, 24)
          );
        })
      }
    );
  }
  if (mode === "coding") {
    const charStates = buildCodingCharStates(words);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: scrollRef,
        className: cn(
          "card-surface p-4 sm:p-5 overflow-x-auto overflow-y-hidden no-scrollbar",
          "min-h-[120px]",
          className
        ),
        onClick: handleContainerClick,
        onKeyDown: handleContainerClick,
        role: "presentation",
        "data-ocid": "practice.text_display",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "font-mono text-sm sm:text-base leading-8 whitespace-pre-wrap break-words select-none", children: [
          charStates.map((cs) => {
            const isSpecial = "{}[]()<>/\\;:,.'\"=+!@#$%^&*|`~?-_".includes(
              cs.char
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "transition-colors-smooth",
                  cs.status === "correct" && "text-foreground/55",
                  cs.status === "incorrect" && "bg-destructive/20 text-destructive",
                  cs.status === "cursor" && "bg-primary/20 text-foreground rounded",
                  cs.status === "pending" && isSpecial && "text-primary font-semibold",
                  cs.status === "pending" && !isSpecial && "text-muted-foreground"
                ),
                children: cs.char
              },
              cs.key
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typing-cursor" })
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: scrollRef,
      className: cn(
        "card-surface p-5 sm:p-6",
        "min-h-[140px] max-h-[280px] overflow-y-auto no-scrollbar",
        className
      ),
      onClick: handleContainerClick,
      onKeyDown: handleContainerClick,
      role: "presentation",
      "data-ocid": "practice.text_display",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body leading-9 text-base sm:text-lg select-none", children: words.map((w, i) => {
        const isCurrent = w.status === "current";
        if (isCurrent || w.status === "incorrect") {
          const charStates = buildWordCharStates(w, i, isCurrent);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              "data-active": isCurrent ? "true" : void 0,
              className: cn(
                isCurrent && "word-current",
                w.status === "incorrect" && !isCurrent && "word-incorrect"
              ),
              children: [
                charStates.map((cs) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "transition-colors-smooth",
                      cs.status === "correct" && "char-correct",
                      cs.status === "incorrect" && "char-incorrect",
                      cs.status === "cursor" && "char-cursor",
                      cs.status === "pending" && "char-pending"
                    ),
                    children: cs.char
                  },
                  cs.key
                )),
                isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "typing-cursor" }),
                i < words.length - 1 && " "
              ]
            },
            `${i}-${w.word}`
          );
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: cn(
              "transition-colors-smooth",
              w.status === "correct" && "word-correct",
              w.status === "pending" && "word-pending"
            ),
            children: [
              w.word,
              i < words.length - 1 && " "
            ]
          },
          `${i}-${w.word}`
        );
      }) })
    }
  );
}
const PARAGRAPH_EN = {
  1: [
    "The cat sat on the mat. The dog ran fast. The sun is bright today.",
    "A bird flew past the window. Trees sway in the wind. Rain falls softly.",
    "Milk is white. The sky is blue. Grass is green. Ice is cold."
  ],
  2: [
    "Technology connects people across the globe, making communication faster and more accessible than ever before.",
    "The morning light filtered through the curtains, casting gentle shadows across the wooden floor.",
    "Every journey begins with a single step. Keep moving and you will reach your destination."
  ],
  3: [
    "Consistent practice builds lasting habits. Each small improvement compounds over time, creating remarkable results in the long run.",
    "The city never sleeps, its streets humming with activity as millions of lives intersect in unexpected ways.",
    "Reading every day sharpens your mind, expands your vocabulary, and opens doors to worlds you never knew existed."
  ],
  4: [
    "Mastery is not achieved overnight. It requires deliberate effort, focused repetition, and the patience to embrace incremental growth through daily discipline.",
    "Scientists have discovered that the human brain remains remarkably adaptable throughout life, capable of forming new connections given the right stimulation.",
    "Effective communication requires not just speaking clearly but listening deeply, understanding context, and responding with thoughtfulness and precision."
  ],
  5: [
    "The philosophy of stoicism teaches us to distinguish between what lies within our control and what does not, finding peace through acceptance and rational action.",
    "Deep work — the ability to focus without distraction on cognitively demanding tasks — is becoming increasingly rare in our notification-saturated world.",
    "Emotional intelligence encompasses self-awareness, empathy, and the capacity to regulate one's emotions in the face of stress, conflict, and uncertainty."
  ],
  6: [
    "Quantum computing leverages superposition and entanglement to perform calculations exponentially faster than classical machines, potentially revolutionizing cryptography and drug discovery.",
    "The Renaissance was not merely an artistic movement but a profound shift in how Europeans understood humanity, nature, and their place within the cosmos.",
    "Machine learning algorithms identify patterns in vast datasets, enabling systems to make predictions and decisions without being explicitly programmed for each scenario."
  ],
  7: [
    "Neuroplasticity research demonstrates that sustained cognitive training reshapes neural architecture, improving processing speed and working memory capacity across all age groups.",
    "The socioeconomic implications of automation extend far beyond job displacement, touching upon questions of identity, purpose, and the redistribution of productive wealth.",
    "Epigenetic mechanisms regulate gene expression without altering the underlying DNA sequence, explaining how environmental factors can produce heritable phenotypic changes across generations."
  ],
  8: [
    "Phenomenological inquiry examines lived experience as it manifests in consciousness, bracketing theoretical assumptions to reveal the essential structures of perception and intentionality.",
    "The thermodynamic arrow of time — entropy's inexorable increase — provides a physical basis for causality, explaining why we remember the past but not the future.",
    "Distributed ledger technologies introduce trustless consensus mechanisms that eliminate the need for centralized intermediaries in financial transactions and contractual agreements."
  ],
  9: [
    "Epistemological frameworks that privilege empirical falsifiability necessarily marginalize hermeneutic methodologies, creating interdisciplinary tensions that resist straightforward methodological resolution.",
    "The dialectical interplay between technological determinism and social constructivism shapes contemporary debates about agency, infrastructure, and the political economy of innovation.",
    "Cognitive dissonance arises when individuals encounter information that contradicts existing beliefs, triggering psychological discomfort that motivates rationalization rather than genuine belief revision."
  ],
  10: [
    "Transcendental idealism posits that space, time, and causality are synthetic a priori conditions of experience rather than properties of things-in-themselves, fundamentally restructuring metaphysical inquiry.",
    "The post-structuralist deconstruction of binary oppositions reveals how hierarchical conceptual frameworks perpetuate ideological formations that naturalize contingent power arrangements within discourse.",
    "Apophatic theology asserts that divine attributes resist positive predication, such that authentic theological language proceeds through negation, acknowledging the radical incomprehensibility of the absolute."
  ]
};
const PARAGRAPH_HI = {
  1: [
    "Aaj mausam bahut acha hai. Chalo thoda bahar chalte hain. Ghar pe chai pite hain.",
    "Yaar kya scene hai aaj. Sab theek hai. Chal milte hain baad mein.",
    "Neend aa rahi hai. Kuch kha lein pehle. Phir so jaate hain."
  ],
  2: [
    "Kal office mein bahut kaam tha, isliye ghar late aaya. Phir bhi dinner time pe baith gaye sab log.",
    "Dosto ke saath time spend karna bahut zaroori hai. Zindagi mein relationships sabse important hote hain.",
    "Subah jaldi uthna mushkil hota hai but ek baar habit pad jaaye toh life bahut productive ho jaati hai."
  ],
  3: [
    "Aajkal social media pe itna time waste ho jaata hai. Better hai ki koi productive kaam karo apne free time mein.",
    "Gym jaana shuru kiya hai maine. Pehle do din bahut pain hota hai but phir dheere dheere theek ho jaata hai.",
    "Cooking sikhna chahiye sabko. Ghar ka khana healthy bhi hota hai aur pocket-friendly bhi."
  ],
  4: [
    "Career mein success ke liye sirf hard work nahi, smart work bhi chahiye. Apna time wisely invest karo useful skills mein.",
    "India mein startup culture bahut tezi se grow ho raha hai. Young entrepreneurs apne dreams pursue karne ke liye risk le rahe hain.",
    "Paisa save karna ek art hai. Monthly budget banana chahiye aur unnecessary expenses ko identify karke cut karna chahiye."
  ],
  5: [
    "Life mein balance maintain karna sabse mushkil kaam hai. Work, family, health aur personal growth sab ek saath handle karna padta hai.",
    "Desi food ka koi comparison nahi hai. Ghar ki dal roti aur maa ke haath ka khana — yahi sach mein soul food hai.",
    "Travelling se perspective change ho jaata hai. Naye log, naye khane, naye culture — sab kuch mind ko broaden karta hai."
  ],
  6: [
    "Aajkal AI tools itne powerful ho gaye hain ki bahut saare repetitive tasks automate ho sakte hain. Hume apni unique human skills pe zyada focus karna chahiye.",
    "Remote work ne work-life balance ka concept completely change kar diya hai. Ab boundaries set karna aur bhi important ho gaya hai apni mental health ke liye.",
    "Financial literacy bahut zaroori hai lekin schools mein rarely sikhaya jaata hai. Investing, budgeting aur compound interest — yeh sab early samajhna chahiye."
  ],
  7: [
    "Climate change ek global challenge hai jisko solve karne ke liye individual aur government dono ko milkar kaam karna padega. Small habits bhi ek bada impact create kar sakti hain.",
    "Content creation ek full-time career ban gaya hai. Lekin sirf views ke peeche bhaagna galat hai — authentic aur valuable content hi long term mein kaam aata hai.",
    "Mental health tabhi improve hoti hai jab hum apne emotions ko acknowledge karte hain instead of suppress karne ke. Therapy aur journaling dono bahut helpful tools hain."
  ],
  8: [
    "Blockchain technology sirf cryptocurrency se zyada hai — yeh supply chain management, digital identity aur decentralized governance mein bhi revolutionary changes la sakti hai.",
    "Deep learning models ab itne sophisticated hain ki woh language, images aur even protein structures ko samajh sakte hain. Yeh scientific research ko completely transform kar raha hai.",
    "Urban planning mein sustainability integrate karna ab optional nahi raha. Smart cities ko energy efficiency, green spaces aur public transport ko ek cohesive system mein merge karna hoga."
  ],
  9: [
    "Epistemological debates ke baare mein sochein toh hum dekhte hain ki knowledge aur belief ke beech ka farak — yeh philosophical question aaj bhi relevant hai modern AI systems ke context mein.",
    "Neuroplasticity research ne yeh prove kar diya hai ki focused deliberate practice ke through hum apne brain ke neural pathways ko literally reshape kar sakte hain kisi bhi age mein.",
    "Socioeconomic inequality aur technological disruption ek saath chal rahe hain — iska matlab hai ki reskilling aur lifelong learning ek luxury nahi balki survival skill ban gayi hai."
  ],
  10: [
    "Consciousness ka hard problem — yaani yeh samajhna ki subjective experience physically explain kyun nahi ho sakta — philosophy aur neuroscience dono ke liye ek fundamental challenge bana hua hai.",
    "Post-colonial theory examine karti hai ki kaise historical power structures aaj bhi knowledge production, language policies aur institutional practices mein embedded hain.",
    "Quantum entanglement aur non-locality ke implications sirf physics tak limited nahi hain — yeh metaphysical assumptions ko bhi challenge karte hain jo causality aur separability ke baare mein hain."
  ]
};
const CHAT_EN = {
  1: [
    [
      { sender: "them", text: "Hey! How are you doing today?" },
      { sender: "me", text: "Pretty good, thanks for asking!" },
      { sender: "them", text: "Any plans for the weekend?" },
      { sender: "me", text: "Maybe catch a movie. You?" }
    ],
    [
      { sender: "them", text: "Did you see the game last night?" },
      { sender: "me", text: "Yes! What a finish that was." },
      { sender: "them", text: "Totally unexpected. Love it." }
    ]
  ],
  2: [
    [
      {
        sender: "them",
        text: "Just finished the presentation, it went really well!"
      },
      { sender: "me", text: "That's awesome, congrats!" },
      { sender: "them", text: "Can you send me that file you mentioned?" },
      { sender: "me", text: "Sure, I'll send it right after lunch." }
    ],
    [
      { sender: "them", text: "Are you joining the meeting at 3?" },
      { sender: "me", text: "Yes, I'll be there. Should be quick." },
      { sender: "them", text: "Cool, see you then!" }
    ]
  ],
  3: [
    [
      { sender: "them", text: "Hey, quick update — the server is back up!" },
      { sender: "me", text: "Oh thank goodness. What was the issue?" },
      { sender: "them", text: "Just a config file got corrupted. Fixed now." },
      { sender: "me", text: "Glad it was simple. I'll monitor it for a bit." }
    ]
  ],
  4: [
    [
      {
        sender: "them",
        text: "The PR looks good to me. Nice work on the refactor!"
      },
      {
        sender: "me",
        text: "Thanks! I left a few minor comments but nothing blocking."
      },
      {
        sender: "them",
        text: "LGTM once those are addressed. Merging tomorrow."
      },
      { sender: "me", text: "Perfect. I'll push the fixes tonight." }
    ]
  ],
  5: [
    [
      {
        sender: "them",
        text: "Heads up — the deploy pipeline failed again on staging."
      },
      {
        sender: "me",
        text: "I saw that. Jenkins is throwing a 403 on the artifact registry."
      },
      {
        sender: "them",
        text: "Might be a service account permissions issue. Can you check?"
      },
      {
        sender: "me",
        text: "On it. I'll update the Slack thread once I find the root cause."
      }
    ]
  ]
};
const CHAT_HI = {
  1: [
    [
      { sender: "them", text: "Kya scene hai yaar? Kab free ho?" },
      { sender: "me", text: "Thodi der mein free ho jaunga." },
      { sender: "them", text: "Chal phir milte hain chai pe." },
      { sender: "me", text: "Ha bilkul, 6 baje chalega?" }
    ]
  ],
  2: [
    [
      {
        sender: "them",
        text: "Yaar meeting cancel ho gayi aaj. Accha hua waise."
      },
      {
        sender: "me",
        text: "Haha mujhe bhi relief mila. Bahut kaam pending tha."
      },
      { sender: "them", text: "Bhai woh wala restaurant try kiya?" },
      { sender: "me", text: "Nahi abhi tak. Next weekend pakka chalte hain." }
    ]
  ],
  3: [
    [
      {
        sender: "them",
        text: "Aaj traffic itna bura tha, 45 mins late pahuncha office."
      },
      { sender: "me", text: "Ooff yaar, metro lena start kar do seriously." },
      { sender: "them", text: "Soch raha hun. Weekend pe plan kya hai?" },
      { sender: "me", text: "Picnic ka plan hai, tu bhi aa jaa." }
    ]
  ],
  4: [
    [
      {
        sender: "them",
        text: "Yaar woh project deadline aaj hai, kuch kiya tune?"
      },
      {
        sender: "me",
        text: "Haan bhai, raat bhar kaam kiya. Almost done hai, bas review baaki hai."
      },
      {
        sender: "them",
        text: "Kya ho gaya tha itna? Kuch issue aaya implementation mein?"
      },
      {
        sender: "me",
        text: "API integration mein bug tha. Fix ho gaya but time lag gaya."
      }
    ]
  ],
  5: [
    [
      {
        sender: "them",
        text: "Tune new framework try kiya? Sab log React ke baad Next.js pe shift ho rahe hain."
      },
      {
        sender: "me",
        text: "Haan, server components ka concept interesting hai. But learning curve thoda steep hai."
      },
      {
        sender: "them",
        text: "Performance benefits worth it hain. Especially SEO ke liye toh must hai."
      },
      {
        sender: "me",
        text: "Agree. Abhi ek small project mein try kar raha hun phir production mein launga."
      }
    ]
  ]
};
const CODING_EN = {
  1: [
    "const x = 10; let y = 20; console.log(x + y);",
    "if (a > b) { return a; } else { return b; }",
    "const arr = [1, 2, 3]; arr.forEach((n) => console.log(n));"
  ],
  2: [
    "function greet(name: string): string { return `Hello, ${name}!`; }",
    "const doubled = [1, 2, 3].map((n) => n * 2); console.log(doubled);",
    "const obj = { name: 'Alice', age: 30 }; const { name, age } = obj;"
  ],
  3: [
    "interface User { id: number; name: string; email: string; } const users: User[] = [];",
    "const fetchData = async (url: string) => { const res = await fetch(url); return res.json(); };",
    "const sum = (nums: number[]): number => nums.reduce((acc, n) => acc + n, 0);"
  ],
  4: [
    "export default function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c + 1)}>{count}</button>; }",
    "const router = createBrowserRouter([{ path: '/', element: <Home /> }, { path: '/about', element: <About /> }]);",
    "class Stack<T> { private items: T[] = []; push(item: T): void { this.items.push(item); } pop(): T | undefined { return this.items.pop(); } }"
  ],
  5: [
    "type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }; function divide(a: number, b: number): Result<number, string> { if (b === 0) return { ok: false, error: 'Division by zero' }; return { ok: true, value: a / b }; }",
    "const memoize = <T, R>(fn: (arg: T) => R): ((arg: T) => R) => { const cache = new Map<T, R>(); return (arg: T) => { if (cache.has(arg)) return cache.get(arg)!; const result = fn(arg); cache.set(arg, result); return result; }; };"
  ]
};
const CODING_HI = {
  1: [
    "const x = 10; // yeh variable hai. console.log(x); // output dekhte hain",
    "if (user.isLoggedIn) { showDashboard(); } else { redirectToLogin(); }"
  ],
  2: [
    "function total(cart: Item[]): number { return cart.reduce((sum, item) => sum + item.price, 0); }",
    "const [loading, setLoading] = useState(false); // loading state track karna hai"
  ],
  3: [
    "interface Product { id: number; naam: string; daam: number; } const products: Product[] = []; // products list",
    "const fetchUser = async (id: string) => { const res = await fetch(`/api/users/${id}`); return res.json(); }; // user data lao",
    "const numbers = [5, 3, 8, 1]; const sorted = numbers.sort((a, b) => a - b); // ascending sort karo"
  ],
  4: [
    "export function UserCard({ naam, email }: { naam: string; email: string }) { return <div className='card'><h2>{naam}</h2><p>{email}</p></div>; }",
    "const useLocalData = <T>(key: string, initial: T) => { const [val, setVal] = useState<T>(() => { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) as T : initial; }); return [val, setVal] as const; };"
  ],
  5: [
    "type ApiResponse<T> = { success: true; data: T } | { success: false; error: string }; async function safeFetch<T>(url: string): Promise<ApiResponse<T>> { try { const res = await fetch(url); const data = await res.json() as T; return { success: true, data }; } catch { return { success: false, error: 'Network error' }; } }",
    "const debounce = <T extends unknown[]>(fn: (...args: T) => void, delay: number) => { let timer: ReturnType<typeof setTimeout>; return (...args: T) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }; // search bar ke liye useful hai"
  ]
};
function getParagraphContent(lang, difficulty) {
  const pool = lang === "hinglish" ? PARAGRAPH_HI[difficulty] ?? PARAGRAPH_HI[1] : PARAGRAPH_EN[difficulty] ?? PARAGRAPH_EN[1];
  return pool[Math.floor(Math.random() * pool.length)] ?? "The quick brown fox jumps over the lazy dog.";
}
function getChatMessages(lang, difficulty) {
  const pool = lang === "hinglish" ? CHAT_HI[difficulty] ?? CHAT_HI[1] : CHAT_EN[difficulty] ?? CHAT_EN[1];
  const conversation = pool[Math.floor(Math.random() * pool.length)];
  return conversation ?? CHAT_EN[1][0];
}
function getCodingContent(lang, difficulty) {
  const pool = lang === "hinglish" ? CODING_HI[difficulty] ?? CODING_HI[1] : CODING_EN[difficulty] ?? CODING_EN[1];
  return pool[Math.floor(Math.random() * pool.length)] ?? "const x = 42;";
}
function buildWordStates(text) {
  const words = text.split(" ").filter(Boolean);
  return words.map((word, index) => ({
    word,
    status: index === 0 ? "current" : "pending"
  }));
}
function calcWPM(correctWords, startTime, now) {
  const minutes = (now - startTime) / 6e4;
  if (minutes <= 0) return 0;
  return Math.round(correctWords / minutes);
}
function calcAccuracy(words) {
  const typed = words.filter(
    (w) => w.status !== "pending" && w.status !== "current"
  );
  if (typed.length === 0) return 100;
  const correct = typed.filter((w) => w.status === "correct").length;
  return Math.round(correct / typed.length * 100);
}
function useTypingSession({
  text,
  mode,
  language,
  difficulty,
  onComplete
}) {
  const [state, setState] = reactExports.useState({
    words: buildWordStates(text),
    currentWordIndex: 0,
    typedText: "",
    startTime: null,
    endTime: null,
    isStarted: false,
    isFinished: false,
    wpm: 0,
    accuracy: 100,
    mistakesCount: 0
  });
  const intervalRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
      mistakesCount: 0
    });
  }, [text]);
  reactExports.useEffect(() => {
    if (state.isStarted && !state.isFinished && state.startTime) {
      intervalRef.current = setInterval(() => {
        setState((prev) => {
          if (!prev.startTime) return prev;
          const correctWords = prev.words.filter(
            (w) => w.status === "correct"
          ).length;
          return {
            ...prev,
            wpm: calcWPM(correctWords, prev.startTime, Date.now())
          };
        });
      }, 500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.isStarted, state.isFinished, state.startTime]);
  const handleInput = reactExports.useCallback(
    (value) => {
      setState((prev) => {
        var _a;
        if (prev.isFinished) return prev;
        const now = Date.now();
        const startTime = prev.startTime ?? now;
        const isStarted = true;
        const spacePressed = value.endsWith(" ");
        const currentWords = [...prev.words];
        let { currentWordIndex, mistakesCount } = prev;
        if (spacePressed && value.trim().length > 0) {
          const typedWord = value.trim();
          const expected = ((_a = currentWords[currentWordIndex]) == null ? void 0 : _a.word) ?? "";
          const isCorrect = typedWord === expected;
          currentWords[currentWordIndex] = {
            ...currentWords[currentWordIndex],
            status: isCorrect ? "correct" : "incorrect",
            typedWord
          };
          if (!isCorrect) mistakesCount += 1;
          const nextIndex = currentWordIndex + 1;
          if (nextIndex < currentWords.length) {
            currentWords[nextIndex] = {
              ...currentWords[nextIndex],
              status: "current"
            };
          }
          const isFinished = nextIndex >= currentWords.length;
          const endTime = isFinished ? now : null;
          const correctWords = currentWords.filter(
            (w) => w.status === "correct"
          ).length;
          const accuracy2 = calcAccuracy(currentWords);
          const wpm = calcWPM(correctWords, startTime, now);
          if (isFinished && onComplete) {
            const duration = Math.round((now - startTime) / 1e3);
            onComplete({
              wpm,
              accuracy: accuracy2,
              mistakesCount,
              totalWords: currentWords.length,
              correctWords,
              duration,
              mode,
              language,
              difficulty,
              timestamp: now
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
            accuracy: accuracy2,
            mistakesCount
          };
        }
        if (currentWords[currentWordIndex]) {
          currentWords[currentWordIndex] = {
            ...currentWords[currentWordIndex],
            status: "current",
            typedWord: value
            // live partial value for per-character highlighting
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
          mistakesCount
        };
      });
    },
    [mode, language, difficulty, onComplete]
  );
  const reset = reactExports.useCallback(() => {
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
      mistakesCount: 0
    });
  }, [text]);
  return {
    ...state,
    handleInput,
    reset
  };
}
const MODE_OPTIONS = [
  { id: "paragraph", icon: Keyboard, label: "Paragraph" },
  { id: "chat", icon: MessageCircle, label: "Chat" },
  { id: "coding", icon: CodeXml, label: "Code" }
];
const LANG_OPTIONS = [
  { id: "english", label: "English" },
  { id: "hinglish", label: "Hinglish 🇮🇳" }
];
function resolveContent(mode, lang, diff) {
  switch (mode) {
    case "paragraph":
      return getParagraphContent(lang, diff);
    case "chat":
      return getChatMessages(lang, diff).map((m) => m.text).join(" ");
    case "coding":
      return getCodingContent(lang, diff);
  }
}
function PracticePage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false });
  const initialMode = ["paragraph", "chat", "coding"].includes(search == null ? void 0 : search.mode) ? search.mode : "paragraph";
  const [mode, setMode] = reactExports.useState(initialMode);
  const [language, setLanguage] = reactExports.useState("english");
  const [difficulty, setDifficulty] = reactExports.useState(1);
  const [contentText, setContentText] = reactExports.useState(
    () => resolveContent(mode, language, difficulty)
  );
  const [chatMessages, setChatMessages] = reactExports.useState(
    () => getChatMessages(language, difficulty)
  );
  const inputRef = reactExports.useRef(null);
  const { recordSession } = useStreak();
  const [, setSessions] = useLocalStorage(
    "typeflow-sessions",
    []
  );
  const handleComplete = reactExports.useCallback(
    (result) => {
      recordSession();
      setSessions((prev) => [...prev, result]);
      ue.success(
        `Done! ${result.wpm} WPM · ${result.accuracy}% accuracy 🎉`
      );
      navigate({ to: "/results" });
    },
    [recordSession, setSessions, navigate]
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
    reset
  } = useTypingSession({
    text: contentText,
    mode,
    language,
    difficulty,
    onComplete: handleComplete
  });
  const currentMessageIndex = (() => {
    if (mode !== "chat") return 0;
    let wordOffset = 0;
    for (let i = 0; i < chatMessages.length; i++) {
      const msgWordCount = chatMessages[i].text.split(" ").length;
      const msgWords = words.slice(wordOffset, wordOffset + msgWordCount);
      const allDone = msgWords.every(
        (w) => w.status === "correct" || w.status === "incorrect"
      );
      if (!allDone) return i;
      wordOffset += msgWordCount;
    }
    return chatMessages.length - 1;
  })();
  const refreshContent = reactExports.useCallback(() => {
    const text = resolveContent(mode, language, difficulty);
    setContentText(text);
    if (mode === "chat") {
      setChatMessages(getChatMessages(language, difficulty));
    }
    reset();
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 50);
  }, [mode, language, difficulty, reset]);
  reactExports.useEffect(() => {
    const text = resolveContent(mode, language, difficulty);
    setContentText(text);
    if (mode === "chat") {
      setChatMessages(getChatMessages(language, difficulty));
    }
  }, [mode, language, difficulty]);
  const correctWords = words.filter((w) => w.status === "correct").length;
  const totalTyped = words.filter(
    (w) => w.status !== "pending" && w.status !== "current"
  ).length;
  const focusInput = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "min-h-[calc(100dvh-3.5rem)] flex flex-col bg-background",
      "data-ocid": "practice.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-3xl px-4 sm:px-6 py-5 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-wrap items-center gap-2",
            "data-ocid": "practice.controls_section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex rounded-xl border border-border bg-muted/40 p-1 gap-0.5",
                  "data-ocid": "practice.mode_tabs",
                  children: MODE_OPTIONS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMode(m.id),
                      className: cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-smooth min-h-[36px]",
                        mode === m.id ? "bg-card text-foreground shadow-subtle border border-border" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      ),
                      "data-ocid": `practice.mode_tab.${m.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "h-3.5 w-3.5" }),
                        m.label
                      ]
                    },
                    m.id
                  ))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex rounded-xl border border-border bg-muted/40 p-1 gap-0.5",
                  "data-ocid": "practice.lang_tabs",
                  children: LANG_OPTIONS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setLanguage(l.id),
                      className: cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-smooth min-h-[36px]",
                        language === l.id ? "bg-card text-foreground shadow-subtle border border-border" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      ),
                      "data-ocid": `practice.lang_tab.${l.id}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
                        l.label
                      ]
                    },
                    l.id
                  ))
                }
              ),
              mode === "paragraph" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-1.5 ml-auto",
                  "data-ocid": "practice.difficulty_controls",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDifficulty((d) => Math.max(1, d - 1)),
                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth disabled:opacity-40",
                        disabled: difficulty <= 1,
                        "aria-label": "Decrease difficulty",
                        "data-ocid": "practice.difficulty_decrease",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm font-medium text-foreground min-w-[4.5rem] text-center tabular-nums", children: [
                      "Level ",
                      difficulty,
                      "/10"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setDifficulty((d) => Math.min(10, d + 1)),
                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth disabled:opacity-40",
                        disabled: difficulty >= 10,
                        "aria-label": "Increase difficulty",
                        "data-ocid": "practice.difficulty_increase",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TypingArea,
          {
            mode,
            words,
            chatMessages: mode === "chat" ? chatMessages : void 0,
            currentMessageIndex,
            onFocusRequest: focusInput
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", "data-ocid": "practice.input_area", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              ref: inputRef,
              value: typedText,
              onChange: (e) => handleInput(e.target.value),
              placeholder: mode === "coding" ? "Type the code above..." : mode === "chat" ? "Type the current message..." : "Start typing the paragraph above...",
              disabled: isFinished,
              className: cn(
                "w-full min-h-[72px] max-h-[120px] resize-none rounded-xl px-4 py-3",
                "bg-card border border-border font-body text-base leading-relaxed text-foreground",
                "placeholder:text-muted-foreground/50 outline-none",
                "focus:ring-2 focus:ring-ring focus:border-ring transition-smooth",
                mode === "coding" && "font-mono text-sm",
                isFinished && "opacity-50 cursor-not-allowed"
              ),
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "off",
              spellCheck: false,
              "data-ocid": "practice.typing_input"
            }
          ),
          isFinished && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center rounded-xl bg-card/85 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-primary", children: "Session complete! 🎉" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          LiveStats,
          {
            wpm,
            accuracy,
            mistakesCount,
            isStarted,
            isFinished,
            startTime,
            correctWords,
            totalTyped
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: refreshContent,
              className: "flex-1 h-10 gap-2 font-body rounded-xl border-border transition-smooth",
              "data-ocid": "practice.reset_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-3.5 w-3.5" }),
                "New text"
              ]
            }
          ),
          isFinished && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              onClick: () => navigate({ to: "/results" }),
              className: "flex-1 h-10 gap-2 font-body rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth",
              "data-ocid": "practice.view_results_button",
              children: [
                "View Results",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
export {
  PracticePage
};
