export class User {

    id: string; 
    name: string;
    birthday: string;
    photo: string;
    friends: Array<string>;
    
        constructor(id : string , 
            name : string,
            birthday : string, 
            photo : string, 
            friends: Array<string>) { 
                this.id=id;
                this.name=name;
                this.birthday=birthday
                this.photo=photo;
                this.friends=friends;
            }
      }
    