import Common "common";

module {
  public type ContentMode = { #paragraph; #chat; #coding };
  public type Language = { #english; #hinglish };

  public type TypingContent = {
    id : Common.ContentId;
    text : Text;
    mode : ContentMode;
    language : Language;
    difficulty : Nat; // 1-10; 0 means N/A (chat, coding)
    category : Text;
  };
};
