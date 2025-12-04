namespace ACN_BTPBootcamp;

entity Students {
    key ID:         UUID; //Unique  Identifier
    firstName:      String;
    lastName:       String;
    email:          String;
    age:            Integer;
}

entity Division_Numbers {
    key ID:         UUID;
    firstNumber:    Integer;
    secondNumber:   Integer;
    quotient:       Integer;
}