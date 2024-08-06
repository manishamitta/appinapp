namespace db;

entity class {
    key section : String @UI.Placeholder : 'section';
        count   : String ;
    classtostud : Composition of many student on classtostud.section = $self.section;
}


entity student {
    key id      : String;
        name    : String;
        dob     : String;
        age     : String;
        section : String;
        studtoclass : Association to one class on studtoclass.section = section;

}
