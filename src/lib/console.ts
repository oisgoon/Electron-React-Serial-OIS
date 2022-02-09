const customConsole = window.console;

interface CustomConsole {
  log: (...argument: unknown[]) => void;
  warn: (...argument: unknown[]) => void;
  error: (...argument: unknown[]) => void;
}

const Console: CustomConsole = {
  log: (...message: unknown[]) => {
    customConsole.log(...message);
  },
  warn: (...message: unknown[]) => {
    customConsole.warn(...message);
  },
  error: (...message: unknown[]) => {
    customConsole.error(...message);
  },
};

export default Console;
