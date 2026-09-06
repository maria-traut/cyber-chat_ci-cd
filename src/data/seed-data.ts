export const usernames = [
  "nightowl",
  "cyberpunk_dev",
  "matrixrunner",
  "ghostshell",
  "byte_wanderer",
  "neonrider",
];

export const threadData = [
  {
    title: "Best VPN for staying anonymous?",
    subtitle: "Looking for recommendations",
    body: "I've been comparing a few providers but can't decide. What do you all use and why?",
    comments: [
      "I've had good experience with ProtonVPN, solid no-logs policy.",
      "Depends on your threat model honestly. What are you protecting against?",
      "Mullvad is great if you value simplicity and anonymous payment options.",
      "Just avoid free VPNs, they usually sell your data anyway.",
    ],
  },
  {
    title: "First time setting up a home server",
    subtitle: "Any beginner tips?",
    body: "Got an old PC lying around and want to turn it into a home server. Where do I start?",
    comments: [
      "Start with something lightweight like a small Linux distro, then add Docker.",
      "Definitely set up a UPS, power outages can corrupt your data.",
      "I'd recommend TrueNAS if storage is your main goal.",
    ],
  },
  {
    title: "Thoughts on the new encryption standard?",
    subtitle: "Post-quantum cryptography is coming",
    body: "With quantum computers advancing, how worried should we be about current encryption?",
    comments: [
      "NIST already has post-quantum candidates standardized, migration just takes time.",
      "Most sensitive data has a shelf life shorter than quantum computers becoming practical.",
      "Harvest now, decrypt later is the real concern for long-term secrets.",
      "Worth reading up on lattice-based cryptography if you're curious.",
      "This is way overhyped for the average user's threat model.",
    ],
  },
  {
    title: "Cyberpunk aesthetic in web design",
    subtitle: "Neon, glitch effects, and monospace fonts",
    body: "Working on a personal project with a cyberpunk theme. Any design resources you'd recommend?",
    comments: [
      "Check out Dribbble, there's a whole community around this look.",
      "CSS glitch effects are surprisingly easy with a few keyframe animations.",
      "Don't overdo the neon, readability still matters.",
    ],
  },
  {
    title: "How do you handle password management?",
    subtitle: "Curious about everyone's setup",
    body: "I still see people reusing passwords everywhere. What's your system?",
    comments: [
      "Bitwarden here, open source and works across all my devices.",
      "KeePass with a synced vault file, old school but reliable.",
      "Passkeys are honestly the future, slowly switching everything over.",
      "I use a hardware key for anything sensitive plus a password manager for the rest.",
      "Whatever you use, just enable 2FA everywhere you can.",
    ],
  },
  {
    title: "Is self-hosting email worth it in 2026?",
    subtitle: "Weighing the pros and cons",
    body: "Thinking about ditching Gmail and self-hosting my email. Is it still realistic these days?",
    comments: [
      "Deliverability is the real challenge, big providers flag self-hosted mail easily.",
      "It's a great learning project but not something I'd rely on daily.",
      "I run my own and it's fine as long as you keep SPF, DKIM, and DMARC configured properly.",
    ],
  },
  {
    title: "Favorite terminal setup?",
    subtitle: "Show off your dotfiles",
    body: "Always curious what shell, prompt, and tools people are running these days.",
    comments: [
      "Zsh with Starship prompt, can't go back to anything else.",
      "Neovim plus tmux covers basically all my daily workflow.",
      "Fish shell for the built-in autosuggestions, way less config needed.",
      "Alacritty as terminal emulator, it's blazing fast.",
    ],
  },
];
