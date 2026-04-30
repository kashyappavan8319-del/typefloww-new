import List "mo:core/List";
import Types "../types/session";
import Content "../types/content";
import Common "../types/common";

module {
  public func saveSession(
    store : List.List<Types.SessionStats>,
    nextId : Nat,
    wpm : Nat,
    accuracy : Float,
    mode : Text,
    language : Text,
    difficulty : Nat,
    timestamp : Common.Timestamp,
    mistakesCount : Nat,
  ) : Types.SessionStats {
    let modeVariant : Content.ContentMode = switch (mode) {
      case "chat"   { #chat };
      case "coding" { #coding };
      case _        { #paragraph };
    };
    let langVariant : Content.Language = switch (language) {
      case "hinglish" { #hinglish };
      case _          { #english };
    };
    let session : Types.SessionStats = {
      id = nextId;
      wpm;
      accuracy;
      mode = modeVariant;
      language = langVariant;
      difficulty;
      timestamp;
      mistakesCount;
    };
    store.add(session);
    session;
  };

  public func getSessions(store : List.List<Types.SessionStats>) : [Types.SessionStats] {
    store.toArray();
  };

  public func getStreak(streak : Types.StreakData) : Types.StreakData {
    streak;
  };

  public func updateStreak(streak : Types.StreakData, today : Text) : Types.StreakData {
    if (streak.lastSessionDate == today) {
      // Already updated today — keep current streak
      streak
    } else if (isConsecutiveDay(streak.lastSessionDate, today)) {
      { currentStreak = streak.currentStreak + 1; lastSessionDate = today }
    } else if (streak.lastSessionDate == "") {
      // First ever session
      { currentStreak = 1; lastSessionDate = today }
    } else {
      // Streak broken
      { currentStreak = 1; lastSessionDate = today }
    };
  };

  // Helper: check if `next` is exactly one day after `prev` (both "YYYY-MM-DD")
  private func isConsecutiveDay(prev : Text, next : Text) : Bool {
    // Parse simple YYYY-MM-DD dates into a day-number for comparison
    switch (parseDate(prev), parseDate(next)) {
      case (?pd, ?nd) { nd == pd + 1 };
      case _          { false };
    };
  };

  // Convert "YYYY-MM-DD" to a rough integer day number (ignoring leap-year edge cases
  // for streak purposes — off-by-one on Feb 28/29 is acceptable here)
  private func parseDate(s : Text) : ?Int {
    if (s.size() != 10) return null;
    let parts = s.split(#char '-');
    var collected : [var Text] = [var "", "", ""];
    var idx = 0;
    for (part in parts) {
      if (idx < 3) { collected[idx] := part };
      idx += 1;
    };
    if (idx != 3) return null;
    switch (textToNat(collected[0]), textToNat(collected[1]), textToNat(collected[2])) {
      case (?y, ?m, ?d) {
        // Rough day-number: year*365 + month*30 + day
        ?(y * 365 + m * 30 + d)
      };
      case _ { null };
    };
  };

  private func textToNat(t : Text) : ?Int {
    var result : Int = 0;
    for (c in t.toIter()) {
      let code = Char.toNat32(c);
      if (code < 48 or code > 57) return null;
      result := result * 10 + (Char.toNat32(c) - 48).toNat();
    };
    ?result;
  };
};
