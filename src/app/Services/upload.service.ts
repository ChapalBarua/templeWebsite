import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServerUrl } from "./user.service";
import { Injectable } from "@angular/core";
import { File as Myfile} from "../file-downloader/file-downloader.component";

@Injectable({providedIn: 'root'})
export class UploadService {

    constructor(private http: HttpClient) {}
  
  
    public upload(files: File[], uploadUrl: string): Observable<any> {
      const formData = new FormData();
      
      Array.from(files).forEach((file) => { formData.append('files', file, file.name); });
  
      return this.http.post(uploadUrl, formData);
    }

    public getFileList(url: string): Observable<any> {
  
      return this.http.get(url);
    }

    downloadFile(file: Myfile){
      this.http.get(file.url, {responseType: 'arraybuffer'}).subscribe(binaryData=>{
        const downloadedFile: Blob = new Blob([binaryData]);
        const url: string = window.URL.createObjectURL(downloadedFile);
        const anchorElement: HTMLAnchorElement = document.createElement('a');
        anchorElement.download = file.Name;
        anchorElement.href = url;
        anchorElement.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
        anchorElement.remove();
      })
    }

  }

  export const FilesUploadUrl = ServerUrl + 'operation/upload/files';
  export const ImagesUploadUrl = ServerUrl + 'operation/upload/images';
  export const ImagesListUrl = ServerUrl + 'list/images';
  export const FilesListUrl = ServerUrl + 'list/files';