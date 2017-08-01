import {Observable} from 'rxjs/Observable'
/**
 * Created by kd on 2017-08-01.
 */

export interface DbObject<T> extends Observable<T> {
  set(value: any): any;
  update(value: Object): any;
  remove(): any;
}
