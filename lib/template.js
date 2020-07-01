const template = (user_info) => {
  const subjects = ["foo", "bar"];

  let greeting = "hi";
  let conclusion = "bye";
  return {
    subject: subjects[Math.floor(Math.random() * subjects.length)],

    body: `
    ${greeting}


    ${conclusion}
  `,
  };
};

export default template;
