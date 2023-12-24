import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
interface MenuItem {
  label: string;
  submenu?: MenuItem[];
  open?: boolean;
}
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})

export class DocumentsComponent {
  constructor(private fb: FormBuilder) {
       this.textEditorForm = this.fb.group({
      docHtmlContent: new FormControl('', Validators.required) ,
      docName: new FormControl('', Validators.required),
      docDescription: new FormControl(''),
      docType: new FormControl(''),
    });
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => { ... }
    // uploadWithCredentials: false,
    // sanitize: true,
    // toolbarPosition: 'top',
    // toolbarHiddenButtons: [
    //   ['bold', 'italic'],
    //   ['fontSize']
  //  ]
};

isSidebarCollapsed: boolean = false;
  isAuthenticate: boolean = false;
  userId: string = '';
   menuItems: MenuItem[] = [
    {
      label: 'Mail',
      submenu: [
        { label: 'Submenu Item 1' },
        // Add more submenu items as needed
      ]
    },
    {
      label: 'Study',
      submenu: [
        { label: 'Submenu Item 1' },
        // Add more submenu items as needed
      ]
    },
    {
      label: 'Office',
      submenu: [
        { label: 'Submenu Item 1' },
        // Add more submenu items as needed
      ]
    },
    // Add more menu items and submenus as needed
  ];


  textEditorForm: FormGroup = new FormGroup({});
  //@ViewChild('excelTable', { static: false }) excelTable: ElementRef = new ElementRef(null);
  toggleSubmenu(menuItem: any): void {
    menuItem.open = !menuItem.open;
  }
  isLoading:boolean = false;
  // constructor(
  //   private auth: AuthService,
  //   private document: DocumentService,
  //   private fb: FormBuilder,
  //   private toaster: ToastrService) {
  //   this.auth.isAuthenticated$.subscribe((isAuth) => {
  //     this.isAuthenticate = isAuth;
  //   });
  //   this.auth.user$.subscribe((user) => {
  //     this.userId = user.id;
  //   });

  //   this.textEditorForm = this.fb.group({
  //     docHtmlContent: new FormControl('', Validators.required) ,
  //     docName: new FormControl('', Validators.required),
  //     docDescription: new FormControl(''),
  //     docType: new FormControl(''),
  //   });
  // }
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

   exportAsExcel() {
//     const uri = 'data:application/vnd.ms-excel;base64,';
//     const template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>`;
//     const base64 = function(s:any) { return window.btoa(unescape(encodeURIComponent(s))) };
//     const format = function(s:any, c:any) { return s.replace(/{(\w+)}/g, function(m:any, p:any) { return c[p]; }) };
//     const table = this.textEditorForm.value.docHtmlContent ;
//     const ctx = { worksheet: 'Worksheet', table: table };
//     const link = document.createElement('a');
//     link.download = `${this.textEditorForm.value.docName}.xls`;
//     link.href = uri + base64(format(template, ctx));
//     link.click();
}

 exportAsDoc() {
//   const uri = 'data:application/msword;base64,';
//   const template = `<html xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><style>body, table { margin: 0; padding: 0; }</style></head><body><div>{content}</div></body></html>`;
//   const base64 = function(s: any) { return window.btoa(unescape(encodeURIComponent(s))); };
//   const format = function(s: any, c: any) { return s.replace(/{(\w+)}/g, function(m: any, p: any) { return c[p]; }); };
//   const content = this.textEditorForm.value.docHtmlContent;
//   const ctx = { content: content };
//   const link = document.createElement('a');
//   link.download = `${this.textEditorForm.value.docName}.doc`;
//   link.href = uri + base64(format(template, ctx));
//   link.click();
 }

  saveUserDocument(){

  //   this.isLoading = true;
  //   if(!this.isAuthenticate){
  //     this.isLoading = false;
  //     this.toaster.warning('Please login to save document', 'Error', { timeOut: 6000, progressBar: true, progressAnimation: 'increasing', closeButton: true, enableHtml: true, easeTime: 300 });
  //   }
  //   else{

  //     let documentModel = this.textEditorForm.value as UserDocumentCreate
  //     this.fileDownload(documentModel?.docType);
  //     documentModel.userId = this.userId;
  //     this.document.documentCreate(documentModel).subscribe(response => {
  //       if(response.status){

  //         this.textEditorForm.reset();
  //         this.toaster.success(response.message, 'Success', { timeOut: 6000, progressBar: true, progressAnimation: 'increasing', closeButton: true, enableHtml: true, easeTime: 300 });;
  //       }else{
  //         this.toaster.error(response.message, 'Error', { timeOut: 6000, progressBar: true, progressAnimation: 'increasing', closeButton: true, enableHtml: true, easeTime: 300 });
  //       }
  //       this.isLoading = false;
  //     }, error => {
  //       this.toaster.error(error.message, 'Error', { timeOut: 6000, progressBar: true, progressAnimation: 'increasing', closeButton: true, enableHtml: true, easeTime: 300 });
  //       this.isLoading = false;
  //     });
  //   }
  }

  fileDownload(docType: string){
    if(docType === 'excel'){
      this.exportAsExcel();
    }
    else if (docType === 'word'){
      this.exportAsDoc();
    }
    else if (docType === 'pdf'){
      this.exportAsExcel();
    }
   }

}
