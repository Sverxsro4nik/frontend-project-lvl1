const userCongratilation = (attempt, numberOfAttempts, userName) => {
  if (attempt === numberOfAttempts) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default userCongratilation;
