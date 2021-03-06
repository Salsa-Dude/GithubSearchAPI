
// Init Github
const github = new Github;
// Init UI
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // Get Input value
  const userText = e.target.value;
  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User Not Found', 'alert alert-danger');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});