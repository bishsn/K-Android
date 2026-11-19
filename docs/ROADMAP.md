# K-Android Roadmap

## Current milestone: Web shell prototype

- [x] Create the GitHub repository.
- [x] Add a responsive mobile-first control interface.
- [x] Add clear runtime status so the prototype is not mistaken for a real Android device.
- [ ] Publish the web shell with GitHub Pages.
- [ ] Evaluate a free or low-cost remote Android runtime.
- [ ] Connect the runtime to the interface using authenticated, encrypted access.
- [ ] Test APK installation and compatibility.
- [ ] Investigate AOSP customization and build requirements.

## Important technical boundary

The current project is a browser-based control interface. It does not contain Android, run APK files, provide a Linux kernel, or emulate a device. A real Android runtime requires a compatible host or physical Android hardware. iOS Safari can be used as the remote screen/controller, but cannot replace the host machine.

## Principles

- Prefer free and open-source components.
- Do not expose remote desktop or shell ports publicly without authentication and encryption.
- Never store passwords, API keys, or private tokens in this repository.
- Verify actual Android compatibility before describing a feature as working.
