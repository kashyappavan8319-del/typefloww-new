import List "mo:core/List";
import ContentTypes "types/content";
import SessionTypes "types/session";
import ContentLib "lib/content";
import ContentMixin "mixins/content-api";
import SessionMixin "mixins/session-api";

actor {
  let contentStore = List.empty<ContentTypes.TypingContent>();

  let sessionStore = List.empty<SessionTypes.SessionStats>();
  let sessionState : SessionTypes.SessionState = {
    var nextId = 0;
    var streak = { currentStreak = 0; lastSessionDate = "" };
  };

  // Seed content on actor install
  ContentLib.seedContent(contentStore);

  include ContentMixin(contentStore);
  include SessionMixin(sessionStore, sessionState);
};
