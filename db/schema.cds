namespace ACN_BTPBootcamp;

entity Students {
    key ID: UUID; //Unique  Identifier
    firstName:  String;
    lastName:   String;
    email:      String;
    age:        Integer;
}