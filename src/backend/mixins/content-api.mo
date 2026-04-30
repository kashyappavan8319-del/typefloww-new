import List "mo:core/List";
import Int "mo:core/Int";
import Time "mo:core/Time";
import ContentTypes "../types/content";
import ContentLib "../lib/content";

mixin (
  contentStore : List.List<ContentTypes.TypingContent>,
) {
  public query func getContent(mode : Text, language : Text, difficulty : Nat) : async [ContentTypes.TypingContent] {
    ContentLib.getContent(contentStore, mode, language, difficulty);
  };

  public query func getRandomContent(mode : Text, language : Text, difficulty : Nat) : async ?ContentTypes.TypingContent {
    let seed = Int.abs(Time.now()) % 1_000_000;
    ContentLib.getRandomContent(contentStore, mode, language, difficulty, seed);
  };
};
