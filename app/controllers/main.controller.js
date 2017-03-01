angular.module("Controllers", [])

.controller("mainCtrl", mainCtrl)

function mainCtrl(){
    
    this.users = [
            {
                login: "satan",
                password: "666"
            },
            {
                login: "oleksa",
                password: "123"
            },
            {
                login: "petro",
                password: "777"
            }
        
    ]
    
    this.messages = [
            {
                head: "Заголовок_1",
                mess: "111111111111111111111111",
                log: "petro",
                data: "12.01. 2001"
            },
            {
                head: "Заголовок_2",
                mess: "2222222222222222222222222",
                log: "oleksa",
                data: "12.05. 2004"
            },
            {
                head: "Заголовок_3",
                mess: "3333333333333333333333333333",
                log: "Satan",
                data: "12.02. 2017"
            }
        
    ]
        
    this.guest = function(helloBind){
        this.helloBind = "Привіт, Гість!"
        this.login = "Гість"
    }
    
    this.entryCheck = function(a,b){
        
        for(var i=0; i<=this.users.length; i++){
            a = this.users[i].login;
            b = this.users[i].password;
            
        if(this.login == a && this.password == b){
            $(document).ready(function(){
                $("#modal").modal('hide');
            });
            this.helloBind = "Привіт, " + a;
        } else { 
            this.wrong = "Невірний логін або пароль!";
        }
        }
        
    }
    
    this.addMessage = function(newTema, newMessage, login){
        this.messages.push({
            head: newTema,
            mess: newMessage,
            log: this.login,
            data: new Date()
        })
    }
    
    this.removeMessage = function(key){
        this.messages.splice(key,1);
    }
    
    this.showModal_2 = function(key){
        $(document).ready(function(){
            $("#modal_2").modal('show');
        });
        
    this.modal_tema = this.messages[key].head;
    this.modal_message = this.messages[key].mess;
        
        this.change = function(){
        this.messages[key].head = this.modal_tema;
        this.messages[key].mess = this.modal_message;
    }
    }
    
    
}