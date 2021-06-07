import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StudentListComponent extends Component {
    @tracked usn = '';
    @tracked flag = false;
    @action
    validateUsn() {
    if(this.usn.match(/\d{1}[a-z|A-Z]{2}\d{2}[a-z|A-Z]{2}\d{3}/)){
        this.flag = true;
    }
  }
}