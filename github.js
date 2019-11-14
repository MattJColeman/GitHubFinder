class Github {
    constructor() {
        this.client_id = '5c76f7abe3f890d58133';
        this.client_secret = '71046d2e5c92d92ef3bfb98647ac10b059e2975d';
    }

    async getUser(user) {
        const profileresponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileresponse.json();

        return {
            profile
        }
    }
}