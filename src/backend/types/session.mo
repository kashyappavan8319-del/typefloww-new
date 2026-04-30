import Common "common";
import Content "content";

module {
  public type SessionStats = {
    id : Common.SessionId;
    wpm : Nat;
    accuracy : Float;
    mode : Content.ContentMode;
    language : Content.Language;
    difficulty : Nat;
    timestamp : Common.Timestamp;
    mistakesCount : Nat;
  };

  public type StreakData = {
    currentStreak : Nat;
    lastSessionDate : Text; // ISO date string "YYYY-MM-DD"
  };

  // Mutable state container passed by reference to session mixin
  public type SessionState = {
    var nextId : Nat;
    var streak : StreakData;
  };
};
