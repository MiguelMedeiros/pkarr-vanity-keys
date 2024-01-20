# 🎩✨ PKarr Vanity Keys

Welcome to the whimsical world of PKarr Vanity Keys, where your cryptographic keys are not just secure, but stylish too! 🎩✨

This project is your first-class ticket to generating key pairs with a personal flair, powered by the magic of PKarr and a sprinkle of z32 for seasoning.

https://github.com/MiguelMedeiros/pkarr-vanity-keys/assets/5798170/e0710882-0a92-42ae-a1de-134fe97dde96

## 🚀 Getting Started

Before diving in, make sure you've got Node.js (version 12 or later) installed in your machine. It's the engine that powers our key-generating spaceship!

### Installation

Clone the repository to your local machine (trust me, it's as cool as it sounds):

```bash
git clone https://github.com/miguelmedeiros/pkarr-vanity-keys.git
```

Navigate to the project directory (this is where the magic happens):

```bash
cd pkarr-vanity-keys
```

Install the necessary dependencies (just some space fuel for our rocket):

```
npm install
```

### Usage

Ready to generate some fancy keys? Here's how you do it:

1. **Run the script with your desired vanity string and search mode.**
   The vanity string is what you want to appear in your keys.
   The search mode determines where in the key you want your vanity string to appear:

   - at the beginning (`start`),
   - at the end (`end`),
   - or anywhere (`anywhere`).

   ```bash
   npm run start
   ```

2. **Watch the magic happen!**
   The script will keep churning out keys, showing you:

   - The vanity string you're after.
   - The search mode in use.
   - How many attempts it's made.
   - The current timestamp (so you know you're not stuck in a time loop).
   - The shiny new public and secret keys it's generated.

   It won't stop until it finds a key pair that makes your vanity string proud!

---

And that's it! You're now the proud owner of some ultra-cool, PKarr-powered vanity keys. Go forth and secure the digital realm with style! 🚀✨

## 📚 To Dos

- [x] Search for vanity string at the beginning of the public key
- [x] Search for vanity string at the end of the public key
- [x] Search for vanity string in the entire key, not just the beginning
- [x] Added tests suite with Jest
- [x] Add a CLI interface

Remember, this project is all about learning and having fun with PKarr. So, don't hesitate to tinker around, break things, and make them even cooler. Happy coding! 🎩✨
