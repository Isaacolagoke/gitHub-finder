class Github {
    constructor (){
        this.client_id ='16ababffc8b27905f750';
        this.client_secret = '99bca0b57c58b158d0320a06f0546d0d26352c57';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
           profile, 
           repos
        }
    }
}