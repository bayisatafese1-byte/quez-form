
const questions = [
  {
    q: "What is sensation?",
    options: [
      "The process of interpreting experiences",
      "Stimulation of receptor cells that sends nerve impulses to the brain",
      "The ability to remember past events",
      "The process of making decisions"
    ],
    answer: 1,
    explanation: "Sensation begins when receptor cells are stimulated and send nerve impulses to the brain."
  },
  {
    q: "What is perception?",
    options: [
      "Organizing and interpreting sensations into meaningful patterns",
      "Detection of energy only",
      "Reduction of sensory responsiveness",
      "The minimum intensity of a stimulus"
    ],
    answer: 0,
    explanation: "Perception is the process whereby the brain interprets sensations, giving them order and meaning."
  },
  {
    q: "Which is an example of sensation?",
    options: [
      "Recognizing a familiar melody",
      "Identifying a face",
      "Detecting the pitch of a tone",
      "Interpreting letters as a word"
    ],
    answer: 2,
    explanation: "Pitch of tone is an example of sensation."
  },
  {
    q: "A stimulus is best described as:",
    options: [
      "A form of energy that can affect a sensory organ",
      "A remembered image",
      "A learned response",
      "A perceptual illusion"
    ],
    answer: 0,
    explanation: "A stimulus is energy, such as light or sound waves, that affects sensory organs."
  },
  {
    q: "Why are sensation and perception difficult to separate in everyday life?",
    options: [
      "They occur only during sleep",
      "The brain interprets sensory input as it receives it",
      "Perception happens before sensation",
      "They use completely unrelated systems"
    ],
    answer: 1,
    explanation: "The brain automatically interprets sensations as soon as it receives them."
  },
  {
    q: "The minimum level of stimulation detectable 50 percent of the time is called:",
    options: [
      "Difference threshold",
      "Absolute threshold",
      "Sensory adaptation",
      "Response bias"
    ],
    answer: 1,
    explanation: "The absolute threshold is the minimum stimulation detectable 50 percent of the time."
  },
  {
    q: "The minimum change in stimulation detectable 50 percent of the time is the:",
    options: [
      "Absolute threshold",
      "Difference threshold",
      "Sensory constancy",
      "Retinal disparity"
    ],
    answer: 1,
    explanation: "The difference threshold is the minimum change in stimulation detectable 50 percent of the time."
  },
  {
    q: "The just noticeable difference (JND) refers to:",
    options: [
      "The minimum change in stimulation a person can detect",
      "The first stimulus ever detected",
      "A constant response to all stimuli",
      "The inability to recognize faces"
    ],
    answer: 0,
    explanation: "JND refers to the minimum detectable difference in stimulation."
  },
  {
    q: "According to Weber's law, the change needed to notice a difference is:",
    options: [
      "Always exactly one unit",
      "A constant fraction of the original stimulus",
      "Unrelated to the original stimulus",
      "The same for every sensory experience"
    ],
    answer: 1,
    explanation: "Weber's law states that the JND is a constant fraction of the original stimulus."
  },
  {
    q: "A low-intensity sound is presented 30 times and detected 15 times. This intensity represents the:",
    options: [
      "Difference threshold",
      "Absolute threshold",
      "Sensory adaptation",
      "Convergence"
    ],
    answer: 1,
    explanation: "Detecting a stimulus 15 out of 30 times represents the absolute threshold in the chapter's example."
  },
  {
    q: "What is response bias?",
    options: [
      "The tendency of the eyes to turn inward",
      "How ready a person is to report the presence of a stimulus",
      "The ability to see depth with one eye",
      "The grouping of similar objects"
    ],
    answer: 1,
    explanation: "Response bias is a person's readiness to report the presence of a particular stimulus."
  },
  {
    q: "Sensory adaptation is:",
    options: [
      "Increasing sensitivity to every stimulus",
      "Decreasing responsiveness to an unchanging stimulus",
      "Interpreting a stimulus as a meaningful pattern",
      "Detecting a change in stimulus intensity"
    ],
    answer: 1,
    explanation: "Sensory adaptation refers to decreased responsiveness to constant stimulation."
  },
  {
    q: "Which situation best illustrates sensory adaptation?",
    options: [
      "A sudden loud bang makes you jump",
      "After a while, you no longer notice a room's smell",
      "You recognize a friend's voice",
      "A distant object appears smaller"
    ],
    answer: 1,
    explanation: "A constant smell may become less noticeable over time."
  },
  {
    q: "Why is sensory adaptation useful?",
    options: [
      "It prevents all pain",
      "It helps us ignore unchanging stimulation and notice changes",
      "It makes every stimulus equally noticeable",
      "It eliminates perception"
    ],
    answer: 1,
    explanation: "Adaptation helps us focus on changes in stimulation."
  },
  {
    q: "According to the chapter, people do not completely adapt to:",
    options: [
      "Mild background sounds",
      "Extremely intense sensations such as severe pain or freezing cold",
      "The ordinary feel of clothing",
      "A familiar room odor"
    ],
    answer: 1,
    explanation: "Extreme sensations such as severe pain and freezing cold are not completely adapted to."
  },
  {
    q: "Selective attention is the process that:",
    options: [
      "Selects certain inputs for attention while ignoring others",
      "Measures distance between objects",
      "Keeps perceived size constant",
      "Detects minimum stimulus intensity"
    ],
    answer: 0,
    explanation: "Selective perception divides the surrounding information into focus and margin."
  },
  {
    q: "The part of the perceptual field receiving focused attention is called the:",
    options: [
      "Margin",
      "Focus",
      "Stimulus",
      "Threshold"
    ],
    answer: 1,
    explanation: "The focus is the part of the perceptual field receiving attention."
  },
  {
    q: "Which stimulus characteristic makes an item more likely to enter the focus of attention?",
    options: [
      "Small size and low brightness",
      "Being stationary only",
      "Large size and bright intensity",
      "Being hidden from view"
    ],
    answer: 2,
    explanation: "Bigger and brighter items are more likely to enter the focus."
  },
  {
    q: "Which is another characteristic that may attract attention?",
    options: [
      "Novelty or contrast",
      "Complete lack of movement",
      "Being identical to every other stimulus",
      "Being outside the sensory field"
    ],
    answer: 0,
    explanation: "Novel or contrasting stimuli are more likely to attract attention."
  },
  {
    q: "The psychological state of the perceiver can influence attention through:",
    options: [
      "Expectancy and needs",
      "Retinal size alone",
      "Only the shape of the lens",
      "The law of closure only"
    ],
    answer: 0,
    explanation: "Set or expectancy and needs influence selective perception."
  },
  {
    q: "In figure-ground perception, the figure is:",
    options: [
      "The less distinct background",
      "The object or pattern that stands out from the background",
      "Always the largest object",
      "A stimulus below threshold"
    ],
    answer: 1,
    explanation: "The figure stands out clearly from the background or ground."
  },
  {
    q: "The Gestalt idea that the whole is more than the sum of its parts emphasizes:",
    options: [
      "Sensory fatigue",
      "Perceptual organization",
      "Absolute threshold",
      "Response bias"
    ],
    answer: 1,
    explanation: "Gestalt principles explain how we organize sensory information into meaningful forms."
  },
  {
    q: "The law of proximity states that items close together tend to be perceived as:",
    options: [
      "Unrelated",
      "Belonging together",
      "Farther away",
      "Different in brightness"
    ],
    answer: 1,
    explanation: "Proximity groups items that are near one another."
  },
  {
    q: "The law of similarity states that items that look alike tend to be:",
    options: [
      "Grouped together",
      "Seen as farther away",
      "Ignored by attention",
      "Perceived as smaller"
    ],
    answer: 0,
    explanation: "Similarity causes similar-looking items to be perceived as a group."
  },
  {
    q: "The law of closure involves:",
    options: [
      "Filling in gaps to perceive a complete form",
      "Seeing parallel lines converge",
      "Detecting the first faint stimulus",
      "Adapting to a constant smell"
    ],
    answer: 0,
    explanation: "Closure is the tendency to perceive incomplete figures as complete."
  },
  {
    q: "The law of continuation is the tendency to:",
    options: [
      "Perceive a line as continuing smoothly in its direction",
      "Group only objects of the same color",
      "See every object as symmetrical",
      "Ignore moving objects"
    ],
    answer: 0,
    explanation: "Continuation organizes elements into smooth, continuous patterns."
  },
  {
    q: "The law of symmetry or good figure organizes elements into:",
    options: [
      "Balanced or symmetrical forms",
      "Random unrelated points",
      "Only moving objects",
      "A sequence of sounds"
    ],
    answer: 0,
    explanation: "Symmetry or good figure helps organize elements into balanced forms."
  },
  {
    q: "Depth perception is the ability to:",
    options: [
      "Judge the distance of objects",
      "Detect color brightness",
      "Remember a visual scene",
      "Notice a change in sound"
    ],
    answer: 0,
    explanation: "Depth perception involves recognizing how distant objects are."
  },
  {
    q: "Binocular depth cues require:",
    options: [
      "Only one eye",
      "Information from both eyes",
      "No visual input",
      "Only hearing"
    ],
    answer: 1,
    explanation: "Binocular cues depend on information from both eyes."
  },
  {
    q: "Retinal disparity is:",
    options: [
      "The difference between the images on the two retinas",
      "The change in lens shape",
      "The brightness of an object",
      "The movement of an object across the visual field"
    ],
    answer: 0,
    explanation: "Retinal disparity refers to the difference between the images received by the two eyes."
  },
  {
    q: "When an object gets closer, retinal disparity generally:",
    options: [
      "Decreases to zero",
      "Becomes greater",
      "Remains exactly the same",
      "Turns into sensory adaptation"
    ],
    answer: 1,
    explanation: "The difference between the two retinal images generally increases as an object gets closer."
  },
  {
    q: "Convergence refers to:",
    options: [
      "The eyes turning inward to focus on an object",
      "The lens becoming flatter in bright light",
      "The grouping of nearby objects",
      "The fading of a constant smell"
    ],
    answer: 0,
    explanation: "Convergence is the inward turning of the eyes when focusing on a nearby object."
  },
  {
    q: "Which is a monocular depth cue?",
    options: [
      "Retinal disparity",
      "Convergence",
      "Motion parallax",
      "Interaction of both eyes"
    ],
    answer: 2,
    explanation: "Motion parallax is one of the monocular depth cues discussed in the chapter."
  },
  {
    q: "Accommodation as a depth cue involves:",
    options: [
      "A change in the shape of the lens to focus an image",
      "The difference between two retinal images",
      "Objects overlapping one another",
      "The brightness of a white surface"
    ],
    answer: 0,
    explanation: "Accommodation involves changes in the lens to focus an image."
  },
  {
    q: "Interposition indicates that:",
    options: [
      "An object overlapping another is perceived as closer",
      "A brighter object is always farther away",
      "Two similar objects are grouped",
      "A sound has reached its threshold"
    ],
    answer: 0,
    explanation: "When one object overlaps another, the overlapping object is perceived as nearer."
  },
  {
    q: "Linear perspective is illustrated by:",
    options: [
      "Parallel railroad tracks appearing to converge in the distance",
      "A smell becoming less noticeable",
      "Two eyes turning inward",
      "A line appearing longer due to arrowheads"
    ],
    answer: 0,
    explanation: "Parallel lines appear to converge as they extend into the distance."
  },
  {
    q: "Aerial perspective relies on the observation that distant objects often appear:",
    options: [
      "Clearer than nearby objects",
      "Hazier than nearby objects",
      "Larger than nearby objects",
      "Brighter in every condition"
    ],
    answer: 1,
    explanation: "Aerial perspective is a pictorial depth cue involving the hazier appearance of distant objects."
  },
  {
    q: "According to the chapter, our perception of the world generally remains stable despite changes in:",
    options: [
      "The observer's location, distance, and perspective",
      "The names of objects",
      "The language we speak",
      "Our memories only"
    ],
    answer: 0,
    explanation: "The chapter describes perception as remaining constant despite changes in location, distance, and perspective."
  },
  {
    q: "The moon illusion described in the chapter is that the moon appears:",
    options: [
      "Smaller at the horizon",
      "Larger at the horizon than overhead",
      "Different in color every night",
      "Closer when it is overhead"
    ],
    answer: 1,
    explanation: "The moon appears larger at the horizon even though its retinal image is the same size."
  },
  {
    q: "In the Müller-Lyer illusion, lines that are equal in length:",
    options: [
      "Always look equal",
      "May appear to be different lengths",
      "Cannot be measured",
      "Become examples of sensory adaptation"
    ],
    answer: 1,
    explanation: "The Müller-Lyer illusion makes equal-length lines appear to differ in length."
  }
];

const form = document.getElementById("examForm");
const questionsContainer = document.getElementById("questions");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");

let submitted = false;

function renderQuestions() {
  questionsContainer.innerHTML = "";

  questions.forEach((item, index) => {
    const section = document.createElement("section");
    section.className = "question";
    section.id = `question-${index}`;

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${item.q}`;
    section.appendChild(heading);

    item.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${index}`;
      radio.value = optionIndex;

      radio.addEventListener("change", updateProgress);

      label.appendChild(radio);
      label.appendChild(
        document.createTextNode(
          `${String.fromCharCode(65 + optionIndex)}. ${option}`
        )
      );

      section.appendChild(label);
    });

    questionsContainer.appendChild(section);
  });

  updateProgress();
}

function updateProgress() {
  const answered = questions.filter((_, index) =>
    document.querySelector(`input[name="question-${index}"]:checked`)
  ).length;

  progressText.textContent = `${answered} / ${questions.length} answered`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (submitted) return;

  const answered = questions.filter((_, index) =>
    document.querySelector(`input[name="question-${index}"]:checked`)
  ).length;

  if (answered < questions.length) {
    const confirmSubmit = confirm(
      `You answered ${answered} of ${questions.length} questions. Submit anyway?`
    );

    if (!confirmSubmit) return;
  }

  let score = 0;

  questions.forEach((item, index) => {
    const selected = document.querySelector(
      `input[name="question-${index}"]:checked`
    );

    const section = document.getElementById(`question-${index}`);
    const options = section.querySelectorAll(".option");

    options.forEach((label, optionIndex) => {
      const radio = label.querySelector("input");
      radio.disabled = true;

      if (optionIndex === item.answer) {
        label.classList.add("correct");
      }

      if (selected && Number(selected.value) === optionIndex &&
          optionIndex !== item.answer) {
        label.classList.add("incorrect");
      }
    });

    if (selected && Number(selected.value) === item.answer) {
      score++;
    }

    const explanation = document.createElement("div");
    explanation.className = "explanation";
    explanation.textContent =
      `Correct answer: ${String.fromCharCode(65 + item.answer)}. ` +
      item.options[item.answer] + " — " + item.explanation;

    section.appendChild(explanation);
  });

  submitted = true;

  const percentage = Math.round((score / questions.length) * 100);

  document.getElementById("score").textContent =
    `Your score: ${score} / ${questions.length} (${percentage}%)`;

  let message;

  if (percentage >= 80) {
    message = "Excellent work! You have a strong understanding of the chapter.";
  } else if (percentage >= 60) {
    message = "Good effort! Review the explanations to improve.";
  } else {
    message = "Keep studying. Review Chapter Two and try again.";
  }

  document.getElementById("message").textContent = message;
  result.classList.remove("hidden");

  document.getElementById("reviewBtn").onclick = function() {
    document.getElementById("question-0").scrollIntoView({
      behavior: "smooth"
    });
  };

  document.getElementById("tryAgainBtn").onclick = resetExam;

  result.scrollIntoView({ behavior: "smooth" });
});

function resetExam() {
  submitted = false;
  form.reset();
  result.classList.add("hidden");
  renderQuestions();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("resetBtn").addEventListener("click", function() {
  if (confirm("Are you sure you want to reset the exam?")) {
    resetExam();
  }
});

renderQuestions();
