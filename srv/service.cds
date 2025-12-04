using ACN_BTPBootcamp as my from '../db/schema';

service CatalogService {
    entity  Students as projection on my.Students;
}