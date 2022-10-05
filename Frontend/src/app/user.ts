export class User {

    public id!: number;
    public username: string;
    public password: string;
    public role: string;
    public enabled: boolean;
    public firstName: string;
    public lastName:string;
    public email = '';

  
    constructor()
    {
      this.role = '';
      this.username = '';
      this.password = '';
      this.enabled = false;
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }
  
  }