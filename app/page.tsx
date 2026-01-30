const dailyMeals = [
  {
    title: "Upon Waking",
    time: "07:00",
    details: [
      "500 ml water with lemon",
      "Collagen supplement (continue daily)"
    ],
    rationale:
      "Rehydrates after overnight fast and supports connective tissue repair."
  },
  {
    title: "Breakfast",
    time: "07:30",
    menu: [
      "Greek yogurt parfait (250 g yogurt, berries, chia, walnuts)",
      "2 boiled eggs"
    ],
    details: [
      "Aim for 45 g protein and 55 g slow carbs.",
      "Add turmeric or cinnamon for anti-inflammatory support."
    ],
    rationale: "High protein kick-starts muscle repair and maintains lean mass."
  },
  {
    title: "Mid-Morning Fuel",
    time: "10:00",
    menu: ["Protein shake (25 g whey or plant protein)", "1 medium kiwi"],
    details: [
      "Optional: blend with spinach for extra micronutrients.",
      "Keep hydration steady (goal 750 ml water by now)."
    ],
    rationale: "Prevents long gaps without protein to aid collagen remodeling."
  },
  {
    title: "Lunch",
    time: "13:00",
    menu: [
      "Herb-roasted salmon (150 g)",
      "Quinoa (1 cup cooked)",
      "Roasted veggies (broccoli, bell peppers, carrots)"
    ],
    details: [
      "Total protein ≈ 40 g; carbs ≈ 60 g; healthy fats ≈ 18 g.",
      "Add a leafy greens side salad with olive oil."
    ],
    rationale:
      "Omega-3 rich meal to reduce inflammation and supply complex carbs for afternoon rehab."
  },
  {
    title: "Pre-PT Snack (if session)",
    time: "15:30",
    menu: [
      "Rice cakes (2) with almond butter (1 tbsp)",
      "Optional espresso for alertness"
    ],
    details: [
      "Light carb + fat to fuel therapy without heaviness.",
      "Schedule PT-specific hydration: +350 ml water."
    ],
    rationale: "Supports energy for therapy without causing GI distress."
  },
  {
    title: "Dinner",
    time: "19:00",
    menu: [
      "Lean chicken thigh or tofu stir-fry (150 g protein portion)",
      "Brown rice or soba noodles (1 cup cooked)",
      "Side of steamed greens"
    ],
    details: [
      "Focus on colorful vegetables (bok choy, snap peas, carrots).",
      "Season with ginger and garlic for circulation."
    ],
    rationale:
      "Moderate carbs replenish glycogen while protein supports overnight recovery."
  },
  {
    title: "Evening Wind Down",
    time: "21:00",
    menu: ["Chamomile or tart cherry tea"],
    details: [
      "If hungry, add cottage cheese (150 g) with flaxseed.",
      "Light ankle mobility routine and deep breathing."
    ],
    rationale: "Promotes sleep quality and low-glycemic protein before bed."
  }
];

const rehabFocus = [
  {
    day: "Monday",
    sessions: [
      "Morning: Seated upper-body strength (dumbbells or resistance bands) 30 min.",
      "Evening: PT-guided Achilles protocol."
    ],
    notes:
      "Emphasize controlled calf raises within boot limits, plus glute activation."
  },
  {
    day: "Tuesday",
    sessions: [
      "Morning: Core stability (dead bugs, bird-dog), 20 min.",
      "Afternoon: Stationary bike with low resistance, 15 min, pain-free ROM."
    ],
    notes: "Include ankle alphabet drills twice daily."
  },
  {
    day: "Wednesday",
    sessions: [
      "Morning: Upper-body circuit (push, pull, press) sitting or supported.",
      "PT session: Manual therapy, assisted gait training."
    ],
    notes: "Track swelling before and after sessions to adjust ice/elevation."
  },
  {
    day: "Thursday",
    sessions: [
      "Morning: Mobility and breathing work (cat-cow, thoracic rotations).",
      "Afternoon: Pool walking or deep-water running (if cleared)."
    ],
    notes:
      "Use compression sleeve during upright periods once boot is removed."
  },
  {
    day: "Friday",
    sessions: [
      "Morning: Seated strength training (leg extensions, hamstring curls).",
      "PT session: Progress eccentric calf loading as tolerated."
    ],
    notes: "Finish with contrast therapy (warm soak + cold pack) for 10 min."
  },
  {
    day: "Saturday",
    sessions: [
      "Late morning: Gentle outdoor walk with boot, 20-30 min, focus on posture.",
      "Evening: Guided stretching and foam rolling (avoid Achilles pressure)."
    ],
    notes:
      "Keep step count moderate; prioritize elevation afterward to limit swelling."
  },
  {
    day: "Sunday",
    sessions: [
      "Active recovery: Mobility flow, light core activation, diaphragmatic breathing.",
      "Optional meditation or mindfulness 15 min."
    ],
    notes: "Meal prep for the week; check-in on progress journal."
  }
];

const hydrationTargets = [
  {
    label: "Morning",
    amount: "1.0 L",
    focus: "Water + electrolytes if sweating during PT."
  },
  {
    label: "Afternoon",
    amount: "1.25 L",
    focus: "Sip through PT sessions; include herbal tea."
  },
  {
    label: "Evening",
    amount: "0.75 L",
    focus: "Taper intake 90 minutes before bed to protect sleep."
  }
];

const supplements = [
  {
    name: "Collagen + Vitamin C",
    timing: "Morning with breakfast",
    reason:
      "Vitamin C cofactor boosts collagen synthesis; maintain current collagen habit."
  },
  {
    name: "Omega-3 (1-2 g EPA/DHA)",
    timing: "With lunch",
    reason: "Supports inflammation control and cardiovascular health."
  },
  {
    name: "Vitamin D3 (2000 IU) + K2",
    timing: "With the largest fat-containing meal",
    reason: "Optimizes bone healing and immune support."
  },
  {
    name: "Magnesium glycinate (200-300 mg)",
    timing: "Evening",
    reason: "Improves muscle relaxation and sleep quality."
  }
];

const totalDailyTargets = {
  calories: "2400-2500 kcal",
  protein: "160 g (spread across meals)",
  carbohydrates: "230-250 g (prioritize complex sources)",
  fats: "80-85 g (focus on omega-3 and mono-unsaturated fats)",
  fiber: "30-35 g from vegetables, fruits, and whole grains"
};

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Daily Rehab &amp; Nutrition Plan</h1>
        <p>
          Tailored for a 41-year-old, 1.83 m, 88-90 kg individual 11 weeks post
          Achilles tendon repair. Focus on gradual load progression, lean mass
          preservation, and anti-inflammatory nutrition.
        </p>
        <div className="targets">
          <h2>Daily Macros &amp; Micronutrient Targets</h2>
          <ul>
            <li>
              <strong>Calories:</strong> {totalDailyTargets.calories}
            </li>
            <li>
              <strong>Protein:</strong> {totalDailyTargets.protein}
            </li>
            <li>
              <strong>Carbohydrates:</strong> {totalDailyTargets.carbohydrates}
            </li>
            <li>
              <strong>Fats:</strong> {totalDailyTargets.fats}
            </li>
            <li>
              <strong>Fiber:</strong> {totalDailyTargets.fiber}
            </li>
          </ul>
        </div>
      </section>

      <section className="grid two">
        {dailyMeals.map((meal) => (
          <article key={meal.title} className="card">
            <div className="card-header">
              <h3>{meal.title}</h3>
              <span>{meal.time}</span>
            </div>
            {meal.menu && (
              <ul className="menu">
                {meal.menu.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <ul className="details">
              {meal.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p className="rationale">
              <strong>Why:</strong> {meal.rationale}
            </p>
          </article>
        ))}
      </section>

      <section className="rehab">
        <h2>Weekly Rehab &amp; Activity Structure</h2>
        <div className="grid three">
          {rehabFocus.map((day) => (
            <article key={day.day} className="card rehab-card">
              <h3>{day.day}</h3>
              <ul className="sessions">
                {day.sessions.map((session) => (
                  <li key={session}>{session}</li>
                ))}
              </ul>
              <p className="notes">
                <strong>Notes:</strong> {day.notes}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="hydration">
        <h2>Hydration Rhythm</h2>
        <div className="grid three">
          {hydrationTargets.map((target) => (
            <article key={target.label} className="card hydration-card">
              <h3>{target.label}</h3>
              <p className="amount">{target.amount}</p>
              <p>{target.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="supplements">
        <h2>Supplement Timing</h2>
        <div className="grid two">
          {supplements.map((item) => (
            <article key={item.name} className="card supplement-card">
              <h3>{item.name}</h3>
              <p className="timing">
                <strong>Timing:</strong> {item.timing}
              </p>
              <p>{item.reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tips">
        <h2>Recovery Checklist</h2>
        <ul>
          <li>
            Track swelling and discomfort daily; adjust elevation and icing
            accordingly.
          </li>
          <li>
            Keep a simple log of pain levels, sleep quality, and exercise
            compliance to share with your therapist.
          </li>
          <li>
            Once cleared to walk without the boot, shift focus to gait mechanics
            and gradual step count increases (10% per week).
          </li>
          <li>
            Prioritize 7.5-8 hours of sleep; dim lights an hour before bed to
            support deep sleep.
          </li>
          <li>
            Meal prep on Sundays to stay consistent and reduce weekday decision
            fatigue.
          </li>
        </ul>
      </section>
    </main>
  );
}
