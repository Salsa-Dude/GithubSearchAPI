
class Github {
  constructor() {
    this.client_id = 'c712a7851d09a9b9d83e';
    this.client_secret = '07aa16505908796a0e02e1c199fd144140745f0b';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}
