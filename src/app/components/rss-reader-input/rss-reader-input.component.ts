import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import {RssParserService} from '../../services/rss-parser.service';

@Component({
  selector: 'rss-reader-rss-reader-input',
  templateUrl: './rss-reader-input.component.html',
  styleUrls: ['./rss-reader-input.component.scss']
})
export class RssReaderInputComponent implements OnInit {

  public exampleLinks: Array<string>;
  public rssForm: FormGroup;
  public messageBoxVisibility: boolean;
  public formErrors = {
      'rssUrl': '',
  };

  public validationMessages = {
      'rssUrl': {
          'required': 'Url is required.',
          'minlength': 'Input at least 4 symbols.',
          'maxlength': 'Input not much then 80 symbols.'
      }
  };

  constructor( private rssParser: RssParserService, private fb: FormBuilder ) { }

  ngOnInit() {
      this.exampleLinks = [
          'https://www.nasa.gov/rss/dyn/NASA-in-Silicon-Valley.rss',
          'https://www.reddit.com/.rss'
      ];
      this.buildForm();
  }

  buildForm() {
      this.rssForm = this.fb.group({
          'rssUrl': ['', [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(80)
          ]],
      });

      this.rssForm.valueChanges
          .subscribe(data => this.onValueChange(data));
  }

  onValueChange(data?: any) {
      if (!this.rssForm) { return; }

      this.messageBoxVisibility = false;
      const form = this.rssForm;

      for (let field in this.formErrors) {

          this.formErrors[field] = '';
          let control = form.get(field);

          if (control && control.dirty && !control.valid) {
              let message = this.validationMessages[field];

              for (let key in control.errors) {
                  this.formErrors[field] += message[key] + ' ';
              }
          }
      }
  }

  public getRss() {
        if ( !this.rssForm.valid ) {
            this.messageBoxVisibility = true;
            return;
        }
        this.rssParser
            .getRssFeed( this.rssForm.get('rssUrl').value );
  }

  public putTestRssLink(link: string): void {
      this.rssForm.get('rssUrl').setValue(link);
  }

}
