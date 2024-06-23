import { Injectable } from '@angular/core';
import { FactureClass } from './FactureClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ForfClass } from './models/ForfClass';
import { toArray } from 'rxjs/operators';
import { ModelClass } from './models/ModelClass';
import { Image } from './models/Image';
import { BackClass } from './models/BackClass';
import { environment } from 'src/environments/environment';
import { ApiConfiguration } from '../api/api-configuration';
@Injectable({
  providedIn: 'root'
})
export class OcrService {

   OCR_SaveUrl = this.apiconf.OCR_SaveUrl
   OCR_Pre = this.apiconf.OCR_Pre

  constructor(private http:HttpClient,private apiconf : ApiConfiguration) {
    this.ResetEverything();
   }


  ima: Image[] = [];
  img :Image = {
    urlFile: '',
    name: '',
    value: ''
  };

  incr :number=0

  sumUpdated: Subject<number> = new Subject<number>();

  private commentsSubject = new BehaviorSubject<string[]>([]);
  comments$ = this.commentsSubject.asObservable();

  file
  data
  images = []
  imagesback = []
  showProgress = false
  sum = 0
  validations: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);


  containers: FactureClass[] = [];


  forfait: ForfClass = {
    sum: 0,
    avance: 0,
    tobepayed: 0,
    etat: false
  };
   back:BackClass = {
     user: '',
     type: '',
     date: '',
     userFunct: '',
     frais: undefined,
     list: [],
     images: [],
     comments: []
   }

   ResetEverything(){
    this.forfait = {
      sum: 0,
      avance: 0,
      tobepayed: 0,
      etat: false
    };
    this.back = {
       user: '',
       type: '',
       date: '',
       userFunct: '',
       frais: undefined,
       list: [],
       images: [],
       comments: []
     }
     this.containers = []
     this.commentsSubject.next([]);
  }

getContainer(){
  return this.containers
}

  prepareTosend(val) {

     const factureData = {
      user: this.user.fullName,
      type: val.title,
      date: this.containers[0].date,
      userFunct: this.containers[0].dividerText,
      frais: this.forfait,
      facture_etat : "En Cours" ,
      list: this.containers[0].list,
      comments:this.getComments(),
      images: val
    };
    return factureData}

  saveDataToMongo(a,b,c,d){
    if(this.ima.length !=0){
      this.ima =[]
    }
    this.ima.push(b)
    this.ima.push(c)
    this.ima.push(d)
    return this.ima
  }

  getima(){
    return this.ima
  }

  addComment(comment) {
    const comments = this.commentsSubject.getValue();
    comments.push(comment);
    this.commentsSubject.next(comments);
  }

getComments(){
  this.comments$.pipe(toArray()).subscribe((array: string[][]) => {
   this.data = array
  });
  return this.data;
}
  getfrais() {
    return this.forfait;
  }

  updatefrais(data){
    this.forfait = data
  }

  processData(data): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.OCR_SaveUrl+"/ocr/models", data, { headers }).toPromise();
  }

  saveimage(data): Promise<any> {
    return this.http.post(this.OCR_SaveUrl+"/ocr/saveimage", data).toPromise();
  }

  getFactures(): Promise<any> {
    return this.http.get(this.OCR_SaveUrl+"/ocr/getmodels").toPromise();
  }

saveImages(upimages){
  this.images= []
  this.images = upimages
}

  setfile(data){
    this.file = data
  }
  getfile(){
    return this.file
  }

  fillthelist(data){
    this.containers.push(data);
    this.updateSum();
    this.sumUpdated.next(this.sum);

  }

  updateImageValueByName(values) {

    for (let i = 0; i < values.list.length; i++) {
      if (values.list[i].name === 'tva' ) {
        values.list[i].value = values.tva;
        // Exit the loop after updating the first matching element
      }else if(values.list[i].name === 'total' ){
        values.list[i].value = values.price;
      }else if(values.list[i].name === 'totalht' ){
        values.list[i].value = values.ht;
      }
    }
   return this.ima;
  }

  public user: any;
  updateItem(updatedItem: FactureClass): void {
    const index = this.containers.findIndex(item =>
      item.dividerTitle === updatedItem.dividerTitle  // Include dividerTitle in the condition
    );

    if (index !== -1) {
      console.log(updatedItem)
      this.containers[index] = updatedItem;
      this.containers[index].list = this.updateImageValueByName(updatedItem)

    }
  }

  private updateSum() {
    this.sum = this.calculateTotalPrice();
  }

  deleteItem(fac) {

    const index = this.containers.findIndex(item => item.dividerTitle === fac.dividerTitle);
    if (index !== -1) {
      this.containers.splice(index, 1);
      this.updateSum();
      this.sumUpdated.next(this.sum);
    }
  }

   generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }

    return id;
  }

  getUserData(){
    return this.user= JSON.parse(localStorage.getItem('user2'));
  }

  processImage(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();


    headers.append('Access-Control-Allow-Origin', '*');


    return this.http.post(this.OCR_Pre+"/preprocess/fix-orientationop", formData, { headers })
      .toPromise();
  }


   calculateTotalPrice(): number {
    let totalPrice = 0;

    for (const facture of this.containers) {
      const price = parseFloat(facture.price);
      if (!isNaN(price)) {
        totalPrice += price;
      }
    }

    return totalPrice;
  }



   verifyModelValidity(model): boolean {
    if (!model.username || model.username.trim().length === 0) {
      console.log('Invalid username');
      return false;
    }

    if (!model.date || model.date.trim().length === 0) {
      console.log('Invalid date');
      return false;
    }

    if (!model.image || model.image.length === 0) {
      console.log('Invalid image');
      return false;
    }

    if (!model.frais) {
      console.log('Invalid frais');
      return false;
    }
    return true;
  }

  fillList(username: string, date: string, fraisEtat: boolean) {
    const updatedList = [...this.validations.getValue(), {
      username: username,
      date: date,
      fraisEtat: fraisEtat
    }];
    this.validations.next(updatedList);
  }

  getResultList(): Observable<any[]> {
    return this.validations.asObservable();
  }


  convertToBytes(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const arrayBuffer = event.target.result;
        const bytes = new Uint8Array(arrayBuffer);
        const byteString = this.wrapBytesAsString(bytes);
        resolve(byteString);
      };

      reader.onerror = (event: any) => {
        reject(event.target.error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

   wrapBytesAsString(bytes: Uint8Array): string {
    let byteString = '';

    for (let i = 0; i < bytes.length; i++) {
      byteString += String.fromCharCode(bytes[i]);
    }

    return byteString;
  }

  getData(): Observable<any> {

    return this.http.get<any>(this.OCR_SaveUrl+'/ocr/getmodels');
  }

  updateFactureName(id: string, newEtat: string): Observable<any> {

    const url = this.OCR_SaveUrl+`/ocr/models/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(url, newEtat, httpOptions);
  }




}
