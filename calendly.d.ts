
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
  };
}