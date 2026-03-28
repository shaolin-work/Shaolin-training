
const STORAGE_KEY = 'shaolin-path-v61';
const TOTAL_DAYS = 365;
const dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const WALK_PROMPTS = ["Inhale through the nose for 4 seconds.", "Exhale through the nose for 6 seconds.", "Notice sounds around you without reacting.", "Notice how your feet contact the ground.", "Return to the breath whenever the mind drifts."];
const QUICK_START = ["Use Go to current day to return to the live program day.", "Save pre-checks before training so readiness adjustments apply cleanly.", "Tick exercises honestly as you complete them.", "Use Complete current day only after the live day is genuinely finished.", "Previewing other days is allowed, but only the current live day advances progress.", "Use the Library whenever you need movement guidance."];
const HOW_TO = ["Home shows your live training state.", "Today is the main training screen.", "Path shows level unlocks.", "Year shows the generated 52-week roadmap.", "Library stores movement instructions, cues, and standards.", "Progress shows your current week targets.", "Journal stores reflection and evidence notes.", "Settings controls theme and reminds you to export backups."];
const FOCUS_PROMPTS = ["Did I stay calm during discomfort?", "Did I control my breathing under effort?", "Did my movement stay clean when tired?", "Was I honest when marking items complete?", "Did I train with purpose rather than just volume?"];
const READINESS_FIELDS = [{"key": "energy", "label": "Energy", "min": 1, "max": 10, "defaultValue": 5}, {"key": "sleep", "label": "Sleep quality", "min": 1, "max": 10, "defaultValue": 5}, {"key": "stress", "label": "Stress", "min": 1, "max": 10, "defaultValue": 5}, {"key": "soreness", "label": "Soreness", "min": 1, "max": 10, "defaultValue": 3}, {"key": "stiffness", "label": "Stiffness", "min": 1, "max": 10, "defaultValue": 3}, {"key": "motivation", "label": "Motivation", "min": 1, "max": 10, "defaultValue": 5}];
const POST_FIELDS = [{"key": "mind", "label": "Mind quality", "min": 0, "max": 10, "defaultValue": 0}, {"key": "body", "label": "Body quality", "min": 0, "max": 10, "defaultValue": 0}, {"key": "discipline", "label": "Discipline", "min": 0, "max": 10, "defaultValue": 0}, {"key": "strengthQuality", "label": "Strength quality", "min": 0, "max": 10, "defaultValue": 0}, {"key": "powerQuality", "label": "Power quality", "min": 0, "max": 10, "defaultValue": 0}, {"key": "sessionEffort", "label": "Effort", "min": 0, "max": 10, "defaultValue": 0}];
const PATHS = [{"id": "level-1", "title": "Level 1 — Foundation", "subtitle": "Breath, qigong, horse stance, push-ups, standing meditation", "unlockAtDay": 1, "summary": "This level builds daily discipline and the first physical base.", "modules": ["Walking Mind Discipline", "Right Breathing", "Qigong Activation", "Horse Stance — Ma Bu", "Push-Ups", "Standing Meditation"]}, {"id": "level-2", "title": "Level 2 — Structure", "subtitle": "Bow stance, cat stance, footwork, punch structure, plank", "unlockAtDay": 15, "summary": "This level adds control, shape, and movement quality.", "modules": ["Bow Stance — Gong Bu", "Cat Stance — Xu Bu", "Stance and Footwork", "Bow Stance + Straight Punch", "Plank"]}, {"id": "level-3", "title": "Level 3 — Power", "subtitle": "Kick control, core development, basics practice, power blocks", "unlockAtDay": 43, "summary": "This level adds more demanding power and conditioning work.", "modules": ["Front Kick Control", "Core Development Practice", "Ji Ben Gong", "Power Workout Blocks"]}, {"id": "level-4", "title": "Level 4 — Internal Work", "subtitle": "Seated practice, regulation, recovery", "unlockAtDay": 85, "summary": "This level expands formal mind training, regulation, and recovery.", "modules": ["Seated Meditation", "Shu Jing Gong", "Meridian Massage Practice"]}, {"id": "level-5", "title": "Level 5 — Traditional Expansion", "subtitle": "Forms, theory, advanced branches", "unlockAtDay": 169, "summary": "This level opens the broader traditional curriculum path.", "modules": ["Forms Training", "Ethics and Theory Modules", "Weapons and Sparring Path", "Microcosmic Orbit Practice"]}];
const MODULES = [{"id": "walk", "title": "Walking Mind Discipline", "area": "Mindset", "level": 1, "mission": "Turn the dog walk into moving meditation and emotional control practice.", "looks": "Breath steady, shoulders relaxed, attention returning calmly.", "feels": "Present, less mentally noisy, more controlled.", "setup": "Walk at an easy steady pace. Relax the jaw and shoulders.", "cues": "Calm mind. Calm breath. Calm body.", "steps": "Breathe in for 4 seconds. Breathe out for 6 seconds. Rotate attention through breath, sound, foot contact, and thought observation.", "coaching": "Do not force huge breaths. The goal is calm attention, not intensity.", "mistakes": "Rushing mentally, mouth breathing without control, chasing thoughts.", "standards": "10+ minutes of controlled nasal breathing and calm attention.", "images": ["Walk posture", "Breath rhythm", "Attention rotation"], "video": "Official Shi Heng Yi site and opening-body starter practice.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/walk_1.svg", "assets/walk_2.svg", "assets/walk_3.svg"]}, {"id": "breathing", "title": "Right Breathing", "area": "Breath Foundation", "level": 1, "mission": "Build breathing as the first technical skill.", "looks": "Smooth nasal breath, no shoulder lifting, relaxed chest.", "feels": "Steadier and more centered.", "setup": "Sit or stand upright with relaxed shoulders.", "cues": "Nose in. Longer out-breath. No shrugging.", "steps": "Inhale gently through the nose. Exhale slightly longer. Keep the breath smooth rather than huge.", "coaching": "This is not maximum breathing. It is controlled breathing.", "mistakes": "Noisy inhales, forcing depth, shoulder shrugging.", "standards": "5 minutes of steady nasal breathing with relaxed shoulders.", "images": ["Breathing setup", "Relaxed shoulders", "Calm breathing"], "video": "Official free theory and breathing foundations page.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/breathing_1.svg", "assets/breathing_2.svg", "assets/breathing_3.svg"]}, {"id": "qigong", "title": "Qigong Activation", "area": "Breath & Energy", "level": 1, "mission": "Wake the body without agitation.", "looks": "Smooth movement, low shoulders, calm rhythm.", "feels": "Open, warm, centered.", "setup": "Stand with feet about shoulder width and knees soft.", "cues": "Move smoothly. Breathe with the movement. Stay tall.", "steps": "Raise the arms with the inhale, lower with the exhale. Use simple opening and stretching patterns without rushing.", "coaching": "This is preparation, not frantic warm-up work.", "mistakes": "Shrugging, rushing, moving without breath control.", "standards": "Complete the qigong block smoothly and calmly.", "images": ["Setup stance", "Opening movement", "Stretch position"], "video": "13 Minutes of Body Activation / Loosening Exercises for the Morning with Shi Heng Yi.", "videoUrl": "https://www.youtube.com/watch?v=8sJ5N9nsEmM", "imageFiles": ["assets/qigong_1.svg", "assets/qigong_2.svg", "assets/qigong_3.svg"]}, {"id": "horse", "title": "Horse Stance — Ma Bu", "area": "Structure", "level": 1, "mission": "Build leg strength, posture, and discipline.", "looks": "Knees out, chest lifted, spine tall, weight even.", "feels": "Leg burn without panic, stable and rooted.", "setup": "Take a wide stance and bend the knees with the chest up.", "cues": "Root the feet. Lift the chest. Observe, do not react.", "steps": "Set the feet wide, bend the knees, push the knees outward, keep the torso tall, and hold while breathing steadily.", "coaching": "Go only as low as you can while keeping the back upright.", "mistakes": "Knees collapsing inward, leaning forward, holding breath.", "standards": "Complete the target holds without posture collapse.", "images": ["Setup width", "Correct stance depth", "Posture check"], "video": "Official/public stance or horse-stance reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/horse_1.svg", "assets/horse_2.svg", "assets/horse_3.svg"]}, {"id": "pushups", "title": "Push-Ups", "area": "Strength", "level": 1, "mission": "Build chest, shoulders, arms, and full-body tension.", "looks": "Straight body line, controlled lowering, clean lockout.", "feels": "Full-body effort, not a loose sagging movement.", "setup": "Hands slightly wider than shoulders, feet back, body braced.", "cues": "Brace the core. Lower with control. Push the floor away.", "steps": "Set the body line, lower the chest under control, press back up without losing alignment.", "coaching": "If full push-ups are too hard, elevate the hands and keep the shape honest.", "mistakes": "Sagging hips, half reps, flared elbows, rushed reps.", "standards": "Complete the target sets with honest range and body control.", "images": ["Top position", "Lowering phase", "Bottom check"], "video": "Public push-up technique reference.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/pushups_1.svg", "assets/pushups_2.svg", "assets/pushups_3.svg"]}, {"id": "standingmed", "title": "Standing Meditation", "area": "Recovery & Control", "level": 1, "mission": "Finish training with command rather than chaos.", "looks": "Still body, low breath, relaxed shoulders and jaw.", "feels": "Grounded and controlled.", "setup": "Stand tall with soft knees and relaxed shoulders.", "cues": "Stand tall. Breathe low. Finish with command.", "steps": "Set the posture, inhale through the nose, let the breath settle lower, exhale slowly, return attention to the breath whenever it drifts.", "coaching": "Stillness is part of the training.", "mistakes": "Fidgeting, chest-only breathing, rushing the finish.", "standards": "Complete the time with stillness and controlled breathing.", "images": ["Standing setup", "Hands and shoulders", "Quiet finish"], "video": "Official free training hub with body awareness and breathing foundations.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/standingmed_1.svg", "assets/standingmed_2.svg", "assets/standingmed_3.svg"]}, {"id": "bow", "title": "Bow Stance — Gong Bu", "area": "Structure", "level": 2, "mission": "Build stability for striking and movement.", "looks": "Front knee stable, back leg long, torso controlled.", "feels": "Directional and rooted.", "setup": "Step one foot forward, bend the front knee, keep the rear leg active.", "cues": "Stable front knee. Long back leg. Hips aligned.", "steps": "Place the front foot forward, sink into the front leg, keep the rear leg active, maintain posture.", "coaching": "Do not make the stance so long you cannot control it.", "mistakes": "Too narrow, front knee collapsing, losing rear leg integrity.", "standards": "Complete the holds each side with stable posture.", "images": ["Setup stance", "Mid hold", "Alignment check"], "video": "Official/public stance-training reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/bow_1.svg", "assets/bow_2.svg", "assets/bow_3.svg"]}, {"id": "cat", "title": "Cat Stance — Xu Bu", "area": "Balance", "level": 2, "mission": "Develop readiness, weight control, and balance.", "looks": "Rear leg loaded, front leg light, torso upright.", "feels": "Balanced and alert.", "setup": "Shift most weight to the rear leg and keep the front foot light.", "cues": "Load the rear leg. Keep the front foot light. Stay tall.", "steps": "Transfer weight rearward, place the front foot lightly, keep the torso upright, hold the stance.", "coaching": "This stance is about control and readiness, not brute force.", "mistakes": "Too much front-leg load, hunched upper body, rear hip collapse.", "standards": "Hold each side with balance and correct weight distribution.", "images": ["Setup", "Weight distribution", "Balance check"], "video": "Public empty/cat-stance style reference.", "videoUrl": "https://www.youtube.com/watch?v=PG7tmtETld0", "imageFiles": ["assets/cat_1.svg", "assets/cat_2.svg", "assets/cat_3.svg"]}, {"id": "footwork", "title": "Stance and Footwork", "area": "Basics", "level": 2, "mission": "Build deliberate stepping and stable transitions.", "looks": "Stable steps, clean base setting, no chaotic crossing.", "feels": "Mobile but rooted.", "setup": "Work in a clear space and move slowly enough to stay clean.", "cues": "Step with intent. Set the base. Move cleanly.", "steps": "Practice forward stepping, backward stepping, and stance-to-stance transitions before adding strikes.", "coaching": "Footwork is a basic skill, not an optional extra.", "mistakes": "Rushing, crossing awkwardly, striking before the base is set.", "standards": "Complete the rounds with clean stepping and maintained balance.", "images": ["Forward step", "Transition", "Stable finish"], "video": "Official/public stance-drills training reference.", "videoUrl": "https://www.youtube.com/watch?v=BihSPdRbBWE", "imageFiles": ["assets/footwork_1.svg", "assets/footwork_2.svg", "assets/footwork_3.svg"]}, {"id": "straightpunch", "title": "Bow Stance + Straight Punch", "area": "Power", "level": 2, "mission": "Build calm striking power from proper structure.", "looks": "Stable base, clean fist path, hips involved.", "feels": "Whole body working as one chain.", "setup": "Bow stance first, hands up, posture controlled.", "cues": "Set the base. Turn the hips. Strike with calm intent.", "steps": "Set the stance, rotate from the hips, drive the fist straight, return under control.", "coaching": "The punch should travel straight, not swing.", "mistakes": "Arm punching, elbow flare, wrist collapse, wild speed.", "standards": "Complete the punch volume with clean line and controlled return.", "images": ["Guard setup", "Punch extension", "Wrist alignment"], "video": "Official/public basics and straight-punching reference.", "videoUrl": "https://www.youtube.com/watch?v=rtOJJBHLBME", "imageFiles": ["assets/straightpunch_1.svg", "assets/straightpunch_2.svg", "assets/straightpunch_3.svg"]}, {"id": "plank", "title": "Plank", "area": "Core", "level": 2, "mission": "Build core endurance so the body holds shape under effort.", "looks": "Straight body line, controlled ribs, no sagging back.", "feels": "Strong abdominal tension and steady breathing.", "setup": "Forearms down, feet back, body long and braced.", "cues": "Brace hard. Stay long. Breathe under tension.", "steps": "Set forearms under shoulders, lift into a straight plank, hold while breathing calmly.", "coaching": "Make the plank hard by bracing more, not by surviving badly.", "mistakes": "Hips too high, hips sagging, holding breath.", "standards": "Complete the target time with body line intact.", "images": ["Setup", "Mid hold", "Body line"], "video": "Public plank/core reference.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/plank_1.svg", "assets/plank_2.svg", "assets/plank_3.svg"]}, {"id": "frontkick", "title": "Front Kick Control", "area": "Balance & Power", "level": 3, "mission": "Develop balance, hip control, and disciplined kicking mechanics.", "looks": "Tall torso, stable support leg, clean lift and return.", "feels": "Strong and balanced, not wild.", "setup": "Stand tall with hands up and weight settled into the support leg.", "cues": "Lift with control. Return with control. Stay tall.", "steps": "Lift the knee, extend the lower leg, retract the leg, and place the foot down under control.", "coaching": "Think lift, extend, retract, place.", "mistakes": "Throwing the leg, leaning back too much, dropping the guard.", "standards": "Complete the reps each side with controlled return and stable balance.", "images": ["Setup", "Knee lift", "Kick return"], "video": "Public reference for front kick basics.", "videoUrl": "https://www.youtube.com/watch?v=ZZJErI-rAeA", "imageFiles": ["assets/frontkick_1.svg", "assets/frontkick_2.svg", "assets/frontkick_3.svg"]}, {"id": "coredev", "title": "Core Development Practice", "area": "Conditioning", "level": 3, "mission": "Build trunk control to support stance, striking, and power work.", "looks": "Strong trunk position without collapse.", "feels": "Deep core effort rather than random back strain.", "setup": "Use controlled floor core drills with bracing before each rep.", "cues": "Brace the trunk. Stay long. Control the ribs.", "steps": "Brace before each rep, move slowly enough to keep trunk control, stop when shape breaks.", "coaching": "Core work should support martial shape, not just burn the abs.", "mistakes": "Overusing the lower back, rushing reps, neck tension.", "standards": "Complete the assigned block with controlled trunk position.", "images": ["Setup", "Controlled rep", "Finish position"], "video": "General core development reference; this app still uses written guidance as primary instruction.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/coredev_1.svg", "assets/coredev_2.svg", "assets/coredev_3.svg"]}, {"id": "jibengong", "title": "Ji Ben Gong", "area": "Foundation Drills", "level": 3, "mission": "Use a dedicated basics practice block so repetition sharpens fundamentals.", "looks": "Repeated basics done cleanly, not lazily.", "feels": "Foundational and sharpening.", "setup": "Choose a few core basics and repeat them with honest quality.", "cues": "Basics first. Repeat cleanly. Stay honest.", "steps": "Repeat stances, stepping, and strike lines in a clean basics block.", "coaching": "Ji Ben Gong is not glamorous. That is why it matters.", "mistakes": "Skipping basics, rushing because it feels simple.", "standards": "Complete the basics block and finish cleaner than you started.", "images": ["Basics setup", "Repetition block", "Quality standard"], "video": "Official/public basics-style reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/jibengong_1.svg", "assets/jibengong_2.svg", "assets/jibengong_3.svg"]}, {"id": "powerblocks", "title": "Power Workout Blocks", "area": "Conditioning", "level": 3, "mission": "Build resilience and work capacity through structured rounds.", "looks": "Hard effort without total chaos.", "feels": "Challenging but still under control.", "setup": "Use short hard blocks followed by controlled recovery.", "cues": "Work hard. Keep form. Recover with breath.", "steps": "Warm up, complete short hard rounds, recover with calm walking or breathing, repeat.", "coaching": "The exact exercises can change. The role stays the same.", "mistakes": "Turning the session into frantic sloppy reps, ignoring recovery.", "standards": "Complete the rounds with form mostly intact and breath regained after effort.", "images": ["Round setup", "Work block", "Recovery phase"], "video": "Official/public morning practice or conditioning-style reference.", "videoUrl": "https://www.youtube.com/watch?v=I6FbjpCGB0E", "imageFiles": ["assets/powerblocks_1.svg", "assets/powerblocks_2.svg", "assets/powerblocks_3.svg"]}, {"id": "seatedmed", "title": "Seated Meditation", "area": "Mind Training", "level": 4, "mission": "Train stable attention and non-reaction in a formal seated posture.", "looks": "Stable upright posture, calm breath, regular return to focus.", "feels": "Clearer and quieter even if thoughts still appear.", "setup": "Sit upright with relaxed shoulders and face.", "cues": "Sit tall. Return to breath. Do not chase thoughts.", "steps": "Settle posture, breathe through the nose, watch the breath, return calmly whenever distracted.", "coaching": "Meditation is repetition of returning, not perfection.", "mistakes": "Forcing emptiness, slumping, frustration about thinking.", "standards": "Complete the time with steady returns to the chosen focus.", "images": ["Seat setup", "Posture check", "Quiet seated finish"], "video": "Official free training page with body awareness, breathing, and internal-practice theory/videos.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/seatedmed_1.svg", "assets/seatedmed_2.svg", "assets/seatedmed_3.svg"]}, {"id": "shujinggong", "title": "Shu Jing Gong", "area": "Regulation Qigong", "level": 4, "mission": "Use body and breath regulation to settle the system.", "looks": "Calm, methodical regulation instead of random movement.", "feels": "More organized and settled.", "setup": "Use relaxed upright posture and begin only after normal breathing settles.", "cues": "Body first. Breath second. Mind follows.", "steps": "Check posture, regulate the body, regulate the breath, let the mind settle with the breath.", "coaching": "This is a regulation block, not a power drill.", "mistakes": "Rushing for intensity, treating it like normal exercise.", "standards": "Complete the block calmly and finish steadier than you started.", "images": ["Setup", "Regulation phase", "Completion phase"], "video": "Official free training page for body awareness and breathing in Qi Gong practice.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/shujinggong_1.svg", "assets/shujinggong_2.svg", "assets/shujinggong_3.svg"]}, {"id": "meridian", "title": "Meridian Massage Practice", "area": "Recovery", "level": 4, "mission": "Use deliberate self-massage and recovery work to improve restoration.", "looks": "Deliberate and repeatable, not random rubbing.", "feels": "Warmer, looser, more recovered.", "setup": "Use seated or standing relaxed posture with moderate pressure.", "cues": "Slow pressure. Follow a sequence. Use after hard work.", "steps": "Massage key areas in a repeatable order after training or on easy days.", "coaching": "This is recovery work, not punishment.", "mistakes": "Rushing, using painful force.", "standards": "Complete the recovery block and feel looser afterwards.", "images": ["Setup", "Sequence example", "Recovery finish"], "video": "General self-massage reference video.", "videoUrl": "https://www.youtube.com/watch?v=tpAk3AizgvE", "imageFiles": ["assets/meridian_1.svg", "assets/meridian_2.svg", "assets/meridian_3.svg"]}, {"id": "forms", "title": "Forms Training", "area": "Forms", "level": 5, "mission": "Begin the longer path of learning forms in sections with control.", "looks": "Sequence learned in order, rhythm controlled, stances still recognizable.", "feels": "Integrated and demanding.", "setup": "Break the form into short sections rather than learning too much at once.", "cues": "Sequence accuracy. Stance quality. Calm flow.", "steps": "Learn the opening, add a few movements, repeat until remembered, then refine before speeding up.", "coaching": "Forms are a long path. Learn small pieces well.", "mistakes": "Memorizing shapes without body structure, rushing sequence learning.", "standards": "Learn the section and perform it slowly with control.", "images": ["Opening posture", "Section transition", "Controlled flow"], "video": "Official Shi Heng Yi site and official channel for introductory form learning.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/forms_1.svg", "assets/forms_2.svg", "assets/forms_3.svg"]}, {"id": "ethics", "title": "Ethics and Theory Modules", "area": "Mind & Character", "level": 5, "mission": "Use theory to shape behaviour and character, not just collect ideas.", "looks": "Theory is applied to conduct rather than treated as trivia.", "feels": "Grounding for discipline and self-mastery.", "setup": "Study one short concept block each week.", "cues": "Study briefly. Apply practically. Reflect honestly.", "steps": "Read the principle, write one practical takeaway, apply it during training or daily life.", "coaching": "This is part of training, but it does not replace physical practice.", "mistakes": "Treating theory as separate from behaviour.", "standards": "Review the concept and log one practical application.", "images": ["Study prompt", "Reflection note", "Applied conduct"], "video": "Official Shi Heng Yi site and teachings hub.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/ethics_1.svg", "assets/ethics_2.svg", "assets/ethics_3.svg"]}, {"id": "weapons", "title": "Weapons and Sparring Path", "area": "Extended Curriculum", "level": 5, "mission": "Acknowledge the broader traditional curriculum beyond solo foundations.", "looks": "This is an expansion path, not a beginner block.", "feels": "Broader curriculum beyond solo basics.", "setup": "Keep this path locked until the basics are honest.", "cues": "Unlock later. Foundation first.", "steps": "Progress from solo basics to partner or tool work only after the foundation is stable.", "coaching": "This app treats it as an advanced branch, not the starting point.", "mistakes": "Jumping into advanced curriculum too early.", "standards": "Only pursue after the foundation path is genuinely established.", "images": ["Advanced placeholder", "Partner branch", "Weapons branch"], "video": "Official temple overview for wider curriculum and training path.", "videoUrl": "https://www.shaolintemple.eu/index.php?page=english", "imageFiles": ["assets/weapons_1.svg", "assets/weapons_2.svg", "assets/weapons_3.svg"]}];
const MODULE_MAP = Object.fromEntries(MODULES.map(m => [m.title, m]));

const DEFAULT_STATE = {
  theme: 'dark',
  selectedTab: 'home',
  selectedWeekPreview: 1,
  selectedDayPreview: 0,
  selectedModuleId: 'walk',
  selectedPathId: 'level-1',
  currentProgramDay: 1,
  dayCompletion: {},
  taskStatus: {},
  readiness: {
    energy: 5, sleep: 5, stress: 5, soreness: 3, stiffness: 3, motivation: 5,
    notes: '', locked: false, lastUpdatedDate: ''
  },
  postSession: {
    mind: 0, body: 0, discipline: 0, strengthQuality: 0, powerQuality: 0, sessionEffort: 0,
    notes: '', lastUpdatedDate: ''
  },
  journal: '',
  evidence: '',
  librarySearch: ''
};

const state = structuredClone(DEFAULT_STATE);

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try { Object.assign(state, JSON.parse(raw)); } catch (e) { console.error(e); }
}
function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function nowStamp(){ return new Date().toLocaleString(); }
function clamp(num,min,max,fallback){
  const n = Number(num);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}
function getWeekDayFromProgramDay(programDay){
  const day = Math.min(TOTAL_DAYS, Math.max(1, programDay));
  return { week: Math.ceil(day/7), dayIndex: (day-1)%7 };
}
function getCompletedDaysCount(){ return Object.values(state.dayCompletion).filter(v => v && v.completed).length; }
function getYearProgress(){ return Math.round((getCompletedDaysCount()/TOTAL_DAYS)*100); }
function getCurrentLevel(){
  const completed = getCompletedDaysCount();
  if (completed >= 168) return 5;
  if (completed >= 84) return 4;
  if (completed >= 42) return 3;
  if (completed >= 14) return 2;
  return 1;
}
function getNextUnlock(){
  const completed = getCompletedDaysCount();
  const next = PATHS.find(p => completed < p.unlockAtDay - 1);
  return next ? next.title : 'Mastery review';
}
function getPhaseByWeek(week){
  if (week <= 8) return { title: 'Phase 1 — Foundation', objective: 'Build breathing control, posture, discipline, and daily consistency.', focus: ['Walking meditation','Right breathing','Qigong basics','Horse stance','Push-ups','Standing meditation'] };
  if (week <= 16) return { title: 'Phase 2 — Structure', objective: 'Deepen stances, footwork, core, and basic striking structure.', focus: ['Bow stance','Cat stance','Footwork','Straight punch','Plank'] };
  if (week <= 26) return { title: 'Phase 3 — Power', objective: 'Generate controlled power through kicks, basics practice, and conditioning.', focus: ['Front kick','Ji Ben Gong','Core development','Power blocks'] };
  if (week <= 39) return { title: 'Phase 4 — Internal Work', objective: 'Expand seated practice, regulation, and recovery systems.', focus: ['Seated meditation','Shu Jing Gong','Meridian massage'] };
  return { title: 'Phase 5 — Expansion', objective: 'Blend forms, theory, and advanced branches into the wider path.', focus: ['Forms','Theory','Weapons path','Advanced internal practice'] };
}
function getProgression(week){
  return {
    horseHold: Math.min(30 + (week - 1) * 5, 300),
    bowHold: Math.min(20 + Math.floor((week - 1) * 2.5), 120),
    catHold: week >= 9 ? Math.min(15 + (week - 9) * 2, 90) : 0,
    pushups: Math.min(8 + Math.floor((week - 1) * 1.3), 45),
    punches: Math.min(20 + (week - 1) * 5, 200),
    kicks: week >= 17 ? Math.min(8 + Math.floor((week - 17) * 1.2), 30) : 0,
    plank: Math.min(20 + (week - 1) * 4, 180),
    standingMeditation: Math.min(3 + Math.floor((week - 1) / 3), 10)
  };
}
function getDayType(dayIndex){ return ['Foundation','Power','Structure','Recovery','Discipline','Flow','Reflection'][dayIndex % 7]; }
function getReadinessDecision(){
  const r = state.readiness;
  let mode = 'standard';
  const reasons = [];
  if (r.energy <= 2 || r.sleep <= 2 || r.soreness >= 9){ mode = 'recovery'; reasons.push('very low readiness or very high soreness'); }
  else if (r.stress >= 9 && r.energy <= 4){ mode = 'internal'; reasons.push('high stress paired with low energy'); }
  else if (r.energy >= 8 && r.sleep >= 7 && r.soreness <= 4 && r.stiffness <= 4 && r.motivation >= 7){ mode = 'progress'; reasons.push('good recovery and motivation'); }
  else { reasons.push('normal readiness range'); }
  return {
    mode,
    modeLabel: mode === 'recovery' ? 'Recovery-adjusted' : mode === 'internal' ? 'Internal-focus' : mode === 'progress' ? 'Progress push' : 'Standard',
    reasons
  };
}
function adjustPrescription(text, mode){
  if (mode === 'standard') return text;
  if (mode === 'progress'){
    return text
      .replace(/(\d+)s × 3/g, (_, n) => `${Number(n)+10}s × 3`)
      .replace(/(\d+) each side × 3/g, (_, n) => `${Number(n)+2} each side × 3`)
      .replace(/(\d+) total/g, (_, n) => `${Number(n)+10} total`)
      .replace(/(\d+) × 3 sets/g, (_, n) => `${Number(n)+2} × 3 sets`)
      .replace(/(\d+) × 3/g, (_, n) => `${Number(n)+2} × 3`)
      .replace(/(\d+) min/g, (_, n) => `${Number(n)+1} min`);
  }
  if (mode === 'recovery'){
    return text
      .replace(/(\d+)s × 3/g, (_, n) => `${Math.max(20, Number(n)-15)}s × 2`)
      .replace(/(\d+) each side × 3/g, (_, n) => `${Math.max(6, Number(n)-4)} each side × 2`)
      .replace(/(\d+) total/g, (_, n) => `${Math.max(10, Number(n)-20)} total`)
      .replace(/(\d+) × 3 sets/g, (_, n) => `${Math.max(4, Number(n)-4)} × 2 sets`)
      .replace(/(\d+) × 3/g, (_, n) => `${Math.max(4, Number(n)-4)} × 2`);
  }
  if (mode === 'internal'){
    return text.includes('meditation') || text.includes('Qigong') || text.includes('breathing')
      ? text
      : 'Swap this block for right breathing, qigong, seated or standing meditation, and gentle mobility.';
  }
  return text;
}
function buildWorkout(programDay, preview=false){
  const { week, dayIndex } = getWeekDayFromProgramDay(programDay);
  const phase = getPhaseByWeek(week);
  const p = getProgression(week);
  const dayType = getDayType(dayIndex);
  const decision = getReadinessDecision();
  let tasks = [];
  if (week <= 8){
    const map = {
      Foundation: [
        ['Walking Mind Discipline','20–25 min dog walk + walking meditation'],
        ['Qigong Activation','5 min'],
        ['Horse Stance — Ma Bu',`${p.horseHold}s × 3`],
        ['Bow Stance + Straight Punch',`${p.punches} total`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Power: [
        ['Walking Mind Discipline','20–25 min dog walk + walking meditation'],
        ['Right Breathing','5 min'],
        ['Horse Stance — Ma Bu',`${Math.max(30, p.horseHold - 10)}s × 2`],
        ['Bow Stance + Straight Punch',`${p.punches + 10} total`],
        ['Push-Ups',`${Math.max(6, p.pushups - 1)} × 3 sets`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Structure: [
        ['Walking Mind Discipline','20–25 min dog walk + walking meditation'],
        ['Qigong Activation','5 min'],
        ['Horse Stance — Ma Bu',`${p.horseHold}s × 3`],
        ['Bow Stance — Gong Bu',`${p.bowHold}s each side × 3`],
        ['Plank',`${p.plank}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Recovery: [
        ['Walking Mind Discipline','20 min calm walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','8 min easy'],
        ['Horse Stance — Ma Bu',`${Math.max(20, p.horseHold - 20)}s × 2`],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ],
      Discipline: [
        ['Walking Mind Discipline','20–25 min dog walk + walking meditation'],
        ['Qigong Activation','5 min'],
        ['Horse Stance — Ma Bu',`${p.horseHold + 10}s × 3`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Plank',`${p.plank + 10}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Flow: [
        ['Walking Mind Discipline','20–25 min dog walk + walking meditation'],
        ['Qigong Activation','6 min'],
        ['Horse Stance — Ma Bu',`${Math.max(30, p.horseHold - 10)}s × 2`],
        ['Bow Stance + Straight Punch',`${p.punches} total`],
        ['Push-Ups',`${Math.max(6, p.pushups - 2)} × 3 sets`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Reflection: [
        ['Walking Mind Discipline','Long easy walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','10 min'],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ]
    };
    tasks = map[dayType];
  } else if (week <= 16){
    const map = {
      Foundation: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','5 min'],
        ['Bow Stance — Gong Bu',`${p.bowHold}s each side × 3`],
        ['Cat Stance — Xu Bu',`${p.catHold}s each side × 3`],
        ['Stance and Footwork','10 rounds'],
        ['Plank',`${p.plank}s × 2`]
      ],
      Power: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','5 min'],
        ['Bow Stance + Straight Punch',`${p.punches} total`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Plank',`${p.plank}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Structure: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','5 min'],
        ['Bow Stance — Gong Bu',`${p.bowHold}s each side × 3`],
        ['Cat Stance — Xu Bu',`${p.catHold}s each side × 3`],
        ['Stance and Footwork','12 rounds'],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Recovery: [
        ['Walking Mind Discipline','20 min calm walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','8 min easy'],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ],
      Discipline: [
        ['Walking Mind Discipline','20–25 min'],
        ['Bow Stance — Gong Bu',`${p.bowHold + 10}s each side × 3`],
        ['Cat Stance — Xu Bu',`${p.catHold + 5}s each side × 3`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Plank',`${p.plank + 10}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Flow: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','6 min'],
        ['Stance and Footwork','10 rounds'],
        ['Bow Stance + Straight Punch',`${p.punches} total`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Reflection: [
        ['Walking Mind Discipline','Long easy walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','10 min'],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ]
    };
    tasks = map[dayType];
  } else {
    const map = {
      Foundation: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','5 min'],
        ['Front Kick Control',`${p.kicks} each side × 3`],
        ['Core Development Practice','8–10 min'],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Power: [
        ['Walking Mind Discipline','20–25 min'],
        ['Bow Stance + Straight Punch',`${p.punches + 20} total`],
        ['Front Kick Control',`${p.kicks} each side × 3`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Plank',`${p.plank}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Structure: [
        ['Walking Mind Discipline','20–25 min'],
        ['Bow Stance — Gong Bu',`${p.bowHold}s each side × 3`],
        ['Cat Stance — Xu Bu',`${Math.max(15, p.catHold)}s each side × 3`],
        ['Stance and Footwork','12 rounds'],
        ['Core Development Practice','8 min'],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Recovery: [
        ['Walking Mind Discipline','20 min calm walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','8 min easy'],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ],
      Discipline: [
        ['Walking Mind Discipline','20–25 min'],
        ['Horse Stance — Ma Bu',`${Math.max(45, p.horseHold)}s × 3`],
        ['Push-Ups',`${p.pushups} × 3 sets`],
        ['Plank',`${p.plank + 10}s × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Flow: [
        ['Walking Mind Discipline','20–25 min'],
        ['Qigong Activation','6 min'],
        ['Stance and Footwork','10 rounds'],
        ['Front Kick Control',`${Math.max(6, p.kicks)} each side × 2`],
        ['Standing Meditation',`${p.standingMeditation} min`]
      ],
      Reflection: [
        ['Walking Mind Discipline','Long easy walk'],
        ['Right Breathing','5 min'],
        ['Qigong Activation','10 min'],
        ['Standing Meditation',`${Math.max(5, p.standingMeditation)} min`]
      ]
    };
    tasks = map[dayType];
  }
  if (!preview){
    tasks = tasks.map(([title, prescription]) => [title, adjustPrescription(prescription, decision.mode)]);
  }
  return { programDay, week, dayIndex, dayName: dayNames[dayIndex], dayType, phase, progression: p, decision, tasks };
}

function taskKey(programDay, title){ return `day-${programDay}::${title}`; }
function getTaskStatus(programDay, title){ return state.taskStatus[taskKey(programDay, title)] || { done: false, confident: false }; }
function setTaskFlag(programDay, title, flag, value){
  const key = taskKey(programDay, title);
  if (!state.taskStatus[key]) state.taskStatus[key] = { done: false, confident: false, lastUpdatedDate: '' };
  state.taskStatus[key][flag] = !!value;
  state.taskStatus[key].lastUpdatedDate = todayKey();
  saveState();
  render();
}
function isProgramDayComplete(programDay){
  const workout = buildWorkout(programDay, true);
  return workout.tasks.every(([title]) => getTaskStatus(programDay, title).done);
}
function findFirstIncompleteProgramDay(){
  for (let day = 1; day <= TOTAL_DAYS; day++){
    if (!isProgramDayComplete(day)) return day;
  }
  return TOTAL_DAYS;
}
function goToCurrentDay(){
  state.currentProgramDay = findFirstIncompleteProgramDay();
  const pos = getWeekDayFromProgramDay(state.currentProgramDay);
  state.selectedWeekPreview = pos.week;
  state.selectedDayPreview = pos.dayIndex;
  state.selectedTab = 'today';
  saveState();
  render();
}
function savePrechecks(){
  state.readiness.locked = true;
  state.readiness.lastUpdatedDate = todayKey();
  saveState();
  render();
}
function unlockPrechecks(){
  state.readiness.locked = false;
  saveState();
  render();
}
function savePostSession(){
  state.postSession.lastUpdatedDate = todayKey();
  saveState();
  render();
  alert('After-session review saved.');
}
function completeCurrentDay(){
  if (!isProgramDayComplete(state.currentProgramDay)){
    alert('At least one exercise is still not marked as done for the live current day.');
    return;
  }
  state.dayCompletion[`day-${state.currentProgramDay}`] = { completed: true, completedAt: nowStamp(), postSession: { ...state.postSession } };
  state.currentProgramDay = Math.min(TOTAL_DAYS, state.currentProgramDay + 1);
  const pos = getWeekDayFromProgramDay(state.currentProgramDay);
  state.selectedWeekPreview = pos.week;
  state.selectedDayPreview = pos.dayIndex;
  saveState();
  render();
  alert('Current day completed. The app advanced to the next program day.');
}
function applyTheme(){ document.body.classList.toggle('light', state.theme === 'light'); }


function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function getImageCandidates(src){
  if (!src) return [];
  const clean = String(src).replace(/^\.\//,'');
  const rootName = clean.split('/').pop();
  return [...new Set([clean, rootName, `assets/${rootName}`, `./assets/${rootName}`, `./${rootName}`])];
}
function getCurrentStreak(){
  let streak = 0;
  for (let day = state.currentProgramDay - 1; day >= 1; day--){
    const item = state.dayCompletion[`day-${day}`];
    if (item && item.completed) streak += 1;
    else break;
  }
  return streak;
}

function renderTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === state.selectedTab));
  ['home','today','path','year','library','progress','journal','settings'].forEach(id => {
    const el = document.getElementById('tab-' + id);
    if (el) el.classList.toggle('hidden', state.selectedTab !== id);
  });
}
function renderHero(){
  document.getElementById('heroProgramDay').textContent = `${state.currentProgramDay} / ${TOTAL_DAYS}`;
  document.getElementById('heroYearProgress').textContent = `${getYearProgress()}%`;
  document.getElementById('heroCompletedDays').textContent = String(getCompletedDaysCount());
  document.getElementById('heroLevel').textContent = String(getCurrentLevel());
}
function renderHome(){
  document.getElementById('homeBadge').textContent = `Level ${getCurrentLevel()}`;
  document.getElementById('nextUnlockText').textContent = getNextUnlock();
  document.getElementById('mindScoreText').textContent = `${state.postSession.mind || 0} / 10`;
  document.getElementById('bodyScoreText').textContent = `${Math.round(((state.postSession.body || 0) + (state.postSession.strengthQuality || 0) + (state.postSession.powerQuality || 0))/3)} / 10`;
  document.getElementById('disciplineScoreText').textContent = `${state.postSession.discipline || 0} / 10`;
  document.getElementById('quickStartList').innerHTML = [`Current streak: ${getCurrentStreak()} completed days in a row.`, ...QUICK_START].map(item => `<div class="card">${item}</div>`).join('');
  const homeWorkout = buildWorkout(state.currentProgramDay, true);
  document.getElementById('homeTodayList').innerHTML = homeWorkout.tasks.map(([title, prescription]) => `<div class="card"><strong>${title}</strong><div class="muted">${prescription}</div></div>`).join('');
}
function renderToday(){
  const previewProgramDay = ((state.selectedWeekPreview - 1) * 7) + state.selectedDayPreview + 1;
  const isLiveDay = previewProgramDay === state.currentProgramDay;
  const workout = buildWorkout(previewProgramDay, !isLiveDay);
  document.getElementById('todaySubtitle').textContent = `Program day ${previewProgramDay} • ${workout.dayName} • Week ${workout.week}${isLiveDay ? ' • Live day' : ' • Preview only'}`;
  document.getElementById('todayPhaseBadge').textContent = workout.phase.title;
  document.getElementById('sessionModeText').textContent = workout.decision.modeLabel + (isLiveDay ? '' : ' (preview uses base plan)');
  document.getElementById('sessionModeReason').textContent = `Reason: ${workout.decision.reasons.join(', ')}.`;
  document.getElementById('weekObjective').textContent = workout.phase.objective;
  document.getElementById('weekFocusList').innerHTML = workout.phase.focus.map(item => `<div class="card">${item}</div>`).join('');
  document.getElementById('readinessSliders').innerHTML = READINESS_FIELDS.map(field => `
    <div class="card">
      <label for="r-${field.key}"><strong>${field.label}</strong> <span class="muted">(${state.readiness[field.key]})</span></label>
      <div class="spacer"></div>
      <input id="r-${field.key}" type="range" min="${field.min}" max="${field.max}" value="${state.readiness[field.key]}" data-readiness-key="${field.key}" ${state.readiness.locked ? 'disabled' : ''} />
    </div>
  `).join('');
  document.getElementById('readinessNotes').value = state.readiness.notes || '';
  document.getElementById('readinessNotes').disabled = state.readiness.locked;
  document.getElementById('missionList').innerHTML = workout.tasks.map(([title, prescription]) => {
    const status = getTaskStatus(previewProgramDay, title);
    return `
      <div class="task-row ${status.done ? 'done' : ''}">
        <div></div>
        <div>
          <button type="button" class="task-link open-module-btn" data-module-title="${title}">${title}</button>
          <div class="muted">${prescription}</div>
          <div class="task-meta">
            <label class="tiny-check"><input type="checkbox" class="task-done-box" data-program-day="${previewProgramDay}" data-task-title="${title}" ${status.done ? 'checked' : ''} /> Done</label>
            <label class="tiny-check"><input type="checkbox" class="task-confident-box" data-program-day="${previewProgramDay}" data-task-title="${title}" ${status.confident ? 'checked' : ''} /> Confident / correct</label>
          </div>
        </div>
        <div>${status.done ? '✓' : ''}</div>
      </div>
    `;
  }).join('');
  const uniqueHelp = [...new Set(workout.tasks.map(t => t[0]))];
  document.getElementById('todayQuickHelp').innerHTML = uniqueHelp.map(title => {
    const mod = MODULE_MAP[title];
    if (!mod) return `<div class="card"><strong>${title}</strong></div>`;
    return `<button class="module-item open-module-btn" data-module-title="${title}"><strong>${title}</strong><div class="muted">${mod.cues}</div></button>`;
  }).join('');
  document.getElementById('walkPromptList').innerHTML = WALK_PROMPTS.map(item => `<div class="card">${item}</div>`).join('');
  document.getElementById('postSessionGrid').innerHTML = POST_FIELDS.map(field => `
    <div class="card">
      <label for="p-${field.key}"><strong>${field.label}</strong> <span class="muted">(${state.postSession[field.key]})</span></label>
      <div class="spacer"></div>
      <input id="p-${field.key}" type="range" min="${field.min}" max="${field.max}" value="${state.postSession[field.key]}" data-post-key="${field.key}" />
    </div>
  `).join('');
  document.getElementById('sessionNotes').value = state.postSession.notes || '';
}
function renderPath(){
  document.getElementById('pathGrid').innerHTML = PATHS.map(path => {
    const unlocked = getCompletedDaysCount() >= (path.unlockAtDay - 1);
    return `<button class="path-item ${state.selectedPathId === path.id ? 'active' : ''}" data-path-id="${path.id}"><strong>${path.title}</strong><div class="muted">${unlocked ? 'Unlocked' : 'Locked'}</div></button>`;
  }).join('');
  const path = PATHS.find(p => p.id === state.selectedPathId) || PATHS[0];
  const unlocked = getCompletedDaysCount() >= (path.unlockAtDay - 1);
  document.getElementById('pathTitle').textContent = path.title;
  document.getElementById('pathSubtitle').textContent = path.subtitle;
  document.getElementById('pathStatus').textContent = unlocked ? 'Unlocked' : 'Locked';
  document.getElementById('pathSummary').textContent = path.summary;
  document.getElementById('pathUnlockRule').textContent = `Unlocked after ${path.unlockAtDay - 1} completed days.`;
  document.getElementById('pathModules').innerHTML = path.modules.map(title => `<button class="module-item open-module-btn" data-module-title="${title}"><strong>${title}</strong><div class="muted">Open movement card</div></button>`).join('');
}
function renderYear(){
  let weekHtml = '';
  const liveWeek = getWeekDayFromProgramDay(state.currentProgramDay).week;
  for (let week = 1; week <= 52; week++){
    const phase = getPhaseByWeek(week);
    weekHtml += `<button class="week-item ${state.selectedWeekPreview === week ? 'active' : ''}" data-week-preview="${week}"><strong>Week ${week}</strong><div class="muted">${phase.title}${week === liveWeek ? ' • live week' : ''}</div></button>`;
  }
  document.getElementById('weekList').innerHTML = weekHtml;
  const phase = getPhaseByWeek(state.selectedWeekPreview);
  document.getElementById('yearWeekTitle').textContent = `Week ${state.selectedWeekPreview}`;
  document.getElementById('yearWeekPhase').textContent = phase.title;
  document.getElementById('yearWeekStatus').textContent = state.selectedWeekPreview === liveWeek ? 'Live week' : 'Preview';
  document.getElementById('yearWeekObjective').textContent = phase.objective;
  let daysHtml = '';
  for (let i = 0; i < 7; i++){
    const programDay = ((state.selectedWeekPreview - 1) * 7) + i + 1;
    if (programDay > TOTAL_DAYS) continue;
    const workout = buildWorkout(programDay, true);
    const live = programDay === state.currentProgramDay;
    daysHtml += `<button class="week-item ${state.selectedDayPreview === i ? 'active' : ''}" data-day-preview="${i}"><strong>${workout.dayName}</strong><div class="muted">Program day ${programDay}${live ? ' • live' : ''}</div><div class="muted">${workout.tasks[0][0]}</div></button>`;
  }
  document.getElementById('dayCards').innerHTML = daysHtml;
}
function renderLibrary(){
  document.getElementById('moduleList').innerHTML = MODULES.map(mod => {
    const unlocked = getCurrentLevel() >= mod.level;
    return `<button class="module-item ${state.selectedModuleId === mod.id ? 'active' : ''}" data-module-id="${mod.id}"><strong>${mod.title}</strong><div class="muted">${mod.area} • Level ${mod.level} • ${unlocked ? 'Unlocked' : 'Locked'}</div></button>`;
  }).join('');
  const mod = MODULES.find(m => m.id === state.selectedModuleId) || MODULES[0];
  document.getElementById('moduleTitle').textContent = mod.title;
  document.getElementById('moduleArea').textContent = mod.area;
  document.getElementById('moduleLevelBadge').textContent = `Level ${mod.level}`;
  document.getElementById('moduleMission').innerHTML = `<strong>Mission</strong><div class="muted">${mod.mission}</div>`;
  document.getElementById('moduleVideo').innerHTML = mod.videoUrl
    ? `<a href="${mod.videoUrl}" target="_blank" rel="noopener noreferrer">Open video reference</a><div class="muted">${mod.video}</div>`
    : mod.video;
  document.getElementById('moduleLooks').textContent = mod.looks;
  document.getElementById('moduleFeels').textContent = mod.feels;
  document.getElementById('moduleSetup').textContent = mod.setup;
  document.getElementById('moduleCues').textContent = mod.cues;
  document.getElementById('moduleSteps').textContent = mod.steps;
  document.getElementById('moduleCoaching').textContent = mod.coaching;
  document.getElementById('moduleMistakes').textContent = mod.mistakes;
  document.getElementById('moduleStandards').textContent = mod.standards;
  document.getElementById('moduleImages').innerHTML = (mod.imageFiles && mod.imageFiles.length ? mod.imageFiles.map((src, idx) => `<div class="card"><img src="${src}" alt="${mod.images[idx] || mod.title}" style="width:100%;height:auto;border-radius:12px;display:block;"><div class="muted" style="margin-top:8px;">${mod.images[idx] || ''}</div></div>`).join('') : mod.images.map(label => `<div class="card">${label} image placeholder</div>`).join(''));
}
function renderProgress(){
  const p = getProgression(getWeekDayFromProgramDay(state.currentProgramDay).week);
  document.getElementById('progressGrid').innerHTML = Object.entries(p).map(([key, value]) => `<div class="mini-card"><div class="label">${key}</div><div class="value">${value}</div></div>`).join('');
  document.getElementById('focusPromptList').innerHTML = FOCUS_PROMPTS.map(item => `<div class="card">${item}</div>`).join('');
  document.getElementById('howToList').innerHTML = HOW_TO.map(item => `<div class="card">${item}</div>`).join('');
}
function renderJournal(){
  document.getElementById('journalBox').value = state.journal || '';
  document.getElementById('evidenceBox').value = state.evidence || '';
}
function renderSettings(){
  document.getElementById('settingsStorageText').textContent = `Saved locally in this browser under key ${STORAGE_KEY}. Export backups regularly if you care about not losing progress.`;
  const missing = MODULES.filter(m => !m.videoUrl).slice(0, 10);
  document.getElementById('mediaReadinessList').innerHTML = missing.map(m => `<div class="card"><strong>${m.title}</strong><div class="muted">No real explainer video linked yet.</div></div>`).join('') || '<div class="card">All current modules have linked videos.</div>';
}
function render(){
  applyTheme();
  renderTabs();
  renderHero();
  renderHome();
  renderToday();
  renderPath();
  renderYear();
  renderLibrary();
  renderProgress();
  renderJournal();
  renderSettings();
  saveState();
}
function initEvents(){
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab-btn');
    if (tab){ state.selectedTab = tab.dataset.tab; render(); return; }
    const weekBtn = e.target.closest('[data-week-preview]');
    if (weekBtn){ state.selectedWeekPreview = Number(weekBtn.dataset.weekPreview); render(); return; }
    const dayBtn = e.target.closest('[data-day-preview]');
    if (dayBtn){ state.selectedDayPreview = Number(dayBtn.dataset.dayPreview); state.selectedTab = 'today'; render(); return; }
    const pathBtn = e.target.closest('[data-path-id]');
    if (pathBtn){ state.selectedPathId = pathBtn.dataset.pathId; render(); return; }
    const moduleBtn = e.target.closest('[data-module-id]');
    if (moduleBtn){ state.selectedModuleId = moduleBtn.dataset.moduleId; render(); return; }
    const openModule = e.target.closest('.open-module-btn');
    if (openModule){
      const title = openModule.dataset.moduleTitle;
      const mod = MODULE_MAP[title];
      if (mod){ state.selectedModuleId = mod.id; state.selectedTab = 'library'; render(); }
      return;
    }
    if (e.target.id === 'goCurrentBtn'){ goToCurrentDay(); return; }
    if (e.target.id === 'openFirstModuleBtn'){ state.selectedModuleId = 'walk'; state.selectedTab = 'library'; render(); return; }
    if (e.target.id === 'savePrecheckBtn'){ savePrechecks(); return; }
    if (e.target.id === 'unlockPrecheckBtn'){ unlockPrechecks(); return; }
    if (e.target.id === 'savePostSessionBtn'){ savePostSession(); return; }
    if (e.target.id === 'markDayCompleteBtn'){ completeCurrentDay(); return; }
    if (e.target.id === 'prevDayBtn'){
      const previewProgramDay = Math.max(1, (((state.selectedWeekPreview - 1) * 7) + state.selectedDayPreview + 1) - 1);
      const pos = getWeekDayFromProgramDay(previewProgramDay);
      state.selectedWeekPreview = pos.week;
      state.selectedDayPreview = pos.dayIndex;
      render();
      return;
    }
    if (e.target.id === 'nextDayBtn'){
      const previewProgramDay = Math.min(TOTAL_DAYS, (((state.selectedWeekPreview - 1) * 7) + state.selectedDayPreview + 1) + 1);
      const pos = getWeekDayFromProgramDay(previewProgramDay);
      state.selectedWeekPreview = pos.week;
      state.selectedDayPreview = pos.dayIndex;
      render();
      return;
    }
    if (e.target.id === 'themeDarkBtn'){ state.theme = 'dark'; render(); return; }
    if (e.target.id === 'themeLightBtn'){ state.theme = 'light'; render(); return; }
    if (e.target.id === 'resetBtn'){
      if (!confirm('Reset all progress?')) return;
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
      return;
    }
    if (e.target.id === 'exportBtn'){
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'shaolin-path-v6-backup.json';
      a.click();
      URL.revokeObjectURL(url);
      return;
    }
    if (e.target.id === 'importBtn'){ document.getElementById('importFile').click(); return; }
  });

  document.addEventListener('change', (e) => {
    const doneBox = e.target.closest('.task-done-box');
    if (doneBox){ setTaskFlag(Number(doneBox.dataset.programDay), doneBox.dataset.taskTitle, 'done', doneBox.checked); return; }
    const confBox = e.target.closest('.task-confident-box');
    if (confBox){ setTaskFlag(Number(confBox.dataset.programDay), confBox.dataset.taskTitle, 'confident', confBox.checked); return; }
    const readiness = e.target.closest('[data-readiness-key]');
    if (readiness && !state.readiness.locked){
      const key = readiness.dataset.readinessKey;
      const field = READINESS_FIELDS.find(f => f.key === key);
      if (!field) return;
      state.readiness[key] = clamp(readiness.value, field.min, field.max, field.defaultValue);
      state.readiness.lastUpdatedDate = todayKey();
      render();
      return;
    }
    const post = e.target.closest('[data-post-key]');
    if (post){
      const key = post.dataset.postKey;
      const field = POST_FIELDS.find(f => f.key === key);
      if (!field) return;
      state.postSession[key] = clamp(post.value, field.min, field.max, field.defaultValue);
      state.postSession.lastUpdatedDate = todayKey();
      render();
      return;
    }
    if (e.target.id === 'importFile'){
      const file = e.target.files[0];
      if (!file) return;
      file.text().then(text => {
        try {
          const parsed = JSON.parse(text);
          Object.assign(state, parsed);
          saveState();
          render();
          alert('Backup imported.');
        } catch {
          alert('Import failed. Invalid backup file.');
        }
      });
    }
  });

  document.getElementById('readinessNotes').addEventListener('input', (e) => {
    if (state.readiness.locked) return;
    state.readiness.notes = e.target.value;
    state.readiness.lastUpdatedDate = todayKey();
    saveState();
  });
  document.getElementById('sessionNotes').addEventListener('input', (e) => {
    state.postSession.notes = e.target.value;
    state.postSession.lastUpdatedDate = todayKey();
    saveState();
  });
  document.getElementById('journalBox').addEventListener('input', (e) => { state.journal = e.target.value; saveState(); });
  document.getElementById('evidenceBox').addEventListener('input', (e) => { state.evidence = e.target.value; saveState(); });
}
loadState();
if (!state.currentProgramDay) state.currentProgramDay = findFirstIncompleteProgramDay();
if (!state.selectedWeekPreview) {
  const pos = getWeekDayFromProgramDay(state.currentProgramDay);
  state.selectedWeekPreview = pos.week;
  state.selectedDayPreview = pos.dayIndex;
}
initEvents();
render();

document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'librarySearch'){
    state.librarySearch = e.target.value || '';
    saveState();
    renderLibrary();
  }
});
