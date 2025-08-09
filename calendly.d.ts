
interface Window {
  Calendly?: {
    initPopupWidget: (options: {
      url: string;
      prefill?: {
        name?: string;
        email?: string;
        customAnswers?: Record<string, string>;
      };
    }) => void;
    // If you want to add showPopupWidget (but may not exist)
    showPopupWidget?: (url: string) => void;
  };
}