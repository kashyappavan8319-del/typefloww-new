import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StreakData {
    lastSessionDate: string;
    currentStreak: bigint;
}
export type Timestamp = bigint;
export type ContentId = bigint;
export interface SessionStats {
    id: SessionId;
    wpm: bigint;
    difficulty: bigint;
    mode: ContentMode;
    language: Language;
    timestamp: Timestamp;
    mistakesCount: bigint;
    accuracy: number;
}
export type SessionId = bigint;
export interface TypingContent {
    id: ContentId;
    difficulty: bigint;
    mode: ContentMode;
    text: string;
    language: Language;
    category: string;
}
export enum ContentMode {
    chat = "chat",
    coding = "coding",
    paragraph = "paragraph"
}
export enum Language {
    hinglish = "hinglish",
    english = "english"
}
export interface backendInterface {
    getContent(mode: string, language: string, difficulty: bigint): Promise<Array<TypingContent>>;
    getRandomContent(mode: string, language: string, difficulty: bigint): Promise<TypingContent | null>;
    getSessions(): Promise<Array<SessionStats>>;
    getStreak(): Promise<StreakData>;
    saveSession(wpm: bigint, accuracy: number, mode: string, language: string, difficulty: bigint, timestamp: bigint, mistakesCount: bigint): Promise<void>;
    updateStreak(today: string): Promise<StreakData>;
}
