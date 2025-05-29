
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: HTMLElement | string;
          onFormReady?: () => void;
          onFormSubmitted?: () => void;
          onFormDefinitionFetchError?: (error: any) => void;
        }) => void;
      };
    };
  }
}

export {};
