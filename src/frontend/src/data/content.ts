import type { DifficultyLevel, Language, TypingMode } from "@/types";

// ─── Paragraph content ────────────────────────────────────────────────────────
const PARAGRAPH_EN: Record<DifficultyLevel, string[]> = {
  1: [
    "The cat sat on the mat. The dog ran fast. The sun is bright today.",
    "A bird flew past the window. Trees sway in the wind. Rain falls softly.",
    "Milk is white. The sky is blue. Grass is green. Ice is cold.",
  ],
  2: [
    "Technology connects people across the globe, making communication faster and more accessible than ever before.",
    "The morning light filtered through the curtains, casting gentle shadows across the wooden floor.",
    "Every journey begins with a single step. Keep moving and you will reach your destination.",
  ],
  3: [
    "Consistent practice builds lasting habits. Each small improvement compounds over time, creating remarkable results in the long run.",
    "The city never sleeps, its streets humming with activity as millions of lives intersect in unexpected ways.",
    "Reading every day sharpens your mind, expands your vocabulary, and opens doors to worlds you never knew existed.",
  ],
  4: [
    "Mastery is not achieved overnight. It requires deliberate effort, focused repetition, and the patience to embrace incremental growth through daily discipline.",
    "Scientists have discovered that the human brain remains remarkably adaptable throughout life, capable of forming new connections given the right stimulation.",
    "Effective communication requires not just speaking clearly but listening deeply, understanding context, and responding with thoughtfulness and precision.",
  ],
  5: [
    "The philosophy of stoicism teaches us to distinguish between what lies within our control and what does not, finding peace through acceptance and rational action.",
    "Deep work — the ability to focus without distraction on cognitively demanding tasks — is becoming increasingly rare in our notification-saturated world.",
    "Emotional intelligence encompasses self-awareness, empathy, and the capacity to regulate one's emotions in the face of stress, conflict, and uncertainty.",
  ],
  6: [
    "Quantum computing leverages superposition and entanglement to perform calculations exponentially faster than classical machines, potentially revolutionizing cryptography and drug discovery.",
    "The Renaissance was not merely an artistic movement but a profound shift in how Europeans understood humanity, nature, and their place within the cosmos.",
    "Machine learning algorithms identify patterns in vast datasets, enabling systems to make predictions and decisions without being explicitly programmed for each scenario.",
  ],
  7: [
    "Neuroplasticity research demonstrates that sustained cognitive training reshapes neural architecture, improving processing speed and working memory capacity across all age groups.",
    "The socioeconomic implications of automation extend far beyond job displacement, touching upon questions of identity, purpose, and the redistribution of productive wealth.",
    "Epigenetic mechanisms regulate gene expression without altering the underlying DNA sequence, explaining how environmental factors can produce heritable phenotypic changes across generations.",
  ],
  8: [
    "Phenomenological inquiry examines lived experience as it manifests in consciousness, bracketing theoretical assumptions to reveal the essential structures of perception and intentionality.",
    "The thermodynamic arrow of time — entropy's inexorable increase — provides a physical basis for causality, explaining why we remember the past but not the future.",
    "Distributed ledger technologies introduce trustless consensus mechanisms that eliminate the need for centralized intermediaries in financial transactions and contractual agreements.",
  ],
  9: [
    "Epistemological frameworks that privilege empirical falsifiability necessarily marginalize hermeneutic methodologies, creating interdisciplinary tensions that resist straightforward methodological resolution.",
    "The dialectical interplay between technological determinism and social constructivism shapes contemporary debates about agency, infrastructure, and the political economy of innovation.",
    "Cognitive dissonance arises when individuals encounter information that contradicts existing beliefs, triggering psychological discomfort that motivates rationalization rather than genuine belief revision.",
  ],
  10: [
    "Transcendental idealism posits that space, time, and causality are synthetic a priori conditions of experience rather than properties of things-in-themselves, fundamentally restructuring metaphysical inquiry.",
    "The post-structuralist deconstruction of binary oppositions reveals how hierarchical conceptual frameworks perpetuate ideological formations that naturalize contingent power arrangements within discourse.",
    "Apophatic theology asserts that divine attributes resist positive predication, such that authentic theological language proceeds through negation, acknowledging the radical incomprehensibility of the absolute.",
  ],
};

const PARAGRAPH_HI: Record<number, string[]> = {
  1: [
    "Aaj mausam bahut acha hai. Chalo thoda bahar chalte hain. Ghar pe chai pite hain.",
    "Yaar kya scene hai aaj. Sab theek hai. Chal milte hain baad mein.",
    "Neend aa rahi hai. Kuch kha lein pehle. Phir so jaate hain.",
  ],
  2: [
    "Kal office mein bahut kaam tha, isliye ghar late aaya. Phir bhi dinner time pe baith gaye sab log.",
    "Dosto ke saath time spend karna bahut zaroori hai. Zindagi mein relationships sabse important hote hain.",
    "Subah jaldi uthna mushkil hota hai but ek baar habit pad jaaye toh life bahut productive ho jaati hai.",
  ],
  3: [
    "Aajkal social media pe itna time waste ho jaata hai. Better hai ki koi productive kaam karo apne free time mein.",
    "Gym jaana shuru kiya hai maine. Pehle do din bahut pain hota hai but phir dheere dheere theek ho jaata hai.",
    "Cooking sikhna chahiye sabko. Ghar ka khana healthy bhi hota hai aur pocket-friendly bhi.",
  ],
  4: [
    "Career mein success ke liye sirf hard work nahi, smart work bhi chahiye. Apna time wisely invest karo useful skills mein.",
    "India mein startup culture bahut tezi se grow ho raha hai. Young entrepreneurs apne dreams pursue karne ke liye risk le rahe hain.",
    "Paisa save karna ek art hai. Monthly budget banana chahiye aur unnecessary expenses ko identify karke cut karna chahiye.",
  ],
  5: [
    "Life mein balance maintain karna sabse mushkil kaam hai. Work, family, health aur personal growth sab ek saath handle karna padta hai.",
    "Desi food ka koi comparison nahi hai. Ghar ki dal roti aur maa ke haath ka khana — yahi sach mein soul food hai.",
    "Travelling se perspective change ho jaata hai. Naye log, naye khane, naye culture — sab kuch mind ko broaden karta hai.",
  ],
  6: [
    "Aajkal AI tools itne powerful ho gaye hain ki bahut saare repetitive tasks automate ho sakte hain. Hume apni unique human skills pe zyada focus karna chahiye.",
    "Remote work ne work-life balance ka concept completely change kar diya hai. Ab boundaries set karna aur bhi important ho gaya hai apni mental health ke liye.",
    "Financial literacy bahut zaroori hai lekin schools mein rarely sikhaya jaata hai. Investing, budgeting aur compound interest — yeh sab early samajhna chahiye.",
  ],
  7: [
    "Climate change ek global challenge hai jisko solve karne ke liye individual aur government dono ko milkar kaam karna padega. Small habits bhi ek bada impact create kar sakti hain.",
    "Content creation ek full-time career ban gaya hai. Lekin sirf views ke peeche bhaagna galat hai — authentic aur valuable content hi long term mein kaam aata hai.",
    "Mental health tabhi improve hoti hai jab hum apne emotions ko acknowledge karte hain instead of suppress karne ke. Therapy aur journaling dono bahut helpful tools hain.",
  ],
  8: [
    "Blockchain technology sirf cryptocurrency se zyada hai — yeh supply chain management, digital identity aur decentralized governance mein bhi revolutionary changes la sakti hai.",
    "Deep learning models ab itne sophisticated hain ki woh language, images aur even protein structures ko samajh sakte hain. Yeh scientific research ko completely transform kar raha hai.",
    "Urban planning mein sustainability integrate karna ab optional nahi raha. Smart cities ko energy efficiency, green spaces aur public transport ko ek cohesive system mein merge karna hoga.",
  ],
  9: [
    "Epistemological debates ke baare mein sochein toh hum dekhte hain ki knowledge aur belief ke beech ka farak — yeh philosophical question aaj bhi relevant hai modern AI systems ke context mein.",
    "Neuroplasticity research ne yeh prove kar diya hai ki focused deliberate practice ke through hum apne brain ke neural pathways ko literally reshape kar sakte hain kisi bhi age mein.",
    "Socioeconomic inequality aur technological disruption ek saath chal rahe hain — iska matlab hai ki reskilling aur lifelong learning ek luxury nahi balki survival skill ban gayi hai.",
  ],
  10: [
    "Consciousness ka hard problem — yaani yeh samajhna ki subjective experience physically explain kyun nahi ho sakta — philosophy aur neuroscience dono ke liye ek fundamental challenge bana hua hai.",
    "Post-colonial theory examine karti hai ki kaise historical power structures aaj bhi knowledge production, language policies aur institutional practices mein embedded hain.",
    "Quantum entanglement aur non-locality ke implications sirf physics tak limited nahi hain — yeh metaphysical assumptions ko bhi challenge karte hain jo causality aur separability ke baare mein hain.",
  ],
};

// ─── Chat content ──────────────────────────────────────────────────────────────
export interface ChatMessage {
  text: string;
  sender: "them" | "me";
}

const CHAT_EN: Record<number, ChatMessage[][]> = {
  1: [
    [
      { sender: "them", text: "Hey! How are you doing today?" },
      { sender: "me", text: "Pretty good, thanks for asking!" },
      { sender: "them", text: "Any plans for the weekend?" },
      { sender: "me", text: "Maybe catch a movie. You?" },
    ],
    [
      { sender: "them", text: "Did you see the game last night?" },
      { sender: "me", text: "Yes! What a finish that was." },
      { sender: "them", text: "Totally unexpected. Love it." },
    ],
  ],
  2: [
    [
      {
        sender: "them",
        text: "Just finished the presentation, it went really well!",
      },
      { sender: "me", text: "That's awesome, congrats!" },
      { sender: "them", text: "Can you send me that file you mentioned?" },
      { sender: "me", text: "Sure, I'll send it right after lunch." },
    ],
    [
      { sender: "them", text: "Are you joining the meeting at 3?" },
      { sender: "me", text: "Yes, I'll be there. Should be quick." },
      { sender: "them", text: "Cool, see you then!" },
    ],
  ],
  3: [
    [
      { sender: "them", text: "Hey, quick update — the server is back up!" },
      { sender: "me", text: "Oh thank goodness. What was the issue?" },
      { sender: "them", text: "Just a config file got corrupted. Fixed now." },
      { sender: "me", text: "Glad it was simple. I'll monitor it for a bit." },
    ],
  ],
  4: [
    [
      {
        sender: "them",
        text: "The PR looks good to me. Nice work on the refactor!",
      },
      {
        sender: "me",
        text: "Thanks! I left a few minor comments but nothing blocking.",
      },
      {
        sender: "them",
        text: "LGTM once those are addressed. Merging tomorrow.",
      },
      { sender: "me", text: "Perfect. I'll push the fixes tonight." },
    ],
  ],
  5: [
    [
      {
        sender: "them",
        text: "Heads up — the deploy pipeline failed again on staging.",
      },
      {
        sender: "me",
        text: "I saw that. Jenkins is throwing a 403 on the artifact registry.",
      },
      {
        sender: "them",
        text: "Might be a service account permissions issue. Can you check?",
      },
      {
        sender: "me",
        text: "On it. I'll update the Slack thread once I find the root cause.",
      },
    ],
  ],
};

const CHAT_HI: Record<number, ChatMessage[][]> = {
  1: [
    [
      { sender: "them", text: "Kya scene hai yaar? Kab free ho?" },
      { sender: "me", text: "Thodi der mein free ho jaunga." },
      { sender: "them", text: "Chal phir milte hain chai pe." },
      { sender: "me", text: "Ha bilkul, 6 baje chalega?" },
    ],
  ],
  2: [
    [
      {
        sender: "them",
        text: "Yaar meeting cancel ho gayi aaj. Accha hua waise.",
      },
      {
        sender: "me",
        text: "Haha mujhe bhi relief mila. Bahut kaam pending tha.",
      },
      { sender: "them", text: "Bhai woh wala restaurant try kiya?" },
      { sender: "me", text: "Nahi abhi tak. Next weekend pakka chalte hain." },
    ],
  ],
  3: [
    [
      {
        sender: "them",
        text: "Aaj traffic itna bura tha, 45 mins late pahuncha office.",
      },
      { sender: "me", text: "Ooff yaar, metro lena start kar do seriously." },
      { sender: "them", text: "Soch raha hun. Weekend pe plan kya hai?" },
      { sender: "me", text: "Picnic ka plan hai, tu bhi aa jaa." },
    ],
  ],
  4: [
    [
      {
        sender: "them",
        text: "Yaar woh project deadline aaj hai, kuch kiya tune?",
      },
      {
        sender: "me",
        text: "Haan bhai, raat bhar kaam kiya. Almost done hai, bas review baaki hai.",
      },
      {
        sender: "them",
        text: "Kya ho gaya tha itna? Kuch issue aaya implementation mein?",
      },
      {
        sender: "me",
        text: "API integration mein bug tha. Fix ho gaya but time lag gaya.",
      },
    ],
  ],
  5: [
    [
      {
        sender: "them",
        text: "Tune new framework try kiya? Sab log React ke baad Next.js pe shift ho rahe hain.",
      },
      {
        sender: "me",
        text: "Haan, server components ka concept interesting hai. But learning curve thoda steep hai.",
      },
      {
        sender: "them",
        text: "Performance benefits worth it hain. Especially SEO ke liye toh must hai.",
      },
      {
        sender: "me",
        text: "Agree. Abhi ek small project mein try kar raha hun phir production mein launga.",
      },
    ],
  ],
};

// ─── Coding content ────────────────────────────────────────────────────────────
const CODING_EN: Record<number, string[]> = {
  1: [
    "const x = 10; let y = 20; console.log(x + y);",
    "if (a > b) { return a; } else { return b; }",
    "const arr = [1, 2, 3]; arr.forEach((n) => console.log(n));",
  ],
  2: [
    "function greet(name: string): string { return `Hello, ${name}!`; }",
    "const doubled = [1, 2, 3].map((n) => n * 2); console.log(doubled);",
    "const obj = { name: 'Alice', age: 30 }; const { name, age } = obj;",
  ],
  3: [
    "interface User { id: number; name: string; email: string; } const users: User[] = [];",
    "const fetchData = async (url: string) => { const res = await fetch(url); return res.json(); };",
    "const sum = (nums: number[]): number => nums.reduce((acc, n) => acc + n, 0);",
  ],
  4: [
    "export default function Counter() { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c + 1)}>{count}</button>; }",
    "const router = createBrowserRouter([{ path: '/', element: <Home /> }, { path: '/about', element: <About /> }]);",
    "class Stack<T> { private items: T[] = []; push(item: T): void { this.items.push(item); } pop(): T | undefined { return this.items.pop(); } }",
  ],
  5: [
    "type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }; function divide(a: number, b: number): Result<number, string> { if (b === 0) return { ok: false, error: 'Division by zero' }; return { ok: true, value: a / b }; }",
    "const memoize = <T, R>(fn: (arg: T) => R): ((arg: T) => R) => { const cache = new Map<T, R>(); return (arg: T) => { if (cache.has(arg)) return cache.get(arg)!; const result = fn(arg); cache.set(arg, result); return result; }; };",
  ],
};

const CODING_HI: Record<number, string[]> = {
  1: [
    "const x = 10; // yeh variable hai. console.log(x); // output dekhte hain",
    "if (user.isLoggedIn) { showDashboard(); } else { redirectToLogin(); }",
  ],
  2: [
    "function total(cart: Item[]): number { return cart.reduce((sum, item) => sum + item.price, 0); }",
    "const [loading, setLoading] = useState(false); // loading state track karna hai",
  ],
  3: [
    "interface Product { id: number; naam: string; daam: number; } const products: Product[] = []; // products list",
    "const fetchUser = async (id: string) => { const res = await fetch(`/api/users/${id}`); return res.json(); }; // user data lao",
    "const numbers = [5, 3, 8, 1]; const sorted = numbers.sort((a, b) => a - b); // ascending sort karo",
  ],
  4: [
    "export function UserCard({ naam, email }: { naam: string; email: string }) { return <div className='card'><h2>{naam}</h2><p>{email}</p></div>; }",
    "const useLocalData = <T>(key: string, initial: T) => { const [val, setVal] = useState<T>(() => { const saved = localStorage.getItem(key); return saved ? JSON.parse(saved) as T : initial; }); return [val, setVal] as const; };",
  ],
  5: [
    "type ApiResponse<T> = { success: true; data: T } | { success: false; error: string }; async function safeFetch<T>(url: string): Promise<ApiResponse<T>> { try { const res = await fetch(url); const data = await res.json() as T; return { success: true, data }; } catch { return { success: false, error: 'Network error' }; } }",
    "const debounce = <T extends unknown[]>(fn: (...args: T) => void, delay: number) => { let timer: ReturnType<typeof setTimeout>; return (...args: T) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }; // search bar ke liye useful hai",
  ],
};

// ─── Public getters ────────────────────────────────────────────────────────────

export function getParagraphContent(
  lang: Language,
  difficulty: DifficultyLevel,
): string {
  const pool =
    lang === "hinglish"
      ? (PARAGRAPH_HI[difficulty] ?? PARAGRAPH_HI[1])
      : (PARAGRAPH_EN[difficulty] ?? PARAGRAPH_EN[1]);
  return (
    pool[Math.floor(Math.random() * pool.length)] ??
    "The quick brown fox jumps over the lazy dog."
  );
}

export function getChatMessages(
  lang: Language,
  difficulty: number,
): ChatMessage[] {
  const pool =
    lang === "hinglish"
      ? (CHAT_HI[difficulty] ?? CHAT_HI[1])
      : (CHAT_EN[difficulty] ?? CHAT_EN[1]);
  const conversation = pool[Math.floor(Math.random() * pool.length)];
  return conversation ?? CHAT_EN[1][0];
}

export function getCodingContent(lang: Language, difficulty: number): string {
  const pool =
    lang === "hinglish"
      ? (CODING_HI[difficulty] ?? CODING_HI[1])
      : (CODING_EN[difficulty] ?? CODING_EN[1]);
  return pool[Math.floor(Math.random() * pool.length)] ?? "const x = 42;";
}

export function getContent(
  mode: TypingMode,
  lang: Language,
  difficulty: DifficultyLevel,
): string {
  switch (mode) {
    case "paragraph":
      return getParagraphContent(lang, difficulty);
    case "chat":
      return getChatMessages(lang, difficulty)
        .map((m) => m.text)
        .join(" ");
    case "coding":
      return getCodingContent(lang, difficulty);
  }
}
