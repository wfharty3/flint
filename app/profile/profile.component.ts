import { Component, OnInit }  from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { Profile } from './profile';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  
  def: Profile;
  showCommon: boolean;
  showUnused: boolean;
  
  
  constructor(private svc: ProfileService,
              private router: Router) {}

  ngOnInit(): void {
    this.getDef();
  }


  getDef(): void {
    this.svc.getDef().then(def => this.def = def);
  }

  isCommon(path: string): boolean {
    if (path.startsWith('Resource') || path.startsWith('DomainResource')) {
      return true;
    } else {
      return false;
    }    
  }

  isUsed(element): boolean {
    if (element.max != 0 || element.mustSupport) {
      return true;
    } else {
      return false;
    }
  }

  getIndent(path: string): string {
    return (path.split('.').length - 2) * 25 + 'px';
  }

  showElement(element): boolean {
    if ((!this.isCommon(element.base.path) || this.showCommon) 
          &&
        (this.isUsed(element) || this.showUnused)
       )
    return true;
  }
  
  // fileChange(event) {
  //     let fileList: FileList = event.target.files;
  //     if(fileList.length > 0) {
  //         let file: File = fileList[0];
  //         let formData:FormData = new FormData();
  //         formData.append('uploadFile', file, file.name);
  //         let headers = new Headers();
  //         headers.append('Content-Type', 'multipart/form-data');
  //         headers.append('Accept', 'application/json');
  //         let options = new RequestOptions({ headers: headers });
  //         this.http.post(`${this.apiEndPoint}`, formData, options)
  //             .map(res => res.json())
  //             .catch(error => Observable.throw(error))
  //             .subscribe(
  //                 data => console.log('success'),
  //                 error => console.log(error)
  //             )
  //     }
  // }

}
