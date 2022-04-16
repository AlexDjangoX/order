// create at most one instance of an object
// process and process manager
// you can have many processes but only one process manager

function Process(state) {
  this.state = state;
}

// immediately invoked function expression

const Singleton = (function () {
  function ProcessManager() {
    this.numProcesses = 0;
  }
  let pManager;

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
        return pManager;
      }
    },
  };
})();

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);
