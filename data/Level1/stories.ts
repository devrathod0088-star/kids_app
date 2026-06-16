export type Story = {
  id: number;
  title: string;
  emoji: string;
  story: string;
  lesson: string;
  voice?: string;
};

export const STORIES: Story[] = [
  {
    id: 1,
    title: "🐰 The Clever Rabbit",
    emoji: "🐰",
    story:
      "A rabbit was very fast. One day he raced a tortoise. The rabbit was sure he would win, so he slept. The tortoise kept walking slowly and won the race.",
    lesson: "Slow and steady wins the race 🏆",
    voice:
      "The rabbit was fast but lazy. The tortoise was slow but steady. Slow and steady wins the race.",
  },

  {
    id: 2,
    title: "🦁 The Brave Lion",
    emoji: "🦁",
    story:
      "A lion caught a small mouse. The mouse promised to help one day. Later, the lion got trapped, and the mouse helped him escape.",
    lesson: "Kindness is powerful ❤️",
    voice:
      "The lion helped the mouse, and the mouse helped the lion. Kindness always comes back.",
  },

  {
    id: 3,
    title: "🐦 The Little Bird",
    emoji: "🐦",
    story:
      "A small bird wanted to fly. It fell many times but never gave up. Finally, it learned to fly high in the sky.",
    lesson: "Never give up 💪",
    voice:
      "The bird tried again and again. Finally it flew high in the sky.",
  },

  {
    id: 4,
    title: "🐢 The Turtle Journey",
    emoji: "🐢",
    story:
      "A turtle slowly walked to the river. It did not rush and stayed safe. It reached its home happily.",
    lesson: "Patience brings success 🌿",
    voice:
      "The turtle was slow but safe and happy.",
  },

  {
    id: 5,
    title: "🐶 The Loyal Dog",
    emoji: "🐶",
    story:
      "A little dog stayed beside its owner every day. It protected the house and showed love to everyone.",
    lesson: "Loyalty is a wonderful quality 💙",
    voice:
      "The dog was loyal and kind. Everyone loved the dog.",
  },

  {
    id: 6,
    title: "🐘 The Helpful Elephant",
    emoji: "🐘",
    story:
      "An elephant saw animals struggling to cross a river. The elephant helped them safely cross.",
    lesson: "Helping others makes the world better 🤝",
    voice:
      "The elephant was strong and kind. It helped all its friends.",
  },
];