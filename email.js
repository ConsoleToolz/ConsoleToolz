//dont copy this copy this below these emails will not work to send verifications to this is just u need a temp email in java 


function generateEmail() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  
  for (let i = 0; i < 6; i++) {
    email += chars[Math.floor(Math.random() * chars.length)];
  }
  
  email += '@consoletoolz.me';
  
  return email;
}

console.log(generateEmail());

process.stdin.on('data', (data) => {
  console.log(generateEmail());
});
