import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppDataService} from "../../services/app-data.service";
import {TOKEN_NAME, USERNAME} from "../../services/auth.constant";
import {FormControl, FormGroup} from "@angular/forms";
import {Headers, Http, RequestOptions} from "@angular/http";
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  public image: File;
  @Input() public imageUrl: string = "../../assets/noavatar.png";
  @Input() public typeOfUpload;
  @Output() profilePictureChanged: EventEmitter<String> = new EventEmitter<String>();
  @Output() imageData: EventEmitter<FormData> = new EventEmitter<FormData>();
  @ViewChild("imageInput") imageInput;
  actionUrl = "/server/api/private/users/" + sessionStorage.getItem(USERNAME) + "/uploadImage";
  domSanitizerService;
  http: Http;
  formData;
  options;
  validMessage = '';

  constructor(http: Http, private domSanitizer: DomSanitizer) {
    this.http = http;
    this.domSanitizerService = this.domSanitizer;
  }

  form = new FormGroup({
    'file': new FormControl('')
  });

  fileChange(event){
   this.image = event.target.files[0];
   this.readUrl(event);

   let fileList: FileList = event.target.files;

   if(fileList.length > 0) {
     let file: File = fileList[0];
     this.formData= new FormData();

     this.formData.append('uploadFile', file, file.name);

     let headers = new Headers();

     headers.append("Authorization", "Bearer " + sessionStorage.getItem(TOKEN_NAME));
     headers.append('Accept', 'application/json');

     this.options = new RequestOptions({ headers: headers });

   }
 }


 //todo: wtf staat dat hier te doen
  doUploadFile(){
    if(this.typeOfUpload === 'profilePicture'){
      this.actionUrl = "/server/api/private/users/" + sessionStorage.getItem(USERNAME) + "/uploadImage";
    } else{
      this.imageData.emit(this.formData);
    }

    this.http.post(this.actionUrl, this.formData, this.options)
      .subscribe(
        (data) => {
          this.profilePictureUpdated();
        },
        (error) => console.log(error.status)
      );
  }

  profilePictureUpdated(){
    this.validMessage = 'succesfully updated!';
    this.profilePictureChanged.emit(this.imageUrl);
  }

  onChange(event){
    this.image = event.target.files[0];
    this.readUrl(event);
  }

  readUrl(event){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {
  }

  reset(){
    this.imageUrl = "../../assets/noavatar.png";
  }
}
