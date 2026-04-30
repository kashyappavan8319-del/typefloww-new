import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import SessionTypes "../types/session";
import SessionLib "../lib/session";

mixin (
  sessionStore : List.List<SessionTypes.SessionStats>,
  sessionState : SessionTypes.SessionState,
) {
  public func saveSession(
    wpm : Nat,
    accuracy : Float,
    mode : Text,
    language : Text,
    difficulty : Nat,
    timestamp : Int,
    mistakesCount : Nat,
  ) : async () {
    ignore SessionLib.saveSession(
      sessionStore,
      sessionState.nextId,
      wpm,
      accuracy,
      mode,
      language,
      difficulty,
      timestamp,
      mistakesCount,
    );
    sessionState.nextId += 1;
  };

  public query func getSessions() : async [SessionTypes.SessionStats] {
    SessionLib.getSessions(sessionStore);
  };

  public query func getStreak() : async SessionTypes.StreakData {
    SessionLib.getStreak(sessionState.streak);
  };

  public func updateStreak(today : Text) : async SessionTypes.StreakData {
    let updated = SessionLib.updateStreak(sessionState.streak, today);
    sessionState.streak := updated;
    updated;
  };
};
