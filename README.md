# 🧠 thot

**A fully free, open-source AI assistant with ZERO restrictions.**

thot is a fork of Pluely with all license restrictions removed. Use your own API keys, get responses in any language, customize everything - no paywalls, no locked features, no bullshit.

## ✨ Features (ALL UNLOCKED!)

- 🌍 **Any Output Language** - French, German, Spanish, whatever you want
- 📝 **Custom Response Length** - Short, medium, or detailed responses
- 📸 **Screenshot & Selection Mode** - Capture full screen or select areas
- ⌨️ **Full Shortcut Customization** - Change any keyboard shortcut
- 🎤 **Voice Input** - Speech-to-text with your own STT provider
- 📎 **File Attachments** - Attach images and files to conversations
- 🔄 **Auto-scroll** - Toggle automatic scrolling on/off
- 🪟 **Window Dragging** - Move the window anywhere
- 🤖 **Any AI Provider** - Use OpenAI, Anthropic, OpenRouter, or any custom provider

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Rust](https://www.rust-lang.org/tools/install)
- [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

### Installation

\`\`\`bash
# Clone the repo
git clone https://github.com/adrbn/thot.git
cd thot/pluely

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Build for production
npm run tauri build
\`\`\`

## ⚙️ Configuration

### Setting up AI Providers

1. Open thot
2. Go to Settings → AI Providers
3. Add your API keys for:
   - OpenAI (ChatGPT)
   - Anthropic (Claude)
   - OpenRouter
   - Or add a custom provider via cURL

### Setting up Speech-to-Text

1. Go to Settings → Speech-to-Text
2. Configure your preferred STT provider:
   - OpenAI Whisper
   - Deepgram
   - Assembly AI
   - Or add a custom STT provider

### Response Settings

Go to **Response Settings** to configure:
- **Language**: Select any language for AI responses (French, German, Spanish, etc.)
- **Response Length**: Choose between concise, balanced, or detailed responses
- **Auto-scroll**: Enable/disable automatic scrolling during responses

## 🔧 Keyboard Shortcuts

All shortcuts are fully customizable! Go to Settings → Shortcuts to change them.

Default shortcuts (macOS):
- \`Cmd + Shift + Space\` - Toggle window
- \`Cmd + Shift + S\` - Take screenshot
- \`Cmd + Shift + M\` - Start voice recording
- \`Cmd + Shift + Arrow\` - Move window

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

GPL-3.0 License - Free as in freedom!

## 🙏 Credits

Based on [Pluely](https://github.com/iamsrikanthnani/pluely) by Srikanth Nani.

---

**thot** - Because AI assistants should be free and flexible. 🆓
