import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from 'src/app/Services/notification.service';
import { ImagesListUrl, UploadService } from 'src/app/Services/upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images: Record<string, string | number>[] = [
  ];
  public partialVisible: boolean = true;

  constructor(private uploadService: UploadService, private notificationService: NotificationService) { 
    this.uploadService.getFileList(ImagesListUrl).subscribe({
      next: (result)=>{
        this.images = result;
      },
      error: (error: any)=>{
        this.notificationService.sendMessage({message: 'No Images Found: ' + error.error.msg, type: NotificationType.error});
      }
    });
  }

  ngOnInit(): void {
  }

}
