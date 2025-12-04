using ACN_BTPBootcamp as my from '../db/schema';

service CatalogService {
    entity  Students as projection on my.Students;

    function northwind() returns String;

    action insertNumber(first: Integer, second: Integer) returns String;
    
    action getDivisionResult() returns String;
}