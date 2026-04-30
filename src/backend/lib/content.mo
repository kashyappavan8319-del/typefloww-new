import List "mo:core/List";
import Types "../types/content";

module {
  // Seed the store with default typing content across all modes and languages
  public func seedContent(store : List.List<Types.TypingContent>) {
    if (not store.isEmpty()) return; // already seeded

    // --- PARAGRAPH / ENGLISH ---
    // Difficulty 1-3: Easy
    store.add({ id = 0; mode = #paragraph; language = #english; difficulty = 1; category = "easy";
      text = "The cat sat on the mat. It was a warm and sunny day. Birds sang in the trees." });
    store.add({ id = 1; mode = #paragraph; language = #english; difficulty = 1; category = "easy";
      text = "She went to the store to buy some milk and eggs. The shop was not far from her home." });
    store.add({ id = 2; mode = #paragraph; language = #english; difficulty = 2; category = "easy";
      text = "Learning to type quickly is a useful skill. Practice every day and you will improve your speed." });
    store.add({ id = 3; mode = #paragraph; language = #english; difficulty = 2; category = "easy";
      text = "The sun rises in the east and sets in the west. Every day brings a new opportunity to learn." });
    store.add({ id = 4; mode = #paragraph; language = #english; difficulty = 3; category = "medium";
      text = "Reading books is one of the best ways to expand your vocabulary and improve your writing skills." });
    store.add({ id = 5; mode = #paragraph; language = #english; difficulty = 3; category = "medium";
      text = "Technology has changed the way we communicate, work, and live our daily lives significantly." });

    // Difficulty 4-6: Medium
    store.add({ id = 6; mode = #paragraph; language = #english; difficulty = 4; category = "medium";
      text = "The industrial revolution marked a major turning point in history, transforming manufacturing, agriculture, and transportation forever." });
    store.add({ id = 7; mode = #paragraph; language = #english; difficulty = 4; category = "medium";
      text = "Artificial intelligence is rapidly advancing, enabling machines to perform tasks that once required human intelligence and creativity." });
    store.add({ id = 8; mode = #paragraph; language = #english; difficulty = 5; category = "medium";
      text = "Climate change poses significant challenges to ecosystems worldwide, requiring immediate global cooperation and sustainable policy solutions." });
    store.add({ id = 9; mode = #paragraph; language = #english; difficulty = 5; category = "medium";
      text = "The human brain contains approximately eighty-six billion neurons, forming complex networks that govern thought, emotion, and behavior." });
    store.add({ id = 10; mode = #paragraph; language = #english; difficulty = 6; category = "medium";
      text = "Quantum mechanics describes the physical properties of nature at the scale of atoms and subatomic particles with extraordinary precision." });
    store.add({ id = 11; mode = #paragraph; language = #english; difficulty = 6; category = "hard";
      text = "Cryptography employs mathematical algorithms to secure digital communications, ensuring confidentiality, integrity, and authenticity of transmitted data." });

    // Difficulty 7-10: Hard
    store.add({ id = 12; mode = #paragraph; language = #english; difficulty = 7; category = "hard";
      text = "Epistemological frameworks in contemporary philosophy challenge traditional assumptions about knowledge acquisition, justification, and the nature of truth." });
    store.add({ id = 13; mode = #paragraph; language = #english; difficulty = 7; category = "hard";
      text = "The mitochondrial DNA hypothesis proposes that all modern humans descended from a single female ancestor who lived approximately two hundred thousand years ago." });
    store.add({ id = 14; mode = #paragraph; language = #english; difficulty = 8; category = "hard";
      text = "Macroeconomic stabilization policies encompass fiscal interventions, monetary adjustments, and structural reforms aimed at sustaining long-term economic equilibrium." });
    store.add({ id = 15; mode = #paragraph; language = #english; difficulty = 8; category = "hard";
      text = "Neuroplasticity refers to the brain's remarkable capacity to reorganize synaptic connections in response to experience, injury, or environmental stimulation." });
    store.add({ id = 16; mode = #paragraph; language = #english; difficulty = 9; category = "hard";
      text = "Phenomenological reduction, as articulated by Husserl, involves bracketing presuppositions to achieve pure consciousness and reveal the intentional structure of experience." });
    store.add({ id = 17; mode = #paragraph; language = #english; difficulty = 9; category = "hard";
      text = "Stochastic gradient descent optimizes neural network parameters iteratively by computing approximate gradients over randomly sampled mini-batches from the training dataset." });
    store.add({ id = 18; mode = #paragraph; language = #english; difficulty = 10; category = "hard";
      text = "The renormalization group approach elucidates how physical phenomena manifest differently across varying length scales, underpinning quantum field theory and critical point behavior." });
    store.add({ id = 19; mode = #paragraph; language = #english; difficulty = 10; category = "hard";
      text = "Bayesian inference synthesizes prior probabilistic beliefs with observed likelihood functions to produce posterior distributions, enabling principled reasoning under uncertainty." });

    // --- PARAGRAPH / HINGLISH ---
    store.add({ id = 20; mode = #paragraph; language = #hinglish; difficulty = 1; category = "easy";
      text = "Aaj ka din bahut sundar hai. Main chai pee raha hoon aur bahar ka mausam bohot achha lag raha hai." });
    store.add({ id = 21; mode = #paragraph; language = #hinglish; difficulty = 2; category = "easy";
      text = "Mujhe typing practice karna pasand hai. Roz thodi der practice karo aur speed apne aap badhegi." });
    store.add({ id = 22; mode = #paragraph; language = #hinglish; difficulty = 3; category = "medium";
      text = "Mobile phones ne hamari zindagi bilkul badal di hai. Ab hum kisi se bhi kabhi bhi baat kar sakte hain." });
    store.add({ id = 23; mode = #paragraph; language = #hinglish; difficulty = 5; category = "medium";
      text = "Online classes ki wajah se students ghar baithe hi padh sakte hain, lekin iska asar unki social life pe bhi padta hai." });
    store.add({ id = 24; mode = #paragraph; language = #hinglish; difficulty = 7; category = "hard";
      text = "Artificial intelligence aur machine learning ke concepts samajhna aaj ke daur mein ek important skill ban gaya hai." });
    store.add({ id = 25; mode = #paragraph; language = #hinglish; difficulty = 9; category = "hard";
      text = "Climate change ek global crisis hai jiske liye developed aur developing dono tarha ke countries ko milke kaam karna hoga." });

    // --- CHAT MODE / ENGLISH ---
    store.add({ id = 26; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "Hey! Are you free this weekend? We should hang out." });
    store.add({ id = 27; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "Just finished that project you mentioned. It went really well!" });
    store.add({ id = 28; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "Did you see the game last night? Absolutely unbelievable finish!" });
    store.add({ id = 29; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "Can you send me the address? I'm leaving in about ten minutes." });
    store.add({ id = 30; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "I was thinking we could try that new restaurant downtown on Friday evening." });
    store.add({ id = 31; mode = #chat; language = #english; difficulty = 0; category = "chat";
      text = "Thanks for the help yesterday! Really saved me a lot of time." });

    // --- CHAT MODE / HINGLISH ---
    store.add({ id = 32; mode = #chat; language = #hinglish; difficulty = 0; category = "chat";
      text = "Kal party mein aa raha hai? Sab log aa rahe hain, bahut maza aayega!" });
    store.add({ id = 33; mode = #chat; language = #hinglish; difficulty = 0; category = "chat";
      text = "Bhai tune movie dekhi kya? Ekdum zabardast thi yaar, must watch hai." });
    store.add({ id = 34; mode = #chat; language = #hinglish; difficulty = 0; category = "chat";
      text = "Kab free ho? Mujhe thodi help chahiye assignment mein." });
    store.add({ id = 35; mode = #chat; language = #hinglish; difficulty = 0; category = "chat";
      text = "Kha liya? Itni der se message nahi kiya toh worried ho gayi thi." });
    store.add({ id = 36; mode = #chat; language = #hinglish; difficulty = 0; category = "chat";
      text = "Yaar kal ka plan cancel ho gaya. Kuch aur karte hain? Batao kya acha lagega." });

    // --- CODING MODE ---
    store.add({ id = 37; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "function greet(name) { return \"Hello, \" + name + \"!\"; }" });
    store.add({ id = 38; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "const items = [1, 2, 3, 4, 5].filter(x => x % 2 === 0).map(x => x * 2);" });
    store.add({ id = 39; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "if (user.isLoggedIn && user.role === \"admin\") { dashboard.show(); }" });
    store.add({ id = 40; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }" });
    store.add({ id = 41; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "class Animal { constructor(name) { this.name = name; } speak() { return this.name + \" makes a sound.\"; } }" });
    store.add({ id = 42; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "async function fetchData(url) { const res = await fetch(url); return res.json(); }" });
    store.add({ id = 43; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "const obj = { key: \"value\", nested: { a: 1, b: [2, 3] } };" });
    store.add({ id = 44; mode = #coding; language = #english; difficulty = 0; category = "coding";
      text = "try { JSON.parse(input); } catch (err) { console.error(\"Invalid JSON:\", err.message); }" });
  };

  public func parseMode(mode : Text) : ?Types.ContentMode {
    switch (mode) {
      case "paragraph" { ?#paragraph };
      case "chat"      { ?#chat };
      case "coding"    { ?#coding };
      case _           { null };
    };
  };

  public func parseLanguage(language : Text) : ?Types.Language {
    switch (language) {
      case "english"  { ?#english };
      case "hinglish" { ?#hinglish };
      case _          { null };
    };
  };

  public func getContent(
    store : List.List<Types.TypingContent>,
    mode : Text,
    language : Text,
    difficulty : Nat,
  ) : [Types.TypingContent] {
    let modeVariant  = parseMode(mode);
    let langVariant  = parseLanguage(language);
    store.filter(func(c) {
      let modeMatch = switch (modeVariant) {
        case (?m) { c.mode == m };
        case null { true };
      };
      let langMatch = switch (langVariant) {
        case (?l) { c.language == l };
        case null { true };
      };
      let diffMatch = difficulty == 0 or c.difficulty == difficulty;
      modeMatch and langMatch and diffMatch;
    }).toArray();
  };

  public func getRandomContent(
    store : List.List<Types.TypingContent>,
    mode : Text,
    language : Text,
    difficulty : Nat,
    seed : Nat,
  ) : ?Types.TypingContent {
    let matches = getContent(store, mode, language, difficulty);
    let size = matches.size();
    if (size == 0) return null;
    let idx = seed % size;
    ?matches[idx];
  };
};
