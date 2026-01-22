"use client";

import { useState, useEffect } from "react";
import { Palette, Mouse, MousePointer, Type } from "lucide-react";

const colorThemes = [
  {
    name: "Golden Elegance",
    primary: "oklch(0.7 0.15 45)", // Golden
    accent: "oklch(0.8 0.12 50)",
    ring: "oklch(0.7 0.15 45)",
  },
  {
    name: "Mint Fresh",
    primary: "oklch(0.65 0.12 150)", // Light Green
    accent: "oklch(0.75 0.1 160)",
    ring: "oklch(0.65 0.12 150)",
  },
  {
    name: "Sunset Glow",
    primary: "oklch(0.7 0.15 35)", // Light Orange
    accent: "oklch(0.8 0.12 40)",
    ring: "oklch(0.7 0.15 35)",
  },
  {
    name: "Sunshine Bright",
    primary: "oklch(0.75 0.12 85)", // Light Yellow
    accent: "oklch(0.85 0.1 90)",
    ring: "oklch(0.75 0.12 85)",
  },
  {
    name: "Rose Blush",
    primary: "oklch(0.65 0.15 350)", // Rose Pink
    accent: "oklch(0.75 0.12 355)",
    ring: "oklch(0.65 0.15 350)",
  },
  {
    name: "Lavender Dream",
    primary: "oklch(0.7 0.12 280)", // Light Purple
    accent: "oklch(0.8 0.1 285)",
    ring: "oklch(0.7 0.12 280)",
  },
  {
    name: "Ocean Breeze",
    primary: "oklch(0.65 0.12 200)", // Light Blue
    accent: "oklch(0.75 0.1 210)",
    ring: "oklch(0.65 0.12 200)",
  },
  {
    name: "Coral Celebration",
    primary: "oklch(0.7 0.15 15)", // Coral
    accent: "oklch(0.8 0.12 20)",
    ring: "oklch(0.7 0.15 15)",
  },
];

const fontOptions = [
  { name: "Geist", value: "Geist, sans-serif", category: "default" },
  { name: "Poppins", value: "'Poppins', sans-serif", category: "sans" },
  { name: "Playball", value: "'Playball', cursive", category: "script" },
  { name: "Playfair", value: "'Playfair Display', serif", category: "serif" },
];

export function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [useMagicCursor, setUseMagicCursor] = useState(true);
  const [currentFont, setCurrentFont] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("butterfly-theme");
    const savedCursor = localStorage.getItem("butterfly-cursor");
    const savedFont = localStorage.getItem("butterfly-font");
    
    if (savedTheme) {
      setCurrentTheme(parseInt(savedTheme));
      applyTheme(parseInt(savedTheme));
    }
    if (savedCursor !== null) {
      setUseMagicCursor(JSON.parse(savedCursor));
      applyCursorSetting(JSON.parse(savedCursor));
    }
    if (savedFont) {
      setCurrentFont(parseInt(savedFont));
      applyFont(parseInt(savedFont));
    }
  }, []);

  const applyTheme = (themeIndex: number) => {
    const theme = colorThemes[themeIndex];
    const root = document.documentElement;
    
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--ring", theme.ring);
    root.style.setProperty("--sidebar-primary", theme.primary);
    root.style.setProperty("--sidebar-accent", theme.accent);
    root.style.setProperty("--sidebar-ring", theme.ring);
    
    // Trigger cursor color update
    window.dispatchEvent(new CustomEvent('themeChange', { detail: theme }));
  };

  const applyFont = (fontIndex: number) => {
    const font = fontOptions[fontIndex];
    
    // Clear all previous font styles first
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      (el as HTMLElement).style.fontFamily = '';
    });
    
    if (font.category === 'script') {
      // Playball: Only apply to headings and logo
      document.documentElement.style.setProperty('--font-heading', font.value);
      const headings = document.querySelectorAll('h1, h2, h3, .font-serif, .logo-text');
      headings.forEach(el => {
        (el as HTMLElement).style.fontFamily = font.value;
      });
    } else {
      // Other fonts: Apply to entire website
      document.documentElement.style.setProperty('--font-sans', font.value);
      document.documentElement.style.setProperty('--font-heading', font.value);
      document.body.style.fontFamily = font.value;
      
      // Apply to all text elements
      allElements.forEach(el => {
        (el as HTMLElement).style.fontFamily = font.value;
      });
    }
  };

  const applyCursorSetting = (magic: boolean) => {
    document.body.className = document.body.className.replace(/cursor-\w+/g, '');
    if (magic) {
      document.body.classList.add('cursor-auto');
    } else {
      document.body.classList.add('cursor-auto');
    }
  };

  const handleThemeChange = (themeIndex: number) => {
    setCurrentTheme(themeIndex);
    applyTheme(themeIndex);
    localStorage.setItem("butterfly-theme", themeIndex.toString());
    setIsOpen(false);
  };

  const handleCursorChange = (magic: boolean) => {
    setUseMagicCursor(magic);
    applyCursorSetting(magic);
    localStorage.setItem("butterfly-cursor", JSON.stringify(magic));
    window.dispatchEvent(new CustomEvent('cursorToggle', { detail: magic }));
  };

  const handleFontChange = (fontIndex: number) => {
    setCurrentFont(fontIndex);
    applyFont(fontIndex);
    localStorage.setItem("butterfly-font", fontIndex.toString());
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-card border border-border hover:bg-accent/10 transition-smooth"
        title="Change Theme Colors"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute -right-21 top-12 bg-popover border border-border rounded-lg shadow-2xl p-4 w-90 z-50" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px oklch(from var(--primary) l c h / 0.1)' }}>
          <div className="flex gap-2">
          <div>
          <h3 className="text-sm font-medium mb-3">Choose Theme</h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {colorThemes.map((theme, index) => (
              <button
                key={index}
                onClick={() => handleThemeChange(index)}
                className={`p-3 rounded-lg border transition-smooth text-left shadow-sm hover:shadow-md ${
                  currentTheme === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: theme.accent }}
                  />
                </div>
                <div className="text-[10px]">{theme.name}</div>
              </button>
            ))}
          </div>
          </div>
          
          <div>
          <h3 className="text-sm font-medium mb-3">Font Style</h3>
          <div className="grid grid-cols-1 gap-1 mb-4">
            {fontOptions.map((font, index) => (
              <button
                key={index}
                onClick={() => handleFontChange(index)}
                className={`p-2 rounded-lg border transition-smooth text-left text-xs ${
                  currentFont === index
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </button>
            ))}
          </div>
          </div>
          </div>
          
          
          <hr className="border-border mb-4" />
          
          <h3 className="text-sm font-medium mb-3">Cursor Style</h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleCursorChange(true)}
              className={`flex-1 p-2 rounded-lg border transition-smooth text-xs ${
                useMagicCursor
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Mouse className="w-4 h-4 mx-auto mb-1" />
              Magic
            </button>
            <button
              onClick={() => handleCursorChange(false)}
              className={`flex-1 p-2 rounded-lg border transition-smooth text-xs ${
                !useMagicCursor
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <MousePointer className="w-4 h-4 mx-auto mb-1" />
              Normal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}