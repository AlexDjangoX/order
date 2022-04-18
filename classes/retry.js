async function retryOperation() {
  let currentTry = 0;

  while (true) {
    try {
      externalServiceCall();
      console.log("Success");
      break;
    } catch (error) {
      currentTry++;
      console.log(`Failed attempt ${currentTry}`);

      if (currentTry >= 10) {
        console.log(`Retry max reached. Exiting`);
        break;
      }
    }
    await sleep(3000);
  }
}

function externalServiceCall() {
  console.log(`Calling external service`);
  const shouldPass = Math.random() < 0.5;
  if (shouldPass) return true;
  throw Error;
}

retryOperation();

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
