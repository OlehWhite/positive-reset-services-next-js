// global.d.ts
declare global {
  interface Window {
    gtranslateSettings: {
      default_language: string;
      languages: string[];
      wrapper_selector: string;
      flag_size: number;
      flag_style: string;
      alt_flags: any;
    };
  }
}

export {};
