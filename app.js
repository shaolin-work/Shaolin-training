
const STORAGE_KEY = "shaolin-path-v8-evolving";
const localISODate = (date = new Date()) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
const ISO_DATE = () => localISODate();
const addDaysLocal = (iso, daysToAdd) => {
  const date = new Date(`${iso}T00:00:00`);
  date.setDate(date.getDate() + daysToAdd);
  return localISODate(date);
};
const daysBetweenLocal = (a, b) => {
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db - da) / 86400000);
};
const prettyDate = (iso) => {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  } catch (e) {
    return iso;
  }
};

const defaultState = {
  selectedTab: "home",
  selectedLibrary: "pushups",
  currentDayIndex: 0,
  completedDays: {},
  completedLog: [],
  scheduleStartDate: null,
  journal: [],
  readiness: {
    sleep: 3,
    energy: 3,
    soreness: 3,
    stress: 3,
    motivation: 3,
    jointPain: 1,
    lastUpdated: null,
    override: null
  },
  settings: {
    intensity: "push",
    walkMinutes: 25,
    trainMinutes: 28,
    showCues: true,
    recoveryMode: false,
    showReadinessGate: true
  }
};

const days = [
  {
    slug: "day1",
    title: "Day 1 · Iron Frame",
    focus: "Upper body strength, stance discipline, core brace",
    duration: "24–30 min",
    intensityNote: "Push day. Strong effort, clean form, stop 1 rep before sloppy failure.",
    badges: ["Strength", "Discipline", "Chest + Core"],
    exercises: [
      { name: "Push-ups", base: "14", push: "18", cue: "Shoulders packed. Full range. Strong lockout.", notes: "Use push-up handles if wrists prefer them." },
      { name: "Horse stance", base: "50 sec x 2", push: "70 sec x 2", cue: "Feet rooted. Knees open. Spine tall.", notes: "Breathe low into the belly." },
      { name: "Plank", base: "45 sec x 2", push: "60 sec x 2", cue: "Ribs down. Glutes on. Neck long.", notes: "No sagging through the low back." },
      { name: "Straight punches", base: "40 total", push: "70 total", cue: "Snap out, pull back fast.", notes: "Move with intent, not just speed." }
    ]
  },
  {
    slug: "day2",
    title: "Day 2 · Root and Breath",
    focus: "Leg endurance, qigong structure, calm under fatigue",
    duration: "22–28 min",
    intensityNote: "Legs burn, breath stays calm.",
    badges: ["Legs", "Qigong", "Mental control"],
    exercises: [
      { name: "Walking lunges", base: "20 steps", push: "32 steps", cue: "Tall chest. Knee tracks clean.", notes: "Use split squats if space is tight." },
      { name: "Horse stance pulses", base: "20", push: "35", cue: "Pulse small. Stay loaded.", notes: "Burn is the point. Hold posture." },
      { name: "Standing meditation", base: "2 min", push: "4 min", cue: "Relax face and jaw while staying tall.", notes: "This is discipline, not rest." },
      { name: "Qigong breathing", base: "3 min", push: "5 min", cue: "Slow inhale, longer exhale.", notes: "Bring heart rate down without losing focus." }
    ]
  },
  {
    slug: "day3",
    title: "Day 3 · Power Flow",
    focus: "Explosive intent, core control, martial rhythm",
    duration: "22–30 min",
    intensityNote: "Fast, clean, sharp. Power without losing shape.",
    badges: ["Power", "Footwork", "Athletic"],
    exercises: [
      { name: "Squat thrusts", base: "10", push: "16", cue: "Land soft, drive hard.", notes: "Keep the rib cage controlled." },
      { name: "Front kicks", base: "16 total", push: "26 total", cue: "Chamber, snap, recoil.", notes: "Quality kick height beats sloppy height." },
      { name: "Footwork rounds", base: "3 x 40 sec", push: "4 x 50 sec", cue: "Stay springy, stay light.", notes: "Forward, back, angle, reset." },
      { name: "Bow stance holds", base: "35 sec / side", push: "50 sec / side", cue: "Front knee bent, rear leg driven long.", notes: "Feel grounded through the feet." }
    ]
  },
  {
    slug: "day4",
    title: "Day 4 · Warrior Recovery",
    focus: "Mobility, tissue reset, calm mind, long posture",
    duration: "18–24 min",
    intensityNote: "Easy on joints, still serious on discipline.",
    badges: ["Recovery", "Mobility", "Reset"],
    exercises: [
      { name: "Shu Jing Gong flow", base: "4 min", push: "6 min", cue: "Smooth movement, no rush.", notes: "Let the body unwind." },
      { name: "Cat mobility", base: "8 reps", push: "12 reps", cue: "Segment the spine.", notes: "Slow and controlled." },
      { name: "Seated meditation", base: "4 min", push: "7 min", cue: "Still body, active attention.", notes: "Observe breath without chasing thoughts." },
      { name: "Walking cooldown", base: "5 min", push: "8 min", cue: "Nasal breathing if comfortable.", notes: "Stay relaxed and tall." }
    ]
  },
  {
    slug: "day5",
    title: "Day 5 · Iron Chest",
    focus: "Upper-body volume, pressing endurance, posture",
    duration: "24–32 min",
    intensityNote: "Big effort day. Strong chest, arms, and mind.",
    badges: ["Upper Body", "Volume", "Confidence"],
    exercises: [
      { name: "Push-up ladder", base: "5-6-7", push: "6-8-10", cue: "Short rests, strict reps.", notes: "Scale to incline if form breaks." },
      { name: "Plank shoulder taps", base: "20 total", push: "32 total", cue: "Keep hips quiet.", notes: "This is anti-rotation core work." },
      { name: "Straight punch finisher", base: "60 total", push: "100 total", cue: "Exhale with the punch.", notes: "Finish strong, stay technical." },
      { name: "Standing breath reset", base: "2 min", push: "3 min", cue: "Downshift but do not collapse.", notes: "Recover with control." }
    ]
  },
  {
    slug: "day6",
    title: "Day 6 · Rooted Engine",
    focus: "Leg drive, conditioning, grit under load",
    duration: "24–30 min",
    intensityNote: "This is the grind day. Controlled suffering.",
    badges: ["Conditioning", "Legs", "Grit"],
    exercises: [
      { name: "Split squat holds", base: "30 sec / side", push: "45 sec / side", cue: "Front foot rooted, chest proud.", notes: "Breathe through the burn." },
      { name: "Mountain climbers", base: "30 sec x 2", push: "45 sec x 3", cue: "Drive knees without bouncing high.", notes: "Shoulders stay above wrists." },
      { name: "Horse stance", base: "60 sec", push: "90 sec", cue: "Relax face, endure legs.", notes: "Mental toughness set." },
      { name: "Qigong close", base: "3 min", push: "4 min", cue: "Lower the nervous system gently.", notes: "Finish steady." }
    ]
  },
  {
    slug: "day7",
    title: "Day 7 · Long Path",
    focus: "Longer walk, breath, journal, mental sharpening",
    duration: "20–30 min plus walk",
    intensityNote: "Active recovery with intention. No wasted day.",
    badges: ["Mindset", "Reset", "Consistency"],
    exercises: [
      { name: "Morning walk", base: "25 min", push: "35 min", cue: "Move tall and steady.", notes: "This anchors the full routine." },
      { name: "Standing meditation", base: "3 min", push: "5 min", cue: "Stillness under slight discomfort.", notes: "Feet rooted, shoulders down." },
      { name: "Journal reflection", base: "5 min", push: "8 min", cue: "Write what improved, not just what hurt.", notes: "Track body, mood, and discipline." },
      { name: "Breathing close", base: "3 min", push: "5 min", cue: "Long exhale to settle the body.", notes: "Enter the next week calm and ready." }
    ]
  }
];

const libraryItems = [
  { slug: "pushups", title: "Push-ups", type: "Strength drill", description: "Primary chest, shoulders, triceps, brace, and willpower builder. One of the backbone movements of this plan.", cues: ["Hands under shoulders or slightly wider", "Body moves as one line", "Drive away hard at the top", "Stop before ugly reps"], assets: ["pushups_1.svg", "pushups_2.svg", "pushups_3.svg"] },
  { slug: "horse", title: "Horse stance", type: "Stance / discipline drill", description: "Builds leg endurance, posture, and the ability to stay composed under discomfort.", cues: ["Feet wider than shoulders", "Knees open over toes", "Tailbone heavy, chest tall", "Relax face while legs work"], assets: ["horse_1.svg", "horse_2.svg", "horse_3.svg"] },
  { slug: "plank", title: "Plank", type: "Core brace drill", description: "Direct trunk stability builder that carries into punches, kicks, and daily strength.", cues: ["Squeeze glutes", "Ribs down", "Push the floor away", "Breathe without losing tension"], assets: ["plank_1.svg", "plank_2.svg", "plank_3.svg"] },
  { slug: "straightpunch", title: "Straight punch", type: "Technique / power drill", description: "Teaches crisp extension, recoil, breath timing, and focus through repeated high-quality strikes.", cues: ["Shoulders stay low", "Twist only enough to connect", "Fast out, fast back", "Exhale on contact"], assets: ["straightpunch_1.svg", "straightpunch_2.svg", "straightpunch_3.svg"] },
  { slug: "frontkick", title: "Front kick", type: "Technique / balance drill", description: "Builds balance, hip control, coordination, and athletic sharpness without needing much space.", cues: ["Chamber first", "Kick straight through the line", "Recoil under control", "Stay tall through the standing leg"], assets: ["frontkick_1.svg", "frontkick_2.svg", "frontkick_3.svg"] },
  { slug: "qigong", title: "Qigong breathing", type: "Breath / recovery drill", description: "Used to restore calm, sharpen body awareness, and keep progress sustainable instead of burning out.", cues: ["Inhale low", "Longer exhale", "Jaw soft", "Do not slump while relaxing"], assets: ["qigong_1.svg", "qigong_2.svg", "qigong_3.svg"] },
  { slug: "standingmed", title: "Standing meditation", type: "Mind / posture drill", description: "Teaches stillness under tension. Excellent for Shaolin-style mental strength and posture control.", cues: ["Unlock knees slightly", "Crown of head lifts", "Shoulders heavy", "Eyes soft, breath steady"], assets: ["standingmed_1.svg", "standingmed_2.svg", "standingmed_3.svg"] },
  { slug: "footwork", title: "Footwork rounds", type: "Athletic movement drill", description: "Makes the body feel alive, coordinated, responsive, and less stiff than pure static work.", cues: ["Stay on the balls of the feet", "Short clean steps", "Angle and reset", "Keep breathing quiet"], assets: ["footwork_1.svg", "footwork_2.svg", "footwork_3.svg"] },
  { slug: "cat", title: "Cat mobility", type: "Recovery drill", description: "A simple but valuable spine and shoulder reset to keep the body moving properly.", cues: ["Move one segment at a time", "Exhale into the rounding phase", "Do not rush", "Keep pressure even through the hands"], assets: ["cat_1.svg", "cat_2.svg", "cat_3.svg"] },
  { slug: "bow", title: "Bow stance", type: "Stance drill", description: "Improves grounded leg strength, posture, and transition power.", cues: ["Long stance", "Front knee over foot", "Rear leg alive", "Hips face forward enough to stay stable"], assets: ["bow_1.svg", "bow_2.svg", "bow_3.svg"] },
  { slug: "shujingong", title: "Shu Jing Gong", type: "Recovery flow", description: "Gentle restorative flow for days when you need useful movement without joint punishment.", cues: ["Smooth tempo", "No forcing range", "Relax shoulders", "Let breath lead pace"], assets: ["shujinggong_1.svg", "shujinggong_2.svg", "shujinggong_3.svg"] },
  { slug: "seatedmed", title: "Seated meditation", type: "Mind drill", description: "Improves attention, calm, and the ability to stay with discomfort or noise without breaking focus.", cues: ["Spine tall", "Hands relaxed", "Long exhale", "Bring attention back each time it drifts"], assets: ["seatedmed_1.svg", "seatedmed_2.svg", "seatedmed_3.svg"] }
];

const libraryEnhancements = {
  pushups: {
    howTo: [
      "Set hands just outside shoulder width and screw them lightly into the floor.",
      "Brace abs and glutes first so the body lifts as one straight unit.",
      "Lower chest between the hands with elbows angled roughly 30–45° from the body.",
      "Drive the floor away and finish with full control, not a collapsed lockout."
    ],
    mistakes: ["Sagging hips", "Flaring elbows too wide", "Half reps", "Neck poking forward"],
    regressions: ["Incline push-up on bench, bed, or wall", "Knee push-up while keeping ribs down"],
    progressions: ["Slow 3-second lowering", "Pause push-ups", "Feet-elevated push-ups"],
    recoverySwap: "Switch to incline push-ups or wall push-ups and cut total reps by about 40%.",
    whenToPullBack: "Trim back if wrists, shoulders, or sternum feel sharp or unstable.",
    videoQueries: ["push up form tutorial", "incline push up tutorial", "how to progress push ups"]
  },
  horse: {
    howTo: [
      "Step out wide enough that the thighs have to work but the knees still track well over the feet.",
      "Sit the hips down while keeping the chest tall and the spine stacked.",
      "Press the knees out gently and root the feet into the floor.",
      "Breathe slowly and keep the face, jaw, and shoulders relaxed."
    ],
    mistakes: ["Knees collapsing in", "Leaning too far forward", "Standing too high", "Holding breath"],
    regressions: ["Higher horse stance", "Shorter hold with multiple rounds"],
    progressions: ["Longer holds", "Pulse finishers", "Loaded hold later on if you ever add weights"],
    recoverySwap: "Raise the stance height and reduce hold time if knees, hips, or low back are irritated.",
    whenToPullBack: "Do not grind through sharp knee pain or hip pinching.",
    videoQueries: ["horse stance tutorial kung fu", "martial arts horse stance form", "horse stance beginner guide"]
  },
  plank: {
    howTo: [
      "Set shoulders over elbows or hands, depending on the plank variation.",
      "Brace abs, glutes, and quads before the hold starts.",
      "Keep ribs tucked and the neck long.",
      "Breathe behind the brace instead of letting the body sag."
    ],
    mistakes: ["Low back sag", "Hips too high", "Holding breath", "Looking too far forward"],
    regressions: ["Knee plank", "Shorter rounds with perfect tension"],
    progressions: ["Longer hold", "Shoulder taps", "Hardstyle plank"],
    recoverySwap: "Use shorter rounds or knee planks if the shoulders or low back are cranky.",
    whenToPullBack: "Back off if you cannot keep a neutral trunk.",
    videoQueries: ["plank form tutorial", "knee plank tutorial", "hardstyle plank tutorial"]
  },
  straightpunch: {
    howTo: [
      "Set the stance first so the body is rooted before the punch leaves.",
      "Punch straight down the center line with a crisp exhale.",
      "Snap the fist back to guard just as sharply as it went out.",
      "Keep shoulders low and avoid over-rotating."
    ],
    mistakes: ["Dropping the non-punching hand", "Punching with a shrug", "Reaching instead of snapping", "Elbows flaring out"],
    regressions: ["Slow-motion punches", "Shorter punch rounds with full focus"],
    progressions: ["Faster rounds", "Timed combos", "Shadowboxing integration"],
    recoverySwap: "Go slower and focus on clean form rather than speed if elbows or shoulders feel off.",
    whenToPullBack: "Reduce volume if the shoulder front or elbow joint feels irritated.",
    videoQueries: ["straight punch tutorial martial arts", "jab cross form basics", "kung fu straight punch technique"]
  },
  frontkick: {
    howTo: [
      "Lift the knee first to chamber the kick.",
      "Snap the lower leg out without leaning back excessively.",
      "Recoil the leg cleanly before setting it down.",
      "Stay tall and balanced on the standing leg."
    ],
    mistakes: ["Swinging the leg from the hip with no chamber", "Leaning back too far", "Dropping the hands", "Slamming the foot down"],
    regressions: ["Knee chamber holds", "Low front kicks", "Supported balance work"],
    progressions: ["Higher kick only if shape stays clean", "Timed kick rounds", "Kick-and-recoil holds"],
    recoverySwap: "Keep kicks lower and use chamber drills only if hips or lower back feel tight.",
    whenToPullBack: "Pull back if hip flexors pinch or balance feels dangerous.",
    videoQueries: ["front kick tutorial martial arts", "front snap kick basics", "beginner front kick form"]
  },
  qigong: {
    howTo: [
      "Stand tall with a soft chest and relaxed jaw.",
      "Breathe into the lower ribs and belly instead of only the upper chest.",
      "Let the exhale run slightly longer than the inhale.",
      "Keep the movement slow enough that the nervous system actually downshifts."
    ],
    mistakes: ["Shrugging on inhale", "Rushing the breath", "Collapsing posture", "Trying too hard to force relaxation"],
    regressions: ["Short 2-minute breathing block", "Seated breathing"],
    progressions: ["Longer breathing sets", "More coordinated arm patterns", "Longer exhale emphasis"],
    recoverySwap: "This is already one of the main recovery swaps. Use it liberally on red days.",
    whenToPullBack: "If you feel dizzy, shorten the breath and return to normal breathing.",
    videoQueries: ["qigong breathing tutorial", "standing qigong breathing", "beginner qigong breath practice"]
  },
  standingmed: {
    howTo: [
      "Stand with knees unlocked and the crown of the head lifting.",
      "Let the shoulders drop while the torso stays tall.",
      "Rest attention on the breath or on the feeling of the feet on the floor.",
      "Hold still without going limp."
    ],
    mistakes: ["Locking knees", "Collapsing chest", "Fidgeting constantly", "Clenching the face"],
    regressions: ["1–2 minute holds", "Seated meditation instead"],
    progressions: ["Longer holds", "Hands-held guard position", "Quiet nasal breathing only"],
    recoverySwap: "Use this instead of hard work when mental overload is the issue more than physical pain.",
    whenToPullBack: "Sit down if dizziness or headache builds.",
    videoQueries: ["standing meditation tutorial", "zhan zhuang beginner", "standing qigong posture basics"]
  },
  footwork: {
    howTo: [
      "Stay light on the feet with short steps.",
      "Move forward, back, and angle out while keeping posture organized.",
      "Let the feet place you instead of crossing and tangling.",
      "Stay relaxed enough to keep breathing under control."
    ],
    mistakes: ["Crossing feet", "Bouncing wildly", "Stiff upper body", "Too much speed too early"],
    regressions: ["Slow step patterns", "Short 20-second rounds"],
    progressions: ["Longer rounds", "Shadowboxing added", "Direction-call drills"],
    recoverySwap: "Use slower technical footwork instead of fast rounds when the body feels flat.",
    whenToPullBack: "Reduce speed if calves, ankles, or balance are poor that day.",
    videoQueries: ["basic footwork martial arts tutorial", "boxing footwork basics", "beginner movement drills combat sports"]
  },
  cat: {
    howTo: [
      "Start on hands and knees with even pressure through both hands.",
      "Round the spine one segment at a time as you exhale.",
      "Reverse into extension smoothly rather than yanking the neck.",
      "Move deliberately instead of chasing huge range."
    ],
    mistakes: ["Dumping into the neck", "Rushing", "Forcing end range", "Uneven weight through hands"],
    regressions: ["Smaller range", "Fewer slow reps"],
    progressions: ["Longer pauses at end ranges", "Breath-synced tempo work"],
    recoverySwap: "Already a recovery drill. Use it as written if the body is stiff.",
    whenToPullBack: "Keep range gentle if the low back feels irritated.",
    videoQueries: ["cat cow mobility tutorial", "spinal mobility cat cow", "cat camel exercise form"]
  },
  bow: {
    howTo: [
      "Step long enough that the front knee can bend while the rear leg stays active.",
      "Keep the torso upright rather than collapsing over the front thigh.",
      "Drive the feet into the floor to feel the stance connect.",
      "Stay calm and breathe while holding position."
    ],
    mistakes: ["Front knee drifting badly inward", "Rear heel wandering", "Leaning too far forward", "Overstriding and losing balance"],
    regressions: ["Shorter stance", "Shorter holds"],
    progressions: ["Longer holds", "Punches from bow stance", "Transition practice"],
    recoverySwap: "Shorten the stance and reduce hold time if hips or knees feel rough.",
    whenToPullBack: "Do not fight through sharp knee strain.",
    videoQueries: ["bow stance tutorial kung fu", "front stance basics martial arts", "kung fu stance training bow stance"]
  },
  shujingong: {
    howTo: [
      "Move in a relaxed continuous rhythm.",
      "Let the breath dictate the pace.",
      "Use enough range to feel the body open, not strain.",
      "Finish feeling better than when you started."
    ],
    mistakes: ["Rushing", "Forcing deep stretch", "Holding the breath", "Treating it as meaningless filler"],
    regressions: ["Shorter flow", "Single movement repeated"],
    progressions: ["Longer flow", "Better breath coordination", "More mindful transitions"],
    recoverySwap: "This is a primary red-day movement. Keep it gentle and deliberate.",
    whenToPullBack: "If any motion pinches, shorten range immediately.",
    videoQueries: ["shu jing gong tutorial", "qigong stretching flow", "gentle qigong mobility routine"]
  },
  seatedmed: {
    howTo: [
      "Sit tall with support if needed so the spine can stay long.",
      "Rest the hands and settle the gaze softly.",
      "Follow the breath and return attention each time the mind drifts.",
      "Treat distractions as repetitions, not failure."
    ],
    mistakes: ["Slumping", "Chasing silence too aggressively", "Judging every thought", "Holding jaw tension"],
    regressions: ["2-minute rounds", "Breath counting"],
    progressions: ["Longer sits", "Eyes-open stillness", "Body scan focus"],
    recoverySwap: "Use this when stress is high and the body needs discipline without impact.",
    whenToPullBack: "Change posture if numbness or back pain builds.",
    videoQueries: ["seated meditation posture tutorial", "beginner meditation sitting posture", "how to meditate sitting upright"]
  }
};

libraryItems.forEach(item => Object.assign(item, libraryEnhancements[item.slug] || {}));

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
function webSearchUrl(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}
function renderResourceLinks(item) {
  const queries = item.videoQueries || [`${item.title} tutorial`];
  return `
    <div class="resource-grid">
      ${queries.map((q, index) => `<a class="resource-link" href="${youtubeSearchUrl(q)}" target="_blank" rel="noopener noreferrer">Video ${index + 1}: ${q}</a>`).join('')}
      <a class="resource-link" href="${webSearchUrl(item.title + ' exercise form guide')}" target="_blank" rel="noopener noreferrer">Written form guide search</a>
    </div>
  `;
}
function recoveryCoachNote(readiness) {
  if (readiness.zone === 'red') {
    return 'Today is not a prove-yourself day. Keep the chain alive, cut joint stress, and switch the hardest drill to its recovery version.';
  }
  if (readiness.zone === 'amber') {
    return 'You still train today, but the goal is productive work, not reckless volume. Keep 1–2 reps in reserve and shorten holds before form breaks.';
  }
  return 'You are clear to push. Chase clean intensity, visible body change, and a calm aggressive mindset.';
}
function readinessAdjustmentList(readiness) {
  const lines = [];
  if (readiness.zone === 'green') {
    lines.push('Use the planned targets. Add intent and perfect form before you add more volume.');
  }
  if (readiness.zone === 'amber') {
    lines.push('Trim total volume to around 80–85%.');
    lines.push('Drop the hardest finisher if form quality starts sliding.');
    lines.push('Take slightly longer breaths between efforts instead of rushing the rest.');
  }
  if (readiness.zone === 'red') {
    lines.push('Cut volume to roughly 60%.');
    lines.push('Swap impact or high-tension drills for breathing, mobility, or easier technical work.');
    lines.push('If joint pain feels sharp, skip the offending drill completely and protect the long game.');
  }
  return `<ul class="bullet-list">${lines.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

let state = loadState();
syncProgramState();
window.currentLibraryImageIndex = 0;

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(defaultState);
    const parsed = JSON.parse(raw);
    const merged = { ...deepClone(defaultState), ...parsed };
    merged.settings = { ...defaultState.settings, ...(parsed.settings || {}) };
    merged.readiness = { ...defaultState.readiness, ...(parsed.readiness || {}) };
    if (!Array.isArray(merged.completedLog)) merged.completedLog = [];
    if (!Array.isArray(merged.journal)) merged.journal = [];
    if (!merged.completedDays || typeof merged.completedDays !== 'object') merged.completedDays = {};
    return merged;
  } catch (e) {
    return deepClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uniqueCompletionEntries() {
  const seen = new Set();
  return (state.completedLog || []).filter(entry => {
    if (!entry || !entry.date) return false;
    const key = `${entry.date}::${entry.dayIndex ?? -1}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).sort((a, b) => a.date.localeCompare(b.date));
}

function rebuildCompletedDays() {
  const rebuilt = {};
  const cycleOffset = Math.floor(uniqueCompletionEntries().length / days.length) * days.length;
  uniqueCompletionEntries().slice(cycleOffset).forEach((entry, idx) => {
    rebuilt[idx] = true;
  });
  state.completedDays = rebuilt;
}

function syncProgramState() {
  state.completedLog = uniqueCompletionEntries();
  if (!state.scheduleStartDate && state.completedLog.length) {
    state.scheduleStartDate = state.completedLog[0].date;
  }
  rebuildCompletedDays();
  const completed = state.completedLog.length;
  state.currentDayIndex = completed % days.length;
}

function todayDay() {
  syncProgramState();
  return days[state.currentDayIndex % days.length];
}

function currentCycleNumber() {
  return Math.floor(uniqueCompletionEntries().length / days.length) + 1;
}

function currentPhaseNumber() {
  return Math.floor((currentCycleNumber() - 1) / 4) + 1;
}

function isDeloadCycle() {
  return currentCycleNumber() % 4 === 0;
}

function progressionLevel() {
  const sessions = uniqueCompletionEntries().length;
  const cyclesFinished = Math.floor(sessions / days.length);
  const sessionBumps = Math.floor(sessions / 3);
  let factor = 1 + (sessionBumps * 0.025) + (cyclesFinished * 0.03);
  if (state.settings.intensity === 'base') factor -= 0.06;
  if (isDeloadCycle()) factor -= 0.08;
  return Math.max(0.75, Math.min(1.45, factor));
}

function phaseTheme() {
  const themes = [
    'Foundation and structure',
    'Volume and conditioning',
    'Power and mobility integration',
    'Discipline and density',
    'Advanced repeat with cleaner technique'
  ];
  return themes[(currentPhaseNumber() - 1) % themes.length];
}

function getReadinessResult() {
  const r = state.readiness || defaultState.readiness;
  const positive = (r.sleep + r.energy + r.motivation) * 20 / 3;
  const negative = ((6 - r.soreness) + (6 - r.stress)) * 10 + ((6 - r.jointPain) * 10);
  let score = Math.round((positive * 0.55) + (negative * 0.45));
  score = Math.max(0, Math.min(100, score));
  let zone = 'green';
  let title = 'Full training day';
  let note = 'Body and mind look ready. Push with clean form and discipline.';
  if (r.jointPain >= 4 || score < 45 || state.settings.recoveryMode) {
    zone = 'red';
    title = 'Recovery / light day';
    note = 'Pull back. Keep the habit, protect the mission, reduce joint stress.';
  } else if (score < 70 || r.soreness >= 4 || r.stress >= 4) {
    zone = 'amber';
    title = 'Reduced volume day';
    note = 'Train, but trim volume and holds so you recover instead of digging a hole.';
  }
  if (r.override) {
    zone = r.override;
    title = r.override === 'red' ? 'Recovery / light day' : (r.override === 'amber' ? 'Reduced volume day' : 'Full training day');
  }
  return { score, zone, title, note };
}

function scaleTargetText(str, factor) {
  const scaled = String(str).replace(/\d+(?:\.\d+)?/g, (match) => {
    const n = Number(match);
    if (!Number.isFinite(n)) return match;
    const value = n < 10 ? Math.round(n * factor * 10) / 10 : Math.max(1, Math.round(n * factor));
    return Number.isInteger(value) ? String(value) : String(value.toFixed(1)).replace(/\.0$/, '');
  });
  return scaled;
}

function targetFor(ex) {
  const readiness = getReadinessResult();
  let factor = progressionLevel();
  if (readiness.zone === 'amber') factor *= 0.88;
  if (readiness.zone === 'red') factor *= 0.68;
  const baseTarget = state.settings.intensity === 'base' ? ex.base : ex.push;
  const scaled = scaleTargetText(baseTarget, factor);
  const percent = Math.round((factor - 1) * 100);
  const delta = percent === 0 ? 'on baseline' : `${percent > 0 ? '+' : ''}${percent}%`;
  return `${scaled} · ${delta}`;
}

function adaptTarget(str, factor) {
  return `${scaleTargetText(str, factor)} · ${Math.round(factor * 100)}% volume`;
}

function uniqueCompletionDates() {
  const set = new Set((state.completedLog || []).map(x => x.date));
  return Array.from(set).sort();
}

function sessionsLastNDays(daysBack = 28) {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setDate(now.getDate() - (daysBack - 1));
  return uniqueCompletionDates().filter(d => new Date(d + 'T00:00:00') >= cutoff).length;
}

function totalSessions() {
  return uniqueCompletionDates().length;
}

function consistencyPct() {
  return Math.min(100, Math.round((sessionsLastNDays(28) / 28) * 100));
}

function currentStreak() {
  const dates = uniqueCompletionDates();
  if (!dates.length) return 0;
  let streak = 0;
  let cursor = new Date();
  while (true) {
    const iso = localISODate(cursor);
    if (dates.includes(iso)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
      continue;
    }
    if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      const yesterday = localISODate(cursor);
      if (dates.includes(yesterday)) {
        streak += 1;
        cursor.setDate(cursor.getDate() - 1);
        continue;
      }
    }
    break;
  }
  return streak;
}

function completedThisWeek() {
  const out = [];
  for (let i = 0; i < days.length; i++) out.push(Boolean(state.completedDays[i]));
  return out;
}

function completedTodayForCurrentDay() {
  const today = ISO_DATE();
  return uniqueCompletionEntries().some(x => x.date === today);
}

function quoteForDay(idx) {
  const quotes = [
    'Discipline first. Motivation later.',
    'A calm mind inside a strong body.',
    'Power with control beats random effort.',
    'Recovery is training when it protects the mission.',
    'Sharp reps. Strong breathing. No wasted motion.',
    'Stay rooted when discomfort arrives.',
    'Consistency changes the body more than one hard session.'
  ];
  return quotes[idx % quotes.length];
}

function dailyObjective(dayIndex) {
  const objectives = [
    'Build force through strict range and chest-up posture.',
    'Train calm breathing while the legs start to burn.',
    'Move with snap, but never lose shape.',
    'Restore joints and sharpen stillness.',
    'Accumulate quality upper-body volume without sloppy reps.',
    'Practice grit under load, then bring the system back down.',
    'Review the week, restore the body, and reset the mind.'
  ];
  return objectives[dayIndex % objectives.length];
}

function tabButton(tab, label) {
  return `<button class="tab ${state.selectedTab === tab ? 'active' : ''}" data-tab="${tab}">${label}</button>`;
}

function renderTop() {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark"></div>
          <div>
            <h1>Shaolin Path V7</h1>
            <p>Stable rebuild · readiness gate restored · GitHub Pages safe</p>
          </div>
        </div>
        <button class="btn btn-secondary" id="resetAppBtn">Reset local data</button>
      </div>
    </header>
  `;
}

function renderHome() {
  const day = todayDay();
  const readiness = getReadinessResult();
  return `
    <section class="view ${state.selectedTab === 'home' ? 'active' : ''}" data-view="home">
      <div class="hero">
        <div class="card hero-main">
          <div class="kicker">Body + mind progression</div>
          <h2>Built to evolve every week so the body changes, the mind gets sharper, and the system keeps pulling you back in.</h2>
          <p>This rebuild keeps the same overall feel, but adds automatic day advancement, progression blocks, deload cycles, and stronger recovery logic so it behaves like a real long-path training engine.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" data-go="today">Open today’s training</button>
            <button class="btn btn-secondary" data-go="library">Open movement library</button>
            <button class="btn btn-soft" data-go="progress">Check progress</button>
          </div>
          <div class="notice">Recommended daily structure: ${state.settings.walkMinutes} min walk + ${state.settings.trainMinutes} min training block. Current progression level: ${Math.round(progressionLevel() * 100)}%.</div>
        </div>
        <div class="panel hero-side">
          <div class="metric-grid">
            <div class="metric"><div class="label">Current day</div><div class="value">${state.currentDayIndex + 1}/7</div><div class="sub">${day.title}</div></div>
            <div class="metric"><div class="label">Current cycle</div><div class="value">${currentCycleNumber()}</div><div class="sub">${isDeloadCycle() ? 'Deload / sharpen' : 'Build cycle'}</div></div>
            <div class="metric"><div class="label">Total sessions</div><div class="value">${totalSessions()}</div><div class="sub">Unique completed dates</div></div>
            <div class="metric"><div class="label">28-day consistency</div><div class="value">${consistencyPct()}%</div><div class="sub">${sessionsLastNDays(28)} of last 28 days</div></div>
            <div class="metric"><div class="label">Readiness</div><div class="value">${readiness.score}%</div><div class="sub">${readiness.title}</div></div>
            <div class="metric"><div class="label">Phase</div><div class="value">${currentPhaseNumber()}</div><div class="sub">${phaseTheme()}</div></div>
          </div>
          <div class="metric"><div class="label">Today’s mindset</div><div class="value" style="font-size:1.05rem;line-height:1.35">${quoteForDay(state.currentDayIndex)}</div></div>
        </div>
      </div>

      <section class="section">
        <div class="section-header"><div><h3>What this version now does better</h3><p>It is now closer to the smarter older system you wanted.</p></div></div>
        <div class="grid grid-3">
          <article class="card quick-card"><h4>Progression engine added</h4><p>The plan now scales by completed sessions and full 7-day cycles, with every fourth cycle easing off slightly so you keep adapting instead of stalling.</p><div class="badge-row"><span class="badge">Scaling loads</span><span class="badge">Deload logic</span></div></article>
          <article class="card quick-card"><h4>Readiness gate restored</h4><p>Sleep, energy, soreness, stress, motivation, and joint pain now decide whether the session stays full, trims back, or flips toward recovery.</p><div class="badge-row"><span class="badge">Adaptive</span><span class="badge">Safer long-term</span></div></article>
          <article class="card quick-card"><h4>Progress cleaned up</h4><p>Daily completion is date-based, duplicates are blocked, and the 28-day view now reflects real completion dates instead of a broken 7-day count.</p><div class="badge-row"><span class="badge">Date-safe</span><span class="badge">Cleaner yearly use</span></div></article>
        </div>
      </section>
    </section>
  `;
}

function renderReadinessPanel() {
  const r = state.readiness;
  const readiness = getReadinessResult();
  const labels = [
    ['sleep', 'Sleep quality'],
    ['energy', 'Energy'],
    ['soreness', 'Soreness'],
    ['stress', 'Stress / mental load'],
    ['motivation', 'Motivation'],
    ['jointPain', 'Joint pain']
  ];
  return `
    <div class="card readiness-card">
      <div class="section-header">
        <div>
          <h3>Pre-check</h3>
          <p>Score how you actually are before training. This decides whether the app tells you to push, trim, or recover.</p>
        </div>
        <div class="badge badge-${readiness.zone}">${readiness.score}% · ${readiness.title}</div>
      </div>
      <div class="readiness-grid">
        ${labels.map(([key, label]) => `
          <label class="range-wrap">
            <span class="small muted">${label} <strong style="color:#fff">${r[key]}/5</strong></span>
            <input type="range" min="1" max="5" step="1" value="${r[key]}" data-ready="${key}">
          </label>
        `).join('')}
      </div>
      <div class="action-row">
        <button class="btn btn-primary" id="saveReadinessBtn">Save pre-check</button>
        <button class="btn btn-secondary" data-readyoverride="green">Force full</button>
        <button class="btn btn-secondary" data-readyoverride="amber">Force reduced</button>
        <button class="btn btn-secondary" data-readyoverride="red">Force recovery</button>
        <button class="btn btn-soft" id="clearReadinessOverrideBtn">Clear override</button>
      </div>
      <div class="notice">${readiness.note}${r.lastUpdated ? ` Last saved: ${prettyDate(r.lastUpdated)}.` : ''}</div>
    </div>
  `;
}

function renderToday() {
  const day = todayDay();
  const isDone = completedTodayForCurrentDay();
  const readiness = getReadinessResult();
  return `
    <section class="view ${state.selectedTab === 'today' ? 'active' : ''}" data-view="today">
      <section class="section">
        ${state.settings.showReadinessGate ? renderReadinessPanel() : ''}
        <div class="card today-card" style="margin-top:14px">
          <div class="day-head">
            <div>
              <h4>${day.title}</h4>
              <p>${day.focus}</p>
            </div>
            <div class="badge badge-${readiness.zone}">${isDone ? 'Completed today' : readiness.title}</div>
          </div>

          <div class="day-meta">
            <span class="badge">${day.duration}</span>
            ${day.badges.map(b => `<span class="badge">${b}</span>`).join('')}
          </div>

          <div class="notice">${day.intensityNote} ${readiness.zone === 'amber' ? 'Today the app trims volume and intensity.' : ''} ${readiness.zone === 'red' ? 'Today the app keeps the habit but pushes you into recovery logic.' : ''}</div>
          <div class="coach-panel">
            <h5>Coach call for today</h5>
            <p>${recoveryCoachNote(readiness)}</p>
            ${readinessAdjustmentList(readiness)}
          </div>

          <div class="exercise-list">
            ${day.exercises.map(ex => {
              const lib = libraryItems.find(li => li.title.toLowerCase() === ex.name.toLowerCase() || ex.name.toLowerCase().includes(li.title.toLowerCase()) || li.title.toLowerCase().includes(ex.name.toLowerCase().split(' ')[0]));
              const swapText = lib?.recoverySwap ? `<div class=\"swap-note\"><strong>Recovery swap:</strong> ${lib.recoverySwap}</div>` : '';
              const guardText = lib?.whenToPullBack ? `<div class=\"warn-note\"><strong>Back off if:</strong> ${lib.whenToPullBack}</div>` : '';
              const linkBtn = lib ? `<button class=\"btn btn-soft btn-inline\" data-libraryjump=\"${lib.slug}\">Open library help</button>` : '';
              return `
              <article class="exercise ${readiness.zone}">
                <div class="exercise-top">
                  <div>
                    <h5>${ex.name}</h5>
                    <p>${state.settings.showCues ? ex.cue : 'Tap Settings if you want cues shown again.'}</p>
                  </div>
                  <div class="target">${targetFor(ex)}</div>
                </div>
                <small>${ex.notes}</small>
                ${swapText}
                ${guardText}
                ${linkBtn}
              </article>`;
            }).join('')}
          </div>

          <div class="action-row">
            <button class="btn btn-primary" id="completeDayBtn">${isDone ? 'Completed today' : 'Complete day'}</button>
            <button class="btn btn-secondary" id="nextDayBtn">Next day</button>
            <button class="btn btn-soft" data-go="journal">Open journal</button>
          </div>

          <div class="small muted" style="margin-top:12px">Progress is stored locally on this device. This version blocks duplicate completions for the same date and current day.</div>
        </div>
      </section>
    </section>
  `;
}

function renderPath() {
  return `
    <section class="view ${state.selectedTab === 'path' ? 'active' : ''}" data-view="path">
      <section class="section">
        <div class="section-header"><div><h3>7-day cycle</h3><p>Designed around your morning walk plus a focused 20–30 minute training block.</p></div></div>
        <div class="grid grid-2">
          ${days.map((day, idx) => `
            <article class="card quick-card">
              <h4>${day.title}</h4>
              <p>${day.focus}</p>
              <div class="badge-row"><span class="badge">${day.duration}</span>${day.badges.map(b => `<span class="badge">${b}</span>`).join('')}</div>
              <hr class="sep"><p class="small">${day.intensityNote}</p>
              <div class="action-row"><button class="btn btn-secondary" data-setday="${idx}">Make current day</button></div>
            </article>
          `).join('')}
        </div>
      </section>
    </section>
  `;
}

function renderYear() {
  const phases = [
    ['Phase 1 · Foundation', 'Weeks 1–4', 'Build rhythm, clean form, lock in the morning system.'],
    ['Phase 2 · Build', 'Weeks 5–8', 'Increase reps, holds, and pace without losing structure.'],
    ['Phase 3 · Edge', 'Weeks 9–12', 'Sharpen mental tolerance and body control under fatigue.'],
    ['Phase 4 · Consolidate', 'Weeks 13–16', 'Keep gains, tighten technique, protect recovery.'],
    ['Phase 5 · Forge', 'Weeks 17–24', 'Push visible body change and stronger martial intent.'],
    ['Phase 6 · Deepen', 'Weeks 25–36', 'Higher quality execution, stronger breath control, steadier mindset.'],
    ['Phase 7 · Refine', 'Weeks 37–44', 'Less wasted effort, more exact movement and discipline.'],
    ['Phase 8 · Embody', 'Weeks 45–52', 'This should feel like part of who you are, not a temporary plan.']
  ];
  return `
    <section class="view ${state.selectedTab === 'year' ? 'active' : ''}" data-view="year">
      <section class="section">
        <div class="section-header"><div><h3>Year roadmap</h3><p>A simple long-view structure so this does not feel like random workouts.</p></div></div>
        <div class="grid grid-2">${phases.map(([title, weeks, desc]) => `<article class="card quick-card"><h4>${title}</h4><p>${desc}</p><div class="badge-row"><span class="badge">${weeks}</span></div></article>`).join('')}</div>
      </section>
    </section>
  `;
}

function renderLibrary() {
  const item = libraryItems.find(x => x.slug === state.selectedLibrary) || libraryItems[0];
  const idx = window.currentLibraryImageIndex || 0;
  const asset = item.assets[idx % item.assets.length];
  return `
    <section class="view ${state.selectedTab === 'library' ? 'active' : ''}" data-view="library">
      <section class="section">
        <div class="section-header"><div><h3>Movement library</h3><p>Tap any card to open it. The viewer now works properly, and the main panel updates as soon as you select a movement.</p></div></div>

        <div class="detail-layout">
          <div class="card detail-card">
            <h4>${item.title}</h4>
            <p><strong>${item.type}</strong> · ${item.description}</p>
            <div class="detail-section"><strong>Primary cues</strong><ul>${item.cues.map(c => `<li>${c}</li>`).join('')}</ul></div>
            <div class="detail-section"><strong>How to do it</strong><ol class="bullet-list ordered">${(item.howTo || []).map(c => `<li>${c}</li>`).join('')}</ol></div>
            <div class="detail-columns">
              <div><strong>Common mistakes</strong><ul class="bullet-list">${(item.mistakes || []).map(c => `<li>${c}</li>`).join('')}</ul></div>
              <div><strong>Recovery / easier options</strong><ul class="bullet-list">${(item.regressions || []).map(c => `<li>${c}</li>`).join('')}</ul></div>
            </div>
            <div class="detail-columns">
              <div><strong>Harder progressions</strong><ul class="bullet-list">${(item.progressions || []).map(c => `<li>${c}</li>`).join('')}</ul></div>
              <div><strong>Body warning signs</strong><p class="small muted">${item.whenToPullBack || ''}</p><p class="small muted"><strong>Swap:</strong> ${item.recoverySwap || ''}</p></div>
            </div>
            <div class="detail-section"><strong>Video + guide links</strong>${renderResourceLinks(item)}</div>
            <div class="library-actions">
              <button class="btn btn-primary" data-go="today">Use in today plan</button>
              <button class="btn btn-secondary" id="prevImgBtn">Previous image</button>
              <button class="btn btn-secondary" id="nextImgBtn">Next image</button>
              <button class="btn btn-soft" id="openLibraryModalBtn">Open viewer</button>
            </div>
          </div>

          <div class="card library-card">
            <div class="carousel">
              <img class="preview" src="assets/${asset}" alt="${item.title} image ${idx + 1}">
              <div class="carousel-controls">
                <button class="icon-btn" id="prevImgBtn2">‹</button>
                <button class="icon-btn" id="nextImgBtn2">›</button>
              </div>
            </div>
            <div class="content"><h4>${item.title}</h4><p>${item.type}</p><p class="small muted">Image ${idx + 1} of ${item.assets.length}</p></div>
          </div>
        </div>

        <section class="section">
          <div class="grid grid-3">
            ${libraryItems.map(li => `
              <article class="card library-card clickable" data-library="${li.slug}">
                <img class="preview" src="assets/${li.assets[0]}" alt="${li.title}">
                <div class="content">
                  <h4>${li.title}</h4>
                  <p>${li.description}</p>
                  <div class="library-actions"><button class="btn btn-secondary" data-library="${li.slug}">Open</button><button class="btn btn-soft" data-viewer="${li.slug}">Viewer</button></div>
                </div>
              </article>
            `).join('')}
          </div>
        </section>
      </section>
    </section>
  `;
}

function renderProgress() {
  const done = completedThisWeek();
  const log = [...(state.completedLog || [])].slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
  return `
    <section class="view ${state.selectedTab === 'progress' ? 'active' : ''}" data-view="progress">
      <section class="section">
        <div class="grid grid-2">
          <article class="card progress-wrap">
            <h4>Current cycle</h4>
            <p>The live program now advances from completed sessions, not from manually remembering to hit next. The week grid shows the current build cycle.</p>
            <div class="week-grid">
              ${days.map((d, i) => `
                <div class="week-cell ${done[i] ? 'done' : ''} ${state.currentDayIndex === i ? 'today' : ''}">
                  <strong>${d.title.replace('Day ' + (i + 1) + ' · ', '')}</strong>
                  <span>${done[i] ? 'Done' : 'Pending'}</span>
                </div>
              `).join('')}
            </div>
          </article>

          <article class="card progress-wrap">
            <h4>Long-term progress and scaling</h4>
            <p>${totalSessions()} total session dates stored on this device.</p>
            <div class="metric-grid" style="margin-top:12px">
              <div class="metric"><div class="label">Current streak</div><div class="value">${currentStreak()}</div><div class="sub">Consecutive dates</div></div>
              <div class="metric"><div class="label">Last 28 days</div><div class="value">${sessionsLastNDays(28)}</div><div class="sub">Days completed</div></div>
            </div>
            <div class="streak-bar"><div class="streak-fill" style="width:${consistencyPct()}%"></div></div>
            <div class="notice">Target: stack quality weeks, not random heroic days.</div>
          </article>
        </div>

        <div class="grid grid-2" style="margin-top:14px">
          <article class="card journal-wrap">
            <h4>Recent completion log</h4>
            <div class="journal-list">
              ${log.length ? log.map(entry => `<article class="journal-entry"><div class="top"><strong>${days[entry.dayIndex]?.title || 'Session'}</strong><span class="muted small">${prettyDate(entry.date)}</span></div><div class="muted">Saved as a unique date-based completion.</div></article>`).join('') : '<div class="muted">No session history yet.</div>'}
            </div>
          </article>
          <article class="card settings-wrap">
            <h4>Readiness summary</h4>
            <p>Latest saved readiness check controls daily load, while completed sessions and cycles drive long-term scaling.</p>
            <div class="notice">${getReadinessResult().score}% · ${getReadinessResult().title}. ${getReadinessResult().note}</div>
          </article>
        </div>
      </section>
    </section>
  `;
}

function renderJournal() {
  return `
    <section class="view ${state.selectedTab === 'journal' ? 'active' : ''}" data-view="journal">
      <section class="section">
        <div class="grid grid-2">
          <article class="card journal-wrap">
            <h4>Journal</h4>
            <p>Track body, mood, focus, and what changed. This is where mental progress becomes visible.</p>
            <div class="form-grid">
              <input class="input" id="journalTitle" placeholder="Entry title">
              <input class="input" id="journalMood" placeholder="Mood / energy">
            </div>
            <textarea class="textarea" id="journalText" rows="8" placeholder="What improved today? What felt weak? What did you learn?"></textarea>
            <div class="action-row"><button class="btn btn-primary" id="saveJournalBtn">Save entry</button></div>
          </article>

          <article class="card journal-wrap">
            <h4>Recent entries</h4>
            <p>${state.journal.length ? 'Newest first.' : 'No entries yet.'}</p>
            <div class="journal-list">
              ${state.journal.map((entry, idx) => `
                <article class="journal-entry">
                  <div class="top"><strong>${escapeHtml(entry.title || 'Journal entry')}</strong><span class="muted small">${escapeHtml(entry.date)}</span></div>
                  <div class="small" style="margin-bottom:8px;color:#f0d88a">${escapeHtml(entry.mood || '')}</div>
                  <div class="muted">${escapeHtml(entry.text || '')}</div>
                  <div class="action-row"><button class="btn btn-soft" data-deletejournal="${idx}">Delete</button></div>
                </article>
              `).join('')}
            </div>
          </article>
        </div>
      </section>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="view ${state.selectedTab === 'settings' ? 'active' : ''}" data-view="settings">
      <section class="section">
        <div class="grid grid-2">
          <article class="card settings-wrap">
            <h4>Training settings</h4>
            <p>Tune the plan to your current push level while keeping the same structure.</p>
            <div class="form-grid">
              <div><label class="small muted">Intensity</label><select class="select" id="intensitySelect"><option value="base" ${state.settings.intensity === 'base' ? 'selected' : ''}>Base</option><option value="push" ${state.settings.intensity === 'push' ? 'selected' : ''}>Push</option></select></div>
              <div><label class="small muted">Walk minutes</label><input class="input" id="walkInput" type="number" min="10" max="60" value="${state.settings.walkMinutes}"></div>
              <div><label class="small muted">Training minutes</label><input class="input" id="trainInput" type="number" min="10" max="60" value="${state.settings.trainMinutes}"></div>
            </div>
            <label class="checkbox-row"><input type="checkbox" id="cueToggle" ${state.settings.showCues ? 'checked' : ''}> Show movement cues in day cards</label>
            <label class="checkbox-row"><input type="checkbox" id="recoveryToggle" ${state.settings.recoveryMode ? 'checked' : ''}> Recovery mode flag</label>
            <label class="checkbox-row"><input type="checkbox" id="readinessToggle" ${state.settings.showReadinessGate ? 'checked' : ''}> Show readiness pre-check in Today</label>
            <div class="action-row"><button class="btn btn-primary" id="saveSettingsBtn">Save settings</button></div>
          </article>

          <article class="card settings-wrap">
            <h4>Backup + deploy</h4>
            <p>This rebuild is still a simple static site: <strong>index.html + style.css + app.js + assets</strong>. That keeps it far less fragile on GitHub Pages than a router-based app.</p>
            <div class="action-row">
              <button class="btn btn-secondary" id="exportDataBtn">Export progress backup</button>
              <button class="btn btn-soft" id="importDataBtn">Import backup</button>
              <input type="file" id="importDataFile" accept="application/json" hidden>
            </div>
            <div class="notice">Use export/import if you want this to survive browser resets, phone changes, or a later code update. Upload these files to the repo root and make sure GitHub Pages is serving the correct branch and folder.</div>
          </article>
        </div>
      </section>
    </section>
  `;
}

function renderLibraryModal() {
  const item = libraryItems.find(x => x.slug === state.selectedLibrary) || libraryItems[0];
  const idx = window.currentLibraryImageIndex || 0;
  return `
    <div id="libraryModal" class="modal hidden" aria-hidden="true">
      <div class="modal-backdrop" id="closeModalBackdrop"></div>
      <div class="modal-card">
        <div class="modal-head"><h3>${item.title}</h3><button class="icon-btn" id="closeLibraryModalBtn">×</button></div>
        <img class="modal-media" src="assets/${item.assets[idx % item.assets.length]}" alt="${item.title} full view">
        <p class="muted" style="margin-top:10px">${item.type} · ${item.description}</p>
        <div class="detail-section"><strong>How to do it</strong><ol class="bullet-list ordered">${(item.howTo || []).map(c => `<li>${c}</li>`).join('')}</ol></div>
        <div class="library-actions"><button class="btn btn-secondary" id="prevImgBtn3">Previous image</button><button class="btn btn-secondary" id="nextImgBtn3">Next image</button></div>
        <div class="detail-section"><strong>Video + guide links</strong>${renderResourceLinks(item)}</div>
        <div class="notice">This build still uses the included SVG images, but it now restores usable external video search links and written form-guide links for every movement.</div>
      </div>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderTop()}
    <main class="app-shell">
      ${renderHome()}
      ${renderToday()}
      ${renderPath()}
      ${renderYear()}
      ${renderLibrary()}
      ${renderProgress()}
      ${renderJournal()}
      ${renderSettings()}
      <div class="footer-note">Shaolin Path V7 stable rebuild · readiness restored · browser-saved progress · static deployment safe</div>
    </main>
    <nav class="tabbar"><div class="tabbar-inner">${tabButton('home', 'Home')}${tabButton('today', 'Today')}${tabButton('path', 'Path')}${tabButton('year', 'Year')}${tabButton('library', 'Library')}${tabButton('progress', 'Progress')}${tabButton('journal', 'Journal')}${tabButton('settings', 'Settings')}</div></nav>
    ${renderLibraryModal()}
  `;
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.onclick = () => { state.selectedTab = btn.dataset.tab; saveState(); renderApp(); };
  });
  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.onclick = () => { state.selectedTab = btn.dataset.go; saveState(); renderApp(); };
  });
  document.querySelectorAll('[data-setday]').forEach(btn => {
    btn.onclick = () => { state.currentDayIndex = Number(btn.dataset.setday); state.selectedTab = 'today'; saveState(); renderApp(); };
  });
  document.querySelectorAll('[data-library]').forEach(btn => {
    btn.onclick = () => { state.selectedLibrary = btn.dataset.library; window.currentLibraryImageIndex = 0; saveState(); renderApp(); };
  });
  document.querySelectorAll('[data-libraryjump]').forEach(btn => {
    btn.onclick = () => { state.selectedLibrary = btn.dataset.libraryjump; state.selectedTab = 'library'; window.currentLibraryImageIndex = 0; saveState(); renderApp(); };
  });
  document.querySelectorAll('[data-viewer]').forEach(btn => {
    btn.onclick = (e) => { e.stopPropagation(); state.selectedLibrary = btn.dataset.viewer; window.currentLibraryImageIndex = 0; saveState(); renderApp(); openModal(); };
  });
  document.querySelectorAll('.library-card.clickable').forEach(card => {
    card.onclick = (e) => {
      const slug = card.dataset.library;
      if (!slug) return;
      state.selectedLibrary = slug;
      window.currentLibraryImageIndex = 0;
      saveState();
      renderApp();
      openModal();
    };
  });
  document.querySelectorAll('[data-deletejournal]').forEach(btn => {
    btn.onclick = () => { state.journal.splice(Number(btn.dataset.deletejournal), 1); saveState(); renderApp(); };
  });

  const completeBtn = document.getElementById('completeDayBtn');
  if (completeBtn) {
    completeBtn.onclick = () => {
      const today = ISO_DATE();
      syncProgramState();
      if (!completedTodayForCurrentDay()) {
        if (!state.scheduleStartDate) state.scheduleStartDate = today;
        state.completedLog.push({ dayIndex: state.currentDayIndex, date: today, readiness: getReadinessResult().zone });
        syncProgramState();
        saveState();
      }
      renderApp();
    };
  }

  const nextDayBtn = document.getElementById('nextDayBtn');
  if (nextDayBtn) {
    nextDayBtn.onclick = () => {
      state.currentDayIndex = (state.currentDayIndex + 1) % days.length;
      rebuildCompletedDays();
      saveState();
      renderApp();
    };
  }

  const prevFn = () => { const item = libraryItems.find(x => x.slug === state.selectedLibrary) || libraryItems[0]; window.currentLibraryImageIndex = ((window.currentLibraryImageIndex || 0) + item.assets.length - 1) % item.assets.length; renderApp(); openModalIfVisible(); };
  const nextFn = () => { const item = libraryItems.find(x => x.slug === state.selectedLibrary) || libraryItems[0]; window.currentLibraryImageIndex = ((window.currentLibraryImageIndex || 0) + 1) % item.assets.length; renderApp(); openModalIfVisible(); };
  ['prevImgBtn','prevImgBtn2','prevImgBtn3'].forEach(id => { const el = document.getElementById(id); if (el) el.onclick = prevFn; });
  ['nextImgBtn','nextImgBtn2','nextImgBtn3'].forEach(id => { const el = document.getElementById(id); if (el) el.onclick = nextFn; });

  const openViewer = document.getElementById('openLibraryModalBtn');
  if (openViewer) openViewer.onclick = openModal;
  const closeBtn = document.getElementById('closeLibraryModalBtn');
  if (closeBtn) closeBtn.onclick = closeModal;
  const closeBackdrop = document.getElementById('closeModalBackdrop');
  if (closeBackdrop) closeBackdrop.onclick = closeModal;

  const saveJournalBtn = document.getElementById('saveJournalBtn');
  if (saveJournalBtn) {
    saveJournalBtn.onclick = () => {
      const title = document.getElementById('journalTitle').value.trim();
      const mood = document.getElementById('journalMood').value.trim();
      const text = document.getElementById('journalText').value.trim();
      if (!text) return;
      state.journal.unshift({ title: title || todayDay().title, mood, text, date: new Date().toLocaleDateString() });
      saveState();
      renderApp();
    };
  }

  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  if (saveSettingsBtn) {
    saveSettingsBtn.onclick = () => {
      state.settings.intensity = document.getElementById('intensitySelect').value;
      state.settings.walkMinutes = Number(document.getElementById('walkInput').value) || defaultState.settings.walkMinutes;
      state.settings.trainMinutes = Number(document.getElementById('trainInput').value) || defaultState.settings.trainMinutes;
      state.settings.showCues = document.getElementById('cueToggle').checked;
      state.settings.recoveryMode = document.getElementById('recoveryToggle').checked;
      state.settings.showReadinessGate = document.getElementById('readinessToggle').checked;
      saveState();
      renderApp();
    };
  }

  const saveReadinessBtn = document.getElementById('saveReadinessBtn');
  if (saveReadinessBtn) {
    saveReadinessBtn.onclick = () => {
      document.querySelectorAll('[data-ready]').forEach(input => {
        state.readiness[input.dataset.ready] = Number(input.value);
      });
      state.readiness.lastUpdated = ISO_DATE();
      saveState();
      renderApp();
    };
  }
  document.querySelectorAll('[data-readyoverride]').forEach(btn => {
    btn.onclick = () => { state.readiness.override = btn.dataset.readyoverride; state.readiness.lastUpdated = ISO_DATE(); saveState(); renderApp(); };
  });
  const clearOverrideBtn = document.getElementById('clearReadinessOverrideBtn');
  if (clearOverrideBtn) clearOverrideBtn.onclick = () => { state.readiness.override = null; saveState(); renderApp(); };

  const resetBtn = document.getElementById('resetAppBtn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      const ok = confirm('Reset all local progress and settings on this device?');
      if (!ok) return;
      localStorage.removeItem(STORAGE_KEY);
      state = deepClone(defaultState);
      window.currentLibraryImageIndex = 0;
      renderApp();
    };
  }

  const exportBtn = document.getElementById('exportDataBtn');
  if (exportBtn) {
    exportBtn.onclick = () => {
      const payload = { exportedAt: new Date().toISOString(), storageKey: STORAGE_KEY, data: state };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `shaolin-path-backup-${ISO_DATE()}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 500);
    };
  }

  const importBtn = document.getElementById('importDataBtn');
  const importFile = document.getElementById('importDataFile');
  if (importBtn && importFile) {
    importBtn.onclick = () => importFile.click();
    importFile.onchange = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      try {
        const raw = await file.text();
        const parsed = JSON.parse(raw);
        if (!parsed.data || typeof parsed.data !== 'object') throw new Error('Invalid backup file.');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed.data));
        state = loadState();
        renderApp();
        alert('Backup imported.');
      } catch (err) {
        alert('Import failed. Use a valid Shaolin Path backup JSON file.');
      } finally {
        importFile.value = '';
      }
    };
  }
}

function openModal() {
  const modal = document.getElementById('libraryModal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}
function closeModal() {
  const modal = document.getElementById('libraryModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}
function openModalIfVisible() {
  const modal = document.getElementById('libraryModal');
  if (modal && !modal.classList.contains('hidden')) openModal();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

renderApp();
