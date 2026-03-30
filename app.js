
const STORAGE_KEY = 'shaolin-path-v71';
const MODULES = [{"id": "walk", "title": "Walking Mind Discipline", "area": "Mindset", "level": 1, "mission": "Turn the dog walk into moving meditation and emotional control practice.", "looks": "Breath steady, shoulders relaxed, attention returning calmly.", "feels": "Present, less mentally noisy, more controlled.", "setup": "Walk at an easy steady pace. Relax the jaw and shoulders.", "cues": "Calm mind. Calm breath. Calm body.", "steps": "Breathe in for 4 seconds. Breathe out for 6 seconds. Rotate attention through breath, sound, foot contact, and thought observation.", "coaching": "Do not force huge breaths. The goal is calm attention, not intensity.", "mistakes": "Rushing mentally, mouth breathing without control, chasing thoughts.", "standards": "10+ minutes of controlled nasal breathing and calm attention.", "images": ["Walk posture", "Breath rhythm", "Attention rotation"], "video": "Official Shi Heng Yi site and opening-body starter practice.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/walk_1.svg", "assets/walk_2.svg", "assets/walk_3.svg"]}, {"id": "breathing", "title": "Right Breathing", "area": "Breath Foundation", "level": 1, "mission": "Build breathing as the first technical skill.", "looks": "Smooth nasal breath, no shoulder lifting, relaxed chest.", "feels": "Steadier and more centered.", "setup": "Sit or stand upright with relaxed shoulders.", "cues": "Nose in. Longer out-breath. No shrugging.", "steps": "Inhale gently through the nose. Exhale slightly longer. Keep the breath smooth rather than huge.", "coaching": "This is not maximum breathing. It is controlled breathing.", "mistakes": "Noisy inhales, forcing depth, shoulder shrugging.", "standards": "5 minutes of steady nasal breathing with relaxed shoulders.", "images": ["Breathing setup", "Relaxed shoulders", "Calm breathing"], "video": "Official free theory and breathing foundations page.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/breathing_1.svg", "assets/breathing_2.svg", "assets/breathing_3.svg"]}, {"id": "qigong", "title": "Qigong Activation", "area": "Breath & Energy", "level": 1, "mission": "Wake the body without agitation.", "looks": "Smooth movement, low shoulders, calm rhythm.", "feels": "Open, warm, centered.", "setup": "Stand with feet about shoulder width and knees soft.", "cues": "Move smoothly. Breathe with the movement. Stay tall.", "steps": "Raise the arms with the inhale, lower with the exhale. Use simple opening and stretching patterns without rushing.", "coaching": "This is preparation, not frantic warm-up work.", "mistakes": "Shrugging, rushing, moving without breath control.", "standards": "Complete the qigong block smoothly and calmly.", "images": ["Setup stance", "Opening movement", "Stretch position"], "video": "13 Minutes of Body Activation / Loosening Exercises for the Morning with Shi Heng Yi.", "videoUrl": "https://www.youtube.com/watch?v=8sJ5N9nsEmM", "imageFiles": ["assets/qigong_1.svg", "assets/qigong_2.svg", "assets/qigong_3.svg"]}, {"id": "horse", "title": "Horse Stance — Ma Bu", "area": "Structure", "level": 1, "mission": "Build leg strength, posture, and discipline.", "looks": "Knees out, chest lifted, spine tall, weight even.", "feels": "Leg burn without panic, stable and rooted.", "setup": "Take a wide stance and bend the knees with the chest up.", "cues": "Root the feet. Lift the chest. Observe, do not react.", "steps": "Set the feet wide, bend the knees, push the knees outward, keep the torso tall, and hold while breathing steadily.", "coaching": "Go only as low as you can while keeping the back upright.", "mistakes": "Knees collapsing inward, leaning forward, holding breath.", "standards": "Complete the target holds without posture collapse.", "images": ["Setup width", "Correct stance depth", "Posture check"], "video": "Official/public stance or horse-stance reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/horse_1.svg", "assets/horse_2.svg", "assets/horse_3.svg"]}, {"id": "pushups", "title": "Push-Ups", "area": "Strength", "level": 1, "mission": "Build chest, shoulders, arms, and full-body tension.", "looks": "Straight body line, controlled lowering, clean lockout.", "feels": "Full-body effort, not a loose sagging movement.", "setup": "Hands slightly wider than shoulders, feet back, body braced.", "cues": "Brace the core. Lower with control. Push the floor away.", "steps": "Set the body line, lower the chest under control, press back up without losing alignment.", "coaching": "If full push-ups are too hard, elevate the hands and keep the shape honest.", "mistakes": "Sagging hips, half reps, flared elbows, rushed reps.", "standards": "Complete the target sets with honest range and body control.", "images": ["Top position", "Lowering phase", "Bottom check"], "video": "Public push-up technique reference.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/pushups_1.svg", "assets/pushups_2.svg", "assets/pushups_3.svg"]}, {"id": "standingmed", "title": "Standing Meditation", "area": "Recovery & Control", "level": 1, "mission": "Finish training with command rather than chaos.", "looks": "Still body, low breath, relaxed shoulders and jaw.", "feels": "Grounded and controlled.", "setup": "Stand tall with soft knees and relaxed shoulders.", "cues": "Stand tall. Breathe low. Finish with command.", "steps": "Set the posture, inhale through the nose, let the breath settle lower, exhale slowly, return attention to the breath whenever it drifts.", "coaching": "Stillness is part of the training.", "mistakes": "Fidgeting, chest-only breathing, rushing the finish.", "standards": "Complete the time with stillness and controlled breathing.", "images": ["Standing setup", "Hands and shoulders", "Quiet finish"], "video": "Official free training hub with body awareness and breathing foundations.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/standingmed_1.svg", "assets/standingmed_2.svg", "assets/standingmed_3.svg"]}, {"id": "bow", "title": "Bow Stance — Gong Bu", "area": "Structure", "level": 2, "mission": "Build stability for striking and movement.", "looks": "Front knee stable, back leg long, torso controlled.", "feels": "Directional and rooted.", "setup": "Step one foot forward, bend the front knee, keep the rear leg active.", "cues": "Stable front knee. Long back leg. Hips aligned.", "steps": "Place the front foot forward, sink into the front leg, keep the rear leg active, maintain posture.", "coaching": "Do not make the stance so long you cannot control it.", "mistakes": "Too narrow, front knee collapsing, losing rear leg integrity.", "standards": "Complete the holds each side with stable posture.", "images": ["Setup stance", "Mid hold", "Alignment check"], "video": "Official/public stance-training reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/bow_1.svg", "assets/bow_2.svg", "assets/bow_3.svg"]}, {"id": "cat", "title": "Cat Stance — Xu Bu", "area": "Balance", "level": 2, "mission": "Develop readiness, weight control, and balance.", "looks": "Rear leg loaded, front leg light, torso upright.", "feels": "Balanced and alert.", "setup": "Shift most weight to the rear leg and keep the front foot light.", "cues": "Load the rear leg. Keep the front foot light. Stay tall.", "steps": "Transfer weight rearward, place the front foot lightly, keep the torso upright, hold the stance.", "coaching": "This stance is about control and readiness, not brute force.", "mistakes": "Too much front-leg load, hunched upper body, rear hip collapse.", "standards": "Hold each side with balance and correct weight distribution.", "images": ["Setup", "Weight distribution", "Balance check"], "video": "Public empty/cat-stance style reference.", "videoUrl": "https://www.youtube.com/watch?v=PG7tmtETld0", "imageFiles": ["assets/cat_1.svg", "assets/cat_2.svg", "assets/cat_3.svg"]}, {"id": "footwork", "title": "Stance and Footwork", "area": "Basics", "level": 2, "mission": "Build deliberate stepping and stable transitions.", "looks": "Stable steps, clean base setting, no chaotic crossing.", "feels": "Mobile but rooted.", "setup": "Work in a clear space and move slowly enough to stay clean.", "cues": "Step with intent. Set the base. Move cleanly.", "steps": "Practice forward stepping, backward stepping, and stance-to-stance transitions before adding strikes.", "coaching": "Footwork is a basic skill, not an optional extra.", "mistakes": "Rushing, crossing awkwardly, striking before the base is set.", "standards": "Complete the rounds with clean stepping and maintained balance.", "images": ["Forward step", "Transition", "Stable finish"], "video": "Official/public stance-drills training reference.", "videoUrl": "https://www.youtube.com/watch?v=BihSPdRbBWE", "imageFiles": ["assets/footwork_1.svg", "assets/footwork_2.svg", "assets/footwork_3.svg"]}, {"id": "straightpunch", "title": "Bow Stance + Straight Punch", "area": "Power", "level": 2, "mission": "Build calm striking power from proper structure.", "looks": "Stable base, clean fist path, hips involved.", "feels": "Whole body working as one chain.", "setup": "Bow stance first, hands up, posture controlled.", "cues": "Set the base. Turn the hips. Strike with calm intent.", "steps": "Set the stance, rotate from the hips, drive the fist straight, return under control.", "coaching": "The punch should travel straight, not swing.", "mistakes": "Arm punching, elbow flare, wrist collapse, wild speed.", "standards": "Complete the punch volume with clean line and controlled return.", "images": ["Guard setup", "Punch extension", "Wrist alignment"], "video": "Official/public basics and straight-punching reference.", "videoUrl": "https://www.youtube.com/watch?v=rtOJJBHLBME", "imageFiles": ["assets/straightpunch_1.svg", "assets/straightpunch_2.svg", "assets/straightpunch_3.svg"]}, {"id": "plank", "title": "Plank", "area": "Core", "level": 2, "mission": "Build core endurance so the body holds shape under effort.", "looks": "Straight body line, controlled ribs, no sagging back.", "feels": "Strong abdominal tension and steady breathing.", "setup": "Forearms down, feet back, body long and braced.", "cues": "Brace hard. Stay long. Breathe under tension.", "steps": "Set forearms under shoulders, lift into a straight plank, hold while breathing calmly.", "coaching": "Make the plank hard by bracing more, not by surviving badly.", "mistakes": "Hips too high, hips sagging, holding breath.", "standards": "Complete the target time with body line intact.", "images": ["Setup", "Mid hold", "Body line"], "video": "Public plank/core reference.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/plank_1.svg", "assets/plank_2.svg", "assets/plank_3.svg"]}, {"id": "frontkick", "title": "Front Kick Control", "area": "Balance & Power", "level": 3, "mission": "Develop balance, hip control, and disciplined kicking mechanics.", "looks": "Tall torso, stable support leg, clean lift and return.", "feels": "Strong and balanced, not wild.", "setup": "Stand tall with hands up and weight settled into the support leg.", "cues": "Lift with control. Return with control. Stay tall.", "steps": "Lift the knee, extend the lower leg, retract the leg, and place the foot down under control.", "coaching": "Think lift, extend, retract, place.", "mistakes": "Throwing the leg, leaning back too much, dropping the guard.", "standards": "Complete the reps each side with controlled return and stable balance.", "images": ["Setup", "Knee lift", "Kick return"], "video": "Public reference for front kick basics.", "videoUrl": "https://www.youtube.com/watch?v=ZZJErI-rAeA", "imageFiles": ["assets/frontkick_1.svg", "assets/frontkick_2.svg", "assets/frontkick_3.svg"]}, {"id": "coredev", "title": "Core Development Practice", "area": "Conditioning", "level": 3, "mission": "Build trunk control to support stance, striking, and power work.", "looks": "Strong trunk position without collapse.", "feels": "Deep core effort rather than random back strain.", "setup": "Use controlled floor core drills with bracing before each rep.", "cues": "Brace the trunk. Stay long. Control the ribs.", "steps": "Brace before each rep, move slowly enough to keep trunk control, stop when shape breaks.", "coaching": "Core work should support martial shape, not just burn the abs.", "mistakes": "Overusing the lower back, rushing reps, neck tension.", "standards": "Complete the assigned block with controlled trunk position.", "images": ["Setup", "Controlled rep", "Finish position"], "video": "General core development reference; this app still uses written guidance as primary instruction.", "videoUrl": "https://www.youtube.com/watch?v=UFMtY2Wdy70", "imageFiles": ["assets/coredev_1.svg", "assets/coredev_2.svg", "assets/coredev_3.svg"]}, {"id": "jibengong", "title": "Ji Ben Gong", "area": "Foundation Drills", "level": 3, "mission": "Use a dedicated basics practice block so repetition sharpens fundamentals.", "looks": "Repeated basics done cleanly, not lazily.", "feels": "Foundational and sharpening.", "setup": "Choose a few core basics and repeat them with honest quality.", "cues": "Basics first. Repeat cleanly. Stay honest.", "steps": "Repeat stances, stepping, and strike lines in a clean basics block.", "coaching": "Ji Ben Gong is not glamorous. That is why it matters.", "mistakes": "Skipping basics, rushing because it feels simple.", "standards": "Complete the basics block and finish cleaner than you started.", "images": ["Basics setup", "Repetition block", "Quality standard"], "video": "Official/public basics-style reference.", "videoUrl": "https://www.youtube.com/watch?v=Ck3IpQfMhJs", "imageFiles": ["assets/jibengong_1.svg", "assets/jibengong_2.svg", "assets/jibengong_3.svg"]}, {"id": "powerblocks", "title": "Power Workout Blocks", "area": "Conditioning", "level": 3, "mission": "Build resilience and work capacity through structured rounds.", "looks": "Hard effort without total chaos.", "feels": "Challenging but still under control.", "setup": "Use short hard blocks followed by controlled recovery.", "cues": "Work hard. Keep form. Recover with breath.", "steps": "Warm up, complete short hard rounds, recover with calm walking or breathing, repeat.", "coaching": "The exact exercises can change. The role stays the same.", "mistakes": "Turning the session into frantic sloppy reps, ignoring recovery.", "standards": "Complete the rounds with form mostly intact and breath regained after effort.", "images": ["Round setup", "Work block", "Recovery phase"], "video": "Official/public morning practice or conditioning-style reference.", "videoUrl": "https://www.youtube.com/watch?v=I6FbjpCGB0E", "imageFiles": ["assets/powerblocks_1.svg", "assets/powerblocks_2.svg", "assets/powerblocks_3.svg"]}, {"id": "seatedmed", "title": "Seated Meditation", "area": "Mind Training", "level": 4, "mission": "Train stable attention and non-reaction in a formal seated posture.", "looks": "Stable upright posture, calm breath, regular return to focus.", "feels": "Clearer and quieter even if thoughts still appear.", "setup": "Sit upright with relaxed shoulders and face.", "cues": "Sit tall. Return to breath. Do not chase thoughts.", "steps": "Settle posture, breathe through the nose, watch the breath, return calmly whenever distracted.", "coaching": "Meditation is repetition of returning, not perfection.", "mistakes": "Forcing emptiness, slumping, frustration about thinking.", "standards": "Complete the time with steady returns to the chosen focus.", "images": ["Seat setup", "Posture check", "Quiet seated finish"], "video": "Official free training page with body awareness, breathing, and internal-practice theory/videos.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/seatedmed_1.svg", "assets/seatedmed_2.svg", "assets/seatedmed_3.svg"]}, {"id": "shujinggong", "title": "Shu Jing Gong", "area": "Regulation Qigong", "level": 4, "mission": "Use body and breath regulation to settle the system.", "looks": "Calm, methodical regulation instead of random movement.", "feels": "More organized and settled.", "setup": "Use relaxed upright posture and begin only after normal breathing settles.", "cues": "Body first. Breath second. Mind follows.", "steps": "Check posture, regulate the body, regulate the breath, let the mind settle with the breath.", "coaching": "This is a regulation block, not a power drill.", "mistakes": "Rushing for intensity, treating it like normal exercise.", "standards": "Complete the block calmly and finish steadier than you started.", "images": ["Setup", "Regulation phase", "Completion phase"], "video": "Official free training page for body awareness and breathing in Qi Gong practice.", "videoUrl": "https://www.shihengyi.online/online-stream", "imageFiles": ["assets/shujinggong_1.svg", "assets/shujinggong_2.svg", "assets/shujinggong_3.svg"]}, {"id": "meridian", "title": "Meridian Massage Practice", "area": "Recovery", "level": 4, "mission": "Use deliberate self-massage and recovery work to improve restoration.", "looks": "Deliberate and repeatable, not random rubbing.", "feels": "Warmer, looser, more recovered.", "setup": "Use seated or standing relaxed posture with moderate pressure.", "cues": "Slow pressure. Follow a sequence. Use after hard work.", "steps": "Massage key areas in a repeatable order after training or on easy days.", "coaching": "This is recovery work, not punishment.", "mistakes": "Rushing, using painful force.", "standards": "Complete the recovery block and feel looser afterwards.", "images": ["Setup", "Sequence example", "Recovery finish"], "video": "General self-massage reference video.", "videoUrl": "https://www.youtube.com/watch?v=tpAk3AizgvE", "imageFiles": ["assets/meridian_1.svg", "assets/meridian_2.svg", "assets/meridian_3.svg"]}, {"id": "forms", "title": "Forms Training", "area": "Forms", "level": 5, "mission": "Begin the longer path of learning forms in sections with control.", "looks": "Sequence learned in order, rhythm controlled, stances still recognizable.", "feels": "Integrated and demanding.", "setup": "Break the form into short sections rather than learning too much at once.", "cues": "Sequence accuracy. Stance quality. Calm flow.", "steps": "Learn the opening, add a few movements, repeat until remembered, then refine before speeding up.", "coaching": "Forms are a long path. Learn small pieces well.", "mistakes": "Memorizing shapes without body structure, rushing sequence learning.", "standards": "Learn the section and perform it slowly with control.", "images": ["Opening posture", "Section transition", "Controlled flow"], "video": "Official Shi Heng Yi site and official channel for introductory form learning.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/forms_1.svg", "assets/forms_2.svg", "assets/forms_3.svg"]}, {"id": "ethics", "title": "Ethics and Theory Modules", "area": "Mind & Character", "level": 5, "mission": "Use theory to shape behaviour and character, not just collect ideas.", "looks": "Theory is applied to conduct rather than treated as trivia.", "feels": "Grounding for discipline and self-mastery.", "setup": "Study one short concept block each week.", "cues": "Study briefly. Apply practically. Reflect honestly.", "steps": "Read the principle, write one practical takeaway, apply it during training or daily life.", "coaching": "This is part of training, but it does not replace physical practice.", "mistakes": "Treating theory as separate from behaviour.", "standards": "Review the concept and log one practical application.", "images": ["Study prompt", "Reflection note", "Applied conduct"], "video": "Official Shi Heng Yi site and teachings hub.", "videoUrl": "https://www.shihengyi.online/", "imageFiles": ["assets/ethics_1.svg", "assets/ethics_2.svg", "assets/ethics_3.svg"]}, {"id": "weapons", "title": "Weapons and Sparring Path", "area": "Extended Curriculum", "level": 5, "mission": "Acknowledge the broader traditional curriculum beyond solo foundations.", "looks": "This is an expansion path, not a beginner block.", "feels": "Broader curriculum beyond solo basics.", "setup": "Keep this path locked until the basics are honest.", "cues": "Unlock later. Foundation first.", "steps": "Progress from solo basics to partner or tool work only after the foundation is stable.", "coaching": "This app treats it as an advanced branch, not the starting point.", "mistakes": "Jumping into advanced curriculum too early.", "standards": "Only pursue after the foundation path is genuinely established.", "images": ["Advanced placeholder", "Partner branch", "Weapons branch"], "video": "Official temple overview for wider curriculum and training path.", "videoUrl": "https://www.shaolintemple.eu/index.php?page=english", "imageFiles": ["assets/weapons_1.svg", "assets/weapons_2.svg", "assets/weapons_3.svg"]}];
const MODULE_MAP = Object.fromEntries(MODULES.map(m => [m.id, m]));
const MODULE_TITLE_MAP = Object.fromEntries(MODULES.map(m => [m.title, m]));
const DAY_TYPES = [
  {key:'iron', title:'Iron Frame', intent:'Upper-body strength + calm aggression'},
  {key:'legs', title:'Rooted Legs', intent:'Leg strength + stance discipline'},
  {key:'flow', title:'Flow & Mobility', intent:'Mobility + structural precision'},
  {key:'power', title:'Power Engine', intent:'Punch, kick, and conditioning work'},
  {key:'volume', title:'Upper + Core Volume', intent:'Density and muscular work'},
  {key:'recover', title:'Recovery Control', intent:'Control, breath, and joint reset'},
  {key:'test', title:'Discipline Test', intent:'Finish the week with a hard but clean challenge'}
];
const WALK_SCRIPTS = [
  'First 5 min: nasal breathing only. Shoulders down. Jaw relaxed.',
  'Middle block: notice foot contact, posture, and outside sounds without reacting.',
  'Final block: set intention — discipline first, motivation later.'
];
const READINESS_FIELDS = [
  {key:'energy', label:'Energy', min:1, max:10, defaultValue:7},
  {key:'sleep', label:'Sleep quality', min:1, max:10, defaultValue:7},
  {key:'soreness', label:'Soreness', min:1, max:10, defaultValue:3},
  {key:'stress', label:'Stress', min:1, max:10, defaultValue:4}
];
const REVIEW_FIELDS = [
  {key:'mind', label:'Mind', min:0, max:10, defaultValue:0},
  {key:'body', label:'Body', min:0, max:10, defaultValue:0},
  {key:'effort', label:'Effort', min:0, max:10, defaultValue:0},
  {key:'difficulty', label:'Difficulty', min:0, max:10, defaultValue:0}
];

const DEFAULT_STATE = {
  selectedTab:'home',
  theme:'dark',
  context:'home',
  currentDay:1,
  previewDay:1,
  completedSessions:0,
  completedDates:[],
  lastCompletedDate:'',
  readiness:{energy:7,sleep:7,soreness:3,stress:4,notes:''},
  review:{mind:0,body:0,effort:0,difficulty:0,notes:''},
  journal:'',
  evidence:'',
  selectedModuleId: MODULES[0]?.id || '',
  librarySearch:'',
  modal:{moduleId:'', index:0}
};

const state = structuredClone(DEFAULT_STATE);

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(!raw) return;
  try { Object.assign(state, JSON.parse(raw)); } catch(e) { console.error(e); }
}
function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function cycleWeek(){ return Math.floor(state.completedSessions / 7) + 1; }
function sessionTier(){ return Math.floor(state.completedSessions / 3); }
function getContextLabel(){ return state.context === 'holiday' ? 'Holiday maintain' : 'Home push'; }
function clamp(n,min,max,fb){ const v = Number(n); if(!Number.isFinite(v)) return fb; return Math.max(min, Math.min(max, v)); }
function getLevel(){
  const s = state.completedSessions;
  if (s >= 84) return 5;
  if (s >= 42) return 4;
  if (s >= 21) return 3;
  if (s >= 7) return 2;
  return 1;
}
function getTargets(){
  const tier = sessionTier();
  const weekBoost = Math.floor((cycleWeek()-1) / 2);
  const holiday = state.context === 'holiday';
  const pushBase = holiday ? 0 : 2;
  return {
    push: 14 + tier*2 + weekBoost + pushBase,
    stance: 45 + tier*10 + weekBoost*5 + (holiday ? 0 : 10),
    plank: 35 + tier*10 + weekBoost*5 + (holiday ? 0 : 5),
    punches: 40 + tier*10 + weekBoost*5 + (holiday ? 0 : 10),
    kicks: 8 + tier + weekBoost + (holiday ? 0 : 2),
    mobility: 6 + Math.floor(tier/2),
    finisher: holiday ? 1 : 2
  };
}
function readinessDecision(){
  const r = state.readiness;
  const low = (r.energy <= 3 || r.sleep <= 3 || r.soreness >= 8);
  const medium = (r.energy <= 5 || r.sleep <= 5 || r.soreness >= 6 || r.stress >= 7);
  if (low) return {mode:'recovery', label:'Recovery-adjusted', desc:'Reduce total work but keep discipline.'};
  if (medium) return {mode:'steady', label:'Steady', desc:'Hold the line. Clean work over ego.'};
  return {mode:'push', label: state.context === 'holiday' ? 'Holiday maintain' : 'Push day', desc: state.context === 'holiday' ? 'Keep gains steady without digging a recovery hole.' : 'You are clear to push today.'};
}
function currentDayType(dayNum){ return DAY_TYPES[(dayNum-1) % 7]; }
function adjustValue(val, decision, lowFactor=0.8, pushFactor=1.1){
  if (decision.mode === 'recovery') return Math.round(val * lowFactor);
  if (decision.mode === 'push') return Math.round(val * pushFactor);
  return Math.round(val);
}
function buildSession(dayNum){
  const day = currentDayType(dayNum);
  const t = getTargets();
  const rd = readinessDecision();

  const push = adjustValue(t.push, rd);
  const stance = adjustValue(t.stance, rd, 0.75, 1.15);
  const plank = adjustValue(t.plank, rd, 0.75, 1.1);
  const punches = adjustValue(t.punches, rd, 0.8, 1.15);
  const kicks = adjustValue(t.kicks, rd, 0.75, 1.1);
  const mob = adjustValue(t.mobility, rd, 0.85, 1.0);
  const finisherRounds = rd.mode === 'recovery' ? 1 : t.finisher;

  let modules = [];
  let tasks = [];

  switch(day.key){
    case 'iron':
      modules = ['Push-Ups', 'Horse Stance — Ma Bu', 'Plank', 'Standing Meditation'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Activation', detail:`Qigong Activation • ${mob} min`},
        {title:'Strength block', detail:`Push-Ups ${push} / ${Math.max(8,push-4)} / ${Math.max(6,push-6)}`},
        {title:'Structure block', detail:`Horse Stance — Ma Bu ${stance}s × 2`},
        {title:'Core block', detail:`Plank ${plank}s × 2`},
        {title:'Finisher', detail:`Max-quality push-ups x ${finisherRounds} round(s)`},
      ];
      break;
    case 'legs':
      modules = ['Horse Stance — Ma Bu', 'Bow Stance — Gong Bu', 'Cat Stance — Xu Bu', 'Standing Meditation'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Activation', detail:`Qigong Activation • ${mob} min`},
        {title:'Leg power', detail:`Horse Stance ${stance}s × 2`},
        {title:'Stance control', detail:`Bow Stance ${Math.max(30,Math.round(stance*0.8))}s each side × 2`},
        {title:'Balance', detail:`Cat Stance ${Math.max(20,Math.round(stance*0.5))}s each side × 2`},
        {title:'Finisher', detail:`Horse stance burn hold ${Math.max(20,Math.round(stance*0.6))}s × ${finisherRounds}`},
      ];
      break;
    case 'flow':
      modules = ['Qigong Activation', 'Stance and Footwork', 'Right Breathing', 'Standing Meditation'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Mobility', detail:`Qigong Activation • ${mob+2} min`},
        {title:'Footwork', detail:`Stance and Footwork • ${10 + sessionTier()} rounds`},
        {title:'Breath under control', detail:`Right Breathing • ${Math.max(5,mob)} min`},
        {title:'Stillness', detail:`Standing Meditation • ${Math.max(4,Math.round(plank/15))} min`},
      ];
      break;
    case 'power':
      modules = ['Bow Stance + Straight Punch', 'Front Kick Control', 'Plank', 'Qigong Activation'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Activation', detail:`Qigong Activation • ${mob} min`},
        {title:'Punch engine', detail:`Straight punches ${punches} total`},
        {title:'Kick control', detail:`Front Kick Control ${kicks} each side × 2`},
        {title:'Core', detail:`Plank ${plank}s × 2`},
        {title:'Finisher', detail:`Punch flurry 45 sec × ${finisherRounds}`},
      ];
      break;
    case 'volume':
      modules = ['Push-Ups', 'Plank', 'Stance and Footwork', 'Qigong Activation'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Activation', detail:`Qigong Activation • ${mob} min`},
        {title:'Upper volume', detail:`Push-Ups ${Math.max(10,push-2)} × 3 sets`},
        {title:'Core volume', detail:`Plank ${Math.max(25,Math.round(plank*0.9))}s × 3`},
        {title:'Movement density', detail:`Footwork + stance transitions 8 min continuous`},
        {title:'Finisher', detail:`Push-up burnout x ${finisherRounds}`},
      ];
      break;
    case 'recover':
      modules = ['Right Breathing', 'Qigong Activation', 'Standing Meditation', 'Meridian Massage Practice'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Breath regulation', detail:`Right Breathing • ${Math.max(5,mob)} min`},
        {title:'Reset mobility', detail:`Qigong Activation • ${mob+2} min`},
        {title:'Stillness', detail:`Standing Meditation • ${Math.max(5,Math.round(plank/15))} min`},
        {title:'Recovery block', detail:`Meridian Massage Practice • ${Math.max(4,mob)} min`},
      ];
      break;
    case 'test':
      modules = ['Push-Ups', 'Horse Stance — Ma Bu', 'Bow Stance + Straight Punch', 'Plank'];
      tasks = [
        {title:'Walk mindset', detail:'20–30 min walk using the 3-part script below.'},
        {title:'Test set 1', detail:`Push-Ups max-quality set target ${push + 2}`},
        {title:'Test set 2', detail:`Horse Stance hold target ${Math.round(stance*1.1)}s`},
        {title:'Test set 3', detail:`Straight punches ${Math.round(punches*1.1)} total`},
        {title:'Test set 4', detail:`Plank target ${Math.round(plank*1.1)}s`},
        {title:'Finisher', detail:'One final honest round. No shortcuts.'},
      ];
      break;
  }

  return { day, title: day.title, modules, tasks, readiness: rd, targets: t };
}
function getCurrentModule(){ return MODULES.find(m => m.id === state.selectedModuleId) || MODULES[0]; }
function streak(){ return state.completedDates.length; }
function uniqueCompletedDates(){ return [...new Set(state.completedDates)].length; }
function openModal(moduleId, index){
  state.modal.moduleId = moduleId;
  state.modal.index = index;
  renderModal();
  document.getElementById('imageModal').classList.remove('hidden');
}
function closeModal(){ document.getElementById('imageModal').classList.add('hidden'); }
function renderModal(){
  const mod = MODULES.find(m => m.id === state.modal.moduleId) || getCurrentModule();
  const files = mod.imageFiles || [];
  if (!files.length) return;
  const idx = Math.max(0, Math.min(files.length - 1, state.modal.index));
  state.modal.index = idx;
  document.getElementById('modalImg').src = files[idx];
  document.getElementById('modalCaption').textContent = mod.images?.[idx] || mod.title;
}
function renderTabs(){
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === state.selectedTab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('tab-' + state.selectedTab).classList.remove('hidden');
}
function renderHome(){
  document.getElementById('badgeMode').textContent = getContextLabel();
  const day = currentDayType(state.currentDay);
  const rd = readinessDecision();
  document.getElementById('homeStats').innerHTML = `
    <div class="stat-card"><div class="stat-label">Current day</div><div class="stat-value">${state.currentDay}/7</div><div class="small-muted">Day ${state.currentDay} • ${day.title}</div></div>
    <div class="stat-card"><div class="stat-label">Completed sessions</div><div class="stat-value">${state.completedSessions}</div><div class="small-muted">True progression driver</div></div>
    <div class="stat-card"><div class="stat-label">28-day consistency</div><div class="stat-value">${Math.min(100, Math.round(uniqueCompletedDates()/28*100))}%</div><div class="small-muted">${uniqueCompletedDates()} unique completed dates</div></div>
    <div class="stat-card"><div class="stat-label">Readiness</div><div class="stat-value">${Math.round(((state.readiness.energy + state.readiness.sleep + (11-state.readiness.soreness) + (11-state.readiness.stress))/4)*10)}%</div><div class="small-muted">${rd.label}</div></div>
  `;
  document.getElementById('mindsetCard').innerHTML = `<strong>Today's mindset</strong><div class="stat-value" style="font-size:20px;margin-top:8px;">Discipline first. Motivation later.</div>`;
  const session = buildSession(state.currentDay);
  document.getElementById('homeTodaySummary').innerHTML = session.tasks.slice(0,5).map(t => `<div class="card"><strong>${t.title}</strong><div class="small-muted">${t.detail}</div></div>`).join('');
}
function renderToday(){
  const session = buildSession(state.previewDay || state.currentDay);
  const isPreview = (state.previewDay || state.currentDay) !== state.currentDay;
  document.getElementById('todayTitle').textContent = `Day ${state.previewDay || state.currentDay} • ${session.title}`;
  document.getElementById('todaySubtitle').textContent = `${session.day.intent}${isPreview ? ' • preview only' : ''}`;
  document.getElementById('todayBadge').textContent = session.readiness.label;
  document.getElementById('walkScript').innerHTML = `<strong>Walk script</strong><div class="small-muted">${WALK_SCRIPTS.join(' ')}</div>`;
  document.getElementById('readinessGrid').innerHTML = READINESS_FIELDS.map(f => `
    <div class="card">
      <label for="read-${f.key}"><strong>${f.label}</strong> <span class="small-muted">(${state.readiness[f.key]})</span></label>
      <div class="spacer"></div>
      <input id="read-${f.key}" type="range" min="${f.min}" max="${f.max}" value="${state.readiness[f.key]}" data-read-key="${f.key}">
    </div>
  `).join('');
  document.getElementById('todayNotes').value = state.readiness.notes || '';
  document.getElementById('todayWorkout').innerHTML = session.tasks.map((t,i) => `<div class="task-row"><div><div class="task-title">${i+1}. ${t.title}</div><div class="small-muted">${t.detail}</div></div><button class="btn open-task-guide" data-task-title="${session.modules[i] || session.modules[0]}">Guide</button></div>`).join('');
  document.getElementById('reviewGrid').innerHTML = REVIEW_FIELDS.map(f => `
    <div class="card">
      <label for="rev-${f.key}"><strong>${f.label}</strong> <span class="small-muted">(${state.review[f.key]})</span></label>
      <div class="spacer"></div>
      <input id="rev-${f.key}" type="range" min="${f.min}" max="${f.max}" value="${state.review[f.key]}" data-review-key="${f.key}">
    </div>
  `).join('');
  document.getElementById('reviewNotes').value = state.review.notes || '';
}
function renderPath(){
  document.getElementById('pathDays').innerHTML = DAY_TYPES.map((d, idx) => `<div class="day-item ${idx+1===state.currentDay?'active':''}"><strong>Day ${idx+1} • ${d.title}</strong><div class="small-muted">${d.intent}</div></div>`).join('');
  document.getElementById('pathLevels').innerHTML = `
    <div class="stat-card"><div class="stat-label">Level</div><div class="stat-value">${getLevel()}</div></div>
    <div class="stat-card"><div class="stat-label">Cycle week</div><div class="stat-value">${cycleWeek()}</div></div>
    <div class="stat-card"><div class="stat-label">Session tier</div><div class="stat-value">${sessionTier()}</div></div>
    <div class="stat-card"><div class="stat-label">Streak</div><div class="stat-value">${streak()}</div></div>
  `;
}
function renderProgress(){
  const t = getTargets();
  document.getElementById('targetsGrid').innerHTML = `
    <div class="stat-card"><div class="stat-label">Push target</div><div class="stat-value">${t.push}</div></div>
    <div class="stat-card"><div class="stat-label">Horse stance</div><div class="stat-value">${t.stance}s</div></div>
    <div class="stat-card"><div class="stat-label">Plank</div><div class="stat-value">${t.plank}s</div></div>
    <div class="stat-card"><div class="stat-label">Punches</div><div class="stat-value">${t.punches}</div></div>
    <div class="stat-card"><div class="stat-label">Kicks</div><div class="stat-value">${t.kicks}</div></div>
    <div class="stat-card"><div class="stat-label">Mobility</div><div class="stat-value">${t.mobility} min</div></div>
  `;
  document.getElementById('consistencyGrid').innerHTML = `
    <div class="stat-card"><div class="stat-label">Current day</div><div class="stat-value">${state.currentDay}/7</div></div>
    <div class="stat-card"><div class="stat-label">Completed sessions</div><div class="stat-value">${state.completedSessions}</div></div>
    <div class="stat-card"><div class="stat-label">Unique dates</div><div class="stat-value">${uniqueCompletedDates()}</div></div>
    <div class="stat-card"><div class="stat-label">Context</div><div class="stat-value">${state.context === 'holiday' ? 'Holiday' : 'Home'}</div></div>
  `;
  document.getElementById('mindsetRule').textContent = 'If it feels too easy, say so in the review. This build is designed to push forward, not protect comfort.';
}
function renderLibrary(){
  const query = (state.librarySearch || '').trim().toLowerCase();
  const mods = MODULES.filter(m => !query || [m.title,m.area,m.mission,m.cues].join(' ').toLowerCase().includes(query));
  document.getElementById('librarySearch').value = state.librarySearch || '';
  document.getElementById('libraryList').innerHTML = mods.map(m => `<button class="library-item ${m.id===state.selectedModuleId?'active':''}" data-module-id="${m.id}"><strong>${m.title}</strong><div class="small-muted">${m.area} • Level ${m.level}</div></button>`).join('') || '<div class="card">No matches.</div>';
  const mod = mods.find(m => m.id === state.selectedModuleId) || getCurrentModule();
  document.getElementById('libTitle').textContent = mod.title;
  document.getElementById('libArea').textContent = mod.area;
  document.getElementById('libLevel').textContent = `Level ${mod.level}`;
  document.getElementById('libMission').textContent = mod.mission;
  document.getElementById('libLooks').textContent = mod.looks;
  document.getElementById('libFeels').textContent = mod.feels;
  document.getElementById('libSetup').textContent = mod.setup;
  document.getElementById('libCues').textContent = mod.cues;
  document.getElementById('libSteps').textContent = mod.steps;
  document.getElementById('libCoach').textContent = mod.coaching;
  document.getElementById('libStandard').textContent = mod.standards;
  document.getElementById('libVideo').innerHTML = mod.videoUrl ? `<a href="${mod.videoUrl}" target="_blank" rel="noopener noreferrer">Open video reference</a><div class="small-muted">${mod.video}</div>` : mod.video;
  document.getElementById('libImages').innerHTML = (mod.imageFiles || []).map((src, idx) => `<div class="library-image-card"><img src="${src}" alt="${mod.images?.[idx]||mod.title}" class="library-thumb" data-open-module="${mod.id}" data-open-index="${idx}"><div class="small-muted top-gap">${mod.images?.[idx]||''}</div></div>`).join('');
}
function renderJournal(){
  document.getElementById('journalBox').value = state.journal || '';
  document.getElementById('evidenceBox').value = state.evidence || '';
}
function renderSettings(){
  document.getElementById('storageText').textContent = `Saved locally in this browser under key ${STORAGE_KEY}. Current day: ${state.currentDay}. Completed sessions: ${state.completedSessions}.`;
}
function render(){
  document.body.classList.toggle('light', state.theme === 'light');
  renderTabs();
  renderHome();
  renderToday();
  renderPath();
  renderProgress();
  renderLibrary();
  renderJournal();
  renderSettings();
  saveState();
}
function completeSession(){
  const date = todayKey();
  state.completedSessions += 1;
  state.lastCompletedDate = date;
  state.completedDates.push(date);
  state.currentDay = state.currentDay >= 7 ? 1 : state.currentDay + 1;
  state.previewDay = state.currentDay;
  render();
  alert('Session completed. The current day has advanced.');
}
function resetData(){
  if(!confirm('Reset all local data?')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}
function initEvents(){
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab-btn');
    if(tab){ state.selectedTab = tab.dataset.tab; render(); return; }
    const item = e.target.closest('[data-module-id]');
    if(item){ state.selectedModuleId = item.dataset.moduleId; renderLibrary(); return; }
    const thumb = e.target.closest('[data-open-module]');
    if(thumb){ openModal(thumb.dataset.openModule, Number(thumb.dataset.openIndex)); return; }
    const guide = e.target.closest('.open-task-guide');
    if(guide){
      const mod = MODULE_TITLE_MAP[guide.dataset.taskTitle] || MODULES[0];
      state.selectedModuleId = mod.id;
      state.selectedTab = 'library';
      render();
      return;
    }
    if(e.target.id === 'completeSessionBtn'){ completeSession(); return; }
    if(e.target.id === 'saveReviewBtn'){ saveState(); alert('Review saved.'); return; }
    if(e.target.id === 'resetBtn'){ resetData(); return; }
    if(e.target.id === 'goTodayBtn'){ state.previewDay = state.currentDay; state.selectedTab='today'; render(); return; }
    if(e.target.id === 'openWalkBtn'){ state.selectedModuleId='walk'; state.selectedTab='library'; render(); return; }
    if(e.target.id === 'prevDayBtn'){ state.previewDay = state.previewDay <= 1 ? 7 : state.previewDay - 1; render(); return; }
    if(e.target.id === 'nextDayBtn'){ state.previewDay = state.previewDay >= 7 ? 1 : state.previewDay + 1; render(); return; }
    if(e.target.id === 'exportBtn'){
      const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'shaolin-path-v71-backup.json';
      a.click();
      URL.revokeObjectURL(url);
      return;
    }
    if(e.target.id === 'importBtn'){ document.getElementById('importFile').click(); return; }
    if(e.target.id === 'contextHomeBtn'){ state.context='home'; render(); return; }
    if(e.target.id === 'contextHolidayBtn'){ state.context='holiday'; render(); return; }
    if(e.target.id === 'themeDarkBtn'){ state.theme='dark'; render(); return; }
    if(e.target.id === 'themeLightBtn'){ state.theme='light'; render(); return; }
    if(e.target.id === 'modalBackdrop' || e.target.id === 'modalCloseBtn'){ closeModal(); return; }
    if(e.target.id === 'modalPrevBtn'){ state.modal.index = Math.max(0, state.modal.index - 1); renderModal(); return; }
    if(e.target.id === 'modalNextBtn'){
      const mod = MODULES.find(m => m.id === state.modal.moduleId) || getCurrentModule();
      state.modal.index = Math.min((mod.imageFiles?.length||1)-1, state.modal.index + 1);
      renderModal(); return;
    }
  });
  document.addEventListener('input', (e) => {
    if(e.target.dataset.readKey){
      const f = READINESS_FIELDS.find(x => x.key === e.target.dataset.readKey);
      state.readiness[e.target.dataset.readKey] = clamp(e.target.value, f.min, f.max, f.defaultValue);
      renderHome(); renderToday(); saveState(); return;
    }
    if(e.target.dataset.reviewKey){
      const f = REVIEW_FIELDS.find(x => x.key === e.target.dataset.reviewKey);
      state.review[e.target.dataset.reviewKey] = clamp(e.target.value, f.min, f.max, f.defaultValue);
      saveState(); return;
    }
    if(e.target.id === 'todayNotes'){ state.readiness.notes = e.target.value; saveState(); return; }
    if(e.target.id === 'reviewNotes'){ state.review.notes = e.target.value; saveState(); return; }
    if(e.target.id === 'journalBox'){ state.journal = e.target.value; saveState(); return; }
    if(e.target.id === 'evidenceBox'){ state.evidence = e.target.value; saveState(); return; }
    if(e.target.id === 'librarySearch'){ state.librarySearch = e.target.value; renderLibrary(); saveState(); return; }
  });
  document.getElementById('importFile').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if(!file) return;
    try {
      const txt = await file.text();
      const parsed = JSON.parse(txt);
      Object.assign(state, parsed);
      saveState();
      render();
      alert('Backup imported.');
    } catch(err) {
      alert('Import failed.');
    }
  });
}
loadState();
if(!state.previewDay) state.previewDay = state.currentDay;
initEvents();
render();
