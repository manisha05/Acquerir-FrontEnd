import { Component, OnInit } from '@angular/core';
// import { S3 } from "aws-sdk";

// import { FileUploader } from "@/application/protocols";
// import { File, UploadedFile } from "@/domain/models";
// import { s3Config } from "@/main/config/s3";


@Component({
  selector: 'app-awss3',
  templateUrl: './awss3.component.html',
  styleUrls: ['./awss3.component.css']
})
export class Awss3Component {

  // constructor() { }

  // ngOnInit(): void {
  // }
  // private client: S3;

  // private readonly bucketName = s3Config.bucketName;

  // constructor() {
  //   this.client = new S3({
  //     region: s3Config.defaultRegion,
  //   });
  // }

  // private generateFileKey(file: File, timestamp: number): string {
  //   return `${file.name}-${timestamp}.${file.extension}`;
  // }

  // private async uploadFile(file: File): Promise<string> {
  //   const timestamp = Date.now();
  //   const fileKey = this.generateFileKey(file, timestamp);
  //   await this.client
  //     .putObject({
  //       Bucket: this.bucketName,
  //       Key: fileKey,
  //       ContentType: file.type,
  //       Body: file.content,
  //       ACL: s3Config.defaultFilesACL,
  //     })
  //     .promise();

  //   return `${this.bucketName}/${fileKey}`;
  // }

  // async upload(
  //   files: File | File[]
  // ): Promise<UploadedFile | UploadedFile[] | undefined> {
  //   try {
  //     if (Array.isArray(files)) {
  //       const paths = await Promise.all(
  //         files.map(async (file) => this.uploadFile(file))
  //       );
  //       return paths.map((path) => ({ path }));
  //     }

  //     const path = await this.uploadFile(files);
  //     return {
  //       path,
  //     };
  //   } catch {
  //     return undefined;
  //   }
  // }

}
