using {db} from '../db/schema';

service MyService {
    // @odata.draft.enabled
    entity class as projection on db.class;
    entity student as projection on db.student;
    

}