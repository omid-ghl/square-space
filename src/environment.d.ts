declare global {
  namespace NodeJS {
    interface ProcessEnv {
      P_D: string;
    }
  }
}

export {};
