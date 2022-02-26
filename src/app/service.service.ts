import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='http://localhost:8080/api';
  constructor(private http : HttpClient) { }




  login(login :String,password : String){
    return this.http.get(this.url+"/utilisateur/login?login="+login+"&password="+password)
  }

  listLivre(format :String){
    return this.http.get(this.url+"/livre/livrebyformat/"+format)
  }
livreById(id:number){
  return this.http.get(this.url+"/livre/afficher/"+id)
}

}
