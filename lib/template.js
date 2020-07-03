const template = (user_info) => {
  const to = [""];
  const subjects = [
    "Concern About Tuition/Fees",
    "I Support Lowering Fees",
    "Cut Student Fees During Covid-19",
  ];
  const bodies = [
    `Hello,\n\nMy name is ${user_info.name}, I’m a UofT, ${user_info.campus} student taking ${user_info.learning_type} classes this coming semester. I am sending this email because I do not think that it is fair that, despite the changes in what the university will offer me, my tuition has stayed the same. Paying in-person prices for an online education does not seem just, especially given the current global circumstances. Because of COVID-19, many students have lost income streams, been forced to move countries, or have even lost family members, and I believe that the University of Toronto should update their tuition next year to better reflect the type of education that we will receive this coming year. At the very least, incidental fees should be lowered or waived, as students will not be able to use many of the services that these fees usually finance.\n\nPlease listen to the students of your school, and lower your tuition.`,
    `Hi,\n\nI’m currently a student at The University of Toronto, ${user_info.campus} and I don’t think that it’s fair that our tuition will remain the same this coming year. Due to Covid-19, many in-person services that university can usually offer will not be running. Furthermore, many students will not be able to use those which are running as they will be learning remotely. I believe that our tuition should be lowered to reflect these facts. When we pay for university, we are not just paying to go to classes, we are paying for the services, community, and experience that a university provides. Next year, if classes are mostly not in person, then we are losing the sense of community, and we will not be able to access many of the services that would’ve been provided.\n\nThis is not a normal university experience. With this in mind, I think that the cost of attending the University of Toronto should lower to better reflect the services which are being offered.\n\nThank you,\n${user_info.name}`,
    `Hello,\n\nI, ${user_info.name}, am sending this email because I am concerned about tuition fees this coming semester. COVID-19 has completely changed the way that we receive our education, and I think that the cost of that education should also be changed to reflect current circumstances.\n\nI don’t think it’s right if I will still be charged incidental fees, plus the price of tuition, during a year when I will not be able to access many of the services that those fees fund. The experience of attending UofT ${user_info.campus} will be different this fall, prices should reflect that fact.\n\nPlease consider adjusting your tuition for the upcoming year.\n\n`,
  ];

  let recipient = "";

  switch (user_info.campus) {
    case "Mississauga":
      recipient = "vpdean.utm@utoronto.ca";
      break;
    case "Scarborough":
      recipient = "ovpd@utsc.utoronto.ca";
      break;
    case "St. George":
      recipient = "dean.artsci@utoronto.ca";
      break;
    case "St. George (Engineering)":
      recipient = "dean.engineering@utoronto.ca";
      break;
    default:
      break;
  }

  return {
    to: recipient,
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    body: bodies[Math.floor(Math.random() * bodies.length)],
  };
};

export default template;
