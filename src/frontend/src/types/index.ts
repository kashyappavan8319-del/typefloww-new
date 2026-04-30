export type TypingMode = "paragraph" | "chat" | "coding";
export type Language = "english" | "hinglish";
export type Theme = "light" | "dark";

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface AppState {
  theme: Theme;
  mode: TypingMode;
  language: Language;
  difficulty: DifficultyLevel;
}

export interface SessionResult {
  wpm: number;
  accuracy: number;
  mistakesCount: number;
  totalWords: number;
  correctWords: number;
  duration: number; // in seconds
  mode: TypingMode;
  language: Language;
  difficulty: DifficultyLevel;
  timestamp: number;
}

export interface StreakData {
  currentStreak: number;
  lastSessionDate: string; // ISO date string YYYY-MM-DD
}

export interface WordState {
  word: string;
  status: "pending" | "current" | "correct" | "incorrect";
  typedWord?: string;
}

export interface TypingContent {
  id: bigint;
  text: string;
  mode: TypingMode;
  language: Language;
  difficulty: number;
  category: string;
}
